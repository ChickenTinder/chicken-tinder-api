import supertest from "supertest";
import app from "./app";

describe("E2E Tests", () => {
  describe("Status OK", () => {
    it("should send status OK", async () => {
      const response = await supertest(app).get("/status");
      expect(response.statusCode).toEqual(200);
      expect(response.body).toMatchObject({ success: true });
    });
  });
});
