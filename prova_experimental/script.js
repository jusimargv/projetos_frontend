const productForm = document.getElementById('productForm');
const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];

productForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const price = parseFloat(document.getElementById('productPrice').value).toFixed(2);
    const available = document.getElementById('productAvailable').value === 'yes' ? 'Sim' : 'Não';

    const newRow = productTable.insertRow();
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = description;
    newRow.insertCell(2).innerText = price;
    newRow.insertCell(3).innerText = available;

    productForm.reset();
    sortTable(0); // Ordena por nome após adicionar um novo produto
});

function sortTable(columnIndex) {
    const rows = Array.from(productTable.rows);
    const isNumericColumn = columnIndex === 2; // Coluna de preço é numérica
    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].innerText;
        const bText = b.cells[columnIndex].innerText;
        return isNumericColumn ? parseFloat(aText) - parseFloat(bText) : aText.localeCompare(bText);
    });
    rows.forEach(row => productTable.appendChild(row));
}

function showForm() {
    productForm.scrollIntoView({ behavior: 'smooth' });
}
