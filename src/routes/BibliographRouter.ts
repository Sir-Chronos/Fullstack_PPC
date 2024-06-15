import { Router, Request, Response } from "express";

const BibliographRouter = Router();

// Rota para criar uma Bibliograph
BibliographRouter.post("/", async (req: Request, res: Response) => {
});

// Rota para recuperar todas as Bibliographs
BibliographRouter.get("/", async (req: Request, res: Response) => {
});

// Rota para recuperar uma Bibliograph específica
BibliographRouter.get("/:id", async (req: Request, res: Response) => {
});

// Rota para atualizar uma Bibliograph específica
BibliographRouter.put("/:id", async (req: Request, res: Response) => {
});

// Rota para deletar uma Bibliograph específica
BibliographRouter.delete("/:id", async (req: Request, res: Response) => {
});

export default BibliographRouter;