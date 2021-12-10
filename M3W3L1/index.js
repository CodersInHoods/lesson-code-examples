const addCounter = document.querySelector(".new_counter");
const counters = document.querySelector(".counters");

class Counter {
  #counter = 0;

  #increment() {
    this.#counter += 1;
  }

  #decrement() {
    this.#counter -= 1;
  }

  #createCounterElement() {
    const counterEl = document.createElement("div");
    counterEl.classList.add("counter");

    counterEl.innerHTML = `
      <h3>${this.#counter}</h3>
      <div>
        <button class="increment">Increment</button>
        <button class="decrement">Decrement</button>
      </div>
    `;
    const counterValueEl = counterEl.querySelector('h3');
    const incrementBtn = counterEl.querySelector('.increment')
    const decrementBtn = counterEl.querySelector('.decrement')

    incrementBtn.addEventListener('click', () => {
      this.#increment();
      counterValueEl.innerText = this.#counter;
    })

    decrementBtn.addEventListener('click', () => {
      this.#decrement();
      counterValueEl.innerText = this.#counter;
    })

    return counterEl
  }

  init() {
    const newCounter = this.#createCounterElement();
    counters.appendChild(newCounter)
  }
}

addCounter.addEventListener("click", () => {
  const counter = new Counter();

  counter.init();
});
