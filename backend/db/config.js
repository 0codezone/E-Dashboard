import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `Connection to MongoDB database Success: ${conn.connection.host}`
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw error; // Propagate the error to the calling code.
  }
};

export default connectDB;
