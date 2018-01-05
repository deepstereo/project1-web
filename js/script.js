function loadCustomers() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            hideAllLists();

            var myArray = JSON.parse(this.responseText);

            if (document.querySelector(".customer-table").style.display == "none" && document.querySelector(".customer-table").id == "") {

                for (var i = 0; i < myArray.length; i++) {
                    document.querySelector(".main-title").innerHTML = "Customers"
                    document.querySelector(".businessName").innerHTML = myArray[i].businessName;
                    document.querySelector(".address").innerHTML = myArray[i].address;
                    document.querySelector(".phone").innerHTML = myArray[i].telephone;
                    document.querySelector(".email").innerHTML = myArray[i].email;
                    var newRow = document.querySelector(".customer").cloneNode(true);
                    newRow.style.display = "";
                    document.querySelector(".customerTable").appendChild(newRow);
                    document.querySelector(".customer-table").style.display = "";
                    document.querySelector(".customer-table").id = "full";
                }

            } else {
                document.querySelector(".main-title").innerHTML = "Customers";
                document.querySelector(".customer-table").style.display = "";
                console.log("already there");
            }
        }
    };

    xhttp.open("GET", "https://serene-eyrie-60807.herokuapp.com/customers", true);
    xhttp.send();
};

function loadOrders() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            hideAllLists();

            var myArray = JSON.parse(this.responseText);

            if (document.querySelector(".order-table").style.display == "none" && document.querySelector(".order-table").id == "") {
                for (var i = 0; i < myArray.length; i++) {
                    document.querySelector(".main-title").innerHTML = "Orders"
                    document.querySelector(".customerID").innerHTML = myArray[i].customerID;
                    document.querySelector(".amount").innerHTML = myArray[i].amount;
                    document.querySelector(".paid").innerHTML = myArray[i].isPaid;
                    var newRow = document.querySelector(".order").cloneNode(true);
                    newRow.style.display = "";
                    document.querySelector(".orderTable").appendChild(newRow);
                    document.querySelector(".order-table").style.display = "";
                    document.querySelector(".order-table").id = "full";
                }
            } else {
                document.querySelector(".main-title").innerHTML = "Orders";
                document.querySelector(".order-table").style.display = "";
                console.log("already there")
            }
        }
    };

    xhttp.open("GET", "https://serene-eyrie-60807.herokuapp.com/orders", true);
    xhttp.send();
};


function loadProducts() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            hideAllLists();

            var myArray = JSON.parse(this.responseText);

            if (document.querySelector(".product-table").style.display == "none" && document.querySelector(".product-table").id == "") {
                for (var i = 0; i < myArray.length; i++) {
                    document.querySelector(".main-title").innerHTML = "Products"
                    document.querySelector(".productName").innerHTML = myArray[i].productName;
                    document.querySelector(".price").innerHTML = myArray[i].price;
                    var newRow = document.querySelector(".product").cloneNode(true);
                    newRow.style.display = "";
                    document.querySelector(".productTable").appendChild(newRow);
                    document.querySelector(".product-table").style.display = "";
                    document.querySelector(".product-table").id = "full";
                }
            } else {
                document.querySelector(".main-title").innerHTML = "Products";
                document.querySelector(".product-table").style.display = "";
                console.log("already there")
            }
        }
    };

    xhttp.open("GET", "https://serene-eyrie-60807.herokuapp.com/products", true);
    xhttp.send();
};

function hideAllLists() {
    if (document.querySelector(".order-table")!=null && document.querySelector(".order-table").style.display == "") {
        document.querySelector(".order-table").style.display = "none";
    }
    if (document.querySelector(".customer-table")!=null && document.querySelector(".customer-table").style.display == "") {
        document.querySelector(".customer-table").style.display = "none";
    }
    if (document.querySelector(".product-table")!=null && document.querySelector(".product-table").style.display == "") {
        document.querySelector(".product-table").style.display = "none";
    }
}

function goHome() {
    location.reload();
    document.querySelector(".table").style.display = "none";
};



function loadOrderDetails() {
    var xhttp = new XMLHttpRequest();
    var productRequest = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
            if (document.querySelector("#selectCustomer").innerHTML.length == 0) {
                
                var customerArray = JSON.parse(this.responseText);
                for (var i = 0; i < customerArray.length; i++) {
                    var option = document.createElement("option");
                    option.innerHTML = customerArray[i].businessName + ", " + customerArray[i].address;    
                    document.querySelector("#selectCustomer").appendChild(option);
                }
            } else {
                console.log("customers already loaded");
            }
        }
    };

    productRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            if (document.querySelector("#selectProduct").innerHTML.length == 0) {
                var productArray = JSON.parse(this.responseText);
                    for (var i = 0; i < productArray.length; i++) {
                        var option = document.createElement("option")
                        option.innerHTML = productArray[i].productName
                        document.querySelector("#selectProduct").appendChild(option);
                    }
            } else {
                console.log("products already loaded");
            }
        }
    };

    xhttp.open("GET", "https://serene-eyrie-60807.herokuapp.com/customers", true);
    productRequest.open("GET", "https://serene-eyrie-60807.herokuapp.com/products", true)

    xhttp.send();
    productRequest.send();
};
