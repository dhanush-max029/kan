function calculateBill() {

  var qty1 = parseInt(document.getElementById("quantity1").value) || 0;
  var qty2 = parseInt(document.getElementById("quantity2").value) || 0;

  var price1 = parseFloat(document.getElementById("price1").value) || 0;
  var price2 = parseFloat(document.getElementById("price2").value) || 0;

  var total1 = qty1 * price1;
  var total2 = qty2 * price2;

  document.getElementById("total1").textContent = total1.toFixed(2);
  document.getElementById("total2").textContent = total2.toFixed(2);

  var subtotal = total1 + total2;
  var tax = subtotal * 0.10;
  var total = subtotal + tax;

  document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("tax").textContent = tax.toFixed(2);
  document.getElementById("total").textContent = total.toFixed(2);
  document.getElementById("total-rupees").textContent = "Rs. " + total.toFixed(2);
}
