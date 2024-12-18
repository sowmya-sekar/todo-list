function addtodo(){
    var todoinput=document.getElementById("todo-input");
    var todotext=todoinput.value;
    if(todotext !==""){
        var li=document.createElement("li");
        li.textContent=todotext;
        var deleteButton=document.createElement("button");
        deleteButton.textContent="delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick=function(){
            li.remove();
        };
    li.appendChild(deleteButton);
    document.getElementById("todo-list").appendChild(li);
    todoinput.value="";
    }
    else{
        alert("please enter task");
        
    }
}