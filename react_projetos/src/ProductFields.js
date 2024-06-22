import React, { useState } from 'react';

function ProductFields({ addProduct }) {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        currency: 'BRL',
        available: 'yes'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleAddProduct = () => {
        addProduct({ ...product, dateAdded: new Date(), sales: Math.floor(Math.random() * 100), stock: Math.floor(Math.random() * 100) });
        setProduct({ name: '', description: '', price: '', currency: 'BRL', available: 'yes' });
    };

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Nome do Produto" name="name" value={product.name} onChange={handleChange} required />
            <input type="text" className="form-control" placeholder="Descrição do Produto" name="description" value={product.description} onChange={handleChange} required />
            <input type="number" className="form-control" placeholder="Valor do Produto" name="price" step="0.01" value={product.price} onChange={handleChange} required />
            <select className="form-select" name="currency" value={product.currency} onChange={handleChange} required>
                <option value="BRL">BRL</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
            </select>
            <select className="form-select" name="available" value={product.available} onChange={handleChange} required>
                <option value="yes">Sim</option>
                <option value="no">Não</option>
            </select>
            <button className="btn btn-primary" onClick={handleAddProduct}>Confirmar Adição</button>
        </div>
    );
}

export default ProductFields;
