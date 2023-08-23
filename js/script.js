{
    const tasks = [

        {
            content: "zjeść cukinie",
            done: true,
        },
    ];

    const newTaskInput = document.querySelector(".js-newTask")
    const cleanInputFocus = () => {

        newTaskInput.value = "";
        newTaskInput.focus();
    }

    //nowe kombinacje
    const newTaskContent = newTaskInput.value.trim();
    const updatedTasks = (newTaskContent) => { [...tasks, { content: newTaskContent }] };
    //nowe kombinacje koniec

    //mutable wersja poczatek
    // const addNewTask = (newTaskContent) => {
    // tasks.push({
    //     content: newTaskContent,
    // });
    //mutable wersja koniec
    //     render();
    // };
    //co zamias push? nową tablice 
    //wstawic tablice, ktora bedzie kopia task + dodatkowo newTaskContent
    //czyli zeby document.querySelector(".js-tasks").innerHTML = TO COŚ NIEMUTOWALNE
    //updatedTasks= [...tasks, {conent:newTaskContent}]
    const removeTask = (index) => {
        const tasksWithoutRemoved = [...tasks.slice(0, index), ...tasks.slice(index + 1)]
        render();
        //wrocic do tgeo,ze w tym miejscu on render nie zna
    }

    //tutaj trzeba zrobić kopie całego oprocz indexu danego
    // const tasksWithoutRemoved = (index)=> {tasks.slice(index, 1);
    //render};


    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }
    //const tasksToggledDone = [...tasks.slice(0,index),{[index],done:true } ...tasks.slice(index+1)]
    //tutaj musi byc zaleznosc, zestaną się done,jeżeli nie były i odwrotnie, a ta metodą z lekcji immutability
    //mozna tylko nadac juz konkretnie czy ma byc done czy  nie




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

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString +=
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
        document.querySelector(".js-tasks").innerHTML = htmlString

    
    };

    const renderButtons = () => { };
//event listenery 

const bindButtonsEvents = ()=> {
    //if 
    //złapanie buttona ale button zakoncz wszystkie nie zawsze jest
    //wiec musi byc if, sprawdzenie,czy jest
}


    const render = () => {
        renderTasks();
        renderButtons();
        bindingEvents();


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
        updatedTasks(newTaskContent);
        //koniec nowego
        //to trzeba jakos zastąpić, stare//koniec starego
        //
        cleanInputFocus(newTaskInput);
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };
    init();
};


