import express from "express"
import userlistController from "../controllers/userlistController.js";
import adminAuth from "../middleware/adminAuth.js";

const userListRoute=express.Router();

userListRoute.get("/userlistData",adminAuth,userlistController.getUserlist);
export default userListRoute;