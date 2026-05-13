import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import hotelRoutes from "./routes/reservation.routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { httpLogger } from "./middlewares/logger.middleware";
import healthRoutes from "./routes/health.routes";
import { initSentry } from "./config/sentry";
import debugRoutes from "./routes/debug.routes";


const app = express();

app.use(cors());
app.use(express.json());
initSentry();

app.use(httpLogger);
app.use("/health", healthRoutes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/hotels", hotelRoutes);
app.use("/debug", debugRoutes);

app.use(errorMiddleware);

export default app;