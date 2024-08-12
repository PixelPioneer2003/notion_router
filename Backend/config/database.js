const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.mongo_url, {
    })
        .then(() => {
            console.log("Connection successful");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error.message);
            process.exit(1);
        });
}

module.exports = dbConnect;
