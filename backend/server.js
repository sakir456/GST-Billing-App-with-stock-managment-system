import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connecttoMongoDB.js';
import authRoutes from "./routes/auth.routes.js";
import itemRoutes from "./routes/item.routes.js";
import partyRoutes from "./routes/party.routes.js";
import invoiceRoutes from "./routes/invoice.routes.js";

dotenv.config();  // This line loads the environment variables

const PORT = process.env.PORT || 6000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/item",itemRoutes)
app.use("/api/parties", partyRoutes)
app.use("/api/invoice", invoiceRoutes)



app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.listen(PORT, () => {
    connectToMongoDB()
  console.log(`Server is running on port ${PORT}`);
});