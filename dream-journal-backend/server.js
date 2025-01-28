const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://dj:dj@dreamjournal.creec.mongodb.net/?retryWrites=true&w=majority&appName=Dreamjournal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Define the Dream schema and model
const dreamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Dream = mongoose.model('Dream', dreamSchema);

// Route to add a new dream
app.post('/api/dreams', async (req, res) => {
  try {
    const { title, description } = req.body;

    // Validate request data
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    const dream = new Dream({ title, description });
    await dream.save();

    res.status(201).json(dream); // Respond with the created dream
  } catch (error) {
    res.status(500).json({ message: 'Failed to save dream', error: error.message });
  }
});

// Route to fetch all dreams (optional, for listing dreams)
app.get('/api/dreams', async (req, res) => {
  try {
    const dreams = await Dream.find();
    res.status(200).json(dreams);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch dreams', error: error.message });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
