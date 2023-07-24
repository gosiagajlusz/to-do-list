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
           <button class="js-remove">usuń</button>
            ${task.content}
    </li>`;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString
    };

    const removeButtons = document.querySelectorAll(".js-remove");
    console.log(removeButtons);
//on tu ma kolejny wąs zamykający- wysledzic co to za wąs

    // removeButtons.forEach((removeButton, index) => {
    //     removeButton.addEventListener("click", () => {
    //         tasks.splice(index, 1);
    //         render();
    //     });
    // });

    const addNewTask = () => {
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        tasks.push({
            content: newTaskContent,
        });
        render();
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
