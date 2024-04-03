import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { createConnection, getConnection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../src/user/entity/user-entity';
import { DatabaseConnectionServiceTesting } from './conn.testing';
describe('AuthController (e2e)', () => {
  // let app: INestApplication;
  let api = 'http://localhost:3000'
  const dataRegister = {
    email: 'yogi@email.com',
    name: 'priyagung elza yogitama',
    password: 'admin@123',
    avatar: 'localhost:3000',
    address: 'solo'
  }
  const dataLogin = {
    email: 'yogi@email.com',
    password: 'admin@123'
  }

  // beforeAll(async () => {
  //   const moduleRef:TestingModule = await Test.createTestingModule({
  //       imports: [TypeOrmModule.forRootAsync({
  //         useClass: DatabaseConnectionServiceTesting
  //       })]
  //   }).compile()

  // app = moduleRef.createNestApplication();
  // await getConnection('default')
  //       .getRepository(UserEntity)
  //       .createQueryBuilder()
  //       .delete()
  //       .from(UserEntity)
  //       .execute()

  // await app.init()
  // });

  it('/auth/register (POST)', () => {
    return request(api)
      .post('/auth/register')
      .send(dataRegister)
      .expect(200)
  });
  it('/auth/login (POST)' , () => {
    return request(api)
        .post('/auth/login')
        .send(dataLogin)
        .expect(200)
        
  })
});
