import { Request, Response } from "express";
import { HotelService } from "../service/hotel.service";

const service = new HotelService();

export class HotelController {
  getAll(req: Request, res: Response) {
    const data = service.getAll();
    res.json(data);
  }

  getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const hotel = service.getById(id);

    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.json(hotel);
  }
}