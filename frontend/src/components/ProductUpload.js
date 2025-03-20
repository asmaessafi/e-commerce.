import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext'; // Import the AppContext
import axios from 'axios';
import styled from 'styled-components';

const UploadContainer = styled.div`
    border: 2px dashed #007bff;
    padding: 20px;
    text-align: center;
    margin: 20px;
`;

const ProductUpload = () => {
    const { isAdmin } = useContext(AppContext); // Access context
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imagePreview, setImagePreview] = useState(null);

    const onDrop = (acceptedFiles) => {
        setFile(acceptedFiles[0]);
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (acceptedFiles[0]) {
            reader.readAsDataURL(acceptedFiles[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert('Please upload an image file.');
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            alert('File size exceeds 5MB limit.');
            return;
        }
        const fileType = file.type.split('/')[0];
        if (fileType !== 'image') {
            alert('Please upload a valid image file.');
            return;
        }
        if (!isAdmin) {
            alert('You do not have permission to upload products.');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);

        try {
            await axios.post('http://localhost:5000/api/products', formData);
            alert('Product uploaded successfully!');
        } catch (error) {
            console.error('Error uploading product:', error);
        }
    };

    return (
        <UploadContainer>
            <h2>Upload Product</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div>
                    <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div>
                    <input type="file" onChange={(e) => onDrop(e.target.files)} required />
                </div>
                {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '100px', margin: '10px 0' }} />}
                <button type="submit">Upload Product</button>
            </form>
        </UploadContainer>
    );
};

export default ProductUpload;
