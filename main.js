
const arr = [];
const button = document.getElementById("Addbtn");
const check=[];
let unique=[];

button.addEventListener("click", function() {
    const Taskcontainer = document.getElementById("container");
    const inputTxt = document.getElementById("inputText").value.trim(); // Trim extra spaces
    const deleteAllButton=document.getElementById("deleteAll");


    // Check if the input is empty
    if (inputTxt === "") {
        alert("Task cannot be empty!");
        return; // Exit the function if input is empty
    }

    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(); // Format the date (e.g., 9/27/2024)
    const formattedTime = currentDate.toLocaleTimeString(); // Format the time (e.g., 2:34 PM)

    // Create the div for the task
    const createdDiv = document.createElement("div");
    createdDiv.classList.add("creatd-div");
    createdDiv.id = arr.length + 1;

    //check box for delete
    const checkBox=document.createElement("input");
    checkBox.type="checkbox"
    checkBox.id=createdDiv.id;
    checkBox.classList.add("check-box");
    checkBox.name="boxes";
    createdDiv.appendChild(checkBox);


    // Create the task text span
    const textSpan = document.createElement("span");
    textSpan.textContent = inputTxt;
    createdDiv.appendChild(textSpan);

    // Create the date and time span
    const dateSpan = document.createElement("span");
    dateSpan.classList.add("date-span");
    dateSpan.textContent = ` (Added on: ${formattedDate} at ${formattedTime})`;
    createdDiv.appendChild(dateSpan); // Append date and time

    // Create Edit button
    const Edit = document.createElement("button");
    Edit.classList.add("edit-btn");
    Edit.textContent = "Edit";
    createdDiv.appendChild(Edit);

    // Create Delete button
    const Delete = document.createElement("button");
    Delete.classList.add("delete-btn");
    Delete.textContent = "Delete";
    createdDiv.appendChild(Delete);

    // Append the created div to the task container
    Taskcontainer.appendChild(createdDiv);

    // Edit button logic
    Edit.addEventListener("click", function() {
        if (Edit.textContent === "Edit") {
            createdDiv.removeChild(checkBox);
            createdDiv.removeChild(Delete);
            // Replace the span with an input field to allow editing
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = textSpan.textContent; // Pre-populate with existing text

            createdDiv.replaceChild(inputField, textSpan); // Replace textSpan with inputField

            Edit.textContent = "Save"; // Change "Edit" to "Save"
        } else if (Edit.textContent === "Save") {
            // Save the edited content and replace the input field with the updated text
            textSpan.textContent = createdDiv.querySelector("input").value;
            createdDiv.replaceChild(textSpan, createdDiv.querySelector("input")); // Replace input with updated span

            const currentDate = new Date();
            const editDate = currentDate.toLocaleDateString(); // Format the date (e.g., 9/27/2024)
            const editTime = currentDate.toLocaleTimeString(); // Format the time (e.g., 2:34 PM)
            const editeddate = document.createElement("span");
            // editeddate.textContent = ` (Edited on: ${editDate} at ${editTime})`;
            dateSpan.textContent = ` (Added on: ${formattedDate} at ${formattedTime} || Edited on: ${editDate} at ${editTime})`;
            createdDiv.appendChild(editeddate); // Append date and time
            createdDiv.appendChild(Delete);
            createdDiv.appendChild(checkBox);

            Edit.textContent = "Edit"; // Change "Save" back to "Edit"
        }
    });


    Delete.addEventListener("click",function(){
        Taskcontainer.removeChild(createdDiv);
    });

     // Clear the input field
    document.getElementById("inputText").value = "";

    checkBox.addEventListener("click",function(event){
        const checkboxes = document.querySelectorAll('input[name="boxes"]:checked');
        checkboxes.forEach((checkBox)=>{
        check.push(checkBox.id);
        unique=[...new Set(check)];
        //console.log(uniqueele);
        //unique.push(uniqueele);
        console.log(unique);
        
    });

    });

    

    deleteAllButton.addEventListener("click",function(){
        console.log(Taskcontainer.createdDiv.id);
    });

        

    
    
    
    arr.push(createdDiv);
});
