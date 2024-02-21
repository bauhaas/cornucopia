import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

// import { SavingsModule } from 'apps/savings-app/src/savings.module';
import * as fs from 'fs';

import { AppModule } from './src/app.module';
// import { patchNestJsSwagger } from 'nestjs-zod';

// Apply nestjs-zod patch for OpenAPI
// patchNestJsSwagger();

const createSwaggerDocument = async (): Promise<{
  apiDoc: OpenAPIObject;
}> => {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Cornucopia API')
    .setDescription('The Cornucopia API description')
    .setVersion('1.0')
    .build();

  return {
    apiDoc: SwaggerModule.createDocument(app, config),
  };
};

createSwaggerDocument().then(({ apiDoc }) => {
  fs.writeFileSync('./api-schema.json', JSON.stringify(apiDoc));
});
