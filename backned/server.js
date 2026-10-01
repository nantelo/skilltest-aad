
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
res.send("Library Management System API is running");
});
const PORT = process.env.PORT || 5000;

const libraryRoutes = require("./routes/libraryRoutes");
app.use("/api/libraries", libraryRoutes);

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
