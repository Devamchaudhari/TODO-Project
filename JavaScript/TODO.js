 //Selector tool
 const TodoAddInput = document.querySelector(".Add_New_Task");
 const TodoAddButton = document.querySelector(".Add_Task_Icon");
 const TodoList = document.querySelector(".Todo_list");
 const DeleteAllTask = document.querySelector(".Delete_All_Task")

 //Eventlistner
 TodoAddButton.addEventListener("click",addtodo);
 TodoList.addEventListener("click",DeleteTask);
 DeleteAllTask.addEventListener("click", DeleteAll);
 

 //function addtodo
 function addtodo(event) {
     //prevent form from submitting
     event.preventDefault();

     //todo section
     const todosection = document.createElement("section");
     todosection.classList.add("todo");

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
 }

 //function delete all task
 function DeleteAll(event) {
    document.querySelector('ul').innerHTML='';
 }
//  tasks = ["First Task"];
//  showTasks();

// function showTasks() {
//     sectionAddTask = document.getElementById("addTaskSection");
//     newSectionTag='';
//     tasks.forEach(element => {
//         newSectionTag = newSectionTag + `<section>
//         <input type="text"  id="First_Task_Name"  value=" ${element}" disabled></input>
//         <input id="Radiobut_Add3" type="radio" name="Add new task"></input>
//          <button class="Task_Delete_Icon_2"><img src="assests file/icon file/Iconly/Broken/Delete.png" alt="Delete Button"></button> 
//          <button class="Task_Edit_Icon_3"><img src="assests file/icon file/Iconly/Broken/Edit.png" alt="Delete Button"></button>
// </section>`
//     });
//     sectionAddTask.innerHTML = newSectionTag;

// }

