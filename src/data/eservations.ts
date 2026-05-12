import { Reservation } from "../models/reservation.model";

import { ReservationStatus } from "../enums/reservation-status.enum";

export const reservations: Reservation[] = [
  {
    id: 1,
    guestName: "Carlos Paredes",
    roomNumber: 101,
    checkIn: "2026-05-15",
    checkOut: "2026-05-20",
    status: ReservationStatus.CONFIRMED,
  },
  {
    id: 2,
    guestName: "Maria Lopez",
    roomNumber: 102,
    checkIn: "2026-05-18",
    checkOut: "2026-05-21",
    status: ReservationStatus.PENDING,
  },
  {
    id: 3,
    guestName: "Juan Perez",
    roomNumber: 201,
    checkIn: "2026-06-01",
    checkOut: "2026-06-05",
    status: ReservationStatus.CONFIRMED,
  },
  {
    id: 4,
    guestName: "Ana Torres",
    roomNumber: 202,
    checkIn: "2026-06-03",
    checkOut: "2026-06-10",
    status: ReservationStatus.CANCELLED,
  },
];