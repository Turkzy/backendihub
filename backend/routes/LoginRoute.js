// LoginRoute.js

import express from "express";
import { login } from "../controllers/LoginController.js";

const router = express.Router();

router.post('/login', login);

export default router;
