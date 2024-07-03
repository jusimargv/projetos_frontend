import React, { useState } from 'react';

function ProductForm({ addProduct }) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({ ...product, dateAdded: new Date(), sales: Math.floor(Math.random() * 100), stock: Math.floor(Math.random() * 100) });
        setProduct({ name: '', description: '', price: '', currency: 'BRL', available: 'yes' });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-5">
            <div className="mb-3">
                <label htmlFor="productName" className="form-label">Nome do Produto:</label>
                <input type="text" id="productName" name="name" className="form-control" value={product.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="productDescription" className="form-label">Descrição do Produto:</label>
                <input type="text" id="productDescription" name="description" className="form-control" value={product.description} onChange={handleChange} required />
            </div>
            <div className="mb-3 input-group">
                <span className="input-group-text">R$</span>
                <input type="number" id="productPrice" name="price" className="form-control" step="0.01" value={product.price} onChange={handleChange} required />
                <select id="currency" name="currency" className="form-select" value={product.currency} onChange={handleChange} required>
                    <option value="BRL">BRL</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="AUD">AUD</option>
                    <option value="CAD">CAD</option>
                    <option value="CHF">CHF</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="productAvailable" className="form-label">Disponível para Venda:</label>
                <select id="productAvailable" name="available" className="form-select" value={product.available} onChange={handleChange} required>
                    <option value="yes">Sim</option>
                    <option value="no">Não</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Registrar Produto</button>
        </form>
    );
}

export default ProductForm;
