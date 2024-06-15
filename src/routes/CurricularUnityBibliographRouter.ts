import { Router } from "express";
import * as CurricularUnityBibliographController from '../controllers/CurricularUnityBibliographController';

const CurricularUnityBibliographRouter = Router();

CurricularUnityBibliographRouter.post("/", CurricularUnityBibliographController.createBibliographCurricularUnity);
CurricularUnityBibliographRouter.get("/", CurricularUnityBibliographController.getAllBibliographCurricularUnitys);
CurricularUnityBibliographRouter.get("/:id", CurricularUnityBibliographController.getBibliographCurricularUnity);
CurricularUnityBibliographRouter.put("/:id", CurricularUnityBibliographController.updateBibliographCurricularUnity);
CurricularUnityBibliographRouter.delete("/:id", CurricularUnityBibliographController.deleteBibliographCurricularUnity);

export default CurricularUnityBibliographRouter;