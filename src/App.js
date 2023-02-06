import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { useState } from "react";
import { GlobalProvider } from "./Context/GlobalState";
function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
      <GlobalProvider>
        <TodoAdd todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </GlobalProvider>
    </div>
  );
}

export default App;
