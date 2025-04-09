const mongoose=require('mongoose');
const Seat=require("../models/Seat");

exports.addSeats=async(req,res)=>{
    try{
        const {count}=req.body;
        const existingSeats=await Seat.countDocuments();
        const newSeats=[];

        for(let i=1;i<=count;i++){
            newSeats.push({seatNumber:existingSeats+ i});
        }

        const seats=await Seat.insertMany(newSeats);

        return res.status(201).json(seats);
    }

    catch(err){
        res.status(500).json({
            message:'Error adding Seats',
            error:err.message,
        })
    }

};

exports.getSeats=async(req,res)=>{
    try{
        const seats=await Seat.find().sort('seatNumber');

        return res.json(seats);
    }

    catch(err){
        return res.status(500).hjson({
            message:'Error Fetching seats',
            error:err.message,
        });
    }

};


exports.bookSeats = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
  
    try {
      const { seatIds } = req.body;
  
      if (!Array.isArray(seatIds) || seatIds.length === 0) {
        throw new Error("Seat IDs must be a non-empty array");
      }
  
      // Check availability in transaction session
      const seats = await Seat.find({
        _id: { $in: seatIds },
        status: 'available'
      }).session(session);
  
      // If any seat is already booked, abort
      if (seats.length !== seatIds.length) {
        throw new Error("One or more seats already booked");
      }
  
      // Mark seats as booked
      await Seat.updateMany(
        { _id: { $in: seatIds } },
        { $set: { status: 'booked' } },
        { session }
      );
  
      // Commit the transaction
      await session.commitTransaction();
      session.endSession();
  
      return res.status(200).json({
        message: 'Seats booked Successfully!',
      });
  
    } catch (err) {
      // Abort on any failure
      console.log(err);
      await session.abortTransaction();
      session.endSession();
  
      return res.status(400).json({
        message: 'Booking Failed!',
        error: err.message,

      });
    }
  };