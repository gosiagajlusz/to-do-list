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
        const addNewTask = () => {
            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            //dlaczego u mnie musi być tutaj tez a nie tylko w bloku, gdzie wywołuję ją?
            tasks.push({
                content: newTaskContent,
            });
            render();
        };

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            if (newTaskContent === "") {
                return;
            }
            addNewTask(newTaskContent);
        });
    };


    init();

};