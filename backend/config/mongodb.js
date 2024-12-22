import mongoose from "mongoose";

const connectDB = async () => {

    // if mongoDB connection is established then this function is executed
    mongoose.connection.on('connected', () => {
        console.log("DB connected");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)


}
export default connectDB;


