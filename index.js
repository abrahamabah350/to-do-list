// index.js

// Selecting elements from the DOM
let displayList = document.querySelector(".display-list");
let textarea = document.querySelector("textarea");
let date = document.querySelector(".date");

// Function to display the current date
function showDate(element) {
    let todayDate = new Date();
    let day = todayDate.getDate();
    let month = todayDate.getMonth() + 1;
    let year = todayDate.getFullYear();
    let dateMessage = (day < 10 ? "0":"") + day + "/" + (month < 10 ? "0":"") + month + "/" + year;
    element.textContent = dateMessage;
}

showDate(date);

// Event listener for Enter key to add items to the to-do list
document.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        event.preventDefault();

        if (textarea.value.trim() !== "") {
            // Creating HTML elements for a to-do list item
            let textCheckContainer = document.createElement("div");
            textCheckContainer.classList.add("text-check-container");

            let checkBoxContainer = document.createElement("div");
            checkBoxContainer.classList.add("check-box-container");

            let checkMark = document.createElement("p");
            checkMark.textContent = "\u2713"; // Unicode check mark character
            checkMark.classList.add("check-mark");

            let listItem = document.createElement("p");
            listItem.classList.add("list-item");
            listItem.textContent = textarea.value;

            // Appending elements to create the structure
            checkBoxContainer.appendChild(checkMark);
            textCheckContainer.appendChild(checkBoxContainer);
            textCheckContainer.appendChild(listItem);

            // Clearing the textarea after adding an item
            textarea.value = "";

            // Appending the new to-do list item to the display list
            displayList.appendChild(textCheckContainer);
        }

        // Selecting all check-mark elements and applying the showCheck function
        let check = document.querySelectorAll(".check-mark");
        showCheck(check);
    }
});

// Function to toggle the visibility of the check mark on click
function showCheck(element) {
    element.forEach((item) => {
        item.addEventListener("click", function() {
            item.classList.toggle("show-check-mark");
        });
    });
}