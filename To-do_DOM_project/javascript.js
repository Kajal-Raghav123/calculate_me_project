// Getting the input value
const getInput = document.getElementById("text");
const btn = document.getElementById("button");
const list = document.getElementById("list-items");

// when click on add button getting the input value
btn.addEventListener("click", () => {
  const userInput = getInput.value;

  if (userInput !== "") {
    // creating a new li element
    const li = document.createElement("li");
    li.className = "li-item";
    const textSpan = document.createElement("span");
    textSpan.textContent = userInput;
    li.appendChild(textSpan);

    //  adding li in ul list
    list.appendChild(li);

    // creating checkbox-button
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.className = "checkbox";
    li.appendChild(checkBox);
    checkBox.addEventListener("click", () => {
      if (checkBox.checked) {
        li.firstElementChild.style.textDecoration = "line-through";
      } else {
        li.firstElementChild.style.textDecoration = "none";
      }
    });

    //    creating a edit button
    const editButton = document.createElement("button");
    editButton.innerHTML = "&#9998; ";
    editButton.className = "btn edit-tn";
    li.appendChild(editButton);

    // Editbutton is clicked
    editButton.addEventListener("click", () => {
      // creating a save button
      const saveButton = document.createElement("button");
      saveButton.className = "btn save-btn";
      saveButton.innerHTML = "&#128190;";
      editButton.replaceWith(saveButton);

      // Creating the input to edit
      const editUserInput = document.createElement("input");
      editUserInput.placeholder = "Edit the text!";
      editUserInput.className = "editinput";
      li.firstElementChild.replaceWith(editUserInput);

      // when click on save button
      saveButton.addEventListener("click", () => {
        const editValue = editUserInput.value;

        const newSpan = document.createElement("span");
        newSpan.textContent = editValue;
        console.log(editUserInput);

        // Replace input with updated span
        editUserInput.replaceWith(newSpan);

        // Replace save button with edit button again
        saveButton.replaceWith(editButton);
      });
    });

    //    Creating delete button(
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&#128465;";
    deleteButton.className = "btn delete-btn";
    li.appendChild(deleteButton);

    // when click on deletebutton
    deleteButton.addEventListener("click", () => {
      li.remove();
    });
  }
});
