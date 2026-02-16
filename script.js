

// .......................CART COUNT....................//

let quantity = 1;

// get cart count from session
let cartCount = sessionStorage.getItem("cartCount")
  ? parseInt(sessionStorage.getItem("cartCount"))
  : 0;

// cart icon number
const cartCountEl = document.getElementById("cart-count");
if (cartCountEl) {
  cartCountEl.innerText = cartCount;
}

// add to cart buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();

      cartCount += quantity;
      sessionStorage.setItem("cartCount", cartCount);

      if (cartCountEl) {
        cartCountEl.innerText = cartCount;
      }
    });
  });
});

// quantity + -
function qty(val) {
  quantity += val;
  if (quantity < 1) quantity = 1;
  document.getElementById("q").innerText = quantity;
}

// giftpack pagr .....................//
function orderNow() {
  alert("🎉 Your product has been ordered successfully!");
}

// contact page message
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("✅ Thank you! Your message has been sent successfully ❤️");
      this.reset();
    });
  }
});

// Account page//

function showLogin() {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("signupForm").classList.add("hidden");

  document.getElementById("loginBtn").classList.add("active");
  document.getElementById("signupBtn").classList.remove("active");
}

function showSignup() {
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");

  document.getElementById("signupBtn").classList.add("active");
  document.getElementById("loginBtn").classList.remove("active");
}

/* ===== LOGIN ALERT ===== */
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // page reload stop

  alert("✅ Login Successful!");
});

/* ===== SIGNUP ALERT ===== */
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // page reload stop

  alert("🎉 Account Created Successfully!");
});

// cart//.........................

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartContainer = document.getElementById("cart-items");

function renderCart() {
  cartContainer.innerHTML = "";

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty 🛒</p>";
    return;
  }

  cartItems.forEach((item, index) => {
    cartContainer.innerHTML += `
      <div class="cart-item">
        <h5>${item.name}</h5>
        <span>Rs ${item.price}</span>
        <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });
}

function removeItem(index) {
  cartItems.splice(index, 1);
  updateCart();
}

function clearCart() {
  cartItems = [];
  updateCart();
}

function updateCart() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("cartCount", cartItems.length);
  renderCart();
}
renderCart()




