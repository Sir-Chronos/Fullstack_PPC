import { Router } from "express";
import * as CurricularUnityBibliographController from './CurricularUnityBibliographController';

const CurricularUnityBibliographRouter = Router();

CurricularUnityBibliographRouter.post("/", CurricularUnityBibliographController.createUser);
CurricularUnityBibliographRouter.get("/", CurricularUnityBibliographController.getAllUsers);
CurricularUnityBibliographRouter.get("/:id", CurricularUnityBibliographController.getUser);
CurricularUnityBibliographRouter.put("/:id", CurricularUnityBibliographController.updateUser);
CurricularUnityBibliographRouter.delete("/:id", CurricularUnityBibliographController.deleteUser);

export default CurricularUnityBibliographRouter;