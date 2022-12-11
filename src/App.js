const BridgeController = require(`./BridgeController`);

class App {
  play() {
    const bridgeController = new BridgeController();
    bridgeController.start();
  }
}

module.exports = App;
