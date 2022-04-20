import logo from "./logo.svg";
import "./App.css";
import { WithHandlers } from "./components/withHandlers";
import { Number } from "./components/withState";
import InputForm from "./components/inputForm";
import Counter1 from "./components/Counter1";
import EmployeeList from "./components/employeeList";
function App() {
  return (
    <div className="App">
      <WithHandlers />
      <Number />
      <InputForm />
      <Counter1 />
      <EmployeeList />
    </div>
  );
}

export default App;
