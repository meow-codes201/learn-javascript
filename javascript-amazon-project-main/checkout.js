import { cart } from './data/cart.js';
import { products } from './data/products.js';
import { removeFromCart } from './data/cart.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { deliveryOptions } from './deliveryOptions.js';

// helper to format a delivery date
const formatDate = (d) => d.format('dddd, MMMM D');

let cartSummaryHTML = "";

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  // safer product lookup
  const matchingProduct = products.find(p => p.id === productId);
  if (!matchingProduct) return; // skip if product missing

  cartSummaryHTML += `
  <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
    <div class="delivery-date">
      Delivery date: ${formatDate(dayjs().add(7, 'day'))}
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image" src="${matchingProduct.image}" alt="${matchingProduct.name}">

      <div class="cart-item-details">
        <div class="product-name">${matchingProduct.name}</div>
        <div class="product-price">$${(matchingProduct.priceCents / 100).toFixed(2)}</div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${cartItem.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">Update</span>
          <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">Delete</span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">Choose a delivery option:</div>
        ${deliveryOptionsHTML(matchingProduct, cartItem)}
      </div>
    </div>
  </div>
  `;
});

document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

// wire up delete buttons
document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    if (container) container.remove();
  });
});

// wire up delivery option changes (radios)
document.querySelectorAll(".delivery-option-input").forEach((input) => {
  input.addEventListener('change', (e) => {
    const el = e.currentTarget;
    const productId = el.dataset.productId;
    const newDeliveryId = el.value;

    // mutate cart in-memory: find cart item and update deliveryOptionId
    const item = cart.find(ci => ci.productId === productId);
    if (item) {
      item.deliveryOptionId = newDeliveryId;
      // if you have a function to persist cart to server/localStorage, call it here
      console.log(`Updated cart item ${productId} -> delivery ${newDeliveryId}`);
    }
  });
});

/* ===== helpers ===== */

function deliveryOptionsHTML(matchingProduct, cartItem) {
  let html = '';
  deliveryOptions.forEach((deliveryOption) => {
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'day');
    const dateString = formatDate(deliveryDate);
    const priceString = deliveryOption.priceCents === 0
      ? 'FREE'
      : `$${(deliveryOption.priceCents / 100).toFixed(2)}`;

    const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

    // name must be unique per product so radios group correctly
    const radioName = `delivery-option-${matchingProduct.id}`;
    const radioId = `delivery-${matchingProduct.id}-${deliveryOption.id}`;

    html += `
      <label class="delivery-option" for="${radioId}">
        <input
          id="${radioId}"
          type="radio"
          class="delivery-option-input"
          name="${radioName}"
          data-product-id="${matchingProduct.id}"
          value="${deliveryOption.id}"
          ${isChecked ? 'checked' : ''} />
        <div class="delivery-option-meta">
          <div class="delivery-option-date">${dateString}</div>
          <div class="delivery-option-price">${priceString}</div>
        </div>
      </label>
    `;
  });
  return html;
}
