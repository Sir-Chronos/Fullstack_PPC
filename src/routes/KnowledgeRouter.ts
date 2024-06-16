import { Router } from "express";
import * as KnowledgeController from '../controllers/KnowledgeController';
import { authenticateToken } from "../middleware/authMiddleware";

const KnowledgeRouter = Router();

KnowledgeRouter.use(authenticateToken)

KnowledgeRouter.post("/", KnowledgeController.createKnowledge);
KnowledgeRouter.get("/", KnowledgeController.getAllKnowledges);
KnowledgeRouter.get("/:id", KnowledgeController.getKnowledge);
KnowledgeRouter.put("/:id", KnowledgeController.updateKnowledge);
KnowledgeRouter.delete("/:id", KnowledgeController.deleteKnowledge);

export default KnowledgeRouter;