import { Controller, Get } from '@nestjs/common';
import { ChatgptService } from './chatgpt.service';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('chatgpt')
export class ChatgptController {
  constructor(private chatgptService: ChatgptService) {}

  @Public()
  @Get()
  getResult() {
    return this.chatgptService.callChatgpt();
  }
}
