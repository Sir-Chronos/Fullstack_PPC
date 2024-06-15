import { Router, Request, Response } from "express";

const CurricularUnityKnowledgeRouter = Router();

// Rota para criar uma CurricularUnityKnowledge
CurricularUnityKnowledgeRouter.post("/", async (req: Request, res: Response) => {
});

// Rota para recuperar todas as CurricularUnityKnowledges
CurricularUnityKnowledgeRouter.get("/", async (req: Request, res: Response) => {
});

// Rota para recuperar uma CurricularUnityKnowledge específica
CurricularUnityKnowledgeRouter.get("/:id", async (req: Request, res: Response) => {
});

// Rota para atualizar uma CurricularUnityKnowledge específica
CurricularUnityKnowledgeRouter.put("/:id", async (req: Request, res: Response) => {
});

// Rota para deletar uma CurricularUnityKnowledge específica
CurricularUnityKnowledgeRouter.delete("/:id", async (req: Request, res: Response) => {
});

export default CurricularUnityKnowledgeRouter;