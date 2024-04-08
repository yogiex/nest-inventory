import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { DataSource, Repository, getConnection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../src/user/entity/user.entity';
import AppDataSource from './conn.testing'
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

  beforeAll(async () => {
    const dataSource = new DataSource({
      type: "postgres",
        host: 'localhost',
        port: 5432,
        username: 'yogi',
        password: 'password_project',
        database: 'project_inventory',
        entities: [UserEntity,RuanganEntity],
        synchronize: true
    })
    await dataSource.initialize()
    await dataSource.createQueryBuilder().delete().from(UserEntity).execute()
    
  
    
  });

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
  it('/auth/login (POST)' , () => {
    return request(api)
        .post('/auth/login')
        .send(dataLogin)
        .expect(({body}) => {
          expect(body.token).toBeDefined()
        })
        .expect(200)
        
  })
});
