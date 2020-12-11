// function showTodo(todo: { title: string; text: string }) {
//   console.log(todo.title + ": " + todo.text);
// }
function showTodo(todo) {
    console.log(todo.title + ": " + todo.text);
    console.dir(todo);
}
var myTodo = { id: "1", title: "first", text: "Take out trash", isDone: false };
showTodo(myTodo);
