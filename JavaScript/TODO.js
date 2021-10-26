 //Selector tool
 const TodoAddInput = document.querySelector(".Add_New_Task");
 const TodoSearch = document.querySelector(".search_task");
 const TodoAddButton = document.querySelector(".Add_Task_Icon");
 const TodoList = document.querySelector(".Todo_list");
 const Todoslist = document.querySelector(".Todo_slist");
 const DeleteAllTask = document.querySelector(".Delete_All_Task");
 const searchtask = document.querySelector(".Search_Icon");


 //Eventlistner
 TodoAddButton.addEventListener("click",addtodo);
 TodoList.addEventListener("click",DeleteTask);
 DeleteAllTask.addEventListener("click", DeleteAll);
 searchtask.addEventListener("click",findTODO);
 var todos = [];

//Search Task
function findTODO(event){
	event.preventDefault();
	for (const x of todos){
		if(x.localeCompare(TodoSearch.value) == 0){
			const todosection = document.createElement("section");
			 todosection.classList.add("todo");
             
			 const  newTodo = document.createElement('li');
			 newTodo.innerText = x;
			 newTodo.classList.add('todo_item');
			 todosection.appendChild(newTodo);

			 Todoslist.appendChild(todosection);
		}
	}
	TodoSearch.value="";
 }


 //function addtodo
 function addtodo(event) {
     //prevent form from submitting
     event.preventDefault();

     //todo section
     const todosection = document.createElement("section");
     todosection.classList.add("todo");

	 //ADD DATA TO Array
	 todos.push(TodoAddInput.value);
	 
     //Create li
     const  newTodo = document.createElement('li');
     newTodo.innerText = TodoAddInput.value;
     newTodo.classList.add('todo_item');
     todosection.appendChild(newTodo);
    
     //Check Mark button
     const completedTask = document.createElement('button');
     completedTask.innerHTML = '<i class="fas fa-check"></i>'
     completedTask.classList.add("completed_but");
     todosection.appendChild(completedTask);

     
     //Edit task button
     const EditTask = document.createElement('button');
     EditTask.innerHTML = '<i class="fas fa-pen-square"></i>'
     EditTask.classList.add("Edit_but");
     todosection.appendChild(EditTask);

     
     //Delete task button
     const DeleteTask = document.createElement('button');
     DeleteTask.innerHTML = '<i class="fas fa-trash"></i>'
     DeleteTask.classList.add("Delete_but");
     todosection.appendChild(DeleteTask);

     //Append todolist
     TodoList.appendChild(todosection);

     //clear value
     TodoAddInput.value="";
 }


 //function delete task
 function DeleteTask(event) {
     const item = event.target;
     //delete task
     if (item.classList[0]=== "Delete_but") {
         const todo = item.parentElement;
         todo.remove();
     }
    //completed task check
     if (item.classList[0] ==="completed_but" ){
         const todo = item.parentElement;
         todo.classList.toggle("checked");
     }
     //Edit task
        if (item.classList[0]==="Edit_but") {
            const todosection = item.parentElement;
            todosection.innerHTML ='';
            var a = prompt("Change task value");
            if (a !=null) {
                todosection.classList.add("todo");

                //Create li
                const  newTodo = document.createElement('li');
                newTodo.innerText = a;
                newTodo.classList.add('todo_item');
                todosection.appendChild(newTodo);

                //Check Mark button
                const completedTask = document.createElement('button');
                completedTask.innerHTML = '<i class="fas fa-check"></i>'
                completedTask.classList.add("completed_but");
                todosection.appendChild(completedTask);

                
                //Edit task button
                const EditTask = document.createElement('button');
                EditTask.innerHTML = '<i class="fas fa-pen-square"></i>'
                EditTask.classList.add("Edit_but");
                todosection.appendChild(EditTask);

                
                //Delete task button
                const DeleteTask = document.createElement('button');
                DeleteTask.innerHTML = '<i class="fas fa-trash"></i>'
                DeleteTask.classList.add("Delete_but");
                todosection.appendChild(DeleteTask);
                            
            }
        }
 }

 //function delete all task
 function DeleteAll(event) {
    document.querySelector('.Todo_list').innerHTML='';
 }