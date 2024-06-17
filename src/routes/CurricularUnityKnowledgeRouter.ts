import { Router } from "express";
import * as CurricularUnityKnowledgeController from '../controllers/CurricularUnityKnowledgeController';
import { authenticateToken } from "../middleware/authMiddleware";

const CurricularUnityKnowledgeRouter = Router();

CurricularUnityKnowledgeRouter.use(authenticateToken)

CurricularUnityKnowledgeRouter.post("/", CurricularUnityKnowledgeController.createKnowledgeCurricularUnity);
CurricularUnityKnowledgeRouter.get("/", CurricularUnityKnowledgeController.getAllKnowledgeCurricularUnitys);
CurricularUnityKnowledgeRouter.get("/:id", CurricularUnityKnowledgeController.getKnowledgeCurricularUnity);
CurricularUnityKnowledgeRouter.put("/:id", CurricularUnityKnowledgeController.updateKnowledgeCurricularUnity);
CurricularUnityKnowledgeRouter.delete("/:id", CurricularUnityKnowledgeController.deleteKnowledgeCurricularUnity);

export default CurricularUnityKnowledgeRouter;