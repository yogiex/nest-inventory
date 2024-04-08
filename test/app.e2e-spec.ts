import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  // let app: INestApplication;
  let url = 'http://localhost:3000'

  it('/ (GET)', () => {
    return request(url)
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
