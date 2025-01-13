import { Request } from 'express';
import { Controller, Get, Redirect, Req} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Redirect('https://www.naver.com', 301)
  @Get()
  getHello(@Req() req: Request): string {
    return this.appService.getHello();
  }
}
