// POST REQUEST

// Add customer
window.addEventListener("load", function () {

    // Access the form
    var form = document.getElementById("addCustomer");

    function sendData() {
      var XHR = new XMLHttpRequest();
      // Bind the FormData object and the form element
      var FD = new FormData(form);
  
      // on successful data submission
      XHR.addEventListener("load", function(event) {
        alert("Customer added!");
      });
  
      // in case of error
      XHR.addEventListener("error", function(event) {
        alert('Oups! Something goes wrong.');
      });
  
      // Set up our request
      XHR.open("POST", "https://serene-eyrie-60807.herokuapp.com/customers");
  
      // The data sent is what the user provided in the form
      XHR.send(FD);    
    }
   
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      sendData();
    });
  });

  window.addEventListener("load", function(){

    var addProductForm = document.getElementById("addProduct");

    function postProduct() {
      var postProduct = new XMLHttpRequest();
      var productFormData = new FormData(addProductForm);

      postProduct.addEventListener("load", function(event){
        alert("Product added!")
      });

      postProduct.addEventListener("error", function(event){
        alert("Oups! Error adding product!")
      });

      postProduct.open("POST", "https://serene-eyrie-60807.herokuapp.com/products");
      postProduct.send(productFormData);
    }

    addProductForm.addEventListener("submit", function(event){
      event.preventDefault();
      postProduct();
    });

  });



