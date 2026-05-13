import { Request, Response, NextFunction } from "express";
import { HotelService } from "../service/hotel.service";
import { logger } from "../utils/logger";
import { HttpError } from "../errors/app.error";

export class HotelController {
  constructor(private service: HotelService = new HotelService()) {}

  getAll = (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error("🔥 Test error desde /hotels");
  } catch (error) {
    next(error);
  }
};

  getById = (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);

      logger.info({ id }, "Fetching hotel by id");

      const hotel = this.service.getById(id);

      if (!hotel) {
        throw new HttpError(404, "Hotel not found");
      }

      res.json(hotel);
    } catch (error) {
      next(error);
    }
  };


  
}