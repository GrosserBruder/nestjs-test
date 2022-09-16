import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '../BaseCrudService';

@Injectable()
export class AppService extends BaseCrudService {
  // get() {
  //   return "Hello World 2!"
  // }
}
