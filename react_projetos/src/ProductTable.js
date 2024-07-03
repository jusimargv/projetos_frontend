import React, { useState } from 'react';

function ProductTable({ products }) {
    const [sortOption, setSortOption] = useState('nameAsc');

    const sortProducts = (products) => {
        switch (sortOption) {
            case 'nameAsc':
                return products.sort((a, b) => a.name.localeCompare(b.name));
            case 'nameDesc':
                return products.sort((a, b) => b.name.localeCompare(a.name));
            case 'priceAsc':
                return products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            case 'priceDesc':
                return products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            case 'recent':
                return products.sort((a, b) => b.dateAdded - a.dateAdded);
            case 'bestSelling':
                return products.sort((a, b) => b.sales - a.sales);
            default:
                return products;
        }
    };

    const sortedProducts = sortProducts([...products]);

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="sortOptions" className="form-label">Ordenar por:</label>
                <select id="sortOptions" className="form-select" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                    <option value="nameAsc">Nome (A-Z)</option>
                    <option value="nameDesc">Nome (Z-A)</option>
                    <option value="priceAsc">Preço (Menor para Maior)</option>
                    <option value="priceDesc">Preço (Maior para Menor)</option>
                    <option value="recent">Mais Recentes</option>
                    <option value="bestSelling">Mais Vendidos</option>
                </select>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Disponível</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProducts.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{`${product.currency} ${product.price}`}</td>
                            <td>{product.available}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;
