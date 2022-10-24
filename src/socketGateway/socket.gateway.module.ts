
import { Module } from "@nestjs/common";
import { DhlModule } from "src/dhl/dhl.module";
import { SocketGateway } from './socket.gateway';

@Module({
  imports: [DhlModule],
  providers: [SocketGateway]
})
export class SocketGatewayModule { }