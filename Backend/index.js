const express = require('express');
const app = express();

require("dotenv").config();
const port = process.env.port || 4000;

app.use(express.json());  

// Importing routes
const adminRoutes = require("./routes/admin");
const clientRoutes = require("./routes/client");

// Using routes
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/client', clientRoutes);

app.listen(port, () => {
    console.log("Server started at port no " + port);
});

const dbConnect = require("./config/database");
dbConnect();

// Root route
app.get("/", (req, res) => {
    res.send('<h1>This is h1</h1>');
});