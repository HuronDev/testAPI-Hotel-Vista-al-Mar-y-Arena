import { Router } from "express";

const router = Router();

router.get("/error", (req, res) => {
  throw new Error("🔥 Test error Sentry + Slack");
});

export default router;