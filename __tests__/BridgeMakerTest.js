const BridgeMaker = require(`../src/BridgeMaker`);
const BridgeRandomNumberGenerator = require(`../src/BridgeRandomNumberGenerator`);

describe(`BridgeMaker와 관련된 테스트`, () => {
  test("랜덤 숫자는 0 또는 1 이다.", () => {
    expect(String(BridgeRandomNumberGenerator.generate())).toMatch(/1|2/);
  });

  test(`랜덤숫자가 1 이면 U를 저장한다`, () => {
    const generateRandomNumber = function () {
      return 1;
    };
    const size = 3;

    expect(BridgeMaker.makeBridge(size, generateRandomNumber)).toEqual([
      "U",
      "U",
      "U",
    ]);
  });

  test(`랜덤숫자가 0 이면 D를 저장한다`, () => {
    const generateRandomNumber = function () {
      return 0;
    };
    const size = 3;

    expect(BridgeMaker.makeBridge(size, generateRandomNumber)).toEqual([
      "D",
      "D",
      "D",
    ]);
  });
});
