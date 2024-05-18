const inputTasks = document.getElementById('input_tasks');
const items_ul = document.getElementById('items_ul');
const AddBtn = document.getElementById('AddBtn');

function add_task(){

    const task = inputTasks.value.trim();

    if (task === "") {
        alert('Please enter a task');
    }else{
        let LI = document.createElement('li');
        LI.innerHTML = inputTasks.value;
        items_ul.appendChild(LI);
        let div = document.createElement('div');
        div.classList = 'div_btn';
        LI.appendChild(div);
        let span1 = document.createElement('span');
        span1.classList = "Delete_btn"
        span1.innerHTML='Delete';
        div.appendChild(span1);
        let span2 = document.createElement('span');
        span2.classList = "Edit_btn";
        span2.innerHTML='Edit';
        div.appendChild(span2);
    }
    inputTasks.value = '';
}



items_ul.addEventListener('click' , (e)=>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
    }else if (e.target.classList.contains("Delete_btn")) {
        e.target.parentElement.parentElement.remove();
    }else if (e.target.classList.contains("Edit_btn")) {
        const taskElement = e.target.parentElement.parentElement;
        const taskTextElement = taskElement.firstChild;
        const taskText = taskTextElement.textContent;
        inputTasks.value = taskText;
        taskElement.remove();
}


})
// AddBtn.addEventListener('click' , add_task)

