const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// routes
const authRoutes = require("./routes/auth");
const quizRoutes = require("./routes/quiz");

// variables
dotenv.config();
const app = express();
const port = process.env.PORT || 3333;
const uri = process.env.MONGO_URI;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);

mongoose
    .connect(uri)
    .then(() => {
        app.listen(port, () => console.log(`Server running on port ${port}`));
    })
    .catch((err) => console.error(err));
