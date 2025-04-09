const mongoose=require('mongoose');

const SeatSchema=new mongoose.Schema({
    seatNumber:String,
    status:{
        type:String,
        enum:['available','booked'],
        default:'available',
    },
    bookedBy:String
});

module.exports=mongoose.model('Seat',SeatSchema);