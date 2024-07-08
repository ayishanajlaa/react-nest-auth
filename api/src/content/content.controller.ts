import { Controller, Get, UseGuards, Logger } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('content')
export class ContentController {
  private readonly logger = new Logger(ContentController.name);

  @Get()
  @UseGuards(JwtAuthGuard)
  getContent() {
    this.logger.log('Fetching content...');
    return 'Welcome to the application.';
  }
}
