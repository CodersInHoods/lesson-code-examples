const Mystique = {
  state: {},
  elements: [],
};

// tag
// props
Mystique.createElement = (tag, props, ...children) => {
  const element = document.createElement(tag);

  if (props.innerText) {
    element.innerText = props.innerText;
  }

  if (props.className) {
    element.className = props.className;
  }

  if (props.placeholder) {
    element.placeholder = props.placeholder;
  }

  if (props.onChange) {
    element.oninput = props.onChange;
  }

  if (props.valueFromState) {
    element.innerText = Mystique.state[props.valueFromState];
    element.render = () => {
      element.innerText = Mystique.state[props.valueFromState];
    };
  }

  if (children) {
    element.append(...children);
  }

  Mystique.elements.push(element);

  return element;
};

Mystique.setState = (newState = {}) => {
  Mystique.state = {
    ...Mystique.state,
    ...newState,
  };

  Mystique.elements.forEach((element) => {
    if (element.render) element.render();
  });
};
