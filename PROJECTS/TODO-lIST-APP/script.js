document.addEventListener("DOMContentLoaded", () => {
  const InputField = document.getElementById("input-Filed");
  const AddTaskBtn = document.getElementById("add-Task-btn");
  const TodoList = document.getElementById("todo-list");

  let TaskStorage = JSON.parse(localStorage.getItem("TaskStorage")) || [];
  TaskStorage.forEach((task) => renderTask(task));

  AddTaskBtn.addEventListener("click", () => {
    // grabing input value from input field
    const TaskTest = InputField.value.trim();
    if (TaskTest === "") return;

    // creating new task
    const newTask = {
      Id: Date.now(),
      text: TaskTest,
      completed: false,
    };
    // adding new task to task storage
    TaskStorage.push(newTask);
    //   storing data in local storage
    saveLocalStorage();
    // removing task from input field
    InputField.value = "";
    console.log(TaskStorage);
    // rendering new task
    renderTask(newTask);
  });

  // handling LocalStroge
  function saveLocalStorage() {
    localStorage.setItem("TaskStorage", JSON.stringify(TaskStorage));
  }

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("id", task.Id);
    li.classList.add(
      "bg-gray-100",
      "px-2",
      "text-sm",
      "rounded",
      "py-2",
      "flex",
      "justify-between",
      "items-center",
      "cursor-pointer",
      "my-2",
      "sm:text-lg",
      "xl:text-2xl"
    );
    li.innerHTML = `${task.text} <button id="delete-btn" class="bg-red-700 px-3 py-1 rounded text-white">Delete </button>`;

    //  WHEN I CLICK ON  LIST BUTTON IT IS CONSOLE HELO
    li.addEventListener("click", (e) => {
      if (e.target.id === "delete-btn") return;
      li.classList.toggle("line-through");
      task.completed = !task.completed;
      saveLocalStorage();
    });

    // when i click delete button the task is deleted
    li.addEventListener("click", (e) => {
      if (e.target.id === "delete-btn") {
        e.stopPropagation();
        const index = TaskStorage.findIndex((t) => t.Id === task.Id);
        TaskStorage.splice(index, 1);
        saveLocalStorage();
        li.remove();
      }
    });

    TodoList.appendChild(li);
  }
});

// let Araays = ['Amit', "Sumit", "Naman", "Ahjukja"]
// const result = Araays.filter((word)=> word.length>6)
// console.log(result);
