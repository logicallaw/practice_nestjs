import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, BadRequestException, Header } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Res() res) {
    const users = this.usersService.findAll();
    return res.status(200).send(users);
  }

  @Header('Custom', 'Test Users')
  @Get(':id')
  findOne(@Param('id') id: string) {
    if(+id < 1) {
      throw new BadRequestException('id는 0보다 큰 값이어야 합니다.');
    }
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  // @Delete(':userId/memo/:memoId')
  // deleteUserMemo(@Param() params: {[key: string]: string}) {
  //   return `userId: ${params.userId}, memoId: ${params.memoId}`;
  // }
  @Delete(':userId/memo/:memoId')
  deleteUserMemo(@Param('userId') userId: string, @Param('memoId') memoId: string) {
    return `userId: ${userId}, memoId: ${memoId}`;
  }
}
