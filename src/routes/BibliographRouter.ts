import { Router } from "express";
import * as BibliographController from './BibliographController';

const BibliographRouter = Router();

BibliographRouter.post("/", BibliographController.createUser);
BibliographRouter.get("/", BibliographController.getAllUsers);
BibliographRouter.get("/:id", BibliographController.getUser);
BibliographRouter.put("/:id", BibliographController.updateUser);
BibliographRouter.delete("/:id", BibliographController.deleteUser);

export default BibliographRouter;