import { Router, Request, Response } from "express";

const UserRouter = Router();

// Rota para criar um usuário
UserRouter.post("/", async (req: Request, res: Response) => {
});

// Rota para recuperar todos os usuários
UserRouter.get("/", async (req: Request, res: Response) => {
});

// Rota para recuperar um usuário específico
UserRouter.get("/:id", async (req: Request, res: Response) => {
});

// Rota para atualizar um usuário específico
UserRouter.put("/:id", async (req: Request, res: Response) => {
});

// Rota para deletar um usuário específico
UserRouter.delete("/:id", async (req: Request, res: Response) => {
});

// Rota para login de usuário
UserRouter.post("/login", async (req: Request, res: Response) => {
});

export default UserRouter;