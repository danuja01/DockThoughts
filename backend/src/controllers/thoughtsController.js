import Thought from '../models/Thought.js';

const getAllThoughts = async (req, res) => {
  await Thought.find()
    .then((thoughts) => {
      res.status(200).json(thoughts);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Error getting thoughts' });
    });
};

const createThought = async (req, res) => {
  const newThought = new Thought({
    text: req.body.text,
    author: req.body.author,
  });

  await Thought.create(newThought)
    .then((thought) => {
      res.status(201).json(thought);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Error creating thought' });
    });
};

const getThoughtById = async (req, res) => {
  await Thought.findById(req.params.id)
    .then((thought) => {
      if (!thought) {
        res.status(404).json({ error: 'Thought not found' });
      } else {
        res.json(thought);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Error getting thought by ID' });
    });
};

const updateThoughtById = async (req, res) => {
  await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((thought) => {
      if (!thought) {
        res.status(404).json({ error: 'Thought not found' });
      } else {
        res.json(thought);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Error updating thought by ID' });
    });
};

const deleteThoughtById = async (req, res) => {
  await Thought.findByIdAndDelete(req.params.id)
    .then((thought) => {
      if (!thought) {
        res.status(404).json({ error: 'Thought not found' });
      } else {
        res.json(thought);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Error deleting thought by ID' });
    });
};

export {
  getAllThoughts,
  createThought,
  getThoughtById,
  updateThoughtById,
  deleteThoughtById,
};
