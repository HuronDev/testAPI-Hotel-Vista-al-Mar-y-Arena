import { Request, Response } from "express";


import { ReservationStatus } from "../enums/reservation-status.enum";
import { reservations } from "../data/eservations";

export const getReservations = (
  req: Request,
  res: Response
): void => {
  res.status(200).json({
    message: "Reservations retrieved successfully",
    total: reservations.length,
    data: reservations,
  });
};

export const createReservation = (
  req: Request,
  res: Response
): void => {
  const { guestName, roomNumber, checkIn, checkOut } = req.body;

  if (!guestName || !roomNumber || !checkIn || !checkOut) {
    res.status(400).json({
      message: "All fields are required",
    });

    return;
  }

  const newReservation = {
    id: reservations.length + 1,
    guestName,
    roomNumber,
    checkIn,
    checkOut,

    // enum
    status: ReservationStatus.PENDING,
  };

  reservations.push(newReservation);

  res.status(201).json({
    message: "Reservation created successfully",
    data: newReservation,
  });
};