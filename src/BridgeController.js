const OutputView = require(`./OutputView`);
const InputView = require(`./InputView`);

class BridgeController {
  printStartMent() {
    OutputView.printStartMent();
  }

  getBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {});
  }
}

module.exports = BridgeController;
