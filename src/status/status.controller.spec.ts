import { Test, TestingModule } from "@nestjs/testing";
import { StatusResponseDto } from "./status-response.dto";
import { StatusController } from "./status.controller";

describe("StatusController", () => {
  let statusController: StatusController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StatusController],
    }).compile();
    statusController = app.get(StatusController);
  });

  it("should return successful status", () => {
    const expected: StatusResponseDto = { success: true };
    expect(statusController.status()).toEqual(expected);
  });
});
