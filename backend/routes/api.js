const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const Product = require('../models/Product');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// POST /api/products
router.post('/products', upload.single('image'), async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const originalImage = req.file.buffer.toString('base64');

        // Apply filters using sharp
        const vintageGlow = await sharp(req.file.buffer)
            .sepia(0.3)
            .modulate({ brightness: 1.1 })
            .toBuffer()
            .then(data => data.toString('base64'));

        const crispModern = await sharp(req.file.buffer)
            .sharpen(1.5)
            .contrast(1.2)
            .toBuffer()
            .then(data => data.toString('base64'));

        const newProduct = new Product({
            name,
            price,
            description,
            originalImage,
            filteredImages: [vintageGlow, crispModern],
            timestamp: new Date()
        });

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error uploading product', error });
    }
});

// GET /api/products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
});

module.exports = router;
