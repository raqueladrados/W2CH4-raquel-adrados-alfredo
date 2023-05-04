import lenk from "./index.js";
describe("Given a funtion length", () => {
  describe("When it receives['coche','llanta','volante']", () => {
    test("Then it should return true", () => {
      const array = ["coche", "llanta", "volante"];

      const expectedResult = true;

      const result = lenk(array);

      expect(result).toBe(expectedResult);
    });
  });
});
