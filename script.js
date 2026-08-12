const add_btn = document.querySelector(".add_button");
const remove_btn = document.querySelector(".remove_button");
const ul_list = document.querySelector(".ul_task_list");

const add_task = (() => {

    const new_task = document.createElement("div")
    const li_list_element = document.createElement("li")
    const label_list_element = document.createElement("label")
    const input_list_element = document.createElement("input")

    input_list_element.type = "checkbox";
    input_list_element.id = "newTask_id";
    input_list_element.classList.add("newTask_input");
    label_list_element.textContent = "New Task";
    label_list_element.htmlFor = "newTask_id";
    label_list_element.classList.add("newTask_label");

    new_task.appendChild(li_list_element);
    new_task.appendChild(label_list_element);
    new_task.appendChild(input_list_element);

    ul_list.appendChild(new_task);

});

const remove_task = () => {
    const last_task = ul_list.lastElementChild;
    if (last_task) {
        last_task.remove();
    }
}

add_btn.addEventListener('click', add_task);
remove_btn.addEventListener('click', remove_task);