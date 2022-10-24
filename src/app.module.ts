import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { DhlModule } from './dhl/dhl.module';
import { DhlSettingsModule } from './dhlSettings/dhl-settings.module';
import { DhlTypeModule } from './dhlTypes/dhl-type.module';
import { SocketGatewayModule } from './socketGateway/socket.gateway.module';
import { TechnicalInspectionTypesModule } from './technicalInspectionTypes/technicalInspectionTypes.module';
import { UserModule } from './user/user.module';

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
    DhlSettingsModule,
    TechnicalInspectionTypesModule,
    SocketGatewayModule,
  ],
})
export class AppModule { }
