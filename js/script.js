//Price Declaration
const basePrice = 1299;
var memoryPrice = 0;
var ssdPrice = 0;
var deliveryCharge = 0;
var coponStatus = false;
var superTotal = 1299;

//Show price in price section
function showPrice(product, price) {
    const productPrice = document.getElementById(product);
    productPrice.innerHTML = price;
}

//Calculate total price
function calculateTotal(){
    const total = basePrice + memoryPrice + ssdPrice + deliveryCharge;
    calculateSupperTotal();
    return total;
}

// Calculate Supper Total
function calculateSupperTotal(){
    const total = basePrice + memoryPrice + ssdPrice + deliveryCharge;
    superTotal = total;
    if(coponStatus == true){
        superTotal = (total/100)*80;
        superTotal = superTotal.toFixed(2);
        showPrice('superTotalPrice', superTotal);
    }
    else{
        showPrice('superTotalPrice', superTotal);
    }
}

// Event Listener For memory-8GB-btn
document.getElementById("memory-8GB-btn").addEventListener("click",
    function () {
        document.getElementById("memory-16GB-btn").classList.remove("border-primary");
        document.getElementById("memory-8GB-btn").classList.add("border-primary");
        showPrice('memoryPrice', 0);
        memoryPrice = 0;
        showPrice("totalPrice", calculateTotal());
    }
);

// Event Listener For memory-16GB-btn
document.getElementById("memory-16GB-btn").addEventListener("click",
    function () {
        document.getElementById("memory-8GB-btn").classList.remove("border-primary");
        document.getElementById("memory-16GB-btn").classList.add("border-primary");
        showPrice('memoryPrice', 180);
        memoryPrice = 180;
        showPrice("totalPrice", calculateTotal());
    }
);

// Event Listener For ssd-256GB-btn
document.getElementById("ssd-256GB-btn").addEventListener("click",
    function () {
        document.getElementById("ssd-256GB-btn").classList.add("border-primary");
        document.getElementById("ssd-512GB-btn").classList.remove("border-primary");
        document.getElementById("ssd-1TB-btn").classList.remove("border-primary");
        showPrice('storagePrice', 0);
        ssdPrice = 0;
        showPrice("totalPrice", calculateTotal());
    }
);

// Event Listener For ssd-256GB-btn
document.getElementById("ssd-512GB-btn").addEventListener("click",
    function () {
        document.getElementById("ssd-256GB-btn").classList.remove("border-primary");
        document.getElementById("ssd-512GB-btn").classList.add("border-primary");
        document.getElementById("ssd-1TB-btn").classList.remove("border-primary");
        showPrice('storagePrice', 100);
        ssdPrice = 100;
        showPrice("totalPrice", calculateTotal());
    }
);

// Event Listener For ssd-256GB-btn
document.getElementById("ssd-1TB-btn").addEventListener("click",
    function () {
        document.getElementById("ssd-256GB-btn").classList.remove("border-primary");
        document.getElementById("ssd-512GB-btn").classList.remove("border-primary");
        document.getElementById("ssd-1TB-btn").classList.add("border-primary");
        showPrice('storagePrice', 180);
        ssdPrice = 180;
        showPrice("totalPrice", calculateTotal());
    }
);

// Event Listener For ssd-256GB-btn
document.getElementById("delivery-free-btn").addEventListener("click",
    function () {
        document.getElementById("delivery-prime-btn").classList.remove("border-primary");
        document.getElementById("delivery-free-btn").classList.add("border-primary");
        showPrice('deliveryCharge', 0);
        deliveryCharge = 0;
        showPrice("totalPrice", calculateTotal());
    }
);

// Event Listener For ssd-256GB-btn
document.getElementById("delivery-prime-btn").addEventListener("click",
    function () {
        document.getElementById("delivery-prime-btn").classList.add("border-primary");
        document.getElementById("delivery-free-btn").classList.remove("border-primary");
        showPrice('deliveryCharge', 20);
        deliveryCharge = 20;
        showPrice("totalPrice", calculateTotal());
    }
);


// Event Listener For ssd-256GB-btn
document.getElementById("copon-btn").addEventListener("click",
    function () {
        const coponText = document.getElementById("copon").value;
        if(coponText == 'stevekaku'){
            document.getElementById("copon").value = '';
            coponStatus = true;
            calculateSupperTotal();
            document.getElementById("copon-btn").innerHTML = 'Applied';
            document.getElementById("copon-btn").classList.add("disabled");
            document.getElementById("copon").disabled = true;
        }
        else{
            alert("Copon Not Applicable.");
        }
    }
);