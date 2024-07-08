import { Body, Controller, Post, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { UserResponseType } from './user.entity';
import { LoginDto } from './dto/login.dto';

@Controller()
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserResponseType> {
    const user = await this.userService.createUser(createUserDto);
    this.logger.log('Signup...');
    return this.userService.buildUserResponse(user);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<UserResponseType> {
    const user = await this.userService.loginUser(loginDto);
    this.logger.log('Login...');
    return this.userService.buildUserResponse(user);
  }
}
