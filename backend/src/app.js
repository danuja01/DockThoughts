// import dependencies
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// import routes
import thoughtsRoutes from './routes/thoughtsRoutes.js';

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/thoughts', thoughtsRoutes);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB connection successful!');

    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
