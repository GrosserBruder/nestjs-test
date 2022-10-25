import { Injectable } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect, SubscribeMessage,
  WebSocketGateway, WebSocketServer
} from '@nestjs/websockets';
import { Server, Socket } from "socket.io";
import { DhlService } from './../dhl/dhl.service';

@Injectable()
@WebSocketGateway({ namespace: "dhl", cors: { origin: "*" } })
export class SocketGateway implements OnGatewayConnection<Socket>, OnGatewayDisconnect<Socket> {
  intervalTimer?: NodeJS.Timer;

  constructor(private readonly dhlService: DhlService) { }

  @WebSocketServer() server: Server

  handleDisconnect(client: Socket) {
    clearInterval(this.intervalTimer)
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.intervalTimer = setInterval(this.sendRandomDhlsPosition.bind(this), 1000)
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any) {
    return client.emit("message", payload)
  }


  async sendRandomDhlsPosition() {
    return this.dhlService.getAll()
      .then((x) => x.map((dhl) => ({ dhl, x: 0, y: 0, })))
      .then((x) => {
        this.server.send(x)
      })
  }
}
