const productForm = document.getElementById('productForm');
const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
const newProductFields = document.getElementById('newProductFields');
let products = [];
let sortOrder = true; // true para ascendente, false para descendente

productForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const product = {
        name: document.getElementById('productName').value,
        description: document.getElementById('productDescription').value,
        price: parseFloat(document.getElementById('productPrice').value).toFixed(2),
        currency: document.getElementById('currency').value,
        available: document.getElementById('productAvailable').value === 'yes' ? 'Sim' : 'Não',
        dateAdded: new Date(),
        sales: Math.floor(Math.random() * 100), // Simulação de vendas
        stock: Math.floor(Math.random() * 100) // Simulação de estoque
    };
    products.push(product);
    addProductToTable(product);
    productForm.reset();
    sortProducts(); // Ordena após adicionar um novo produto
});

function addProductToTable(product) {
    const newRow = productTable.insertRow();
    newRow.insertCell(0).innerText = product.name;
    newRow.insertCell(1).innerText = product.description;
    newRow.insertCell(2).innerText = `${product.currency} ${product.price}`;
    newRow.insertCell(3).innerText = product.available;
}

function sortProducts() {
    const sortOption = document.getElementById('sortOptions').value;
    switch (sortOption) {
        case 'nameAsc':
            products.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'nameDesc':
            products.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'priceAsc':
            products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            break;
        case 'priceDesc':
            products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            break;
        case 'recent':
            products.sort((a, b) => b.dateAdded - a.dateAdded);
            break;
        case 'bestSelling':
            products.sort((a, b) => b.sales - a.sales);
            break;
    }
    updateProductTable();
}

function updateProductTable() {
    productTable.innerHTML = '';
    products.forEach(product => addProductToTable(product));
}

function toggleProductFields() {
    if (newProductFields.innerHTML === '') {
        addProductFields();
    } else {
        newProductFields.innerHTML = '';
    }
}

function addProductFields() {
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
    confirmButton.onclick = function () {
        const product = {
            name: nameInput.value,
            description: descriptionInput.value,
            price: parseFloat(priceInput.value).toFixed(2),
            currency: currencySelect.value,
            available: availableSelect.value === 'yes' ? 'Sim' : 'Não',
            dateAdded: new Date(),
            sales: Math.floor(Math.random() * 100), // Simulação de vendas
            stock: Math.floor(Math.random() * 100) // Simulação de estoque
        };
        products.push(product);
        addProductToTable(product);
        newProductFields.innerHTML = ''; // Limpa os campos após adicionar o produto
        sortProducts(); // Ordena após adicionar um novo produto
    };

    fieldContainer.appendChild(nameInput);
    fieldContainer.appendChild(descriptionInput);
    fieldContainer.appendChild(priceInput);
    fieldContainer.appendChild(currencySelect);
    fieldContainer.appendChild(availableSelect);
    fieldContainer.appendChild(confirmButton);

    newProductFields.appendChild(fieldContainer);
}
