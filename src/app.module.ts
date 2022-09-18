import { Module } from '@nestjs/common';
import { ControllersModule } from './Controllers';
import { ServicesModule } from './Services/services.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ServicesModule, ControllersModule, UserModule],
})
export class AppModule { }
