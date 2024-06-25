import express from 'express';

import cors from 'cors';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connecttoMongoDB.js';

dotenv.config();  // This line loads the environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    connectToMongoDB()
  console.log(`Server is running on port ${PORT}`);
});