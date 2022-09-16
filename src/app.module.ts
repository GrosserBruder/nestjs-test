import { Module } from '@nestjs/common';
import { AppController } from './Controllers';
import { AppService } from './Services';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
