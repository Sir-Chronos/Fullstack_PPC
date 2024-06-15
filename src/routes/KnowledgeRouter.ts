import { Router, Request, Response } from "express";

const KnowledgeRouter = Router();

// Rota para criar um Knowledge
KnowledgeRouter.post("/", async (req: Request, res: Response) => {
});

// Rota para recuperar todos os Knowledges
KnowledgeRouter.get("/", async (req: Request, res: Response) => {
});

// Rota para recuperar um Knowledge específico
KnowledgeRouter.get("/:id", async (req: Request, res: Response) => {
});

// Rota para atualizar um Knowledge específico
KnowledgeRouter.put("/:id", async (req: Request, res: Response) => {
});

// Rota para deletar um Knowledge específico
KnowledgeRouter.delete("/:id", async (req: Request, res: Response) => {
});

export default KnowledgeRouter;