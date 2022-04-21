{
    const tasks = [
        {
            content: "test",
            done: true,
        },
        {
            content: "test",
            done: false,
        },
    ];
    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    };
    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    };
    const bindsEvent = () =>{
        const removeButtons = document.querySelectorAll(".js-buttonRemove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
        const doneTogleButtons = document.querySelectorAll(".js-buttonDone");
        doneTogleButtons.forEach((doneTogleButton, index) => {
            doneTogleButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === ``) {
            return;
        }
        addNewTask(newTaskContent);
    };
    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
            

            <li ${task.done ? " style=\"text-decoration: line-through\"" : ""}
            >
            <button class="js-buttonDone">Zrobione?</button>

            ${task.content}
            <button class="js-buttonRemove">Usuń</button>
            </li>
            `;
        }
        document.querySelector(".js-taskList").innerHTML = htmlString;

        bindsEvent();
    };
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };
  
    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };
    init();
}