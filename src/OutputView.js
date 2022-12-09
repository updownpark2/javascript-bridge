const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMent() {
    Console.print(`다리 건너기 게임을 시작합니다.`);
  },

  showError(error) {
    Console.print(error);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(result) {
    const upArr = result[0].join(` | `);
    const downArr = result[1].join(` | `);
    Console.print(`[ ${upArr} ]`);
    Console.print(`[ ${downArr} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, passOrFail, tryCount) {
    const upArr = result[0].join(` | `);
    const downArr = result[1].join(` | `);
    Console.print(`최종 게임 결과`);
    Console.print(`[ ${upArr} ]`);
    Console.print(`[ ${downArr} ]\n`);

    Console.print(`게임 성공 여부 : ${passOrFail}`);
    Console.print(`총 시도한 횟수 : ${tryCount}`);
  },

  printEnd() {
    Console.print(`수고하셨습니다.`);
    Console.close();
  },
};

module.exports = OutputView;
