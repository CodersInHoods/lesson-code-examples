const countDown = (number) => {
  if (Number.isInteger(number)) {
    const interval = setInterval(() => {
      console.log(number);
      number -= 1;

      if (number === 0) {
        console.log("Stop.");
        clearInterval(interval);
      }
    }, 1000);
  } else {
    console.log("Number required.");
  }
};

countDown(4);

module.exports = {
  countDown,
};
