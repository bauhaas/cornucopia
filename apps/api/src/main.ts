import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { get } from 'http';
import { patchNestJsSwagger } from 'nestjs-zod';

import { AppModule } from './app.module';

// Apply nestjs-zod patch for OpenAPI
patchNestJsSwagger();

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // preflightContinue: false,
    // optionsSuccessStatus: 204,
  });

  const config = new DocumentBuilder()
    .setTitle('Cornucopia API')
    .setDescription('The Cornucopia API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
