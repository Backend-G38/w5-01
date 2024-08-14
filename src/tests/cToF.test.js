const cToF = require("../functions/cToF.functions")

test("cToF, should return 68 F", () => {
  expect(cToF(20)).toBe(68)
  expect(cToF(0)).toBe(32)
  expect(cToF(25)).toBe(89)
})