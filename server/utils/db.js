const { DB_URL } = require("../config");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(DB_URL);
    console.log("Connected to Database");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
  });
};
