let form = document.querySelector(".task-form");
let input = document.querySelector(".task-form input");
let priority = document.querySelector("#priority");
let taskContainer = document.querySelector(".task-container");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let taskInfo = {
    id: Date.now(),
    text: input.value,
    priority: priority.value,
    completed: false,
  };
  tasks.push(taskInfo);

  renderTask();

  localStorage.setItem("tasks", JSON.stringify(tasks));
});

function renderTask() {
  taskContainer.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let taskCard = document.createElement("div");
    let isDone = document.createElement("input");
    let taskText = document.createElement("span");
    let taskPriority = document.createElement("span");
    let buttons = document.createElement("div");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    taskCard.dataset.id = tasks[i].id;

    isDone.type = "checkbox";
    editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";

    isDone.checked = tasks[i].completed;
    taskText.textContent = tasks[i].text;
    taskPriority.textContent = tasks[i].priority;

    taskCard.classList.add("task-card");
    isDone.classList.add("task-checkbox");
    taskText.classList.add("task-text");
    taskPriority.classList.add("task-priority");
    buttons.classList.add("task-actions");
    editButton.classList.add("edit-btn");
    deleteButton.classList.add("delete-btn");

    buttons.appendChild(editButton);
    buttons.appendChild(deleteButton);

    taskCard.appendChild(isDone);
    taskCard.appendChild(taskText);
    taskCard.appendChild(taskPriority);
    taskCard.appendChild(buttons);

    taskContainer.appendChild(taskCard);
  }
}

taskContainer.addEventListener("click",(e)=>{

let clicked=e.target;
let card=clicked.closest(".task-card");
if(!card) return;

let id=Number(card.dataset.id);
let task=tasks.find(t=>t.id===id);


// delete button
if(clicked.classList.contains("delete-btn")){
tasks=tasks.filter(t=>t.id!==id);
localStorage.setItem("tasks",JSON.stringify(tasks));
renderTask();
}


// edit button
else if(clicked.classList.contains("edit-btn")){
let newText=prompt("Edit task",task.text);
if(newText && newText.trim()!==""){
task.text=newText;
localStorage.setItem("tasks",JSON.stringify(tasks));
renderTask();
}
}


// checkbox toggle
else if(clicked.classList.contains("task-checkbox")){
task.completed=!task.completed;
localStorage.setItem("tasks",JSON.stringify(tasks));
renderTask();
}

});
