import { Router } from "express";
import * as EvaluationPeriodsController from '../controllers/EvaluationPeriodController';

const EvaluationPeriodsRouter = Router();

EvaluationPeriodsRouter.post("/", EvaluationPeriodsController.createEvaluationPeriod);
EvaluationPeriodsRouter.get("/", EvaluationPeriodsController.getAllEvaluationPeriods);
EvaluationPeriodsRouter.get("/:id", EvaluationPeriodsController.getEvaluationPeriod);
EvaluationPeriodsRouter.put("/:id", EvaluationPeriodsController.updateEvaluationPeriod);
EvaluationPeriodsRouter.delete("/:id", EvaluationPeriodsController.deleteEvaluationPeriod);

export default EvaluationPeriodsRouter;