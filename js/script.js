{
    let tasks = [

        {
            content: "zjeść cukinie",
            done: true,
        },
    ];

    const newTaskInput = document.querySelector(".js-newTask")
    const newTaskContent = newTaskInput.value.trim();
    const cleanInputFocus = () => {

        newTaskInput.value = "";
        newTaskInput.focus();
    }

    const addNewTask = (newTaskContent) => {
        tasks = [...tasks, { content: newTaskContent }];
        render();
    };

    let hideDoneTasks = false;


    const removeTask = (index) => {
        tasks = [...tasks.slice(0, index),
        ...tasks.slice(index + 1)]
        render();
    }

    const toggleTaskDone = (index) => {

        tasks = [...tasks.slice(0, index),
        {
            ...tasks[index],
            done: !tasks[index].done
        },
        ...tasks.slice(index + 1)
        ];
        render();
    }


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
    }

    const markAllDone = () => {
        tasks = tasks.map((task) => ({
            ...task,
            done: true,
        }))

        render();
    }

    const hideOrShowDoneTasks = (hideDoneTasks) => {
        hideDoneTasks = !hideDoneTasks;
        render();
        // hideDoneTasks ? false : true;

    }

    const renderTasks = () => {
        let tasksListhtmlString = "";
        for (const task of tasks) {
            tasksListhtmlString +=
                `<li 
                class="list__item js__listClass ${task.done && hideDoneTasks ? "list__hidden" : ""
                }">
                 

                <span class="list__taskContent">${task.content} </span>       
                <button class="js-done buttons__done">
                ${task.done ? "✔" : "   "}           
                </button>         
                <button class="js-remove buttons__remove">🗑</button>
                </li>`;
        }
        document.querySelector(".js-tasks").innerHTML = tasksListhtmlString

    };

    const hideDoneButton = document.querySelector(".js-hideDoneButton");
    const markAllDoneButton = document.querySelector(".js-markAllDoneButton");

    const renderButtons = () => {
        const hideDoneButtonHTMLString = `Ukryj ukończone`;
        // if lista nie jest pusta/są jakieś ukomczone zadania 
        // hideDoneButtonHTMLString = `Ukryj ukończone`
        hideDoneButton.innerHTML = hideDoneButtonHTMLString

        const markAllDoneButtonHTMLString = `Ukończ wszystkie`;
        markAllDoneButton.innerHTML = markAllDoneButtonHTMLString;
    };

    const bindButtonsEvents = () => {
        hideDoneButton.addEventListener("click", () => {
            hideOrShowDoneTasks();
        })

        markAllDoneButton.addEventListener("click", () => {
            markAllDone();

        }
        )

        //     event listenery dodane do przyciskow np
        //złapanie buttona ale button zakoncz wszystkie nie zawsze jest
        //     //wiec musi byc if, button jest obecny to mu przypinamy event listener
        //a jesli nie to nie     //let hideDoneTasks = false;
    }


    const render = () => {
        renderTasks();
        renderButtons();
        bindRemoveEvents();
        bindToggleDoneEvents();
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

