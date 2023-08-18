const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises'); // Requires Node.js 16+ for 'fs/promises'

const app = express();
app.use(bodyParser.json());

const BOOKS_JSON_FILE = 'books.json';

// Load books from JSON file
async function loadBooksFromFile() {
  try {
    const data = await fs.readFile(BOOKS_JSON_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading books:', error);
    return [];
  }
}

// Save books to JSON file
async function saveBooksToFile(books) {
  try {
    await fs.writeFile(BOOKS_JSON_FILE, JSON.stringify(books, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving books:', error);
  }
}

// Get all books
app.get('/books', async (req, res) => {
  const books = await loadBooksFromFile();
  res.json(books);
});

// Create a new book
app.post('/books', async (req, res) => {
  const books = await loadBooksFromFile();
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  await saveBooksToFile(books);
  res.status(201).json(newBook);
});

// ... (other routes for updating and deleting books)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
