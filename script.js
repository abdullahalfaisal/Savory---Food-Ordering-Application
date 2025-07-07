// Enhanced menu data with real images
const menuData = [
  {
    id: 1,
    name: "Margherita Supreme",
    description:
      "Artisan pizza with San Marzano tomatoes, fresh mozzarella di bufala, and aromatic basil",
    price: 18.99,
    category: "pizza",
    image:
      "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=400&fit=crop&crop=center",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Gourmet Beef Burger",
    description:
      "Premium wagyu beef patty with truffle aioli, arugula, and aged cheddar on brioche bun",
    price: 16.99,
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop&crop=center",
    badge: "Chef's Special",
  },
  {
    id: 3,
    name: "Truffle Carbonara",
    description:
      "Silky pasta with pancetta, farm-fresh eggs, pecorino romano, and black truffle shavings",
    price: 22.99,
    category: "pasta",
    image:
      "https://images.unsplash.com/photo-1747628857843-96f695316cfc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Premium",
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    description:
      "Decadent dark chocolate cake with molten center, served with vanilla bean ice cream",
    price: 12.99,
    category: "dessert",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=400&fit=crop&crop=center",
    badge: "Bestseller",
  },
  {
    id: 5,
    name: "Pepperoni Deluxe",
    description:
      "Classic pepperoni pizza with premium mozzarella, spicy pepperoni, and herb-infused crust",
    price: 20.99,
    category: "pizza",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=400&fit=crop&crop=center",
    badge: "Spicy",
  },
  {
    id: 6,
    name: "Crispy Chicken Deluxe",
    description:
      "Buttermilk fried chicken breast with avocado, bacon, and chipotle mayo on artisan bun",
    price: 15.99,
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1633945488458-f8cc1f3a0144?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Crispy",
  },
  {
    id: 7,
    name: "Lobster Ravioli",
    description:
      "Handmade ravioli stuffed with Maine lobster in a creamy saffron sauce with microgreens",
    price: 28.99,
    category: "pasta",
    image:
      "https://images.unsplash.com/photo-1730698306944-544a5cb282e3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Luxury",
  },
  {
    id: 8,
    name: "Tiramisu Parfait",
    description:
      "Traditional Italian tiramisu with mascarpone, espresso-soaked ladyfingers, and cocoa dust",
    price: 9.99,
    category: "dessert",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=400&fit=crop&crop=center",
    badge: "Classic",
  },
  {
    id: 9,
    name: "Mediterranean Veggie",
    description:
      "Fresh vegetables, feta cheese, olives, and sun-dried tomatoes on wood-fired crust",
    price: 17.99,
    category: "pizza",
    image:
      "https://images.unsplash.com/photo-1620386947924-0337e3f2c75d?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Healthy",
  },
  {
    id: 10,
    name: "Cheesecake Slice",
    description:
      "New York style cheesecake with graham cracker crust and fresh berry compote",
    price: 8.99,
    category: "dessert",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&h=400&fit=crop&crop=center",
    badge: "Creamy",
  },
];

let cart = [];
let currentFilter = "all";

// Initialize the menu
function initMenu() {
  displayMenuItems(menuData);
}

// Display menu items
function displayMenuItems(items) {
  const menuContainer = document.getElementById("menuItems");
  menuContainer.innerHTML = "";

  items.forEach((item, index) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.style.animationDelay = `${index * 0.1}s`;

    menuItem.innerHTML = `
                    <div class="item-image">
                        <img src="${item.image}" alt="${
      item.name
    }" loading="lazy">
                        <div class="item-badge">${item.badge}</div>
                    </div>
                    <div class="item-info">
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-description">${item.description}</p>
                        <div class="item-footer">
                            <span class="item-price">$${item.price.toFixed(
                              2
                            )}</span>
                            <button class="add-to-cart" onclick="addToCart(${
                              item.id
                            })">Add to Cart</button>
                        </div>
                    </div>
                `;

    menuContainer.appendChild(menuItem);
  });
}

// Filter menu items
function filterMenu(category) {
  currentFilter = category;

  // Update active category
  document.querySelectorAll(".category-card").forEach((card) => {
    card.classList.remove("active");
  });
  event.target.closest(".category-card").classList.add("active");

  // Filter items
  const filteredItems =
    category === "all"
      ? menuData
      : menuData.filter((item) => item.category === category);

  displayMenuItems(filteredItems);
}

// Add item to cart
function addToCart(itemId) {
  const item = menuData.find((item) => item.id === itemId);
  const existingItem = cart.find((cartItem) => cartItem.id === itemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  updateCartUI();

  // Add visual feedback
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = "Added!";
  button.style.background = "linear-gradient(135deg, #10b981, #059669)";

  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = "";
  }, 1000);
}

// Update cart UI
function updateCartUI() {
  const cartCount = document.getElementById("cartCount");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  if (totalItems > 0) {
    cartCount.style.display = "flex";
  } else {
    cartCount.style.display = "none";
  }
}

// Update item quantity
function updateQuantity(itemId, change) {
  const item = cart.find((cartItem) => cartItem.id === itemId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateCartUI();
      openCart(); // Refresh cart display
    }
  }
}

// Open cart modal
function openCart() {
  const modal = document.getElementById("cartModal");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  // Display cart items
  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon">🛒</div>
                        <p>Your cart is empty</p>
                    </div>
                `;
  } else {
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-details">${item.price.toFixed(
                              2
                            )} each</div>
                        </div>
                        <div class="cart-item-actions">
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="updateQuantity(${
                                  item.id
                                }, -1)">-</button>
                                <span>${item.quantity}</span>
                                <button class="quantity-btn" onclick="updateQuantity(${
                                  item.id
                                }, 1)">+</button>
                            </div>
                            <button class="remove-btn" onclick="removeFromCart(${
                              item.id
                            })">Remove</button>
                        </div>
                    `;
      cartItems.appendChild(cartItem);
      total += item.price * item.quantity;
    });
  }

  cartTotal.textContent = `Total: ${total.toFixed(2)}`;
  modal.classList.add("active");
}

// Close cart modal
function closeCart() {
  const modal = document.getElementById("cartModal");
  modal.classList.remove("active");
}

// Remove item from cart
function removeFromCart(itemId) {
  cart = cart.filter((item) => item.id !== itemId);
  updateCartUI();
  openCart(); // Refresh cart display
}

// Checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  alert(
    `Thank you for your order! Total: ${total.toFixed(
      2
    )}\nYour food will be delivered in 30-45 minutes.`
  );

  cart = [];
  updateCartUI();
  closeCart();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.8)";
    header.style.boxShadow = "none";
  }
});

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  initMenu();
});
