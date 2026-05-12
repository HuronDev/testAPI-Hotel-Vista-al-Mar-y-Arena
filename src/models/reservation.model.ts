import { ReservationStatus } from "../enums/reservation-status.enum";

export interface Reservation {
  id: number;
  guestName: string;
  roomNumber: number;
  checkIn: string;
  checkOut: string;
  status: ReservationStatus;
}