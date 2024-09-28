const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list"); // Corrected to select by id

button.addEventListener("click", function () {
    if (input.value != "") {
        const li = document.createElement("li"); // Create a new 'li' element
        const deleteButton = document.createElement("button"); // Create a new 'button' element
        li.textContent = input.value;
        deleteButton.textContent = "❌";

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        // Clear the input and refocus
        input.value = "";
        input.focus();
    }
});