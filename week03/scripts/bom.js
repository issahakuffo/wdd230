const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

// Display existing chapters from localStorage when the page loads
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Event listener for the button click
button.addEventListener("click", () => {
    if (input.value !== "") {  // make sure the input is not empty
        const chapter = input.value;
        displayList(chapter);  // call the function to output the submitted chapter
        chaptersArray.push(chapter);  // add the chapter to the array
        setChapterList();  // update localStorage with the new array
        input.value = "";  // clear the input
        input.focus();  // set the focus back to the input
    }
});

function displayList(chapter) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = chapter; // Add the chapter text
    deleteButton.textContent = "❌";  // Create the delete button with a ❌

    deleteButton.classList.add("delete");  // Add a class for CSS styling
    li.append(deleteButton);  // Append the delete button to the list item
    list.append(li);  // Append the list item to the list

    // Add event listener for the delete button
    deleteButton.addEventListener("click", () => {
        list.removeChild(li);  // Remove the list item from the DOM
        deleteChapter(chapter);  // Remove the chapter from the array and update localStorage
        input.focus();  // Set the focus back to the input field
    });
}

// Save chaptersArray to localStorage
function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// Retrieve chaptersArray from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

// Function to remove a chapter from chaptersArray and localStorage
function deleteChapter(chapter) {
    // Remove the last character (the ❌) from the chapter text if necessary
    chapter = chapter.slice(0, chapter.length - 1);

    // Filter out the deleted chapter from the array
    chaptersArray = chaptersArray.filter(item => item !== chapter);

    // Update the localStorage with the modified array
    setChapterList();
}