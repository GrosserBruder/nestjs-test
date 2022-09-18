import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '../base-crud-service.service';

@Injectable()
export class AppService extends BaseCrudService {
  // get() {
  //   return "Hello World 2!"
  // }
}
