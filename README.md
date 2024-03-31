<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  <p align="center">

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Install package untuk database postgres
```bash
npm i @nestjs/typeorm typeorm pg @nestjs/config
```

## Konfigurasi app.module.ts database
```typescript
TypeOrmModule.forRoot({
              type: 'postgres',
              host: process.env.DATABASE_HOST,
              port: parseInt(process.env.DATABASE_PORT),
              username: process.env.DATABASE_USER,
              password: process.env.DATABASE_PASSWORD,
              database: process.env.DATABASE_DB,
              entities: [
                User
              ],
              synchronize: true,
            })
```

## Install package enkripsi
```bash
npm i bcrypt
```

```bash
npm i -D @types/bcrypt
```

## Install package untuk dokumentasi Rest API
```bash
npm install --save @nestjs/swagger swagger-ui-express
```

## Installasi package untuk jwt
```bash
npm i @nestjs/passport @nestjs/jwt passport passport-jwt
```

```bash
npm i -D @types/passport-jwt
```

## Generate JWT KEY
1. Buka terminal atau command prompt
2. Copy paste command yang ada dibawah ini untuk generate key dari library crypto
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Generate resource
1. Generate module
```bash
nest g mo auth
```

2. Generate service
```bash
nest g se auth
```

3. Generate controller
```bash
nest g c auth
```
## File upload
```bash
npm i -D @types/multer
```

## Add logging
```bash
npm install winston
```
1. lalu buat file logger.ts pada root src
```typescript
import * as winston from 'winston'
const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'logs/app.log'})
    ]
})

export default logger;
```

2. Import pada file controller lalu letakkan pada setiap controller
```typescript
import Logger from './logger'
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
