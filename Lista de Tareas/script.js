//Fechas

const dateNumber = document.getElementById('dateNumber');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
const dateText = document.getElementById('dateText');

//Task Container -> Donde van a ir todas las tareas
const taskContainer = document.getElementById('taskContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'long' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
    console.log(dateMonth.textContent + " " + dateYear.textContent);
};


const addNewTask = event => {
    event.preventDefault(); // En este caso previene que se envie la informacion al darle al boton submit
    const { value } = event.target.taskText; //Obtenemos el valor que tiene el input
    if (!value) return; //Si no ingreso nada no hace nada
    const task = document.createElement('div'); //Creamos un elemento div
    task.classList.add('task', 'roundBorder'); //Agregamos un par de clases a task
    task.addEventListener('click', changeTaskState) //Cuando hagamos click llemamos a la funcion change..() y cambiamos el estado de la tarea
    task.textContent = value; //Guardamos el texto que ingreso el usuario dentro del elemento
    taskContainer.prepend(task); //prepend() para que se agregue siempre como primero de la lista
    event.target.reset(); //Resetamos la form para que nos quede vacio el input
};

const changeTaskState = event => {
    event.target.classList.toggle('done'); //Si no tiene la clase done se agrega y si la tiene se saca
}

const order = () => {
    const done = [];
    const toDo = [];
     
    taskContainer.childNodes.forEach ( x => { //Dentro del elemento taskContainer iteramos entre sus hijos que son las tareas 
        if(x.classList.contains('´done')){ //Preguntamos si la tarea contiene la clase 'done'
            done.push(x); //En caso de ser asi lo agregamos al array done
        } //push(x) lo que hace es agregar el elemento al final del array
        else {
            toDo.push(x);//En caso contrario lo agregamos al array toDo
        }
    })
    return [...toDo, ...done]; //Enviamos primero el array con las tareas por hacer y despues el array con las tareas completadas
}

const renderOrderedTasks = () => {
    order().forEach(x => taskContainer.appendChild(x));
}

setDate();