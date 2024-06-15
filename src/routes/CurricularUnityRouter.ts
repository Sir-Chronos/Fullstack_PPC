import { Router } from "express";
import * as CurricularUnitySkillController from '../controllers/CurricularUnityController';

const CurricularUnitySkillRouter = Router();

CurricularUnitySkillRouter.post("/", CurricularUnitySkillController.createCurricularUnity);
CurricularUnitySkillRouter.get("/", CurricularUnitySkillController.getAllCurricularUnitys);
CurricularUnitySkillRouter.get("/:id", CurricularUnitySkillController.getCurricularUnity);
CurricularUnitySkillRouter.put("/:id", CurricularUnitySkillController.updateCurricularUnity);
CurricularUnitySkillRouter.delete("/:id", CurricularUnitySkillController.deleteCurricularUnity);

export default CurricularUnitySkillRouter;