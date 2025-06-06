const buttons = document.getElementById("btn");
const input = document.getElementById("text");
const list = document.getElementById("list-items")
buttons.addEventListener("click",()=>{
    if(input.value !== ""){
        const li = document.createElement("li");
        list.appendChild(li);
        li.textContent = input.value;
        input.value = "";


        //remove button
        const removeBtn = document.createElement("remove");

        // Edit button
        const edit = document.createElement("Edit");
        li.appendChild(edit);
        edit.textContent = "Edit";

        edit.addEventListener("click",()=>{
        const editInput = document.createElement("input");
      
        //Save button
        const save = document.createElement("button");
        save.textContent = "Save";
        save.className = "remove";
        save.addEventListener("click",()=>{
        
        })
        console.log(li.children);
        const editInputValue = li.firstChild.textContent;
        console.log(editInputValue);
          edit.replaceWith(save);
        console.log(li.firstChild);
       
        li.replaceChild(editInput,li.firstChild);
        console.log(input.value);
        // editInput.setAttribute("value",editInput);
        editInput.value = editInputValue;


        
        console.log(editInput.value);
        li.appendChild(editInput);
        })
        li.appendChild(removeBtn);
        removeBtn.textContent = "Delete";
        removeBtn.addEventListener("click",()=>{
            li.remove();
           removeBtn.remove();
        });
        
     li.classList.toggle("highlight");
     removeBtn.classList.toggle("remove");
     
    }
})