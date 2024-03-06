import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoOne from "./TodoOne";
import TodoTwo from "./TodoTwo";
import '../components/App.css'

function App() {
  return (
    <div>
      <center className="todo-conatiner">
        <AppName></AppName>
      </center>
      <div className="items-container">
        <AddTodo></AddTodo>
        <TodoOne></TodoOne>
        <TodoTwo></TodoTwo>
      </div>
    </div>
  );
}

export default App;
