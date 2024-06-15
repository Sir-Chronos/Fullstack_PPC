import { Router, Request, Response } from "express";

const SkillRouter = Router();

// Rota para criar uma Skill
SkillRouter.post("/", async (req: Request, res: Response) => {
});

// Rota para recuperar todas as Skills
SkillRouter.get("/", async (req: Request, res: Response) => {
});

// Rota para recuperar uma Skill específica
SkillRouter.get("/:id", async (req: Request, res: Response) => {
});

// Rota para atualizar uma Skill específica
SkillRouter.put("/:id", async (req: Request, res: Response) => {
});

// Rota para deletar uma Skill específica
SkillRouter.delete("/:id", async (req: Request, res: Response) => {
});

export default SkillRouter;