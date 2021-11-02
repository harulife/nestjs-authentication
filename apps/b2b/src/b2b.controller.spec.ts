import { Test, TestingModule } from '@nestjs/testing';
import { B2bController } from './b2b.controller';
import { B2bService } from './b2b.service';

describe('B2bController', () => {
  let b2bController: B2bController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [B2bController],
      providers: [B2bService],
    }).compile();

    b2bController = app.get<B2bController>(B2bController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(b2bController.getHello()).toBe('Hello World!');
    });
  });
});
