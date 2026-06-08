import express from "express";
import { signUp, login } from "../controllers/user.controller.js";

const appRouter = express.Router();

appRouter.post("/signUp", signUp);
appRouter.post("/login", login);

export default appRouter;
