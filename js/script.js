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

    };
    init();

}