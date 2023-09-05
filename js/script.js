{
    let tasks = [

        {
            content: "zjeść cukinie",
            done: true,
        },
    ];
    let hideDoneTasks = false;

    const newTaskInput = document.querySelector(".js-newTask")
    const newTaskContent = newTaskInput.value.trim();
    const cleanInputFocus = () => {

        newTaskInput.value = "";
        newTaskInput.focus();
    }

    const addNewTask = (newTaskContent) => {
        tasks = [...tasks,
        { content: newTaskContent }];
        render();
    };



    const removeTask = (index) => {
        tasks = tasks.filter((task, indexTask) => indexTask !== index);
        render();
    }
    
    const toggleTaskDone = (index) => {

        tasks = tasks.map(
            (task, indexTask) =>
                index === indexTask ? { ...task, done: !task.done } : task);
        render();
    }
//dłuższa wersja
// tasks = tasks.map((task, index) => {
//     if (index === taskIndex) {
//       return {
//         ...task,
//         done: !task.done,
//       };
//     }
//     return task;
//   });

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);

            });
        });
    }

    const bindToggleDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-done");
        toggleDoneButtons.forEach((toggleDoneButtons, index) => {
            toggleDoneButtons.addEventListener("click", () => {
                toggleTaskDone(index);

            });
        });
    };

    const markAllDone = () => {
        tasks = tasks.map((task) => ({
            ...task,
            done: true,
        }))

        render();
    }

    const hideOrShowDoneTasks = () => {
        hideDoneTasks = !hideDoneTasks;
        render();
    };



    const renderTasks = () => {

        const taskToHTML = task =>
            `<li 
                class="list__item js__listClass ${task.done && hideDoneTasks ? "list__hidden" : ""
            }">
                 

                <span class="list__taskContent">${task.content} </span>       
                <button class="js-done buttons__done">
                ${task.done ? "✔" : "   "}           
                </button>         
                <button class="js-remove buttons__remove">🗑</button>
                </li>`;
        const tasksElement = document.querySelector(".js-tasks")

        tasksElement.innerHTML = tasks.map(taskToHTML).join("");
    };



    const renderButtons = () => {
        const buttonsElement = document.querySelector(".js-buttons");
        if (!tasks.length) {
            buttonsElement.innerHTML = "";
            return;
        }
        buttonsElement.innerHTML = `
        <button class= "buttons__button js-toogleHideDoneButton">
        ${hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone 
        </button>
<button class="buttons__button js-markAllDoneButton"
${tasks.every(({ done }) => done) ? "disabled" : ""}>
Ukończ wszystkie
</button>
        `;
    };

    const bindButtonsEvents = () => {
        const toogleHideDoneButton = document.querySelector(
            ".js-toogleHideDoneButton");

        if (toogleHideDoneButton) {
            toogleHideDoneButton.addEventListener("click", hideOrShowDoneTasks)
        }


        const markAllDoneButton = document.querySelector(".js-markAllDoneButton");

        if (markAllDoneButton) {
            markAllDoneButton.addEventListener("click", markAllDone);
        }

        
    };


    const render = () => {
        renderTasks();
        bindRemoveEvents();
        bindToggleDoneEvents();

        renderButtons();
        bindButtonsEvents();
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = newTaskInput.value.trim();
        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);
        cleanInputFocus(newTaskInput);
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };
    init();
};

