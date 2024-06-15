import { Router, Request, Response } from "express";

const CurricularUnityBibliographRouter = Router();

// Rota para criar uma CurricularUnityBibliograph
CurricularUnityBibliographRouter.post("/", async (req: Request, res: Response) => {
});

// Rota para recuperar todas as CurricularUnityBibliograph
CurricularUnityBibliographRouter.get("/", async (req: Request, res: Response) => {
});

// Rota para recuperar uma CurricularUnityBibliograph específica
CurricularUnityBibliographRouter.get("/:id", async (req: Request, res: Response) => {
});

// Rota para atualizar uma CurricularUnityBibliograph específica
CurricularUnityBibliographRouter.put("/:id", async (req: Request, res: Response) => {
});

// Rota para deletar uma CurricularUnityBibliograph específica
CurricularUnityBibliographRouter.delete("/:id", async (req: Request, res: Response) => {
});

export default CurricularUnityBibliographRouter;