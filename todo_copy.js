add.addEventListener("click", () => {
    index++;
    let a = task.value;
    let date = document.querySelector(".date");
    let b = date.value;
    let f = [a, b];

    lists.push(f);

    // Clear the list before re-rendering
    ul.innerHTML = "";

    // Render all tasks
    lists.forEach((list, i) => {
        let li = document.createElement("li");
        li.innerHTML = list[0] + " --- " + list[1];
        ul.appendChild(li);

        let btn = document.createElement("button");
        btn.innerHTML = "Remove";
        btn.classList.add("remove");
        li.appendChild(btn);

        btn.addEventListener("click", () => {
            lists.splice(i, 1);
            ul.innerHTML = "";
            lists.forEach((list, j) => {
                let li = document.createElement("li");
                li.innerHTML = list[0] + " --- " + list[1];
                ul.appendChild(li);

                let btn = document.createElement("button");
                btn.innerHTML = "Remove";
                btn.classList.add("remove");
                li.appendChild(btn);

                // Add remove event for new button
                btn.addEventListener("click", () => {
                    lists.splice(j, 1);
                    ul.innerHTML = "";
                    // re-render after removal
                    lists.forEach((list, k) => {
                        let li = document.createElement("li");
                        li.innerHTML = list[0] + " --- " + list[1];
                        ul.appendChild(li);

                        let btn = document.createElement("button");
                        btn.innerHTML = "Remove";
                        btn.classList.add("remove");
                        li.appendChild(btn);

                        btn.addEventListener("click", () => {
                            lists.splice(k, 1);
                            ul.innerHTML = "";
                            // re-render after removal
                            // ...repeat as above...
                        });
                    });
                });
            });
        });
    });

    // Reset input fields
    task.value = "";
    date.value = "";
});