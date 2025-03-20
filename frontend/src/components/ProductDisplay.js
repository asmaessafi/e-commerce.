import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProductCard = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    text-align: center;
`;

const ProductDisplay = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                setError('Error fetching products. Please try again later.');

                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            {loading && <p>Loading products...</p>}
            {error && <p>{error}</p>}
            {products.map((product) => (

                <ProductCard key={product._id}>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <p>{product.description}</p>
                    <img src={`data:image/jpeg;base64,${product.originalImage}`} alt={product.name} style={{ width: '100px' }} />
                </ProductCard>
            ))}
        </div>
    );
};

export default ProductDisplay;
