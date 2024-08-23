const userInput = document.getElementById("userInput");
const ul = document.querySelector(".listItems ul");
let tasks = document.querySelectorAll(".newTask");
const enterButton = document.getElementById("enter");

const addToList = function (e) {
  if (
    e.type === "click" ||
    (e.type === "keydown" && (e.key === "Enter" || e.key === "enter"))
  ) {
    if (userInput.value !== "") {
      const li = document.createElement("li");

      li.className = "newTask";
      li.textContent = userInput.value;
      ul.appendChild(li);
      userInput.value = "";
      tasks = document.querySelectorAll(".newTask");

      li.addEventListener("click", function () {
        li.classList.toggle("done");
      });

      const x = document.createElement("button");
      x.textContent = "X";
      li.appendChild(x);

      x.addEventListener("click", function () {
        ul.removeChild(li);
      });
    }
  }
};

document.addEventListener("keydown", addToList);
enterButton.addEventListener("click", addToList);
