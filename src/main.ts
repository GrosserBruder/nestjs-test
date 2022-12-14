import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Test NestApi")
    .build()

  app.enableCors()
  app.setGlobalPrefix("api/v1")

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup("swagger", app, swaggerDocument)



  await app.listen(5000);
}

bootstrap();
