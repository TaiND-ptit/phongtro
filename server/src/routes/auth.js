import express from "express";
import * as authController from "../controllers/auth";

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/login", (req, res) => {
  res.send("ok");
});

export default router;
