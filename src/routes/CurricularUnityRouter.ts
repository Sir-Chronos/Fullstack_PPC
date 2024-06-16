import { Router } from "express";
import * as CurricularUnitySkillController from '../controllers/CurricularUnityController';
import { authenticateToken } from "../middleware/authMiddleware";

const CurricularUnitySkillRouter = Router();

CurricularUnitySkillRouter.use(authenticateToken)

CurricularUnitySkillRouter.post("/", CurricularUnitySkillController.createCurricularUnity);
CurricularUnitySkillRouter.get("/", CurricularUnitySkillController.getAllCurricularUnitys);
CurricularUnitySkillRouter.get("/:id", CurricularUnitySkillController.getCurricularUnity);
CurricularUnitySkillRouter.put("/:id", CurricularUnitySkillController.updateCurricularUnity);
CurricularUnitySkillRouter.delete("/:id", CurricularUnitySkillController.deleteCurricularUnity);

export default CurricularUnitySkillRouter;