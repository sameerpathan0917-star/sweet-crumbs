const products = [
  {
    name: "Chocolate Truffle Cake",
    category: "Cakes",
    description: "Deep chocolate sponge with a smooth, glossy truffle finish.",
    price: 850,
    image: "https://www.onlinedelivery.in/images/detailed/33/Chocolate-Cake-Five-Star-A.jpg",
    alt: "Round chocolate truffle cake decorated with chocolate and white chocolate pieces",
    search: "chocolate cocoa ganache",
  },
  {
    name: "Black Forest Cake",
    category: "Cakes",
    description: "Chocolate layers, soft cream, and bright cherry accents.",
    price: 920,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
    alt: "Layered celebration cake with fresh fruit and cream",
    search: "chocolate cherry cream",
  },
  {
    name: "Red Velvet Cake",
    category: "Cakes",
    description: "Tender cocoa-kissed layers with a smooth creamy frosting.",
    price: 950,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=80",
    alt: "Red velvet cake with a swirl of creamy frosting",
    search: "cocoa cream",
  },
  {
    name: "Vanilla Cake",
    category: "Cakes",
    description: "Soft vanilla sponge with a light, buttery cream finish.",
    price: 780,
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80",
    alt: "Vanilla cupcake with a swirl of buttercream",
    search: "vanilla buttercream",
  },
  {
    name: "Strawberry Cake",
    category: "Cakes",
    description: "Light, creamy layers with sweet strawberry flavour.",
    price: 900,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
    alt: "Strawberry cake topped with fresh berries",
    search: "strawberry fruit cream",
  },
  {
    name: "Butterscotch Cake",
    category: "Cakes",
    description: "Classic vanilla sponge with buttery caramel crunch.",
    price: 820,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    alt: "Hand-frosted celebration cake with rich piped decoration",
    search: "butterscotch caramel vanilla",
  },
  {
    name: "Pineapple Cake",
    category: "Cakes",
    description: "Airy vanilla sponge layered with pineapple and cream.",
    price: 800,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
    alt: "Light fruit-topped celebration cake",
    search: "pineapple fruit vanilla cream",
  },
  {
    name: "White Forest Cake",
    category: "Cakes",
    description: "Delicate vanilla layers finished with white chocolate.",
    price: 920,
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80",
    alt: "Vanilla cupcake with pale buttercream",
    search: "white chocolate vanilla",
  },
  {
    name: "Coffee Cake",
    category: "Cakes",
    description: "Fragrant coffee sponge with a silky mocha cream.",
    price: 880,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    alt: "Chocolate layer cake with piped frosting",
    search: "coffee mocha chocolate",
  },
  {
    name: "Designer Cake",
    category: "Cakes",
    description: "A celebration cake with handcrafted chocolate details.",
    price: 1250,
    image: "https://www.onlinedelivery.in/images/detailed/33/Chocolate-Cake-Five-Star-A.jpg",
    alt: "Decorative chocolate cake with chocolate roses",
    search: "designer birthday chocolate",
  },
  {
    name: "Chocolate Chip Cookies",
    category: "Cookies",
    description: "Golden edges, soft centres, and generous chocolate chips.",
    price: 180,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
    alt: "Golden chocolate chip cookies",
    search: "chocolate chip",
  },
  {
    name: "Double Chocolate Cookies",
    category: "Cookies",
    description: "A cocoa-rich cookie with extra chocolate in every bite.",
    price: 210,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80",
    alt: "Freshly baked chocolate cookies",
    search: "double cocoa chocolate",
  },
  {
    name: "Butter Cookies",
    category: "Cookies",
    description: "Crisp, buttery biscuits with a delicate golden finish.",
    price: 160,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
    alt: "A batch of homemade golden cookies",
    search: "butter biscuits",
  },
  {
    name: "Oatmeal Cookies",
    category: "Cookies",
    description: "Hearty rolled oats baked into a softly spiced cookie.",
    price: 190,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80",
    alt: "Homemade cookies arranged for serving",
    search: "oats cinnamon",
  },
  {
    name: "Almond Cookies",
    category: "Cookies",
    description: "Lightly crisp cookies with a gentle roasted almond note.",
    price: 220,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
    alt: "Fresh golden bakery cookies",
    search: "almond nut",
  },
  {
    name: "Peanut Butter Cookies",
    category: "Cookies",
    description: "Soft-centred cookies with a rich peanut butter flavour.",
    price: 200,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80",
    alt: "Freshly baked homemade cookies",
    search: "peanut butter",
  },
  {
    name: "Assorted Cookies",
    category: "Cookies",
    description: "A little selection of our favourite freshly baked cookies.",
    price: 260,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
    alt: "Assorted golden cookies ready to share",
    search: "assorted mix",
  },
  {
    name: "Chocolate Cupcakes",
    category: "Cupcakes",
    description: "Chocolate sponge topped with a generous cocoa swirl.",
    price: 320,
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80",
    alt: "Chocolate cupcake topped with frosting",
    search: "chocolate cocoa",
  },
  {
    name: "Vanilla Cupcakes",
    category: "Cupcakes",
    description: "Fluffy vanilla sponge with a swirl of buttercream.",
    price: 300,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=80",
    alt: "Vanilla cupcakes decorated with cream",
    search: "vanilla buttercream",
  },
  {
    name: "Red Velvet Cupcakes",
    category: "Cupcakes",
    description: "Velvety cocoa sponge with a smooth creamy topping.",
    price: 350,
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80",
    alt: "Red velvet cupcake with cream frosting",
    search: "red velvet cocoa",
  },
  {
    name: "Strawberry Cupcakes",
    category: "Cupcakes",
    description: "Soft vanilla cakes with sweet strawberry frosting.",
    price: 340,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=80",
    alt: "Cupcake topped with a soft swirl of frosting",
    search: "strawberry vanilla fruit",
  },
  {
    name: "Chocolate Brownies",
    category: "Brownies",
    description: "Fudgy chocolate squares with a delicate crackly top.",
    price: 220,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    alt: "Rich chocolate brownies drizzled with chocolate",
    search: "chocolate fudge",
  },
  {
    name: "Walnut Brownies",
    category: "Brownies",
    description: "Deep cocoa brownies with crunchy walnut pieces.",
    price: 250,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    alt: "Stacked chocolate brownies",
    search: "walnut cocoa nuts",
  },
  {
    name: "Fudge Brownies",
    category: "Brownies",
    description: "Extra-rich, soft-centred chocolate fudge brownies.",
    price: 240,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    alt: "Soft rich chocolate brownies",
    search: "fudge chocolate",
  },
  {
    name: "Brownie Bites",
    category: "Brownies",
    description: "Bite-sized chocolate squares made for sharing.",
    price: 190,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    alt: "Small chocolate brownie pieces",
    search: "bite size chocolate",
  },
  {
    name: "Salted Caramel Brownies",
    category: "Brownies",
    description: "Fudgy cocoa with a sweet-salty caramel ribbon.",
    price: 260,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    alt: "Chocolate brownies with a rich glossy finish",
    search: "salted caramel chocolate",
  },
  {
    name: "Classic Donuts",
    category: "Donuts",
    description: "Soft, fluffy rings finished with a sweet chocolate glaze.",
    price: 150,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    alt: "Freshly glazed bakery donuts",
    search: "doughnut chocolate glazed",
  },
  {
    name: "Fresh Muffins",
    category: "Pastries",
    description: "Tender, freshly baked muffins with a soft crumb.",
    price: 140,
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=900&q=80",
    alt: "Fresh muffins ready to serve",
    search: "muffin baked",
  },
  {
    name: "Bakery Pastries",
    category: "Pastries",
    description: "Flaky, golden pastries baked until delicately crisp.",
    price: 180,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
    alt: "Freshly baked pastries arranged on a tray",
    search: "pastry flaky baked",
  },
  {
    name: "Chocolate Cake Jars",
    category: "Cakes",
    description: "Layers of chocolate sponge and cream in a little jar.",
    price: 240,
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
    alt: "Layered chocolate dessert with cream",
    search: "cake jar chocolate dessert",
  },
  {
    name: "Strawberry Cake Jars",
    category: "Cakes",
    description: "Spoonable cake layers with cream and strawberry flavour.",
    price: 260,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
    alt: "Strawberry and cream cake layers",
    search: "cake jar strawberry fruit",
  },
];

const GOOGLE_PSE_CX = ""; // Set this to the Search Engine ID (cx) from Google Programmable Search Engine.
const GOOGLE_PSE_GNAME = "sweet-crumbs-external";
const GOOGLE_PSE_SCRIPT_URL = "https://cse.google.com/cse.js";

const productGrid = document.querySelector("#product-grid");
const productSearchForm = document.querySelector("#product-search-form");
const productSearchInput = document.querySelector("#product-search-input");
const productSearchClear = document.querySelector("#product-search-clear");
const searchEmptyMessage = document.querySelector("#search-empty-message");
const searchEmptyCopy = document.querySelector("#search-empty-copy");
const googleSearchLink = document.querySelector("#google-search-link");
const externalSearch = document.querySelector("#external-search");
const externalSearchStatus = document.querySelector("#external-search-status");
const categoryFilters = Array.from(document.querySelectorAll(".category-filter"));
const productSort = document.querySelector("#product-sort");
const catalogResults = document.querySelector("#catalog-results");
const cartToggle = document.querySelector("#cart-toggle");
const cartDialog = document.querySelector("#cart-dialog");
const cartClose = document.querySelector("#cart-close");
const cartCount = document.querySelector("#cart-count");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const cartTotal = document.querySelector("#cart-total");
const cart = new Map();

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

let activeCategory = "All";
let externalSearchElement = null;
let pendingExternalQuery = "";
let externalSearchLoadStarted = false;

function searchExternalProducts(query) {
  if (!externalSearch || !externalSearchStatus || !query) return;

  externalSearch.hidden = false;
  pendingExternalQuery = query;

  if (!GOOGLE_PSE_CX.trim()) {
    externalSearchStatus.replaceChildren(
      document.createTextNode("Google results are not configured yet. Add your Programmable Search Engine ID (cx) to products.js. "),
    );
    const setupLink = document.createElement("a");
    setupLink.href = "https://programmablesearchengine.google.com/controlpanel/all";
    setupLink.target = "_blank";
    setupLink.rel = "noopener noreferrer";
    setupLink.textContent = "Create or configure a search engine";
    externalSearchStatus.append(setupLink);
    return;
  }

  externalSearchStatus.textContent = `Searching Google for "${query}"...`;
  if (externalSearchElement) {
    externalSearchElement.execute(query);
    return;
  }
  if (externalSearchLoadStarted) return;

  externalSearchLoadStarted = true;
  window.__gcse = {
    callback: () => {
      const googleSearch = window.google?.search?.cse?.element;
      if (!googleSearch) {
        externalSearchStatus.textContent = "Google's search component could not be initialized. Please try again later.";
        return;
      }

      externalSearchElement = googleSearch.getElement(GOOGLE_PSE_GNAME);
      if (!externalSearchElement) {
        externalSearchStatus.textContent = "Google's search results could not be initialized. Check the Search Engine ID.";
        return;
      }

      externalSearchElement.execute(pendingExternalQuery);
      externalSearchStatus.textContent =
        "External Google results are shown below. They are not Sweet Crumbs products.";
    },
  };

  const script = document.createElement("script");
  script.src = `${GOOGLE_PSE_SCRIPT_URL}?cx=${encodeURIComponent(GOOGLE_PSE_CX.trim())}`;
  script.async = true;
  script.onerror = () => {
    externalSearchStatus.textContent = "Google results could not be loaded. Check your connection and try again.";
    externalSearchLoadStarted = false;
  };
  document.head.append(script);
}

function clearExternalProducts() {
  if (externalSearch) externalSearch.hidden = true;
  if (externalSearchStatus) externalSearchStatus.textContent = "";
}

function selectCategory(category) {
  activeCategory = category;
  categoryFilters.forEach((button) => {
    const isActive = button.dataset.category === category;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function createProductCard(product, index) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.dataset.category = product.category;
  card.dataset.name = product.name;
  card.dataset.search = product.search;
  card.dataset.price = String(product.price);

  const imageWrap = document.createElement("div");
  imageWrap.className = "product-image";

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.alt;
  image.loading = "lazy";
  imageWrap.append(image);

  const number = document.createElement("span");
  number.className = "product-number";
  number.textContent = String(index + 1).padStart(2, "0");
  imageWrap.append(number);

  const details = document.createElement("div");
  details.className = "product-details";

  const category = document.createElement("span");
  category.className = "product-category";
  category.textContent = product.category;

  const heading = document.createElement("div");
  heading.className = "product-heading";

  const name = document.createElement("h3");
  name.textContent = product.name;

  const price = document.createElement("span");
  price.className = "price";
  price.textContent = currency.format(product.price);
  heading.append(name, price);

  const description = document.createElement("p");
  description.textContent = product.description;

  const addButton = document.createElement("button");
  addButton.className = "button add-to-cart";
  addButton.type = "button";
  addButton.dataset.productName = product.name;
  addButton.innerHTML = 'Add to cart <span aria-hidden="true">+</span>';
  addButton.addEventListener("click", () => addToCart(product.name));

  const orderUrl = new URL("order.html", window.location.href);
  orderUrl.searchParams.set("product", product.name);
  orderUrl.searchParams.set("price", String(product.price));
  const orderLink = document.createElement("a");
  orderLink.className = "button product-order";
  orderLink.href = orderUrl.href;
  orderLink.textContent = "Order this treat";

  details.append(category, heading, description, addButton, orderLink);
  card.append(imageWrap, details);
  return card;
}

if (productGrid) {
  products.forEach((product, index) => productGrid.append(createProductCard(product, index)));
}

function sortProducts(productList) {
  const sortMode = productSort?.value || "featured";
  const sorted = [...productList];

  if (sortMode === "price-ascending") {
    sorted.sort((first, second) => first.price - second.price);
  } else if (sortMode === "price-descending") {
    sorted.sort((first, second) => second.price - first.price);
  } else if (sortMode === "name") {
    sorted.sort((first, second) => first.name.localeCompare(second.name));
  }

  return sorted;
}

function filterProducts() {
  if (
    !productGrid ||
    !productSearchInput ||
    !productSearchClear ||
    !searchEmptyMessage ||
    !searchEmptyCopy ||
    !googleSearchLink
  ) return;

  const query = productSearchInput.value.trim().toLocaleLowerCase().replace(/\s+/g, " ");
  const searchTerms = query ? query.split(" ") : [];
  const searchableProducts = products.filter((product) => {
    const searchableText = `${product.name} ${product.description} ${product.search} ${product.category}`
      .toLocaleLowerCase()
      .replace(/\s+/g, " ");
    return searchTerms.every((term) => {
      const alternatives = [term];
      if (term.endsWith("ies")) alternatives.push(`${term.slice(0, -3)}y`);
      if (term.endsWith("s")) alternatives.push(term.slice(0, -1));
      return alternatives.some((alternative) => searchableText.includes(alternative));
    });
  });
  const matches = searchableProducts.filter(
    (product) => activeCategory === "All" || product.category === activeCategory,
  );

  const matchingNames = new Set(matches.map((product) => product.name));
  productGrid.querySelectorAll(".product-card").forEach((card) => {
    card.hidden = !matchingNames.has(card.dataset.name);
  });

  sortProducts(matches).forEach((product) => {
    const card = productGrid.querySelector(`[data-name="${CSS.escape(product.name)}"]`);
    if (card) productGrid.append(card);
  });

  const productNotFound = query.length > 0 && searchableProducts.length === 0;
  searchEmptyMessage.hidden = matches.length > 0;
  searchEmptyCopy.textContent = productNotFound
    ? "Product not found in our store catalog."
    : "No treats found. Try another flavour!";
  googleSearchLink.hidden = !productNotFound;
  if (productNotFound) {
    googleSearchLink.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    googleSearchLink.textContent = `Search Google for "${productSearchInput.value.trim()}" (opens in a new tab)`;
  }
  productSearchClear.disabled = query.length === 0;
  if (catalogResults) {
    catalogResults.textContent = `${matches.length} ${matches.length === 1 ? "treat" : "treats"}`;
  }
}

function addToCart(productName) {
  const product = products.find((item) => item.name === productName);
  if (!product) return;

  const currentQuantity = cart.get(productName) || 0;
  cart.set(productName, currentQuantity + 1);
  updateCart();
}

function updateCart() {
  if (!cartCount || !cartItems || !cartEmpty || !cartTotal) return;

  const itemCount = Array.from(cart.values()).reduce((total, quantity) => total + quantity, 0);
  const total = Array.from(cart.entries()).reduce((sum, [name, quantity]) => {
    const product = products.find((item) => item.name === name);
    return sum + (product ? product.price * quantity : 0);
  }, 0);

  cartCount.textContent = String(itemCount);
  cartCount.setAttribute("aria-label", `${itemCount} ${itemCount === 1 ? "item" : "items"}`);
  cartItems.replaceChildren();
  cartEmpty.hidden = itemCount > 0;
  cartItems.hidden = itemCount === 0;
  cartTotal.textContent = currency.format(total);

  cart.forEach((quantity, name) => {
    const product = products.find((item) => item.name === name);
    if (!product) return;

    const row = document.createElement("div");
    row.className = "cart-item";

    const title = document.createElement("p");
    title.className = "cart-item-name";
    title.textContent = product.name;

    const price = document.createElement("span");
    price.className = "cart-item-price";
    price.textContent = `${currency.format(product.price)} each`;

    const controls = document.createElement("div");
    controls.className = "cart-item-controls";

    const decrease = document.createElement("button");
    decrease.className = "cart-quantity-button";
    decrease.type = "button";
    decrease.textContent = "−";
    decrease.setAttribute("aria-label", `Remove one ${product.name}`);
    decrease.addEventListener("click", () => changeCartQuantity(product.name, -1));

    const quantityLabel = document.createElement("span");
    quantityLabel.textContent = String(quantity);
    quantityLabel.setAttribute("aria-label", `Quantity ${quantity}`);

    const increase = document.createElement("button");
    increase.className = "cart-quantity-button";
    increase.type = "button";
    increase.textContent = "+";
    increase.setAttribute("aria-label", `Add one ${product.name}`);
    increase.addEventListener("click", () => addToCart(product.name));

    const remove = document.createElement("button");
    remove.className = "cart-remove-button";
    remove.type = "button";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      cart.delete(product.name);
      updateCart();
    });

    controls.append(decrease, quantityLabel, increase, remove);
    row.append(title, price, controls);
    cartItems.append(row);
  });
}

function changeCartQuantity(productName, amount) {
  const quantity = (cart.get(productName) || 0) + amount;
  if (quantity <= 0) {
    cart.delete(productName);
  } else {
    cart.set(productName, quantity);
  }
  updateCart();
}

if (productSearchInput && productSearchClear) {
  productSearchInput.addEventListener("input", () => {
    if (productSearchInput.value.trim()) selectCategory("All");
    filterProducts();
  });
  productSearchClear.addEventListener("click", () => {
    productSearchInput.value = "";
    filterProducts();
    clearExternalProducts();
    productSearchInput.focus();
  });
}

productSearchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = productSearchInput?.value.trim() || "";
  if (!query) {
    clearExternalProducts();
    return;
  }
  selectCategory("All");
  filterProducts();
  searchExternalProducts(query);
});

categoryFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    selectCategory(filter.dataset.category || "All");
    filterProducts();
  });
});

productSort?.addEventListener("change", filterProducts);

cartToggle?.addEventListener("click", () => cartDialog?.showModal());
cartClose?.addEventListener("click", () => cartDialog?.close());
cartDialog?.addEventListener("click", (event) => {
  if (event.target === cartDialog) cartDialog.close();
});

filterProducts();
updateCart();
