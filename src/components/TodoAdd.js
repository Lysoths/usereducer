import { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
const TodoAdd = ({ todos, setTodos }) => {
  const [enteredTask, setEnteredTask] = useState("");
  const { state, dispatch } = useContext(GlobalContext);
  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredTask.length > 20) {
      alert("Todo 20 karakterden büyük olamaz ");
      setEnteredTask("");
    } else if (enteredTask === "") {
      alert("Todo boş olamaz");
    } else {
      dispatch({
        type: "addTodo",
        value: enteredTask,
        complated: "",
      });
      setEnteredTask("");
    }
  };

  return (
    <div>
      <form action='' onSubmit={submitHandler}>
        <input
          type='text'
          name=''
          id=''
          placeholder='Todo giriniz..'
          onChange={(e) => setEnteredTask(e.target.value)}
          value={enteredTask}
        />
      </form>
    </div>
  );
};

export default TodoAdd;
