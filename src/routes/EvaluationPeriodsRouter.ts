import { Router, Request, Response } from "express";

const EvaluationPeriodsRouter = Router();

// Rota para criar um EvaluationPeriod
EvaluationPeriodsRouter.post("/", async (req: Request, res: Response) => {
});

// Rota para recuperar todos os EvaluationPeriods
EvaluationPeriodsRouter.get("/", async (req: Request, res: Response) => {
});

// Rota para recuperar um EvaluationPeriod específico
EvaluationPeriodsRouter.get("/:id", async (req: Request, res: Response) => {
});

// Rota para atualizar um EvaluationPeriod específico
EvaluationPeriodsRouter.put("/:id", async (req: Request, res: Response) => {
});

// Rota para deletar um EvaluationPeriod específico
EvaluationPeriodsRouter.delete("/:id", async (req: Request, res: Response) => {
});

export default EvaluationPeriodsRouter;