const express=require('express');
const router=express.Router();
const Seat=require("../models/Seat");

const seatController=require('../controllers/seatController');

router.post('/add-seats',seatController.addSeats);
router.get('/seats',seatController.getSeats);
router.post('/book-seats',seatController.bookSeats);

module.exports=router;