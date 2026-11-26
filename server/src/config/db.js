import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`Connect To Mongodb Successfully`);
    } catch (error) {
        console.error(`Failed To connect DB : ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;