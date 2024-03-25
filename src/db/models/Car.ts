import mongoose from "mongoose"

const CarSchema = new mongoose.Schema({
    name: {
        type : String,
        require : [true,'Please add a name'],
        unique : true,
        trim : true,
        maxlength:[50,'Name can not be more than 50 characters']
    },
    address:{
        type:String,
        required :[true,'Please add an address']
    },
    tel : {
        type :String,
        required :[true, 'Please add a telephone number']
    },
    car : {
        type : String,
        require : [true,'Please add a car\'s name'],
        unique : true,
        trim : true,
        maxlength:[50,'Car\'s can not be more than 50 characters']
    },
    dayRate: {
        type: Number,
        require : [true, 'Please add a day rate']
    },
    picture: {
        type: String,
        required: false,
    },
    topSpeed:{
        type: Number,
        require: [true, 'Please add car\'s speed (mph)']
    },
    seats: {
        type: Number,
        required: [true, "Please add number of seats"],
    },
    color: {
        type: String,
        require: false
    },
    fuelType:{
        type: String,
        require: false
    },
    cargoCapacity: {
        type: Number,
        require: false
    }
});

  const Car = mongoose.models.Car || mongoose.model("Car", CarSchema)
  export default Car