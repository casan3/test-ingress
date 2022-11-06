import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api')
  liveness(): string {
    return this.appService.liveness();
  }

  @Get('api/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
