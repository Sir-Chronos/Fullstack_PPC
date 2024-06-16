import { Router } from "express";
import * as CurricularUnityBibliographController from '../controllers/CurricularUnityBibliographController';
import { authenticateToken } from "../middleware/authMiddleware";

const CurricularUnityBibliographRouter = Router();

CurricularUnityBibliographRouter.use(authenticateToken)

CurricularUnityBibliographRouter.post("/", CurricularUnityBibliographController.createBibliographCurricularUnity);
CurricularUnityBibliographRouter.get("/", CurricularUnityBibliographController.getAllBibliographCurricularUnitys);
CurricularUnityBibliographRouter.get("/:id", CurricularUnityBibliographController.getBibliographCurricularUnity);
CurricularUnityBibliographRouter.put("/:id", CurricularUnityBibliographController.updateBibliographCurricularUnity);
CurricularUnityBibliographRouter.delete("/:id", CurricularUnityBibliographController.deleteBibliographCurricularUnity);

export default CurricularUnityBibliographRouter;