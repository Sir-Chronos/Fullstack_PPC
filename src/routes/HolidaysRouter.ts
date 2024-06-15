import { Router } from "express";
import * as HolidaysController from './HolidaysController';

const HolidaysRouter = Router();

HolidaysRouter.post("/", HolidaysController.createUser);
HolidaysRouter.get("/", HolidaysController.getAllUsers);
HolidaysRouter.get("/:id", HolidaysController.getUser);
HolidaysRouter.put("/:id", HolidaysController.updateUser);
HolidaysRouter.delete("/:id", HolidaysController.deleteUser);

export default HolidaysRouter;