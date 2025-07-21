import ToDo from "./components/todo";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AddForm from "./components/addForms";
function App() {
  return (
    <>
      <Provider store={store}>
        {" "}
        <ToDo />
      </Provider>
    </>
  );
}

export default App;
