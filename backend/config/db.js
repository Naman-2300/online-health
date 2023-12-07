//Connection file to mongo db
import mongoose from "mongoose";


const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://naman:Shivparvati1@health.n9deyja.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

export default connectDB;
