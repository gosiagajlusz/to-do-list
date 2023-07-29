{
    const tasks = [
        {
            content: "kupić cokoły",
            done: false
        },
        {
            content: "zjeść cukinie",
            done: true,
        },
    ];
    const addNewTask = () => {
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }
    const bindingEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);

            });
        });
        const toggleDoneButtons = document.querySelectorAll(".js-done");
        toggleDoneButtons.forEach((toggleDoneButtons, index) => {
            toggleDoneButtons.addEventListener("click", () => {
                toggleTaskDone(index);

            });
        });
    }


    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += 
            `        
           <button class="js-done buttons__done">
           ${task.done ? "✔" : "   "}           
           </button>

           <li 
            class="list__item ${task.done ? "list__item--done": ""}"
            >${task.content}</li>
            
            
            <button class="js-remove buttons__remove">🗑</button>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString

        bindingEvents();
    };





    onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);
    };


    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };
    init();
};
