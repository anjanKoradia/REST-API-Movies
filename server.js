const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const router = require("./routes");

const PORT = process.env.APP_PORT || 3000;

/* ---------------------------------------- 
  Database connection 
---------------------------------------- */
const url = process.env.DB_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection
  .once("open", () => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Connection failed...");
  });

// app config
global.appRoot = path.resolve(__dirname);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
