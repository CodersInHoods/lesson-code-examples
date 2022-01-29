const useState = (initValue) => {
  let state = { value: initValue };

  const modifyState = (newValue) => {
    state.value = newValue;
  };

  return [state, modifyState];
};

const [value, modifyState] = useState(0);

console.log(value);

modifyState(5);

console.log(value);

modifyState(10);

console.log(value);