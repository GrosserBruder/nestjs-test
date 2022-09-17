import { Module } from '@nestjs/common';
import { ControllersModule } from './Controllers';
import { ServicesModule } from './Services/services.module';

@Module({
  imports: [ServicesModule, ControllersModule],
})
export class AppModule { }
