import 'dotenv/config';
import mongoose from 'mongoose';
import app from './src/app.js';

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect("mongodb+srv://vandans304_db_user:8OhsUcv1YRd1JQOW@cluster0.rwftwzi.mongodb.net/?appName=Cluster0")
  .then(() => {
    console.log('✅ MongoDB connected');
    // Start server only after DB connection
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1);
  });
