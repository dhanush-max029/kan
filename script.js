function calculateBill() {
  let subtotal = 0;
  const rows = document.querySelectorAll('tbody tr');

  rows.forEach((row) => {
    const quantityInput = row.querySelector('input[name^="quantity"]');
    const priceInput = row.querySelector('input[name^="price"]');
    const totalCell = row.querySelector('td[id^="total"]');

    if (!quantityInput || !priceInput || !totalCell) {
      return;
    }

    const quantity = parseFloat(quantityInput.value) || 0;
    const price = parseFloat(priceInput.value) || 0;
    const itemTotal = quantity * price;

    totalCell.textContent = itemTotal.toFixed(2);
    subtotal += itemTotal;
  });

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  document.getElementById('subtotal').textContent = subtotal.toFixed(2);
  document.getElementById('tax').textContent = tax.toFixed(2);
  document.getElementById('total').textContent = total.toFixed(2);
  document.getElementById('total-rupees').textContent = `Rs. ${total.toFixed(2)}`;
}

const calculateButton = document.querySelector('.button');
if (calculateButton) {
  calculateButton.addEventListener('click', calculateBill);
}

document.addEventListener('input', (event) => {
  const target = event.target;
  if (!target || target.type !== 'number') return;

  if (target.name.startsWith('quantity') || target.name.startsWith('price')) {
    calculateBill();
  }
});

window.addEventListener('DOMContentLoaded', calculateBill);

function generateBill() {
  const totalValue = document.getElementById('total')?.textContent || '0.00';
  window.location.href = 'billing.html?total=' + encodeURIComponent(totalValue);
}