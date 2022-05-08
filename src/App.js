import "./App.css";
import BirthdayList from "./components/BirthdayList/BirthdayList";
import dataBirthday from "./data/dataBirthday";
import Card from "./components/Card/Card";
import Tours from "./components/Tours/Tours";

function App() {
  return (
    <div className="App bg-slate-300">
      <Tours />
      <Card />
      <BirthdayList friendsBirthday={dataBirthday} />
    </div>
  );
}

export default App;
