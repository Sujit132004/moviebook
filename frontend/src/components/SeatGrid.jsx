import React from "react";
import Seat from "./Seat";

const SeatGrid = ({ seats, selectedSeats, onSeatClick }) => {

    console.log("seats:",seats)
  return (
    <div className="grid grid-cols-10 gap-4 mb-6 justify-center">
      { Array.isArray(seats) &&  seats.map((seat) => (
        <Seat
          key={seat._id}
          seat={seat}
          isSelected={selectedSeats.includes(seat._id)}
          onClick={() => onSeatClick(seat._id)}
        />
      ))}
    </div>
  );
};

export default SeatGrid;
