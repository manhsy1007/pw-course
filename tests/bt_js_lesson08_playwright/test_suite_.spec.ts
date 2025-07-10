import { expect, test } from "@playwright/test";
test.describe("group id - test group name", () => {
    test.beforeAll(async() => {
        console.log("before all");
    })
    test.beforeEach(async() => {
        console.log("before each");
    })
    test.afterAll(async() => {
        console.log("after all");
    })
    test.afterEach(async() => {
        console.log("after each");
    })
      test("tên tc1", async () => {
    console.log("chạy tc1")
    const actual = "K14";
    expect(actual).toEqual("K14");
  });
  test("tên tc2", async () => {
    console.log("chạy tc2")
  });
});
