import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';
import ProductFields from './ProductFields';

function App() {
    const [products, setProducts] = useState([]);
    const [showFields, setShowFields] = useState(false);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const toggleFields = () => {
        setShowFields(!showFields);
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Cadastro de Produtos</h1>
            <ProductForm addProduct={addProduct} />
            <h1 className="mb-4">Listagem de Produtos</h1>
            <button className="btn btn-success mb-3" onClick={toggleFields}>
                {showFields ? 'Cancelar' : 'Adicionar Novo Produto'}
            </button>
            {showFields && <ProductFields addProduct={addProduct} />}
            <ProductTable products={products} />
        </div>
    );
}

export default App;
