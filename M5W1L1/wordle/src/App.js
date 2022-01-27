import "./App.css";
import { InputAndValue } from "./components/InputAndValue";
import { Letter } from "./components/Letter";

function App() {
  return (
    <div className="App">
      <Letter letter="w" />
      <Letter letter="o" />
      <Letter letter="r" />
      <Letter letter="d" />
      <Letter letter="l" />
      <Letter letter="e" />
      <InputAndValue />
    </div>
  );
}

export default App;
