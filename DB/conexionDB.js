const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://UTS:uts2024@uts.ccyqodk.mongodb.net/Dev2024E192?retryWrites=true&w=majority&appName=UTS")
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.error("Error connecting to database:", err);
    });
