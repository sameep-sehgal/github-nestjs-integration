import { Controller, Get, Req, Render, UseGuards, UseFilters } from '@nestjs/common';
import { AuthenticatedGaurd } from './auth/utils/authenticate.gaurd';
import {AuthRedirectFilter} from './auth/utils/auth-redirect.filter'

@Controller()
export class AppController {

  @Get('/')
  @Render('home')
  @UseGuards(AuthenticatedGaurd)
  @UseFilters(AuthRedirectFilter)
  getHello(@Req() req) {
    return req.user;
  }

}
