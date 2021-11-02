import { Controller, Get } from '@nestjs/common';
import { B2bService } from './b2b.service';

@Controller()
export class B2bController {
  constructor(private readonly b2bService: B2bService) {}

  @Get()
  getHello(): string {
    return this.b2bService.getHello();
  }
}
