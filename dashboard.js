const taskList = document.getElementById("taskList");

function addTask(){

    const taskInput = document.getElementById("taskInput");

    if(taskInput.value===""){
        alert("Enter Task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${taskInput.value}
        <div>
            <button onclick="completeTask(this)">✓</button>
            <button onclick="deleteTask(this)">✕</button>
        </div>
    `;

    taskList.appendChild(li);

    taskInput.value="";
}

function completeTask(btn){

    const confirmTask = confirm(
        "Are you sure task completed?"
    );

    if(confirmTask){
        btn.parentElement.parentElement.classList.add(
            "completed"
        );
    }
}

function deleteTask(btn){

    btn.parentElement.parentElement.remove();
}