const productForm = document.getElementById('productForm');
const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
const newProductFields = document.getElementById('newProductFields');

productForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addProductToTable(
        document.getElementById('productName').value,
        document.getElementById('productDescription').value,
        parseFloat(document.getElementById('productPrice').value).toFixed(2),
        document.getElementById('currency').value,
        document.getElementById('productAvailable').value === 'yes' ? 'Sim' : 'Não'
    );
    productForm.reset();
    sortTable(0); // Ordena por nome após adicionar um novo produto
});

function sortTable(columnIndex) {
    const rows = Array.from(productTable.rows);
    const isNumericColumn = columnIndex === 2; // Coluna de preço é numérica
    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].innerText;
        const bText = b.cells[columnIndex].innerText;
        return isNumericColumn ? parseFloat(aText.split(' ')[1]) - parseFloat(bText.split(' ')[1]) : aText.localeCompare(bText);
    });
    rows.forEach(row => productTable.appendChild(row));
}

function showForm() {
    productForm.scrollIntoView({ behavior: 'smooth' });
}

function addProductFields() {
    newProductFields.innerHTML = ''; // Limpa os campos anteriores

    const fieldContainer = document.createElement('div');
    fieldContainer.className = 'input-group mb-3';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'form-control';
    nameInput.placeholder = 'Nome do Produto';
    nameInput.required = true;

    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.className = 'form-control';
    descriptionInput.placeholder = 'Descrição do Produto';
    descriptionInput.required = true;

    const priceInput = document.createElement('input');
    priceInput.type = 'number';
    priceInput.className = 'form-control';
    priceInput.placeholder = 'Valor do Produto';
    priceInput.step = '0.01';
    priceInput.required = true;

    const currencySelect = document.createElement('select');
    currencySelect.className = 'form-select';
    currencySelect.required = true;
    const currencies = ['BRL', 'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF'];
    currencies.forEach(currency => {
        const option = document.createElement('option');
        option.value = currency;
        option.text = currency;
        currencySelect.appendChild(option);
    });

    const availableSelect = document.createElement('select');
    availableSelect.className = 'form-select';
    availableSelect.required = true;
    const availableOptions = [
        { value: 'yes', text: 'Sim' },
        { value: 'no', text: 'Não' }
    ];
    availableOptions.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.text = optionData.text;
        availableSelect.appendChild(option);
    });

    const confirmButton = document.createElement('button');
    confirmButton.className = 'btn btn-primary';
    confirmButton.innerText = 'Confirmar Adição';
    confirmButton.onclick = function() {
        addProductToTable(
            nameInput.value,
            descriptionInput.value,
            parseFloat(priceInput.value).toFixed(2),
            currencySelect.value,
            availableSelect.value === 'yes' ? 'Sim' : 'Não'
        );
        newProductFields.innerHTML = ''; // Limpa os campos após adicionar o produto
        sortTable(0); // Ordena por nome após adicionar um novo produto
    };

    fieldContainer.appendChild(nameInput);
    fieldContainer.appendChild(descriptionInput);
    fieldContainer.appendChild(priceInput);
    fieldContainer.appendChild(currencySelect);
    fieldContainer.appendChild(availableSelect);
    fieldContainer.appendChild(confirmButton);

    newProductFields.appendChild(fieldContainer);
}

function addProductToTable(name, description, price, currency, available) {
    const newRow = productTable.insertRow();
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = description;
    newRow.insertCell(2).innerText = `${currency} ${price}`;
    newRow.insertCell(3).innerText = available;
}
