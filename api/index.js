import express from  'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/userRoute.js'
import authRoutes from  './routes/authRoute.js'
import postRoutes from  './routes/postRoute.js'
import commentRoutes from './routes/commentRoute.js'
import cookieParser from 'cookie-parser';
dotenv.config();


mongoose.connect(process.env.MONGODB).then(() => {
    console.log("Connected to MongoDB");
    }).catch((err) => {console.error(err);});

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

app.use('/api/user',userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/post",postRoutes);
app.use('/api/comment', commentRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });