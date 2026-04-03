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

  const tax = subtotal * 0.003;
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
  
  // Collect selected items
  const selectedItems = [];
  const rows = document.querySelectorAll('tbody tr');
  
  rows.forEach((row) => {
    const quantityInput = row.querySelector('input[name^="quantity"]');
    const priceInput = row.querySelector('input[name^="price"]');
    const itemInput = row.querySelector('input[name^="item"]');
    
    if (quantityInput && priceInput && itemInput) {
      const quantity = parseFloat(quantityInput.value) || 0;
      const price = parseFloat(priceInput.value) || 0;
      
      if (quantity > 0) {
        const itemTotal = quantity * price;
        selectedItems.push({
          name: itemInput.value,
          quantity: quantity,
          price: price,
          total: itemTotal
        });
      }
    }
  });
  
  // Store bill data in localStorage
  const billData = {
    items: selectedItems,
    subtotal: parseFloat(document.getElementById('subtotal').textContent) || 0,
    tax: parseFloat(document.getElementById('tax').textContent) || 0,
    total: parseFloat(totalValue)
  };
  
  localStorage.setItem('billData', JSON.stringify(billData));
  
  window.location.href = 'billing.html';
}