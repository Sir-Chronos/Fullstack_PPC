import { Router, Request, Response } from "express";

const HolidaysRouter = Router();

// Rota para criar um Holiday
HolidaysRouter.post("/", async (req: Request, res: Response) => {
});

// Rota para recuperar todos os Holidays
HolidaysRouter.get("/", async (req: Request, res: Response) => {
});

// Rota para recuperar um Holiday específico
HolidaysRouter.get("/:id", async (req: Request, res: Response) => {
});

// Rota para atualizar um Holiday específico
HolidaysRouter.put("/:id", async (req: Request, res: Response) => {
});

// Rota para deletar um Holiday específico
HolidaysRouter.delete("/:id", async (req: Request, res: Response) => {
});

export default HolidaysRouter;