import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js';  //Alwayas make sure add .js
import * as Sentry from "@sentry/node";
import { clerkwebhooks } from './controllers/webHook.js';
import companyRoutes from './routes/companyRoutes.js';
import connectCloudinary from './config/cloudinary.js';
import jobRoutes from './routes/jobRoutes.js';

//Intialize Express
const app = express();

//Connect To Database
await connectDB();
//Connect To Cloudinary
await connectCloudinary();

//MiddleWares
app.use(cors());
app.use(express.json());

//Router
app.use('/api/company',companyRoutes);
app.use('/api/jobs',jobRoutes)

//Routes
app.get('/',(req,res)=>{
   res.send("API Working")
});

// Just for verification perpose
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post('/webhooks',clerkwebhooks);

//PORT
const PORT = process.env.PORT || 5000 ;

Sentry.setupExpressErrorHandler(app);

app.listen(PORT,()=>{console.log(`Server is running on Port ${PORT}`)});