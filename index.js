//Select elements from the DOM
let textarea = document.querySelector("textarea");
let listDisplaySection = document.querySelector(".list-display");

//Create a function that creates a new Div

function newElement() {
    let listContainer = document.createElement("div");
    listContainer.classList.add("list-elements-container");

    let listBoxContainer = document.createElement("div");
    listBoxContainer.classList.add("box-list-container");

    let checkBox = document.createElement("div");
    checkBox.classList.add("check-box");

    let check = document.createElement("p");
    check.classList.add("check");
    check.textContent = "\u2713";

    let toDoItem = document.createElement("p");

    let crossTheList = document.createElement("del");
    crossTheList.textContent = textarea.value;
    crossTheList.classList.add("cross-the-list");

    let item = document.createElement("span");
    item.classList.add("item");
    item.textContent = textarea.value;

    let cancel = document.createElement("p");
    cancel.classList.add("delete");
    cancel.textContent = "\u2717";
    
    
    checkBox.appendChild(check);

    toDoItem.appendChild(crossTheList);
    toDoItem.appendChild(item);

    listBoxContainer.appendChild(checkBox);
    listBoxContainer.appendChild(toDoItem);

    listContainer.appendChild(listBoxContainer);
    listContainer.appendChild(cancel);

    listDisplaySection.appendChild(listContainer);

    textarea.value = "";
}

//Add the user's to do item on the "Enter" keydown event
document.addEventListener("keydown", function(event) {
    if (event.key == "Enter") { //Listen for the "Enter" keydown event.
        event.preventDefault(); //If there is an "Enter" keydown, we will check to see if the textarea is empty.
        if (textarea.value.trim() != "") {
            newElement();
            deleteList();
            changeVisibility();
        }
    }
});

//Create a function that changes the visibility of check (i.e the check mark)
function changeVisibility() {
    listDisplaySection.addEventListener("click", function(event) {
        if(event.target.classList.contains("check")){ //Use event delegation
            event.target.classList.toggle("show-check");
        }

        let container = event.target.closest(".list-elements-container");

        if (container) {
            let crossList = container.querySelector(".cross-the-list");
            if (crossList) {
                crossList.classList.toggle("show-cross-the-list");
            }

            let listItem = container.querySelector(".item");
            if (listItem) {
                listItem.classList.toggle("hide-item");
            }
        }
    });
}

function deleteList() {
    listDisplaySection.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete")) {
            event.target.parentNode.remove();
        }
    });
}