// Function to calculate bill
function calculateBill() {
  var subtotal = 0;
  var tax = 0;
  var total = 0;

  // Get all table rows
  var rows = document.querySelectorAll('tbody tr');

  // Iterate over each row (except last 4 rows)
  for (var i = 0; i < rows.length - 4; i++) {
    var row = rows[i];
    // Get quantity and price inputs
    var quantity = parseInt(row.querySelector('input[type="number"]').value);
    var price = parseFloat(row.querySelector('input[type="number"][name^="price"]').value);
// Calculate total for each item
var totalItem = quantity * price;
row.querySelector('td#total' + (i + 1)).textContent = totalItem.toFixed(2);

// Add to subtotal
subtotal += totalItem;
}

// Calculate tax and total
tax = subtotal * 0.1;
total = subtotal + tax;

// Update subtotal, tax, and total fields
document.getElementById('subtotal').textContent = subtotal.toFixed(2);
document.getElementById('tax').textContent = tax.toFixed(2);
document.getElementById('total').textContent = total.toFixed(2);
document.getElementById('total-rupees').textContent = `Rs. ${total.toFixed(2)}`;
}

// Add event listener to calculate button
document.querySelector('.button').addEventListener('click', calculateBill);

// Update price on quantity change
document.addEventListener('input', function(event) {
if (event.target.type === 'number' && event.target.name.startsWith('quantity')) {
  var quantity = parseInt(event.target.value);
  var priceInput = event.target.parentNode.parentNode.querySelector('input[type="number"][name^="price"]');
  var price = parseFloat(priceInput.value);
  var totalCell = event.target.parentNode.parentNode.querySelector('td[id^="total"]');
  totalCell.textContent = (quantity * price).toFixed(2);

  calculateBill(); // Update subtotal, tax, and total
}
}
);
function generateBill(){
  var total=document.getElementById('total').textContent;
  window.location.href='billing.html?total='+encodeURIComponent(total);
};