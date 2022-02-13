import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import { Form } from "./components/Form";
import { EmailForm } from "./components/EmailForm";
import { Users } from "./components/Users";

function App() {
  const [counters, setCounters] = useState([1]);

  const addCounter = () => {
    setCounters([...counters, counters[counters.length - 1] + 1]);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <Form />
      <EmailForm />
      {counters.map((counterId) => {
        return <Counter id={counterId} />;
      })}
      <button onClick={addCounter}>Add a counter</button>
      <Users />
    </div>
  );
}

export default App;
