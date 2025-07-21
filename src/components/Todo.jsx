import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../features/todo/todoSlice";
import { markasDone } from "../features/todo/todoSlice";
import { markasunDone } from "../features/todo/todoSlice";
import AddForm from "./addForms";
import "../style.css"
export default function ToDo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const deleteId = (id) => {
    dispatch(deleteToDo(id));
  };
  const markId = (id) => {
    dispatch(markasDone(id));
  };
  const unmarkId = (id) => {
    dispatch(markasunDone(id));
  };
  return (
  <div className="todo-container">
    <h3>ToDos</h3>
    <AddForm />
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span className={todo.isDone ? "done" : ""}>{todo.task}</span>
          <button onClick={() => deleteId(todo.id)}>Delete</button>
          <button onClick={() => {
            todo.isDone ? unmarkId(todo.id) : markId(todo.id);
          }}>
            {todo.isDone ? "Mark as Undone" : "Mark as Done"}
          </button>
        </li>
      ))}
    </ul>
  </div>
);
}
