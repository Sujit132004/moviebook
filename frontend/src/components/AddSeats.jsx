import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const AddSeats = () => {
  const [count, setCount] = useState("");

  const handleAddSeats = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/add-seats", {
        count: parseInt(count),
      });
      toast.success("Seats added Successfully!");
      setCount("");
    } catch (error) {
      toast.error("Error occured while adding seats!");
    }
  };

  return (
    <div className="mt-8 p-4 border rounded-lg shadow-md w-72">
      <h2 className="text-xl font-bold mb-2">Add Seats</h2>
      <input
        type="number"
        placeholder="Enter number of seats"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        className="w-full px-3 py-2 border rounded-md mb-3"
      />
      <button 
        onClick={handleAddSeats}
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-md w-full"
      >
        Add Seats
      </button>
    </div>
  );
};

export default AddSeats;
