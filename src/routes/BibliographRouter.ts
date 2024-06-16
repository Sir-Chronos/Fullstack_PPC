import { Router } from "express";
import * as BibliographController from '../controllers/BibliographController';
import { authenticateToken } from "../middleware/authMiddleware";

const BibliographRouter = Router();

BibliographRouter.use(authenticateToken)

BibliographRouter.post("/", BibliographController.createBibliograph);
BibliographRouter.get("/", BibliographController.getAllBibliographs);
BibliographRouter.get("/:id", BibliographController.getBibliograph);
BibliographRouter.put("/:id", BibliographController.updateBibliograph);
BibliographRouter.delete("/:id", BibliographController.deleteBibliograph);

export default BibliographRouter;