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
}

module.exports = Validation;
