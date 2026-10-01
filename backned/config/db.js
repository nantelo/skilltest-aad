const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const db = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await db.connect(process.env.MONGO);
        console.log(`MongoDB Connected successfully`);
        
        }

    catch(error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports=connectDB;