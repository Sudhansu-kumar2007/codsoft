// Description: This code creates a simple to-do list application where users can add tasks with a date and mark them as complete or remove them.   






let reset =" ";


let add = document.querySelector(".add");
let task = document.querySelector(".task");
let ul = document.querySelector(".list_ul");
let lists = [];

function renderTasks() {
    ul.innerHTML = "";
    lists.forEach((list, idx) => {
        let li = document.createElement("li");
        li.innerHTML = list[0] + " --- " + list[1];

        // Complete Button
        let completeBtn = document.createElement("button");
        completeBtn.innerHTML = list[2] === true ? "Completed" : "Complete";
        completeBtn.className = list[2] === true ? "complete" : "incomplete";
        completeBtn.addEventListener("click", () => {
            lists[idx][2] = !lists[idx][2];
            renderTasks();
        });
        li.appendChild(completeBtn);

        // Remove Button
        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Remove";
        removeBtn.className = "remove";
        removeBtn.addEventListener("click", () => {
            lists.splice(idx, 1);
            renderTasks();
        });
        li.appendChild(removeBtn);

        // Add line-through if completed
        if (list[2] === true) {
            li.classList.add("complete");
        } else {
            li.classList.remove("complete");
        }

        ul.appendChild(li);
    });
}

add.addEventListener("click", () => {
    let a = task.value.trim();
    let date = document.querySelector(".date").value.trim();
    if (a && date) {
        lists.push([a, date, false]);
        renderTasks();
        task.value = "";
        document.querySelector(".date").value = "";
    }
});

// Initial render
renderTasks();