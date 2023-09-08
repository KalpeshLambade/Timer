import "./App.css";
import Timer from "./component/Timer";

function App() {
  return (
    <>
      <h1>Clock</h1>
      <Timer direction={"clock"} duration={60} />
      <h2>CounterClock</h2>
      <Timer direction={"counterClock"} duration={60} />
    </>
  );
}

export default App;
