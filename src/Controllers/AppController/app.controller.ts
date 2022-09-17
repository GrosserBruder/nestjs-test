import { Controller } from '@nestjs/common';
import { AppService } from '../../Services';
import { BaseController } from '../BaseController';

@Controller('test')
export class AppController extends BaseController {
  constructor(private readonly appService: AppService) {
    super(appService)
  }
}
