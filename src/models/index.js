import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

try {
    mongoose.connect('mongodb+srv://monishasukumaran07:yEBNhQiulsZQgGIe@dblearn.zpcyadt.mongodb.net/password-reset');
    console.log("moongoose Connected")
} catch (error) {
    console.log(error)
}

export default mongoose