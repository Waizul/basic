import { Router } from "express";
import { AuthControllers } from "./auth.controller.js";

const router = Router();

router.post("/signup", AuthControllers.signup);

router.post("/signin", AuthControllers.signin);

router.post("/google", AuthControllers.google);

router.get("/signout", AuthControllers.signout);

export const AuthRoutes = router;
