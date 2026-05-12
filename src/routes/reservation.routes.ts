import { Router } from "express";
import { HotelController } from "../controllers/reservation.controller";

const router = Router();
const controller = new HotelController();

/**
 * @openapi
 * /hotels:
 *   get:
 *     summary: Obtener todos los hoteles
 *     tags:
 *       - Hotels
 *     responses:
 *       200:
 *         description: Lista de hoteles
 */
router.get("/", controller.getAll.bind(controller));

/**
 * @openapi
 * /hotels/{id}:
 *   get:
 *     summary: Obtener hotel por ID
 *     tags:
 *       - Hotels
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Hotel encontrado
 *       404:
 *         description: Hotel no encontrado
 */
router.get("/:id", controller.getById.bind(controller));

export default router;