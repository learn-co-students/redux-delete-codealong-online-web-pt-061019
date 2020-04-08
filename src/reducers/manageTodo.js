import uuid from "uuid";
export default function manageTodo(
  state = {
    todos: [],
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      const todo = {
        id: uuid(),
        text: action.payload.text,
      };

      return { todos: state.todos.concat(todo) };
    //This is a poor way to use the filter and the todo object
    //The lesson passes the whole object and checks the reference and never
    //the id's uuid....
    case "DELETE_TODO":
      return { todos: state.todos.filter((todo) => todo !== action.payload) };

    default:
      return state;
  }
}
