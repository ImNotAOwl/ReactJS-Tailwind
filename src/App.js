import "./App.css";
import BirthdayList from "./components/BirthdayList/BirthdayList";
import dataBirthday from "./data/dataBirthday";
import Card from "./components/Card/Card";

function App() {

  return (
    <div className="App bg-slate-300">
      <Card/>
      <BirthdayList friendsBirthday={dataBirthday}/>
    </div>
  );
}

export default App;
