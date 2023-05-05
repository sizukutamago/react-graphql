import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('レスポンスが', () => {
    const res = request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `{
          getTasks {
            id
            name
            dueDate
          }
        }`,
      });
    expect(res).toBe(200);
    // expect((res) => {
    //   expect(res.body.data.getCat).toEqual({
    //     name: 'Terra',
    //     age: 5,
    //     breed: 'Siberian',
    //     id: '2',
    //   });
    // });
  });
});
