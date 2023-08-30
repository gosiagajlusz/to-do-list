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
    //zrobiłam to w ten sposób, bo nie wiedziałam jak zrobić przy pomocy map
    //obczaiłam czyjeś rozwiązanie map i nadal nie wiem- wrócić do tego

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
    let hideDoneTasks = false;

    const hideOrShowDoneTasks = (hideDoneTasks) => {
        hideDoneTasks = !hideDoneTasks;
        render();
    };
    // pozniej sprawdzić czy mogłoby być hideDoneTasks ? false : true;


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

    // const hideDoneButton = document.querySelector(".js-hideDoneButton");
    // const markAllDoneButton = document.querySelector(".js-markAllDoneButton");

    const renderButtons = () => {
        // if (tasks.some(({done})=>done){
        //     const hideDoneButtonHTMLString = `Ukryj ukończone`;
        // } zła składnia była, bez if jak są metody tablicy
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
${tasks.every(({ done }) => done) ? "disabled" : ""}> Ukończ wszystkie
</button>
        `;
    };

    const bindButtonsEvents = () => {
        const markAllDoneButton = document.querySelector(".js-markAllDoneButton");

        if (markAllDoneButton) {
            markAllDoneButton.addEventListener("click", markAllDone);
        }

        const toogleHideDoneButton = document.querySelector(".js-toogleHideDoneButton");

        if (toogleHideDoneButton) {
            toogleHideDoneButton.addEventListener("click", hideOrShowDoneTasks)
        };
        //     //wiec musi byc if, button jest obecny to mu przypinamy event listener
        //a jesli nie to nie     //let hideDoneTasks = false;
    }


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

