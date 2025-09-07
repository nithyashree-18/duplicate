function renderFoodDonations() {
  const list = document.getElementById('available-food-list');
  list.innerHTML = '';
  foodDonations.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'food-item';
    card.innerHTML = `
      <div class="food-details">
        <h4 class="food-title">${item.food_name}</h4>
        <p class="muted">Quantity: ${item.quantity}</p>
        <p class="muted">Address: ${item.address}</p>
        <p class="muted">Expires: ${item.expiryDate}</p>
        <div class="food-actions">
          <button class="btn btn-small" onclick="claimFood(${item.id})">Claim</button>
        </div>
      </div>
    `;
    list.appendChild(card);
  });
}

function renderClaimedFood() {
  const list = document.getElementById('claimed-food-list');
  list.innerHTML = '';
  claimedItems.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'food-item';
    card.innerHTML = `
      <div class="food-details">
        <h4 class="food-title">${item.food_name}</h4>
        <p class="muted">Quantity: ${item.quantity}</p>
        <p class="muted">Address: ${item.address}</p>
        <p class="muted">Expires: ${item.expiryDate}</p>
      </div>
    `;
    list.appendChild(card);
  });
}
