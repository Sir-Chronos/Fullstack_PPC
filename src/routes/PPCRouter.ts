import { Router, Request, Response } from "express";

const PPCRouter = Router();

// Rota para criar um PPC
PPCRouter.post("/", async (req: Request, res: Response) => {
});

// Rota para recuperar todos os PPCs
PPCRouter.get("/", async (req: Request, res: Response) => {
});

// Rota para recuperar um PPC específico
PPCRouter.get("/:id", async (req: Request, res: Response) => {
});

// Rota para atualizar um PPC específico
PPCRouter.put("/:id", async (req: Request, res: Response) => {
});

// Rota para deletar um PPC específico
PPCRouter.delete("/:id", async (req: Request, res: Response) => {
});


export default PPCRouter;