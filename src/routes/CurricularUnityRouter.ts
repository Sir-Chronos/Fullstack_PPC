import { Router, Request, Response } from "express";

const CurricularUnityRouter = Router();

// Rota para criar uma CurricularUnity
CurricularUnityRouter.post("/", async (req: Request, res: Response) => {
});

// Rota para recuperar todas as CurricularUnitys
CurricularUnityRouter.get("/", async (req: Request, res: Response) => {
});

// Rota para recuperar uma CurricularUnity específica
CurricularUnityRouter.get("/:id", async (req: Request, res: Response) => {
});

// Rota para atualizar uma CurricularUnity específica
CurricularUnityRouter.put("/:id", async (req: Request, res: Response) => {
});

// Rota para deletar uma CurricularUnity específica
CurricularUnityRouter.delete("/:id", async (req: Request, res: Response) => {
});

export default CurricularUnityRouter;