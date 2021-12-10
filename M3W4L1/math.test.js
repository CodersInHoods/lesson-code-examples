const { countDown } = require("./math");
global.console = { log: jest.fn() };

/**
 * As a user I want to have a countDown function which
 * will take a number as a param and use it as a starting point,
 * console.log a number every second, once it gets to 0 return "Stop."
 * If we do not provie the number as a param we want to console.log "Number required."
 */
describe("", () => {
  test("countDown is a function", () => {
    expect(typeof countDown).toBe("function");
  });

  test("should console.log a number every second", async () => {
    let number = 4;
    countDown(4);

    const interval = setInterval(() => {
      expect(global.console.log).toBeCalledWith(number);
      number -= 1;

      if (number === 0) {
        expect(global.console.log).toBeCalledWith("Stop.");

        clearInterval(interval);
      }
    }, 1000);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 4000);
    });
  });

  test("should console.log an error message if the param is not an integer", () => {
    countDown();

    expect(global.console.log).toBeCalledWith("Number required.");
  });
});
