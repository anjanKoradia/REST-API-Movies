require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const initRoute = require("./routes");
const path = require("path");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3000;

/* ---------------------------------------- 
  Database connection 
---------------------------------------- */
const url = "mongodb://localhost/node_rest_credence_analytics_company";

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
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
app.use(errorHandler);

// Routes
initRoute(app);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
