const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");
const orderForm = document.querySelector("#order-form");
const productSelect = document.querySelector("#product-select");
const productPriceNote = document.querySelector("#product-price-note");
const fulfilmentSelect = document.querySelector("#fulfilment");
const addressField = document.querySelector("#address-field");
const addressInput = document.querySelector("#delivery-address");
const deliveryDateInput = document.querySelector("#delivery-date");
const formStatus = document.querySelector("#form-status");

function setMenuOpen(isOpen) {
  if (!menuToggle || !primaryNavigation) return;

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  primaryNavigation.classList.toggle("is-open", isOpen);
}

if (menuToggle && primaryNavigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  primaryNavigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });
}

if (deliveryDateInput) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
  deliveryDateInput.min = localToday;
}

if (fulfilmentSelect && addressField && addressInput) {
  const updateAddressRequirement = () => {
    const needsAddress = fulfilmentSelect.value === "delivery";
    addressField.hidden = !needsAddress;
    addressInput.required = needsAddress;

    if (!needsAddress) {
      addressInput.value = "";
      clearFieldError(addressInput);
    }
  };

  fulfilmentSelect.addEventListener("change", updateAddressRequirement);
  updateAddressRequirement();
}

if (productSelect) {
  const query = new URLSearchParams(window.location.search);
  const selectedProduct = query.get("product")?.trim();
  const selectedPrice = Number(query.get("price"));

  if (selectedProduct && Number.isFinite(selectedPrice) && selectedPrice > 0) {
    let option = Array.from(productSelect.options).find((item) => item.value === selectedProduct);
    if (!option) {
      option = document.createElement("option");
      option.value = selectedProduct;
      option.textContent = selectedProduct;
      productSelect.append(option);
    }
    option.dataset.price = String(selectedPrice);
    productSelect.value = selectedProduct;
  }

  const updateProductPrice = () => {
    if (!productPriceNote) return;
    const price = Number(productSelect.selectedOptions[0]?.dataset.price);
    productPriceNote.hidden = !Number.isFinite(price) || price <= 0;
    if (!productPriceNote.hidden) {
      productPriceNote.textContent = `Sample price from the product listing: ${new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(price)}.`;
    }
  };

  productSelect.addEventListener("change", updateProductPrice);
  updateProductPrice();
}

function clearFieldError(field) {
  const error = document.querySelector(`#${field.id}-error`);
  if (error) error.textContent = "";
  field.removeAttribute("aria-invalid");
}

function showFieldError(field, message) {
  const error = document.querySelector(`#${field.id}-error`);
  if (error) error.textContent = message;
  field.setAttribute("aria-invalid", "true");
}

function validateForm() {
  if (!orderForm) return [];

  const fields = Array.from(orderForm.querySelectorAll("input, select, textarea"));
  const invalidFields = [];
  const phoneInput = orderForm.elements.namedItem("phone");
  const quantityInput = orderForm.elements.namedItem("quantity");

  fields.forEach(clearFieldError);

  fields.forEach((field) => {
    if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) {
      if (field.disabled || (field instanceof HTMLInputElement && field.type === "hidden")) return;

      let message = "";
      if (field.required && !field.value.trim()) {
        message = "Please complete this required field.";
      } else if (field instanceof HTMLInputElement && field.type === "email" && field.value && !field.validity.valid) {
        message = "Enter a valid email address, or leave this field blank.";
      } else if (
        field === phoneInput &&
        field.value &&
        (!/^\+?[\d\s().-]+$/.test(field.value.trim()) ||
          field.value.replace(/\D/g, "").length < 7 ||
          field.value.replace(/\D/g, "").length > 15)
      ) {
        message = "Enter a valid phone number with 7 to 15 digits.";
      } else if (field === quantityInput && !field.validity.valid) {
        message = "Choose a quantity from 1 to 99.";
      } else if (field === deliveryDateInput && field.value && field.value < deliveryDateInput.min) {
        message = "Choose today or a date in the future.";
      }

      if (message) {
        showFieldError(field, message);
        invalidFields.push(field);
      }
    }
  });

  return invalidFields;
}

if (orderForm) {
  orderForm.addEventListener("input", (event) => {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement || event.target instanceof HTMLTextAreaElement) {
      clearFieldError(event.target);
      if (formStatus) formStatus.hidden = true;
    }
  });

  orderForm.addEventListener("change", (event) => {
    if (event.target instanceof HTMLSelectElement) {
      clearFieldError(event.target);
      if (formStatus) formStatus.hidden = true;
    }
  });

  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formStatus) formStatus.hidden = true;

    const invalidFields = validateForm();
    if (invalidFields.length > 0) {
      invalidFields[0].focus();
      return;
    }

    if (formStatus) {
      formStatus.textContent =
        "Your enquiry passed the demo checks in this browser. Nothing has been sent or received; a backend or form service is needed to submit it to a bakery.";
      formStatus.hidden = false;
      formStatus.focus();
    }
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
