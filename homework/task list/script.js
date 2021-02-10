/*
        
You are about to create your own Task List.
The user might be able to:
- Create new tasks by writing them in a text box and pressing a button to add them
- Mark a task as completed by clicking on it. The element should look different when completed
- Restore a completed task by clicking on it. 
- Have a checkbox to show only "non-completed" tasks
- Add a button to clear the list


Hints:
- Create the list elements using the createElement function
- Add the event to them and pass the event to the function that should handle it
- Rememeber that from the event you can access to the element that generated it using the .target property

*/
//function addTask() {
// read the content of text-box
// let taskText = document.querySelector("#text-box").value
//create a new li under the ul list-items
//let list = document.querySelector(".list-items")
//list.innerHTML += "<li>" + taskText + "</li>"
window.onload = function () {
  
  let list = document.querySelector(".list-items");
  
  document.querySelector("#button").addEventListener("click", addTask);
  let completedTask = document.querySelectorAll(".completed-task");
  checkbox = document.querySelector('input[id="non-completed"]');

  function addTask() {
    
    let listItem = document.createElement("li");
    listItem.classList.add("task");
    listItem.innerHTML = document.querySelector("#text-box").value;
    document.querySelector("#text-box").value = '';
    list.appendChild(listItem);
    listItem.insertAdjacentHTML('afterbegin',"<input type=checkbox class='selector'>")
    listItem.insertAdjacentHTML('afterend',"</input>")
    listItem.addEventListener("click", (event) => {
      listItem.classList.toggle("completed-task");
      if (checkbox.checked) {
        event.currentTarget.style.display = "none";
      }
      
    });

    checkbox.addEventListener("change", function hideCompleted() {
      let completedTask = document.querySelectorAll(".completed-task");

      for (i = 0; i < completedTask.length; i++) {
        if (checkbox.checked) {
          completedTask[i].style.display = "none";
        } else {
            completedTask[i].style.display = "block";
        }
      }
    });
    document.querySelector("#clear-list").addEventListener("click", () =>{
        
        document.querySelectorAll(".list-items").forEach(item => item.parentNode.removeChild(item))
        
    })
  }
};
