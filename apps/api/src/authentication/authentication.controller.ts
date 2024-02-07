import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Request,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LocalAuthGuard } from './local-auth-guard';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Get('github')
  @UseGuards(AuthGuard('github'))
  githubLogin(): void {
    console.log('github login');
    // GitHub authentication will redirect to GitHub for user login, so this route will not be called directly.
  }

  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  githubLoginCallback(@Req() req: any, @Res() res: any): void {
    // This route will be called after GitHub authentication
    // const token = req.user.jwtToken; // Assuming your JWT token is stored in req.user.jwtToken
    // return `GitHub authentication successful! JWT token: ${token}`;
    console.log('lol', req.user);
    res.redirect(`http://localhost:3001/`);
  }

  @UseGuards(LocalAuthGuard)
  @Post('test')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
