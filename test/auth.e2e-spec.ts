import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { DataSource, Repository, getConnection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../src/user/entity/user.entity';
import dataSource from './conn.testing'
import { RuanganEntity } from '../src/ruangan/entity/ruangan.entity';

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let api = 'http://localhost:3000'
  const dataRegister = {
    email: 'yogi@email.com',
    name: 'priyagung elza yogitama',
    password: 'admin@123',
    avatar: 'localhost:3000',
    address: 'solo',
    role:'admin'
  }
  const dataLogin = {
    email: 'yogi@email.com',
    password: 'admin@123'
  }
  const dataLoginFail = {
    email: 'yogi@email.com',
    password: '123123123'
  }

  beforeAll(async () => {
    await dataSource.initialize()
    await dataSource.createQueryBuilder().delete().from(UserEntity).execute()
    
  });
  afterAll(async () =>{
    await dataSource.createQueryBuilder().delete().from(UserEntity).execute()
    await dataSource.destroy()
  })

  it('/auth/register (POST) Successful', () => {
    return request(api)
      .post('/auth/register')
      .send(dataRegister)
      .expect(body => {
      })
      .expect(201)
  });

  it('/auth/register (POST) Email already exist', () => {
    return request(api)
      .post('/auth/register')
      .send(dataRegister)
      .expect(body => {
        expect(body.statusCode).toEqual(400)
      })
      .expect(400)
  });

  it('/auth/login (POST) successful' , () => {
    return request(api)
        .post('/auth/login')
        .send(dataLogin)
        .expect(({body}) => {
          expect(body.token).toBeDefined()
        })
        .expect(200) 
  })
  it('/auth/login (POST) failed', () => {
    return request(api)
           .post('/auth/login')
           .send(dataLoginFail)
           .expect(({body}) => {})
           .expect(400)
  })
});
