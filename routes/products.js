// routes/products.js
const express = require('express');
const Book = require('../models/Book'); // Import the Book model
const router = express.Router();

// Get all books (this is your "/products" endpoint)
router.get('/', async (req, res) => {
    try {
        // Fetch all books from the database
        const books = await Book.find();

        // Log the result to see what is returned
        console.log('Fetched Books:', books);

        if (!books || books.length === 0) {
            return res.status(404).json({ message: 'No books found.' });
        }

        // Return books as JSON
        res.json(books);
    } catch (error) {
        // Log the error to see what went wrong
        console.error('Error fetching books:', error);

        // Return error message in case of failure
        res.status(500).json({ message: error.message });
    }
});

// Get a specific book based on ID
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findOne({ _id: req.params.id });
        if (!book) {
            return res.status(404).json({ message: 'Book not found.' });
        }
        res.json(book);
    } catch (error) {
        console.error('Error fetching book by ID:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
