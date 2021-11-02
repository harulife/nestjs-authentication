import { Injectable } from '@nestjs/common';

@Injectable()
export class B2bService {
  getHello(): string {
    return 'Hello World!';
  }
}
