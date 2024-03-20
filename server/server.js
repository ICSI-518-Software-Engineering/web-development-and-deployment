require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const connectDB = require('./config/dbConn')
const Item = require('./models/Item')

const app = express();
const PORT = 5000;

connectDB()

app.use(cors())

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Catch-all route to serve the index.html file for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Parse JSON bodies
app.use(express.json());

app.post('/create-item', upload.single('image'), async (req, res) => {
    const { name, quantity } = req.body;
    const image = req.file.filename;
  
    try {
      const newItem = new Item({
        name,
        quantity,
        image
      });
  
      await newItem.save();
      console.log('Item saved to MongoDB:', newItem);
  
      res.json({ message: 'Item created successfully' });
    } catch (error) {
      console.error('Error saving item to MongoDB:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

app.get('/get-items', async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (error) {
      console.error('Error fetching items from MongoDB:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

app.patch('/update-item/:id', async (req, res) => {
    const { id } = req.params;
    const { name, quantity } = req.body;
  
    try {
      const updatedItem = await Item.findByIdAndUpdate(id, { name, quantity }, { new: true });
      
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.json(updatedItem);
    } catch (error) {
      console.error('Error updating item:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
app.delete('/delete-item/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedItem = await Item.findByIdAndDelete(id);
  
      if (!deletedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.json({ message: 'Item deleted successfully' });
    } catch (error) {
      console.error('Error deleting item:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  
  mongoose.connection.on('error', err => {
    console.log(err)
  })
