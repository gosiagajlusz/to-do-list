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
    onFormSubmit = (event) => {
        //coś w nawiasie zamiast event-konretniej 
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);
    };

    const addNewTask = () => {
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        tasks.push({
            content: newTaskContent,
        });
        render();
    };


    let render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `<li class="list__item ${task.done ? "list__item--done" : ""}">
            ${task.content}
    </li>`;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString
    };
    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };
    init();
};