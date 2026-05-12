import { Request, Response, NextFunction } from "express";
import { HotelService } from "../service/hotel.service";

export class HotelController {
  constructor(private service: HotelService = new HotelService()) {}

  getAll = (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = this.service.getAll();
      res.json(data);
    } catch (error) {
      next(error);
    }
  };

  getById = (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const hotel = this.service.getById(id);

      if (!hotel) {
        return res.status(404).json({ message: "Hotel not found" });
      }

      res.json(hotel);
    } catch (error) {
      next(error);
    }
  };
}