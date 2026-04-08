const mongoose = require('mongoose');
const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // These options help with some Node 18+ and DNS issues
      family: 4, 
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Detailed help for the user
    if (error.message.includes('querySrv')) {
       console.error('TIP: This looks like a DNS/SRV record issue. Try using the "Standard Connection String" from MongoDB Atlas if this persists.');
    }
    process.exit(1);
  }
};

module.exports = connectDB;
