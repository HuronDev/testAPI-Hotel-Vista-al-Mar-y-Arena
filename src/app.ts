import express from "express";
import cors from "cors";
import hotelRoutes from "./routes/reservation.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/hotels", hotelRoutes);

export default app;