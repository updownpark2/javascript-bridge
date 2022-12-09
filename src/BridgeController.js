const OutputView = require(`./OutputView`);
const InputView = require(`./InputView`);
const Validation = require(`./Validation`);
const BridgeMaker = require(`./BridgeMaker`);
const BridgeRandomNumberGenerator = require(`./BridgeRandomNumberGenerator`);

class BridgeController {
  #validation = new Validation();

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
        const bridge = this.#getBridge(
          bridgeSize,
          BridgeRandomNumberGenerator.generate
        );
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

  #getBridge(size, generateRandomNumber) {
    return BridgeMaker.makeBridge(size, generateRandomNumber);
  }
}

module.exports = BridgeController;
