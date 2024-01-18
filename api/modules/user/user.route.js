import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUserListings,
  updateUser,
} from "./user.controller.js";
import { verifyToken } from "../../utils/verifyUser.js";

const router = Router();

// router.get('/', UserControllers.getUser)
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);
router.get("/:id", verifyToken, getUser);

export const UserRoutes = router;
