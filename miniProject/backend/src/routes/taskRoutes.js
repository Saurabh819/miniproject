const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET all tasks
router.get('/gettask', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new task


module.exports = router;
