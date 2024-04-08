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
  let token = ''
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
    await request(api)
    .post('/auth/register')
    .send(dataRegister)
    
    await request(api)
    .post('/auth/register')
    .send(dataLogin)
    .expect(({body}) => {
        token += body.token
    })
  });

  it('show all barang monitor', () => {
    return request(api)
      .get('/barang')
  });

});
