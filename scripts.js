let button = document.querySelector('.button-add-task');
let input = document.querySelector('.input-task');
let listTask = document.querySelector('.list-task');

let listaItens = [];

function addTasklist() {
    if(listaItens == ''){
        alert("Tem que adicionar alguma tarefa. PORRA")
    }
    listaItens.push({
        task: input.value,
        conclude: false
    })
    input.value = ''

    showTask()
};

function showTask() {
    let novaLi = ''

    listaItens.forEach((task, i) => {
        novaLi = novaLi + `<li class="task ${task.conclude && "done"}">
                <img src="./img/checked.png" alt="check-na-tarefa" onclick="concludeTask(${i})">
                <p>${task.task}</p>
                <img src="./img/trash.png" alt="tarefa-finalizada" onclick="deletIten(${i})">
                </li>`
    })
    listTask.innerHTML = novaLi

    localStorage.setItem('list', JSON.stringify(listaItens))
};

function concludeTask(i) {
    listaItens[i].conclude = !listaItens[i].conclude
    console.log("Funfa")
    showTask()
}

function deletIten(i) {
    listaItens.splice(i, 1)
    console.log(i)
    showTask()
}

function reloadTask() {
    let saveStorage = localStorage.getItem('list')
    if (saveStorage) {
        listaItens = JSON.parse(saveStorage)
    }
    console.log(saveStorage)
    showTask()
}

reloadTask()
button.addEventListener('click', addTasklist);