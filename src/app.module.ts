import { DhlTypeModule } from './dhlTypes/dhl-type.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { } from "sqlite3"
import { DhlModule } from './dhl/dhl.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '.env.development.local',
        '.env.development',
        '.env.production.local',
        '.env.production',
        '.env',
      ],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          type: "sqlite",
          database: configService.get("DATABASE_NAME"),
          autoLoadEntities: true,
          synchronize: true,
        }
      },
      inject: [ConfigService]
    }),
    UserModule,
    DhlTypeModule,
    DhlModule,
  ],
})
export class AppModule { }
