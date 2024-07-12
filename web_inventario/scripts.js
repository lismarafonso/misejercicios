document.getElementById('addShoeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').
