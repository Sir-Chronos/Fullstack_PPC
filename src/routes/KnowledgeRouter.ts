import { Router } from "express";
import * as KnowledgeController from '../controllers/KnowledgeController';

const KnowledgeRouter = Router();

KnowledgeRouter.post("/", KnowledgeController.createKnowledge);
KnowledgeRouter.get("/", KnowledgeController.getAllKnowledges);
KnowledgeRouter.get("/:id", KnowledgeController.getKnowledge);
KnowledgeRouter.put("/:id", KnowledgeController.updateKnowledge);
KnowledgeRouter.delete("/:id", KnowledgeController.deleteKnowledge);

export default KnowledgeRouter;