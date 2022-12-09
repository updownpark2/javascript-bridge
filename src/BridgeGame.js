/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #index = 0;
  #result = [[], []];
  #tryCount = 1;
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  #indexUp() {
    this.#index = this.#index + 1;
  }

  #tryCountUp() {
    this.#tryCount = this.#tryCount + 1;
  }

  isPassOrNot(bridge, moving) {
    if (bridge[this.#index] === moving) {
      return true;
    }
    return false;
  }

  #pass(moving) {
    if (moving === "U") {
      this.#result[0].push(`O`);
      this.#result[1].push(` `);
    }
    if (moving === "D") {
      this.#result[0].push(` `);
      this.#result[1].push(`O`);
    }
  }

  #fail(moving) {
    if (moving === "U") {
      this.#result[0].push(`X`);
      this.#result[1].push(` `);
    }
    if (moving === "D") {
      this.#result[0].push(` `);
      this.#result[1].push(`X`);
    }
  }

  move(bridge, moving) {
    if (this.isPassOrNot(bridge, moving) === true) {
      this.#pass(moving);
      this.#indexUp();
      return;
    }
    this.#fail(moving);
  }
  getTryCount() {
    return this.#tryCount;
  }

  getResult() {
    return this.#result;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
