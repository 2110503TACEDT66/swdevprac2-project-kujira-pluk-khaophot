import mongoose from "mongoose"

const RentSchema = new mongoose.Schema({
    rentDate: {
        type:Date,
        required:true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    car:{
        type:mongoose.Schema.ObjectId,
        ref:'Car',
        required:true
    },
    createAt: {
        type:Date,
        default:Date.now
    },
});

const Rent = mongoose.models.Rent || mongoose.model("Rent", RentSchema)
  export default Rent