import React from "react";

const SelectedSeatList = ({ selectedSeats, seats, onRemove }) => {
  const selectedSeatObjects = seats.filter((seat) =>
    selectedSeats.includes(seat._id)
  );

  return (
    <div className="p-4 bg-white shadow-lg rounded-xl w-full md:w-1/3">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Selected Seats
      </h2>
      {selectedSeatObjects.length === 0 ? (
        <p className="text-gray-500">No seats selected.</p>
      ) : (
        <ul className="space-y-2">
          {selectedSeatObjects.map((seat) => (
            <li
              key={seat._id}
              className="flex justify-between items-center bg-blue-100 px-4 py-2 rounded-md"
            >
              <span className="font-medium">Seat {seat.seatNumber}</span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm"
                onClick={() => onRemove(seat._id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectedSeatList;
