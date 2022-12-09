const Validation = require(`../src/Validation`);

describe("bridgeSize 타당성 검사 테스트", () => {
  const validation = new Validation();

  test.each(["a", "1d", ",d3"])(
    "숫자를 입력하지 않았을 때 오류가 발생한다.",
    (input) => {
      expect(() => validation.checkBridgeSize(input)).toThrow();
    }
  );

  test.each(["1", "0", "25"])(
    "3~20 사이의 숫자를 입력하지 않으면 오류가 발생한다.",
    (input) => {
      expect(() => validation.checkBridgeSize(input)).toThrow();
    }
  );
});

describe("moving 타당성 검사 테스트", () => {
  const validation = new Validation();

  test.each(["d", "s", "r", "g", "1"])(
    "U 또는 D 를 입력하지 않으면 오류가 발생한다.",
    (input) => {
      expect(() => validation.checkMoving(input)).toThrow();
    }
  );

  test.each(["UU", "DD"])(
    "U 나 D 를 두 번 입력하면 오류가 발생한다.",
    (input) => {
      expect(() => validation.checkMoving(input)).toThrow();
    }
  );
});

describe("retry 타당성 검사 테스트", () => {
  const validation = new Validation();

  test.each(["d", "s", "r", "g", "1"])(
    "R 또는 Q 를 입력하지 않으면 오류가 발생한다.",
    (input) => {
      expect(() => validation.checkRetry(input)).toThrow();
    }
  );

  test.each(["RR", "QQ"])(
    "U 나 D 를 두 번 입력하면 오류가 발생한다.",
    (input) => {
      expect(() => validation.checkRetry(input)).toThrow();
    }
  );
});
