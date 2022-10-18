import { DhlTypeModule } from './dhlTypes/dhl-type.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { } from "sqlite3"
import { DhlModule } from './dhl/dhl.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DefaultDhlTypeParamsModule } from './defaultDhlTypeParams/defaultDhlTypeParams.module';
import { TechnicalInspectionTypesModule } from './technicalInspectionTypes/technicalInspectionTypes.module';

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
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static')
    }),
    UserModule,
    DhlTypeModule,
    DhlModule,
    DefaultDhlTypeParamsModule,
    TechnicalInspectionTypesModule,
  ],
})
export class AppModule { }
