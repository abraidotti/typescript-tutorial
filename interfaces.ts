// function showTodo(todo: { title: string; text: string }) {
//   console.log(todo.title + ": " + todo.text);
// }

// let myTodo = { title: "Trash", text: "Take out trash" };

// showTodo(myTodo);

interface Todo {
  id: string;
  title: string;
  text: string;
  isDone: boolean;
}

function showTodo(todo: Todo) {
  console.log(todo.title + ": " + todo.text);
  console.dir(todo);
}

let myTodo = { id: "1", title: "first", text: "Take out trash", isDone: false };

showTodo(myTodo);
