import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

config();
const configService = new ConfigService();

@Injectable()
export class ChatgptService {
  async callChatgpt() {
    const configuration = new Configuration({
      apiKey: configService.get('OPENAI_API_KEY'),
    });
    const openai = new OpenAIApi(configuration);

    const messages = [];
    messages.push({
      role: 'system',
      content:
        '너는 여행 전문가 처럼 말할거야. 내가 여행지를 물어보면 너는 \n 1. 놀거리 \n 2. 먹을거리 \n 3. 추천한 이유 \n 4. 여행하기 좋은 계절 \n 을 json 형식에 맞추어 알려줄거야. \n . 그 중 놀거리와 먹을거리는 array로 알려주고 추천한 이유, 여행하기 좋은 계절 은 string으로 알려줘',
    });

    messages.push({ role: 'user', content: '후쿠오카' });
    const chatCompletion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,
    });
    const result = chatCompletion.data.choices[0].message;
    return result;
  }
}
