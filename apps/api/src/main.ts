import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  // app.enableCors({
  //   origin: ['http://localhost:3000', 'http://localhost:3001'], // Add Swagger UI origin if different
  // methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
  //   allowedHeaders: ['Content-Type', 'Authorization'],
  //   exposedHeaders: ['Content-Type', 'Authorization'],
  //   credentials: true, // Enable credentials if needed (e.g., cookies)
  // });

  // app.enableCors({
  //   allowedHeaders: '*',
  //   methods: '*',
  //   origin: '*',
  // });

  // app.use(
  //   cors({
  //     // origin: ['http://localhost:3000', 'http://localhost:3001'], // Add Swagger UI origin if different
  //     // methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
  //     allowedHeaders: '*',
  //     methods: '*',
  //     origin: '*',
  //     // allowedHeaders: ['Content-Type', 'Authorization'],
  //     // exposedHeaders: ['Content-Type', 'Authorization'],
  //     // credentials: true, // Enable credentials if needed (e.g., cookies)
  //   }),
  // );

  app.use(
    cors({
      origin: 'http://localhost:3001', // or your frontend URL
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    }),
  );

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
