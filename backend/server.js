// server.js

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connecttoMongoDB.js';
import authRoutes from './routes/auth.routes.js';
import itemRoutes from './routes/item.routes.js';
import partyRoutes from './routes/party.routes.js';
import invoiceRoutes from './routes/invoice.routes.js';
import firmRoutes from './routes/firm.routes.js';
import bankRoutes from './routes/bank.routes.js';
import settingRoutes from './routes/setting.routes.js'
import purchaseinvoiceRoutes from './routes/purchaseinvoice.routes.js';

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 6000;
const app = express();

// Middleware
app.use(cors({ origin: ["http://localhost:5173", "https://salesmartfrontend-git-main-sakirs-projects-cdc511d6.vercel.app"],
    credentials: true,  
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"],
  
  }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/item', itemRoutes);
app.use('/api/parties', partyRoutes);
app.use('/api/invoice', invoiceRoutes);
app.use('/api/firm', firmRoutes); 
app.use('/api/bank',bankRoutes)
app.use('/api/settings',settingRoutes)
app.use('/api/purchaseinvoice', purchaseinvoiceRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start server and connect to database
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});

// import express from 'express';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectToMongoDB from './db/connecttoMongoDB.js';
// import authRoutes from "./routes/auth.routes.js";
// import itemRoutes from "./routes/item.routes.js";
// import partyRoutes from "./routes/party.routes.js";
// import invoiceRoutes from "./routes/invoice.routes.js";
// import firmRoutes from "./routes/firm.routes.js"

// dotenv.config();  // This line loads the environment variables

// const PORT = process.env.PORT || 6000;

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(cookieParser());

// app.use("/api/auth", authRoutes)
// app.use("/api/item",itemRoutes)
// app.use("/api/parties", partyRoutes)
// app.use("/api/invoice", invoiceRoutes)
// app.use("/api/firm",firmRoutes)



// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });


// app.listen(PORT, () => {
//     connectToMongoDB()
//   console.log(`Server is running on port ${PORT}`);
// });