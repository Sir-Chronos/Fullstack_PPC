import { Router } from "express";
import * as KnowledgeController from './KnowledgeController';

const KnowledgeRouter = Router();

KnowledgeRouter.post("/", KnowledgeController.createUser);
KnowledgeRouter.get("/", KnowledgeController.getAllUsers);
KnowledgeRouter.get("/:id", KnowledgeController.getUser);
KnowledgeRouter.put("/:id", KnowledgeController.updateUser);
KnowledgeRouter.delete("/:id", KnowledgeController.deleteUser);

export default KnowledgeRouter;