import { Router } from "express";
import * as HolidaysController from '../controllers/HolidayController';

const HolidaysRouter = Router();

HolidaysRouter.post("/", HolidaysController.createHoliday);
HolidaysRouter.get("/", HolidaysController.getAllHolidays);
HolidaysRouter.get("/:id", HolidaysController.getHoliday);
HolidaysRouter.put("/:id", HolidaysController.updateHoliday);
HolidaysRouter.delete("/:id", HolidaysController.deleteHoliday);

export default HolidaysRouter;