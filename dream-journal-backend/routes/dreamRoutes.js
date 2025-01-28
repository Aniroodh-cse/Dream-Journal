const express = require('express');
const router = express.Router();
const Dream = require('../models/Dream');

// Get all dreams
router.get('/', async (req, res) => {
  try {
    const dreams = await Dream.find();
    res.json(dreams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new dream
router.post('/', async (req, res) => {
  const { title, description, emotions, tags } = req.body;
  const dream = new Dream({ title, description, emotions, tags });

  try {
    const newDream = await dream.save();
    res.status(201).json(newDream);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a dream
router.delete('/:id', async (req, res) => {
  try {
    await Dream.findByIdAndDelete(req.params.id);
    res.json({ message: 'Dream deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
