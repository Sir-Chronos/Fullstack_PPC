import { Router } from "express";
import * as EvaluationPeriodsController from './EvaluationPeriodsController';

const EvaluationPeriodsRouter = Router();

EvaluationPeriodsRouter.post("/", EvaluationPeriodsController.createUser);
EvaluationPeriodsRouter.get("/", EvaluationPeriodsController.getAllUsers);
EvaluationPeriodsRouter.get("/:id", EvaluationPeriodsController.getUser);
EvaluationPeriodsRouter.put("/:id", EvaluationPeriodsController.updateUser);
EvaluationPeriodsRouter.delete("/:id", EvaluationPeriodsController.deleteUser);

export default EvaluationPeriodsRouter;