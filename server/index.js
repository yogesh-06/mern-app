const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const { PORT, DB_URL } = require("./config");
const cartRoute = require("./routes/cart");
const userRoute = require("./routes/user");
const productRoute = require("./routes/products");

const app = express();
const port = PORT;

app.use(cors());
app.use(express.json());

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(DB_URL);
    console.log("Connected to database");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

app.use(express.json());
app.use("/api/test/", (req, res) =>
  res.send(`it's testing route for port ${port}`)
);

app.use("/api/user/", userRoute);
app.use("/api/cart/", cartRoute);
app.use("/api/products/", productRoute);

app.use((err, res, req, next) => {
  console.error("===Error ==> ", err.stack);
  const errorStatus = err.status || 500;
  const errorMsg = err.status || "Something went wrong";
  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMsg,
    stack: err.stack,
  });
});

app.all("*", (res, req, next) => {
  const originalUrl = req.socket.parser.socket.parser.incoming.originalUrl;
  const err = new Error(`Route ${originalUrl} not found`);
  err.statusCode = 404;
  next(err);
});

app.listen(port, () => {
  connectDB();
  console.log("Server is running on port: ", port);
});
