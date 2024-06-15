import { Router } from "express";
import * as CurricularUnityKnowledgeController from './CurricularUnityKnowledgeController';

const CurricularUnityKnowledgeRouter = Router();

CurricularUnityKnowledgeRouter.post("/", CurricularUnityKnowledgeController.createUser);
CurricularUnityKnowledgeRouter.get("/", CurricularUnityKnowledgeController.getAllUsers);
CurricularUnityKnowledgeRouter.get("/:id", CurricularUnityKnowledgeController.getUser);
CurricularUnityKnowledgeRouter.put("/:id", CurricularUnityKnowledgeController.updateUser);
CurricularUnityKnowledgeRouter.delete("/:id", CurricularUnityKnowledgeController.deleteUser);

export default CurricularUnityKnowledgeRouter;