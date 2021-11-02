import { getConnection, Repository } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from "@app/entity/domain/user/User.entity";
import { UserModule } from "@app/entity/domain/user/UserModule";
import { getPgTestTypeOrmModule } from "../getPgTestTypeOrmModule";

describe('userRepositoryTest', () => {
  let userRepository: Repository<User>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserModule, getPgTestTypeOrmModule()]
    }).compile();

    userRepository = module.get(getRepositoryToken(User));
  });

  beforeEach(async () => {
    await userRepository.clear();
  })

  afterAll(async () => {
    await userRepository.clear();
    await getConnection().close();
  })

  it('save user', async () => {
    // given
    const email = 'harulife@inflearn.com';
    const password = '1q2w3e4r!';
    const name = 'minwoo';
    const nickname = 'haru';
    const user = User.create({
      email,
      password,
      name,
      nickname
    });

    // when
    const savedUser = await userRepository.save(user);

    // then
    expect(savedUser.email).toBe(email);
  })
})