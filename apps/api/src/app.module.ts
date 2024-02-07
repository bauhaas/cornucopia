import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import {
  PrismaService,
  UsersRepository,
} from './users/infrastructure/repository/users.repository';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    AuthenticationModule,
    UsersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, UsersRepository, PrismaService],
})
export class AppModule {}
