import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialState = {
    todos: [{ id: "abc", task: "demo task", isDone: false }],
};
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo); // Direct Mutation which is not possible in Noramln react there we need to deconstruct the array
        },
        deleteToDo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        markasDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: true }
                }
                return todo;
            })
        },
        markasunDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: false }
                }
                return todo;
            })
        },
    }
})
export const { addToDo, deleteToDo, markasDone, markasunDone } = todoSlice.actions;
export default todoSlice.reducer;