{
    const tasks = [

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

    //mutable wersja poczatek
    // const  addNewTask= (newTaskContent) => {
    // tasks.push({
    //     content: newTaskContent,
    // });
    //mutable wersja koniec
    //     render();
    // };
    const addNewTask = (newTaskContent) => {
        const updatedTasks = [...tasks, { content: newTaskContent }];
        return updatedTasks;
    };
    const removeTask = (index) => {
        const tasksWithoutRemoved = [...tasks.slice(0, index),
        ...tasks.slice(index + 1)]
        return tasksWithoutRemoved;
        render();
    }

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }
    //const tasksToggledDone = [...tasks.slice(0,index),{[index],done:true } ...tasks.slice(index+1)]
    //tutaj musi byc zaleznosc, ze staną się done,jeżeli nie były i odwrotnie, a ta metodą z lekcji immutability
    //mozna tylko nadac juz konkretnie czy ma byc done czy  nie

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

    const updatedTasks = [...tasks, { content: newTaskContent }]

    const renderTasks = () => {
        //po wpisaniu zadania i kliknieciu ma sie zrobić 
        //eventlistener(click)/ submit
        addNewTask(newTaskContent);

        let tasksListhtmlString = "";


        for (const task of updatedTasks) {
            //jak to  zmienić,żeby prawidłowo pobierało z updatedTasks
            tasksListhtmlString +=
                `<li 
                class="list__item ${task.done ? "list__item--done" : ""}"
                 >
                <span class="list__taskContent">${task.content} </span>       
                <button class="js-done buttons__done">
                ${task.done ? "✔" : "   "}           
                </button>         
                <button class="js-remove buttons__remove">🗑</button>
                </li>`;
        }
        document.querySelector(".js-tasks").innerHTML = tasksListhtmlString

    };

    const renderButtons = () => { };
    //event listenery 

    const bindButtonsEvents = () => {
        //złapanie buttona ale button zakoncz wszystkie nie zawsze jest
        //wiec musi byc if, sprawdzenie,czy jest
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
        //nowe
        addNewTask(newTaskContent);
        //ma robic to, zeby zamiast z tasks pobieralo z updatedTasks,
        //teraz jeszcze tego nie robi

        cleanInputFocus(newTaskInput);
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };
    init();
};


