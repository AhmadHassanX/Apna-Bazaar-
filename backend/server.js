const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// --- ROUTES ---

// 1. PRODUCTS
// Get All Products
app.get('/api/products', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM products');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get Single Product
app.get('/api/products/:id', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ error: 'Product not found' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add Product (Vendor)
app.post('/api/products', async (req, res) => {
    const { name, description, price, category, image, rating, stock, vendor, tags } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO products (name, description, price, category, image, rating, stock, vendor_name, tags) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [name, description, price, category, image, rating, stock, vendor, tags.join(',')]
        );
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update Product
app.put('/api/products/:id', async (req, res) => {
    const { name, description, price, category, image, rating, stock, vendor, tags } = req.body;
    try {
        await db.query(
            'UPDATE products SET name=?, description=?, price=?, category=?, image=?, rating=?, stock=?, vendor_name=?, tags=? WHERE id=?',
            [name, description, price, category, image, rating, stock, vendor, tags.join(','), req.params.id]
        );
        res.json({ message: 'Product updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete Product
app.delete('/api/products/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM products WHERE id = ?', [req.params.id]);
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get User Cart
app.get('/api/cart', async (req, res) => {
    const { email } = req.query;
    try {
        let query = 'SELECT * FROM cart';
        let params = [];

        if (email) {
            query += ' WHERE user_email = ?';
            params.push(email);
        }

        const [rows] = await db.query(query, params);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add to Cart
app.post('/api/cart', async (req, res) => {
    const { loggedInUser, CartProductId, name, price, image, category, rating, quantity } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO cart (user_email, product_id, name, price, image, category, rating, quantity) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [loggedInUser, CartProductId, name, price, image, category, rating, quantity || 1]
        );
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Remove from Cart
app.delete('/api/cart/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM cart WHERE id = ?', [req.params.id]);
        res.json({ message: 'Item removed from cart' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3. AUTH (Basic)
// Signup
app.post('/api/auth/signup', async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        // Check if user exists
        const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length > 0) return res.status(400).json({ error: 'User already exists' });

        const [result] = await db.query(
            'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
            [name, email, password, role || 'customer']
        );
        res.status(201).json({ message: 'User created' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [users] = await db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
        if (users.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

        // Return user info (excluding password)
        const user = users[0];
        const { password: _, ...userInfo } = user;
        res.json(userInfo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
