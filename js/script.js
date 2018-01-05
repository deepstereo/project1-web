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
    var xhttp2 = new XMLHttpRequest();

    var myArrayCustomers;

    xhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            myArrayCustomers = JSON.parse(this.responseText);

        }
    };

    xhttp2.open("GET", "https://serene-eyrie-60807.herokuapp.com/customers", true);
    xhttp2.send();

    xhttp.onreadystatechange = function () {
        if (myArrayCustomers != null && this.readyState == 4 && this.status == 200) {

            hideAllLists();

            var myArrayOrders = JSON.parse(this.responseText);

            if (document.querySelector(".order-table").style.display == "none" && document.querySelector(".order-table").id == "") {
                for (var i = 0; i < myArrayOrders.length; i++) {
                    document.querySelector(".main-title").innerHTML = "Orders"
                    for (var j = 0; j < myArrayCustomers.length; j++) {
                        if (myArrayOrders[i].customerID == myArrayCustomers[j]._id) {
                            document.querySelector(".customerID").innerHTML = myArrayCustomers[j].businessName;
                            break
                        }
                    }
                    document.querySelector(".amount").innerHTML = myArrayOrders[i].amount;
                    document.querySelector(".paid").innerHTML = myArrayOrders[i].isPaid;
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
}

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

