import React from "react";

const Seat = ({ seat, isSelected, onClick }) => {
  let bgColor = "bg-green-500"; // Available

  if (seat.status === "booked") {
    bgColor = "bg-red-500"; // Booked
  } else if (isSelected) {
    bgColor = "bg-blue-500"; // Selected
  }

  return (
    <div 
      className={`w-10 h-10 rounded-md flex items-center justify-center text-white font-bold shadow-md ${bgColor} hover:scale-105 transition-transform ${
        seat.status === "booked" ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      
      onClick={() => {
        if (seat.status !== "booked") onClick(seat._id);
      }}
    >
     
      {seat.seatNumber}
    </div>
  );
};

export default Seat;
