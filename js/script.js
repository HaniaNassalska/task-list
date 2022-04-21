{
    const tasks = [
       
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
        const doneToggleButtons = document.querySelectorAll(".js-buttonDone");
        const doneButton = document.querySelector(".button__done");

        doneToggleButtons.forEach((doneToggleButton, index) => {
            doneToggleButton.addEventListener("click", () => {
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
            

            <li 
            class="taskList__item" 
            >
            <button class="js-buttonDone button__done" ${task.done ? "alt=\"Zadanie zrealizowane\"" : "alt=\"Zadanie niezrealizowane\""}>${task.done ? "✔" : ""}</button>

            <span class="${task.done ? "tasks__content--done" : ""}"  >${task.content}</span>
           <button class="js-buttonRemove button__remove" alt="Usuń zadanie">🗑</button></div>
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