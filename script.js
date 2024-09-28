function calculateTotal() {
    // Get all the input values
    let earning = parseFloat(document.getElementById('earning').value);
    let minusEarning = parseFloat(document.getElementById('minusEarning').value);
    let toll = parseFloat(document.getElementById('toll').value);
    let petrol = parseFloat(document.getElementById('petrol').value);
    let cash = parseFloat(document.getElementById('cash').value);
    let minusCash = parseFloat(document.getElementById('minusCash').value);
    let bachat = parseFloat(document.getElementById('bachat').value);
    let dhulai = parseFloat(document.getElementById('dhulai').value);

    // Calculate the total by subtracting minus earning, cash, and bachat
    let total = (earning - minusEarning) + toll + petrol - (cash - minusCash) - bachat + dhulai;

    // Display the total
    document.getElementById('total').textContent = total;
}
