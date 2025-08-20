import express from "express";
import {
  getAllUsers,
  getAllSellers,
  verifySeller,
  deleteUser,
} from "../controllers/adminController.js";
import adminAuth from "../middleware/adminAuth.js";

const adminRouter = express.Router();

adminRouter.get("/users", adminAuth, getAllUsers);
adminRouter.get("/sellers", adminAuth, getAllSellers);
adminRouter.post("/verify-seller", adminAuth, verifySeller);
adminRouter.post("/delete-user", adminAuth, deleteUser);

export default adminRouter;