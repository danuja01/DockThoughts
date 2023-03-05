import express from 'express';

import {
  getAllThoughts,
  createThought,
  getThoughtById,
  updateThoughtById,
  deleteThoughtById,
} from '../controllers/thoughtsController.js';

const router = express.Router();

// get all thoughts
router.get('/', getAllThoughts);

// create a new thought
router.post('/', createThought);

// get a single thought by ID
router.get('/:id', getThoughtById);

// update a thought by ID
router.patch('/:id', updateThoughtById);

// delete a thought by ID
router.delete('/:id', deleteThoughtById);

export default router;
