const OutputView = require(`./OutputView`);
const InputView = require(`./InputView`);
const Validation = require(`./Validation`);
const BridgeMaker = require(`./BridgeMaker`);
const BridgeRandomNumberGenerator = require(`./BridgeRandomNumberGenerator`);
const BridgeGame = require("./BridgeGame");

class BridgeController {
  #validation = new Validation();

  #bridgeGame = new BridgeGame();

  start() {
    this.#printStartMent();
    this.#getBridgeSize();
  }

  #printStartMent() {
    OutputView.printStartMent();
  }

  #getBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      if (this.#checkBridgeSize(bridgeSize) !== false) {
        const bridge = this.#getBridge(bridgeSize);
        this.#getMoving(bridge);
        console.log(bridge);
      }
    });
  }

  #checkBridgeSize(bridgeSize) {
    try {
      this.#validation.checkBridgeSize(bridgeSize);
    } catch (error) {
      this.#validationFailAndShowError(error);
      this.#getBridgeSize();

      return false;
    }
  }

  #validationFailAndShowError(error) {
    OutputView.showError(error);
  }

  #getBridge(size) {
    return BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  #getMoving(bridge) {
    InputView.readMoving((moving) => {
      if (this.#checkMoving(moving, bridge) !== false) {
        const result = this.#getResult(bridge, moving);
        this.#printResult(result);
        this.#getMoving(bridge);
      }
    });
  }

  #checkMoving(moving, bridge) {
    try {
      this.#validation.checkMoving(moving);
    } catch (error) {
      this.#validationFailAndShowError(error);
      this.#getMoving(bridge);

      return false;
    }
  }

  #getResult(bridge, moving) {
    this.#bridgeGame.move(bridge, moving);

    return this.#bridgeGame.getResult();
  }

  #printResult(result) {
    OutputView.printMap(result);
  }
}

module.exports = BridgeController;
