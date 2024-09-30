// const arr = [];
// const button = document.getElementById("Addbtn");

// button.addEventListener("click", function() {
//     const Taskcontainer = document.getElementById("container");
//     const inputTxt = document.getElementById("inputText").value.trim();
//     const formattedDate = currentDate.toLocaleDateString(); 
//     const formattedTime = currentDate.toLocaleTimeString();
//     if(inputTxt === ""){
//         window.alert("task cannot be empty");
//         return;

//     }

//     const createdDiv = document.createElement("div");
//     createdDiv.classList.add("creatd-div");
//     createdDiv.id = arr.length + 1;

//     const textSpan = document.createElement("span"); // Use a span for the task text

//     // Append the text span to the div
//     textSpan.textContent = inputTxt;
//     createdDiv.appendChild(textSpan); 

//     const dateTimeSpan=document.createElement("span");
//     dateTimeSpan=`created:${formattedDate} at ${formattedTime}`;
//     createdDiv.appendChild(dateTimeSpan);
    
    

//     const Edit = document.createElement("button");
//     Edit.classList.add("edit-btn");
//     Edit.textContent = "Edit";
//     createdDiv.appendChild(Edit);

//     const Delete = document.createElement("button");
//     Delete.classList.add("delete-btn");
//     Delete.textContent = "Delete";
//     createdDiv.appendChild(Delete);

//     Taskcontainer.appendChild(createdDiv);

//     // Edit button logic
//     Edit.addEventListener("click", function() {
//         if (Edit.textContent === "Edit") {
//             // Replace the span with an input field to allow editing
//             const inputField = document.createElement("input");
//             inputField.type = "text";
//             inputField.value = textSpan.textContent; // Pre-populate with existing text

//             createdDiv.replaceChild(inputField, textSpan); // Replace textSpan with inputField
//             createdDiv.removeChild(Delete);

//             Edit.textContent = "Save"; // Change "Edit" to "Save"
//         } else if (Edit.textContent === "Save") {
//             // Save the edited content and replace the input field with the updated text
//             textSpan.textContent = createdDiv.querySelector("input").value;
//             createdDiv.replaceChild(textSpan, createdDiv.querySelector("input")); // Replace input with updated span

//             Edit.textContent = "Edit"; // Change "Save" back to "Edit"
//             createdDiv.appendChild(Delete);
//         }
//     });

//     Delete.addEventListener("click",function(){
//         Taskcontainer.removeChild(createdDiv);
//     });

//     // Clear the input field
//     document.getElementById("inputText").value = "";
//     arr.push(createdDiv);
// });

const arr = [];
const button = document.getElementById("Addbtn");

button.addEventListener("click", function() {
    const Taskcontainer = document.getElementById("container");
    const inputTxt = document.getElementById("inputText").value.trim(); // Trim extra spaces

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
            // Replace the span with an input field to allow editing
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = textSpan.textContent; // Pre-populate with existing text

            createdDiv.replaceChild(inputField, textSpan); // Replace textSpan with inputField

            Edit.textContent = "Save"; // Change "Edit" to "Save"
        } else if (Edit.textContent === "Save") {
            // Save the edited content and replace the input field with the updated text
            textSpan.textContent = createdDiv.querySelector("input").value;
            const currentDate = new Date();
            const editDate = currentDate.toLocaleDateString(); // Format the date (e.g., 9/27/2024)
            const editTime = currentDate.toLocaleTimeString(); // Format the time (e.g., 2:34 PM)
            const editeddate = document.createElement("span");
            // editeddate.textContent = ` (Edited on: ${editDate} at ${editTime})`;
            dateSpan.textContent = ` (Added on: ${formattedDate} at ${formattedTime} Edited on: ${editDate} at ${editTime})`;
            createdDiv.appendChild(editeddate); // Append date and time
          



            createdDiv.replaceChild(textSpan, createdDiv.querySelector("input")); // Replace input with updated span


            Edit.textContent = "Edit"; // Change "Save" back to "Edit"
        }
    });


    Delete.addEventListener("click",function(){
        Taskcontainer.removeChild(createdDiv);
    });
        

    // Clear the input field
    document.getElementById("inputText").value = "";
    arr.push(createdDiv);
});
