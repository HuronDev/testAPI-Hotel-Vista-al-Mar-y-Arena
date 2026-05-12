import { Router } from "express";
import { getReservations } from "../controllers/reservation.controller";

const router = Router();

/**
 * @swagger
 * /api/reservations:
 *   get:
 *     summary: Get all hotel reservations
 *     tags:
 *       - Reservations
 *     responses:
 *       200:
 *         description: Reservations retrieved successfully
 */
router.get("/", getReservations);

export default router;