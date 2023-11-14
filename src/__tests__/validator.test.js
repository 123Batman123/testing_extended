import AllValidators from "../js/Validator";

const check1 = [
  ["4539363664160862", 4539363664160862, true],
  ["5362851793883866", 5362851793883866, true],
  ["2204513990707335", 2204513990707335, true],
  ["2204513990707337", 2204513990707337, false],
];

test.each(check1)("validatorLuna %s", (_, value, expected) => {
  const validate = new AllValidators(value);
  expect(validate.validatorLuna()).toBe(expected);
});

const check2 = [
  ["4539363664160862", 4539363664160862, "visa"],
  ["5362851793883866", 5362851793883866, "mastercard"],
  ["2204513990707335", 2204513990707335, "mir"],
  ["2208513990707335", 2208513990707335, false],
];

test.each(check2)("validatorCard name %s", (_, value, expected) => {
  const validate = new AllValidators(value);
  expect(validate.validatorCard()).toBe(expected);
});
