import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const connectDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log('KONEKK BOSS')
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}
export default connectDb