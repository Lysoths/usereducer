import "./TodoList.css";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const TodoList = () => {
  let complated = "";
  const { state, dispatch } = useContext(GlobalContext);

  const deleteTodo = (id) => {
    dispatch({ type: "deleteTodo", id: id });
  };

  const updateTodo = (id) => {
    let newTodo = prompt("Enter a new Todo");
    if (newTodo === "") {
      alert("Yeni Todo boş olamaz");
    } else if (newTodo === null) {
    } else {
      dispatch({ type: "updateTodo", value: newTodo, id: id });
    }
  };

  const complatedTodo = (id) => {
    dispatch({
      type: "complatedTodo",
      complated: "complated",
      id: id,
    });
  };

  return (
    <div>
      {state &&
        state.map((item, i) => (
          <div className='todos' key={i} id={i}>
            <p className={item.complated === "complated" ? " complated" : ""}>
              {item.todo}
            </p>

            <div className='buttons'>
              <span
                className='material-symbols-outlined confirm '
                onClick={() => complatedTodo(item.id)}
              >
                <p>check</p>
              </span>
              <span
                onClick={() => updateTodo(item.id)}
                className='material-symbols-outlined edit'
              >
                edit
              </span>

              <span
                onClick={() => deleteTodo(item.id)}
                className='material-symbols-outlined delete'
              >
                delete
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
