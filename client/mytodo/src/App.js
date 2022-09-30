import {BrowserRouter, Route} from "react-router-dom";
import { ShowTodoList} from "./components/showTodoList";
import {createTodo} from "./components/createTodo";
import './App.scss';

function App() {
  return (
    <div className="App-contents">
       <BrowserRouter>
          <Route exact path="/" component={ShowTodoList} />
          <Route path="/create-todo" component={CreateTodo} />
        </BrowserRouter>
    </div>
  );
}

export default App;
