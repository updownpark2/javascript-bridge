class Validation {
  #checkBridgeSizeRange(bridgeSize) {
    if (bridgeSize < 3 || bridgeSize > 20) {
      throw new Error(`[ERROR] 다리의 길이는 3~20 입니다.`);
    }
  }

  #checkBridgeSizeOnlyNum(bridgeSize) {
    if (/^[0-9]*$/g.test(bridgeSize) === false) {
      throw new Error(`[ERROR] 숫자만 입력해주세요.`);
    }
  }

  checkBridgeSize(bridgeSize) {
    this.#checkBridgeSizeOnlyNum(bridgeSize);
    this.#checkBridgeSizeRange(bridgeSize);
  }

  #checkMovingRange(moving) {
    if (/^[U|D]/g.test(moving) === false) {
      throw new Error(`[ERROR] U 혹은 D 만 입력해주세요.`);
    }
  }

  #checkMovingLength(moving) {
    if (moving.length !== 1) {
      throw new Error(`[ERROR] U 혹은 D 한 글자만 입력해주세요.`);
    }
  }

  checkMoving(moving) {
    this.#checkMovingRange(moving);
    this.#checkMovingLength(moving);
  }

  #checkRetryRange(retry) {
    if (/^[R|Q]/g.test(retry) === false) {
      throw new Error(`[ERROR] R 혹은 Q 만 입력해주세요.`);
    }
  }

  #checkRetryLength(retry) {
    if (retry.length !== 1) {
      throw new Error(`[ERROR] R 혹은 Q 한 글자만 입력해주세요.`);
    }
  }

  checkRetry(retry) {
    this.#checkRetryRange(retry);
    this.#checkRetryLength(retry);
  }
}

module.exports = Validation;
