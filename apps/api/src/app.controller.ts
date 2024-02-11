import { Controller, Get, Request, UseGuards } from '@nestjs/common';

import { AppService } from 'src/app.service';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any): any {
    return req.user;
  }
}
