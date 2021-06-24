let statusFunction = (quantity) =>{
    if(quantity == 0){
        return "outOfStock";
    }else if(quantity >= 1 && quantity <= 20){
        return "betweenTwenty";
    }else{
        return "aboveTwenty";
    }
}

const allItems = () => {
    let tnp = document.getElementById('tnp');
    tnp.innerText = JSON.parse(localStorage.items).length;
  
}
allItems()

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
                <td><div class="status ${statusFunction(localStorageItems[i].quantity)}"></div></td>
               
            </tr>
        
        `
        }
        itemsHolder.innerHTML = htmlFragment;
    }
    allItems()

}
renderTable();


