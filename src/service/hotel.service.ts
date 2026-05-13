import { hotels } from "../data/eservations";
import { Hotel } from "../models/reservation.model";


export class HotelService {
  getAll(): Hotel[] {
    return hotels;
  }

  getById(id: number): Hotel | undefined {
    return hotels.find(h => h.id === id);
  }
}