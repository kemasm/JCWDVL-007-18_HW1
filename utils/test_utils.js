var assert = function (condition, errorMessage) {
  if (!condition) {
    throw errorMessage || "Assertion failed";
  }
  process.stdout.write(".");
};

export function assertEqual(result, expectedOutput) {
  assert(
    result === expectedOutput,
    `${result} is not equal with ${expectedOutput}`
  );
}
