let cartItems = [];
let totalPrice = 0;

function addToCart(productName, price) {
    const cartItem = cartItems.find(item => item.name === productName);
  
    if (cartItem) {
      cartItem.quantity++;
      cartItem.itemPrice += price;
    } else {
      cartItems.push({ name: productName, quantity: 1, itemPrice: price });
    }
  
    totalPrice += price;
    updateCart();
  }
  

function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";

  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `${item.name} +${item.quantity} Rs${item.itemPrice} `;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.onclick = () => removeCartItem(item.name);
    li.appendChild(deleteButton);

    cartItemsElement.appendChild(li);
  });

  document.getElementById("total-price").textContent = `Rs${totalPrice}`;
}

function removeCartItem(productName) {
    const cartItemIndex = cartItems.findIndex(item => item.name === productName);
  
    if (cartItemIndex !== -1) {
      const cartItem = cartItems[cartItemIndex];
      totalPrice -= cartItem.itemPrice;
      cartItems.splice(cartItemIndex, 1);
      updateCart();
    }
  }

  function increaseQuantity(productName, price) {
    const cartItem = cartItems.find(item => item.name === productName);
  
    if (cartItem) {
      cartItem.quantity++;
      cartItem.itemPrice += price;
      totalPrice += price;
      updateCart();
    }
  }

  function decreaseQuantity(productName, price) {
    const cartItem = cartItems.find(item => item.name === productName);
  
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity--;
      cartItem.itemPrice -= price;
      totalPrice -= price;
      updateCart();
    }
  }

// Optional: Clear cart and reset total price
function clearCart() {
  cartItems = [];
  totalPrice = 0;
  updateCart();
}



var menu = document.querySelector(".menu")
var cross = document.querySelector("#cross")
var content = document.querySelector(".content")
// var crossing = document.querySelector(".crossing")
// var cart = document.querySelector(".cart-section")
// var check = document.querySelector(".check-out")


// crossing.addEventListener("click",function(){ 
//   cart.style.transform = "translateY(-150%)"
// })

// check.addEventListener("click",function(){ 
//   cart.style.transform = "translateY(-0%)"
// })

menu.addEventListener("click",function(){ 
  content.style.transform = "translateY(-0%)"
})


cross.addEventListener("click",function(){ 
  content.style.transform = "translateX(-110%)"
})

content.addEventListener("click",function(){ 
  content.style.transform = "translateY(-0%)"
})

