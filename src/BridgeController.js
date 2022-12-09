const OutputView = require(`./OutputView`);
const InputView = require(`./InputView`);
const Validation = require(`./Validation`);

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
}

module.exports = BridgeController;
