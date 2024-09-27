document.getElementById("btn").addEventListener("click",function(){
    const container=document.getElementById("container");
    const inputText=document.getElementById("input");
    const createdDiv=document.createElement("div");
    createdDiv.classList.add("task-div");
    createdDiv.textContent=inputText.value;
    const Edit=document.createElement("button");
    Edit.id="edit";
    Edit.textContent="Edit";
    const Delete=document.createElement("button");
    Delete.id="delete";
    Delete.textContent="Delete";
    createdDiv.appendChild(Edit);
    createdDiv.appendChild(Delete);
    container.appendChild(createdDiv);
    document.getElementById("input").value=" ";
    



});

function getButton(){
    
    
    return Edit;
    return Delete;
}