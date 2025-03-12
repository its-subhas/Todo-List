let i;
let todoList = [];
sdata = localStorage.getItem("tasks");
if (sdata === undefined || sdata === null) {
  todoList = [];
} else {
  todoList = JSON.parse(localStorage.getItem("tasks"));
}
displaytask();
function addtask() {
  if (input.value === "" && date.value === "") {
    alert("Please add Task and Date ! ");
  } else if (input.value === "" && date.value !== "") {
    alert("Please add Task ! ");
  } else if (input.value !== "" && date.value === "") {
    alert("Please add Date ! ");
  } else {
    let input = document.querySelector("#input");
    let date = document.querySelector("#date");
    let taskObj = { task: input.value, date: date.value };
    todoList.unshift(taskObj);
    document.querySelector("#input").value = "";
    displaytask();
  }
}
function displaytask() {
  localStorage.setItem("tasks", JSON.stringify(todoList));
  let displaytask = document.querySelector("#tasklist");
  displaytask.innerHTML = "";
  for (i = 0; i < todoList.length; i++) {
    displaytask.innerHTML += `
    <span id ="spantask">${todoList[i].task}</span>
    <span id ="spandate">${todoList[i].date}</span>
    <button id ="deletebutton" onclick="todoList.splice(${i}, 1); displaytask();">Delete</button>
    `;
  }
}
