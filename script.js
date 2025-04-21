// let inventory = JSON.parse(localStorage.getItem("inventory")) || {
//     "bcw-e-horror": 40,
//     "4-way-split": 3,
//     "masquemortuaire": 9,
// };

// function saveInventory() {
//     localStorage.setItem("inventory", JSON.stringify(inventory));
// }

// Load or initialize basket
let basket = JSON.parse(localStorage.getItem("basket")) || [];

function saveBasket() {
    localStorage.setItem("basket", JSON.stringify(basket));
}



function addToBasket(button) {
    const release = button.closest(".release-item");
    const id = release.dataset.id;
    const artist = release.dataset.artist;
    const title = release.dataset.title;
    const format = release.dataset.format;
    const price = release.dataset.price;  

    const itemDescription = `${artist} - ${title} (${format}) - ${price}`;

    // console.log("Trying to add:", id, itemDescription);
    // console.log("Current inventory:", inventory);

    // Check if the item is in stock
    if (!inBasket(id)) {
        // Add an object to the basket with all the details of the item
        basket.push({
            id,
            name: itemDescription,
            price
    });


        // Decrease inventory for the item
        // inventory[id] -= 1;
        saveBasket();
        // saveInventory();

        // Alert the user
        showAlert(`${itemDescription} is in your grasp.`);
    } else {
        showAlert("You may only purchase one of this title.");
    }
}


function inBasket(id) {
    for (let i = 0; i < basket.length; i++){
        if(basket[i].id == id){
            return true; 
        }
    }
}


// TODO: Clear order form after sent -- make a function for reset() 
// Send back to main page

function showAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    const closeAlert = document.getElementById('close-alert');

    alertMessage.textContent = message;
    alertBox.classList.remove('hidden');

    closeAlert.onclick = () => {
        alertBox.classList.add('hidden');
    };
}
