const inputBox = document.querySelector("#input-box");
const Tasks = document.querySelector("#List-container");

const addTask = () => {
  if (inputBox.value === "") {
    alert("You must enter some task to Add!!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    Tasks.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

Tasks.addEventListener(
  "click",
  (event) => {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", Tasks.innerHTML);
};

const showTask = () => {
  Tasks.innerHTML = localStorage.getItem("data");
};

showTask();
