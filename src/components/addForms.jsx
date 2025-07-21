import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../features/todo/todoSlice";
export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(addToDo(task));
    setTask("");
  };
  return (
    <>
      <form action=" " onSubmit={submitHandler}>
        <input
          type="text"
          name=""
          id=""
          onChange={(event) => setTask(event.target.value)}
        />
        <button>Add Task</button>
      </form>
    </>
  );
}
