let trashBox = document.querySelector("#trashBox");
let search = document.getElementById("search");
let bagla = document.querySelector("#close");
let trash = document.querySelector("#trash");
let input = document.querySelector("input");
let add = document.getElementById("add");

let todo = [];

add.onclick = function () {
    let task = input.value;

    if(input.value != '') {
        todo.push(task)
        let div = document.createElement("div");
        div.innerHTML += `
        <p>${task}</p>
        <div class="t-center">                        
                <button onclick="check(this)"><i class="fas fa-check"></i></button>
                <button onclick="addTrash(this)"><i class="fas fa-trash"></i></button>
                <button onclick="addWaiting(this)"><i class="fas fa-ellipsis-h"></i></button>
            </div>`
        document.getElementById("willDo").appendChild(div);
        div.classList.add("j-between");
        input.value = '';
    }
    else alert("Fill the input") 
}
function check(e) { 
    let div = document.createElement("div");
    
    div.innerHTML += `
        <p>${e.parentNode.parentNode.querySelector("p").innerHTML}</p>
        <div class="t-center">                        
            <button onclick="addTrash(this)""><i class="fas fa-trash"></i></button>
        </div>`
    
    document.getElementById("done").appendChild(div);
    div.classList.add("j-between");
    e.parentNode.parentNode.remove();
}

function addWaiting(e) {
    let div = document.createElement("div");
    
    div.innerHTML += `
        <p>${e.parentNode.parentNode.querySelector("p").innerHTML}</p>
        <div class="t-center">                        
            <button onclick="check(this)"><i class="fas fa-check"></i></button>
            <button onclick="addTrash(this)"><i class="fas fa-trash"></i></button>
        </div>`
    
        document.getElementById("doing").appendChild(div);
    div.classList.add("j-between");
    e.parentNode.parentNode.remove();
}

function addTrash(e){ 
    let div = document.createElement("div");
    
    div.innerHTML += `
        <p>${e.parentNode.parentNode.querySelector("p").innerHTML}</p>
        <div class="t-center">                        
            <button onclick="check(this)"><i class="fas fa-undo"></i></button>
        </div>`
    
    document.getElementById("trashBox").appendChild(div);
    div.classList.add("j-between");
    e.parentNode.parentNode.remove();    
}

bagla.onclick = function(){ trashBox.classList.remove("active") }
trash.onclick = function(){ trashBox.classList.toggle("active") }

search.onclick = function() {
    let item = input.value.toLowerCase();
    let newItem = todo.filter(i => i.toLowerCase().includes(item));
    console.log(newItem);
}