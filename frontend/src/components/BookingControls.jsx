import React from "react";

const BookingControls = ({ onBook, isDisabled }) => {
  return (
    <div className="mt-6">
      <button
        onClick={onBook}
        disabled={isDisabled}
        className={`px-6 py-2 rounded-lg text-white font-semibold transition-all duration-200 cursor-pointer ${
          isDisabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingControls;
