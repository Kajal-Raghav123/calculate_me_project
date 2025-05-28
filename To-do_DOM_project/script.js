const buttons = document.getElementById("btn");
const input = document.getElementById("text");
const list = document.getElementById("list-items")
buttons.addEventListener("click",()=>{
    if(input.value !== ""){
        const li = document.createElement("li");
        list.appendChild(li);
        li.textContent = input.value;
        input.value = "";
        const removeBtn = document.createElement("remove");
        li.appendChild(removeBtn);
        removeBtn.textContent = "Delete";
        removeBtn.addEventListener("click",()=>{
            li.remove();
        });
        
     li.classList.toggle("highlight");
     removeBtn.classList.toggle("remove");
     
    }
})