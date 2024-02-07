import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  // @UseGuards(AuthGuard('github'))
  @ApiParam({ name: 'id', required: true, type: Number })
  getUser(@Param('id') id: number) {
    console.log('id', id);
    return this.usersService.getUser(id);
  }

  @Get('/mail/:id')
  // @UseGuards(AuthGuard('github'))
  @ApiParam({ name: 'id', required: true, type: Number })
  getByMail(@Param('id') id: number) {
    console.log('id', id);
    return this.usersService.getBymMail('baudoin.haas@gmail.com');
  }
}
