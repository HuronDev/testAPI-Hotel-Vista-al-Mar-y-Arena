import { Router } from "express";
import { HotelController } from "../controllers/reservation.controller";

const router = Router();
const controller = new HotelController();

router.get("/", controller.getAll.bind(controller));
router.get("/:id", controller.getById.bind(controller));

export default router;