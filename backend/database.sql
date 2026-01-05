CREATE DATABASE IF NOT EXISTS ecommerce_db;
USE ecommerce_db;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('customer', 'vendor') DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products Table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(100),
    image VARCHAR(500),
    rating DECIMAL(2, 1) DEFAULT 0.0,
    stock INT DEFAULT 0,
    vendor_name VARCHAR(255),
    tags TEXT, -- Store as comma separated string or JSON
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cart Table
CREATE TABLE IF NOT EXISTS cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_email VARCHAR(255) NOT NULL,
    product_id INT NOT NULL,
    quantity INT DEFAULT 1,
    -- Denormalizing some fields for simpler frontend logic matching existing structure
    name VARCHAR(255),
    price DECIMAL(10, 2),
    image VARCHAR(500),
    category VARCHAR(100),
    rating DECIMAL(2, 1),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Initial Data (Optional - based on previous arrays)
INSERT INTO products (name, description, price, category, image, rating, stock, vendor_name, tags) VALUES 
('Embroidered Blouse', 'Silky blouse with intricate floral embroidery.', 2799.00, 'womens', 'https://media.istockphoto.com/id/1487690378/photo/green-hand-embroidered-sari-blouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=am4Y7ArLRLuLpyPUk8weXTww0Ys1gaCI4G7yWBld5UQ=', 4.5, 55, 'Ram Traders', 'blouse, formal, embroidery'),
('Bluetooth Speaker', 'Portable speaker with 20W bass.', 4499.00, 'electronics', 'https://media.istockphoto.com/id/924827878/photo/bluetooth-speaker-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=ojPL4dBIyFYMew9mVV8eQ2zi2cJNSSt_3CNywq5f1ks=', 4.6, 65, 'TechWorld', 'audio, portable');
