// Select the textarea element from the DOM
let textarea = document.querySelector("textarea");

// Select the section where the list will be displayed from the DOM
let listDisplaySection = document.querySelector(".list-display");

// Function to create a new to-do list item
function newElement() {
    // Create a container for the list item
    let listContainer = document.createElement("div");
    listContainer.classList.add("list-elements-container");

    // Create a container for the checkbox and the to-do item
    let listBoxContainer = document.createElement("div");
    listBoxContainer.classList.add("box-list-container");

    // Create a div for the checkbox
    let checkBox = document.createElement("div");
    checkBox.classList.add("check-box");

    // Create a paragraph element for the checkbox icon
    let check = document.createElement("p");
    check.classList.add("check");
    check.textContent = "\u2713";

    // Create a paragraph element for the to-do item
    let toDoItem = document.createElement("p");

    // Create a del element for the crossed-out to-do item (completed task)
    let crossTheList = document.createElement("del");
    crossTheList.textContent = textarea.value;
    crossTheList.classList.add("cross-the-list");

    // Create a span element for the to-do item text
    let item = document.createElement("span");
    item.classList.add("item");
    item.textContent = textarea.value;

    // Create a paragraph element for the delete button
    let cancel = document.createElement("p");
    cancel.classList.add("delete");
    cancel.textContent = "\u2717";
    
    // Append the checkbox icon to the checkbox container
    checkBox.appendChild(check);

    // Append the crossed-out to-do item and the to-do item text to the to-do item container
    toDoItem.appendChild(crossTheList);
    toDoItem.appendChild(item);

    // Append the checkbox container and the to-do item container to the main list container
    listBoxContainer.appendChild(checkBox);
    listBoxContainer.appendChild(toDoItem);

    // Append the main list container and the delete button to the list display section
    listContainer.appendChild(listBoxContainer);
    listContainer.appendChild(cancel);

    // Append the newly created list item to the list display section

    listDisplaySection.appendChild(listContainer);

    // Clear the textarea after adding the task
    textarea.value = "";
}

// Function to toggle the visibility of completed tasks
function changeVisibility() {
    // Listen for click events on the list display section
    listDisplaySection.addEventListener("click", function(event) {
        // Find the closest list container element
        let container = event.target.closest(".list-elements-container");

        // If a list container is found
        if (container) {
            // Toggle the visibility of the crossed-out to-do item
            let crossList = container.querySelector(".cross-the-list");
            if (crossList) {
                crossList.classList.toggle("show-cross-the-list");
            }

            // Toggle the visibility of the to-do item text
            let listItem = container.querySelector(".item");
            if (listItem) {
                listItem.classList.toggle("hide-item");
            }

            // Toggle the visibility of the checkbox icon
            let checkBoxContainer = container.querySelector(".check-box");
            if (checkBoxContainer) {
                let checkIcon = checkBoxContainer.querySelector(".check");
                checkIcon.classList.toggle("show-check");
            }
        }
    });
}

// Function to delete a list item
function deleteList() {
    // Listen for click events on the list display section
    listDisplaySection.addEventListener("click", function(event) {
        // If the delete button is clicked
        if (event.target.classList.contains("delete")) {
            // Remove the parent node of the delete button (the list container)
            event.target.parentNode.remove();
        }
    });
}

// Listen for keydown events on the entire document
document.addEventListener("keydown", function(event) {
    // If the Enter key is pressed
    if (event.key == "Enter") {
        event.preventDefault(); // Prevent the default behavior (form submission or new line in textarea)

        // If the textarea is not empty
        if (textarea.value.trim() != "") {
            // Add a new to-do item
            newElement();
            // Delete the clicked list item if the delete button is clicked
            deleteList();
        }
    }
});

// Call the function to toggle the visibility of completed tasks
changeVisibility();