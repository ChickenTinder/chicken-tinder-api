import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import request from "supertest";
import { AppModule } from "../../src/app.module";
import { StatusResponseDto } from "src/status/status-response.dto";

describe("StatusController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/status (GET)", () => {
    const expected: StatusResponseDto = {
      success: true,
    };
    return request(app.getHttpServer()).get("/status").expect(200).expect(expected);
  });
});
