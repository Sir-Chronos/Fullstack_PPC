import { Router, Request, Response } from "express";

const CurricularUnitySkillRouter = Router();

// Rota para criar uma CurricularUnitySkill
CurricularUnitySkillRouter.post("/", async (req: Request, res: Response) => {
});

// Rota para recuperar todas as CurricularUnitySkills
CurricularUnitySkillRouter.get("/", async (req: Request, res: Response) => {
});

// Rota para recuperar uma CurricularUnitySkill específica
CurricularUnitySkillRouter.get("/:id", async (req: Request, res: Response) => {
});

// Rota para atualizar uma CurricularUnitySkill específica
CurricularUnitySkillRouter.put("/:id", async (req: Request, res: Response) => {
});

// Rota para deletar uma CurricularUnitySkill específica
CurricularUnitySkillRouter.delete("/:id", async (req: Request, res: Response) => {
});

export default CurricularUnitySkillRouter;