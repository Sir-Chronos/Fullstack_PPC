import { Router } from "express";
import * as PPCController from '../controllers/PPCController';

const PPCRouter = Router();

PPCRouter.post("/", PPCController.createPPC);
PPCRouter.get("/", PPCController.getAllPPCs);
PPCRouter.get("/:id", PPCController.getPPC);
PPCRouter.put("/:id", PPCController.updatePPC);
PPCRouter.delete("/:id", PPCController.deletePPC);

export default PPCRouter;