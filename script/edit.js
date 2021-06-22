let itemName = document.getElementById("itemName");
let quantity = document.getElementById("quantity");
let description = document.getElementById("description");
let category = document.getElementById("category");
let updateItem = document.getElementById("updateItem");
let localStorageItems = JSON.parse(localStorage.getItem("items"));
let itemClicked;
localStorageItems.forEach((item) =>{
    if(item.editClicked) {
        itemClicked = item;
    }
})

itemName.value = itemClicked.itemName;
quantity.value = itemClicked.quantity;
description.value = itemClicked.description;
category.value = itemClicked.category;

updateItem.addEventListener("click", () =>{
    // Create an item object
    itemClicked.itemName = itemName.value,
    itemClicked.quantity = quantity.value,
    itemClicked.description = description.value,
    itemClicked.category = category.value,
    itemClicked.editClicked = false

    localStorage.setItem("items", JSON.stringify(localStorageItems));
    window.location.href = "./addItem.html";
});