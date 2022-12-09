const BridgeGame = require(`../src/BridgeGame`);

describe("다리와 이동과 관련된 테스트를 진행한다.", () => {
  test("U를 입력했을 때 통과인 경우 결과를 저장할 수 있다.", () => {
    const bridgeGame = new BridgeGame();
    const bridge = ["U", "D", "D"];
    const moving = "U";
    bridgeGame.move(bridge, moving);
    expect(bridgeGame.getResult()).toEqual([[`O`], [` `]]);
  });

  test("D를 입력했을 때 통과인 경우 결과를 저장할 수 있다.", () => {
    const bridgeGame = new BridgeGame();
    const bridge = ["D", "U", "D"];
    const moving = "D";
    bridgeGame.move(bridge, moving);
    console.log(bridgeGame.getResult());
    expect(bridgeGame.getResult()).toEqual([[` `], [`O`]]);
  });

  test("U를 입력했을 때 실패인 경우 결과를 저장할 수 있다.", () => {
    const bridgeGame = new BridgeGame();
    const bridge = ["D", "U", "D"];
    const moving = "U";
    bridgeGame.move(bridge, moving);
    expect(bridgeGame.getResult()).toEqual([[`X`], [` `]]);
  });

  test("D를 입력했을 때 실패인 경우 결과를 저장할 수 있다.", () => {
    const bridgeGame = new BridgeGame();
    const bridge = ["U", "U", "D"];
    const moving = "D";
    bridgeGame.move(bridge, moving);
    expect(bridgeGame.getResult()).toEqual([[` `], [`X`]]);
  });

  test(`유저가 이동시에 index의 값은 증가한다. `, () => {
    const bridgeGame = new BridgeGame();
    const bridge = ["D", "U", "D"];
    const moving1 = "D";
    const moving2 = "U";
    bridgeGame.move(bridge, moving1);
    bridgeGame.move(bridge, moving2);

    expect(bridgeGame.getResult()[0].length).toEqual(2);
  });
});

describe("재시작과 관련된 테스트를 진행한다.", () => {
  test("사용자가 R을 입력하면 true를 반환한다.", () => {
    const bridgeGame = new BridgeGame();

    expect(bridgeGame.isRetry("R")).toBeTruthy();
  });

  test(`리셋 메서드를 실행하면 결과값이 리셋된다.`, () => {
    const bridgeGame = new BridgeGame();
    const bridge = ["U", "D", "U"];
    const moving = "U";
    bridgeGame.move(bridge, moving);
    expect(bridgeGame.getResult()).toEqual([[`O`], [` `]]);
    bridgeGame.retry();
    expect(bridgeGame.getResult()).toEqual([[], []]);
  });

  test(`재시작을 하면 tryCount가 1 증가한다.`, () => {
    const bridgeGame = new BridgeGame();
    expect(bridgeGame.getTryCount()).toEqual(1);
    bridgeGame.retry();
    expect(bridgeGame.getTryCount()).toEqual(2);
  });
});
