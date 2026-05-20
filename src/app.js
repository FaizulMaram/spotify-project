const express = require('express');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth.route');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    console.log("HOME ROUTE HIT");
    res.send("Backend Working");
});

app.use("/api/auth", authRoute);
module.exports = app;