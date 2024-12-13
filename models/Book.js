const mongoose = require('mongoose');

// Define the cover image schema
const coverImageSchema = new mongoose.Schema({
    url: { type: String, required: true },
    alt: { type: String, required: true }
});

// Define the book schema
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
    cover_image: { type: coverImageSchema, required: true },
    published_year: { type: Number, required: true }
});

// Create and export the Book model
module.exports = mongoose.model('Book', bookSchema);
