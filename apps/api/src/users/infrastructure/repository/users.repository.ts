import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

type EventOptions = 'query' | 'info' | 'warn' | 'error';

// We want to log every query
const SLOW_QUERIES_MS = 0;

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, EventOptions>
  implements OnModuleInit
{
  private readonly logger = new Logger(PrismaService.name);

  // Schema is setted in e2e tests to overrid db name
  public static schema: string | undefined = undefined;
  public static url = process.env.DATABASE_URL;

  public static getPrismaServiceOptions(): Prisma.PrismaClientOptions {
    if (PrismaService.url && PrismaService.schema) {
      const newUrl = new URL(PrismaService.url);
      newUrl.pathname = PrismaService.schema;
      PrismaService.url = newUrl.toString();
      return { datasources: { db: { url: PrismaService.url } } };
    }
    return {};
  }

  constructor() {
    super({
      ...PrismaService.getPrismaServiceOptions(),
      log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'event',
          level: 'info',
        },
        {
          emit: 'event',
          level: 'warn',
        },
        {
          emit: 'event',
          level: 'error',
        },
      ],
    });
  }

  async onModuleInit(): Promise<void> {
    this.$on(
      'query',
      ({ query, duration, params, target }: Prisma.QueryEvent) => {
        if (duration > SLOW_QUERIES_MS) {
          this.logger.log(query, {
            duration,
            params,
            target,
          });
        }
      },
    );

    (['info', 'warn', 'error'] as const).forEach((eventType) => {
      this.$on(eventType, (logEvent: Prisma.LogEvent) => {
        this.log(eventType, logEvent);
      });
    });

    await this.$connect();
  }

  private log(
    eventType: 'info' | 'warn' | 'error',
    { message, target }: Prisma.LogEvent,
  ): void {
    // NestJs's Logger doesn't have an `info` method. It uses `log` instead.
    const level = eventType === 'info' ? 'log' : eventType;
    this.logger[level](message, { target });
  }
}

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  // async findOne(mail: string): Promise<User | undefined> {
  async findOne(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}