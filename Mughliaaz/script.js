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

content.addEventListener("click",function(){ 
  content.style.transform = "translateX(-110%)"
})



// ---------------------------------------------tabs----------------------------

function showPage(pageId) {
  const all = document.querySelectorAll(".all")
  const pages = document.querySelectorAll('.page');
  const links = document.querySelectorAll('.left  a');
  pages.forEach(page => {
      if (page.id === pageId) {
          page.style.display = 'block';
      } else {
          page.style.display = 'none';
      }
  });

  all.forEach(page =>{
    page.style.display = "initial"
  })
  

    // Remove the 'active' class from all links first
    links.forEach(link => {
      link.classList.remove('active');
  });

  // Add the 'active' class to the clicked link
  const activeLink = document.querySelector(`.left  a[href="#${pageId}"]`);
  activeLink.classList.add('active');

}





