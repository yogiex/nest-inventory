import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { DataSource, Repository, getConnection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../src/user/entity/user.entity';
import dataSource from './conn.testing';

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

  const insertMonitor = {
      "nama_barang": "monitor aoc",
      "barang_masuk": "2024-04-09T09:16:00.792Z",
      "barang_keluar": "2024-04-09T09:16:00.792Z",
      "brand": "aoc",
      "ukuran": 25,
      "refresh_rate": "65"
  }

  beforeAll(async () => {
    await dataSource.initialize()
    await dataSource.createQueryBuilder().delete().from(UserEntity).execute()
    
    await request(api)
    .post('/auth/register')
    .send(dataRegister)
    
    await request(api)
    .post('/auth/login')
    .send(dataLogin)
    .expect(({body}) => {
        token += body.token
        // console.log(body)
    })
    
  });
  afterAll(async () =>{
    await dataSource.createQueryBuilder().delete().from(UserEntity).execute()
    await dataSource.destroy()
  })

  it('should show all barang monitor', () => {
    return request(api)
      .get('/barang/monitor')
      .set('Authorization',`Bearer ${token}`)
      .expect(200)
  });
  it('should show all barang monitor', () => {
    return request(api)
      .get('/barang/komputer')
      .set('Authorization',`Bearer ${token}`)
      .expect(200)
  });

  it('should insert monitor post', () => {
    return request(api)
           .post('/barang/monitor')
           .set('Authorization',`Bearer ${token}`)
           .send(insertMonitor)
           .expect(({body}) => {
              console.log(body)
              console.log(token)
           })
  })


});
