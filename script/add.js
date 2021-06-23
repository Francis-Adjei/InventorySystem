const addItemBtn = document.getElementById("addItem");
const clearFunction = () => {
    // Get all input fields
    const itemName = document.getElementById("itemName");
    const quantity = document.getElementById("quantity");
    const description = document.getElementById("description");
    const category = document.getElementById("category");

    itemName.value = "",
    quantity.value = "";
    description.value = "";
    category.value = "";

}
let validationChecks = (itemName, quantity, description, category) => {
   
    if(itemName.value == ""){

        return {message: "Please fill the item name", checked: false}

    }else if(quantity.value == ""){ 

        return {message: "Please fill the quantity", checked: false};

    }else if(isNaN(quantity.value)){ 

        return {message: "Please enter a valid input for quantity", checked: false}

    }else if(description.value == ""){

        return {message: "Please fill the description", checked: false}

    }else if(category.value == ""){

        return {message: "Please fill the category", checked: false};

    }else{
        return {message: "", checked: true};
    }

   
}

let renderTable = () =>{
    let localStorageItems = JSON.parse(localStorage.getItem("items"));
    if(localStorageItems){
        const itemsHolder = document.getElementById("items");
        let htmlFragment = "";
        for (let i = 0; i < localStorageItems.length; i++) {
            htmlFragment += `
            <tr>
                <td>${i + 1}</td>
                <td>${localStorageItems[i].itemName}</td>
                <td>${localStorageItems[i].description}</td>
                <td>${localStorageItems[i].category}</td>
                <td>${localStorageItems[i].quantity}</td>
                <td>
                    <span>
                    <a href="update.html" onclick="editClicked(${i});"><i class="fa fa-edit"></i></a>
                    </span>
                <span>
                    <a onclick="deleteItem(${i})"><i class="fa fa-trash"></i></a>
                </span>
                </td>
    
            </tr>
        
        `
        }
        itemsHolder.innerHTML = htmlFragment;
    }


}

const editClicked = (index) =>{
    let localStorageItems = JSON.parse(localStorage.getItem("items"));
    localStorageItems[index].editClicked = true;
    localStorage.setItem("items", JSON.stringify(localStorageItems));
}

// deleting an item
const deleteItem = (itemIndex) =>{
    console.log(itemIndex)
    let localStorageItems = JSON.parse(localStorage.getItem("items"));
    localStorageItems = localStorageItems.filter((item, index) =>{
        return itemIndex != index
    })
    localStorage.setItem("items", JSON.stringify(localStorageItems));
    renderTable();
}

addItemBtn.addEventListener("click", () => {
   
    // Get all input fields
    const itemName = document.getElementById("itemName");
    const quantity = document.getElementById("quantity");
    const description = document.getElementById("description");
    const category = document.getElementById("category");
    let {message, checked} = validationChecks(itemName, quantity, description, category);
    if(checked){
         // Create an item object
        let item = {
            itemName: itemName.value,
            quantity: quantity.value,
            description: description.value,
            category: category.value,
            editClicked: false
        }
        if(localStorage.getItem("items")){
            const localItem = JSON.parse(localStorage.getItem("items"));
            localItem.push(item);

            localStorage.setItem("items", JSON.stringify(localItem));
        }else{
            let itemArray = [item];
            localStorage.setItem("items", JSON.stringify(itemArray));
        }


        
        renderTable();
        clearFunction();
    }else{
        alert(message);
    }



});


renderTable();



