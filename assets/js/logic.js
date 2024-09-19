// Retrieve tasks and taskId from localStorage
const buttonEL = $("#addTask");
const kanbanList = JSON.parse(localStorage.getItem("newTasks")) || [];
let taskId = parseInt(localStorage.getItem("taskId")) || 0;
const todoEl = $("#todo-cards"),
  inProgressEl = $("#in-progress-cards"),
  doneEl = $("#done-cards");
let myModal = null;

function generateTaskId() {
  return ++taskId;
}

function saveTasks() {
  localStorage.setItem("newTasks", JSON.stringify(kanbanList));
  localStorage.setItem("taskId", taskId);
}

function createTaskCard(task) {
  const postElement = $(
    `<div id="${task.id}" class="kanban-card draggable"></div>`
  );
  postElement.append(`
    <h2>${task.taskTitle}</h2>
    <h4>${task.taskDescription}</h4>
    <p>${task.dueDate}</p>
    <button class="btn-delete border border-light">Delete</button>
  `);

  postElement.find(".btn-delete").on("click", () => handleDeleteTask(task.id));

  const now = dayjs(),
    taskDueDate = dayjs(task.dueDate, "DD/MM/YYYY"),
    endOfWeek = now.endOf("week");

  if (task.status === "done") {
    postElement.addClass("bg-success text-white");
  } else {
    if (
      now.isSame(taskDueDate, "day") ||
      (taskDueDate.isAfter(now) && taskDueDate.isBefore(endOfWeek))
    ) {
      postElement.addClass("bg-warning text-white");
    } else if (now.isAfter(taskDueDate)) {
      postElement.addClass("bg-danger text-white");
    } else if (taskDueDate.isAfter(endOfWeek)) {
      postElement.addClass("bg-light text-black");
    }
  }

  return postElement;
}

function renderTaskList() {
  [todoEl, inProgressEl, doneEl].forEach((el) => el.empty());
  kanbanList.forEach((task) => {
    const card = createTaskCard(task);
    if (task.status === "todo") todoEl.append(card);
    else if (task.status === "in-progress") inProgressEl.append(card);
    else doneEl.append(card.addClass("bg-success text-white"));
  });
  $(".draggable").draggable();
}

function handleAddTask(event) {
  event.preventDefault();

  const title = $("#taskTitle").val().trim();
  const date = $("#datePicker").val().trim();
  const description = $("#taskDescription").val().trim();

  if (!title) {
    alert("Oops, looks like you forgot to add your title!");
    return;
  }
  if (!date) {
    alert("Argh! Dates cannot be blank. Please choose one.");
    return;
  }
  if (!description) {
    alert("Hey, hey! Tasks needs a description, lets add one!");
    return;
  }

  const newTask = {
    taskTitle: title,
    dueDate: date,
    taskDescription: description,
    id: generateTaskId(),
    status: "todo",
  };

  $("#taskTitle").val("");
  $("#datePicker").val("");
  $("#taskDescription").val("");

  kanbanList.push(newTask);
  saveTasks();
  renderTaskList();

  myModal.hide();
}

function handleDeleteTask(id) {
  kanbanList.splice(
    kanbanList.findIndex((task) => task.id === id),
    1
  );
  saveTasks();
  renderTaskList();
}

function handleDrop(event, ui) {
  const taskId = ui.draggable[0].id,
    newStatus = event.target.id;
  const task = kanbanList.find((task) => task.id == taskId);
  task.status = newStatus;
  saveTasks();
  renderTaskList();
}

$(document).ready(function () {
  buttonEL.on("click", handleAddTask);
  myModal = new bootstrap.Modal($("#taskModal")[0], { keyboard: false });

  $("#datePicker").datepicker();

  $(".lane").droppable({
    drop: handleDrop,
  });

  renderTaskList();
});
