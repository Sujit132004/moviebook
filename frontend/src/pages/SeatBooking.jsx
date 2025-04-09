import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import axios from "axios";
import SeatGrid from "../components/SeatGrid";
import BookingControls from "../components/BookingControls";
import SelectedSeatList from "../components/SelectedSeatList";
import AddSeats from "../components/AddSeats";

const SeatBooking = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const fetchSeats = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/seats");
      console.log("Fetched seats from backend:", response.data);
      setSeats(response.data);
    } catch (error) {
      console.error("Failed to fetch seats", error);
    }
  };


  const handleSeatClick = (seatId) => {
    const isSelected = selectedSeats.includes(seatId);
    if (isSelected) {
      setSelectedSeats((prev) => prev.filter((id) => id !== seatId));
    } else {
      setSelectedSeats((prev) => [...prev, seatId]);
    }
  };

  const handleBookSeats = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/book-seats",
        {
          seatIds: selectedSeats,
        }
      );
      toast.success(response.data.message || "Booking confirmed!");
      setSelectedSeats([]);
      fetchSeats(); // Refresh seat data
    } catch (error) {
      console.error("Booking failed", error);
      toast.error(error.response?.data?.error || "Booking failed!");
    }
  };

  useEffect(() => {
    console.log("useEffect triggered");
    fetchSeats();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">Seat Booking</h1>
        <SeatGrid
          seats={[...seats].sort((a, b) => Number(a.seatNumber) - Number(b.seatNumber))}
          selectedSeats={selectedSeats}
          onSeatClick={handleSeatClick}
        />

   
        <BookingControls
          onBook={handleBookSeats}
          isDisabled={selectedSeats.length === 0}
        />

        <AddSeats/>
      </div>

      

      <SelectedSeatList
         seats={seats || []}
         selectedSeats={selectedSeats || []}
        onRemove={(id) =>
          setSelectedSeats((prev) => prev.filter((seatId) => seatId !== id))
        }
      />
    </div>
  );
};

export default SeatBooking;
