import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as session from 'express-session';
import * as passport from 'passport';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({
    secret: 'keyborad cat', // get env var
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 3600000}
    // you must save user session in DB or reddis #check express-session docs
  }));

  app.use(passport.initialize())
  app.use(passport.session())
  app.enableCors();
  await app.listen(4000);
}
bootstrap();
