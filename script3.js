document.querySelector('#add').onclick = function(){

    if(document.querySelector('#taakinvoer input').value.length == 0){
        alert( "voer een taak in")
    }
    else{
        document.querySelector('#takenlijst').innerHTML
        +=`<div class="takenlijst"><span id="taskname">${document.querySelector('#taakinvoer input').value}</span>
        <button class="delete">X</button>
        </div>`;


        let current_tasks = document.querySelectorAll('.delete')

for (let i=0; i<current_tasks.length; i++){
    current_tasks[i].onclick = function(){
        this.parentNode.remove()
    }
}


let tasks = document.querySelectorAll('#taskname')

for (let i=0; i< tasks.length; i++){
    tasks[i].onclick = function(){
        this.classList.toggle('completed')
    }
}

document.querySelector("#taakinvoer input").value = "";

    }
}
