import { Router } from "express";
import * as CurricularUnitySkill from '../controllers/CurricularUnitySkillController';
import { authenticateToken } from "../middleware/authMiddleware";

const CurricularUnitySkillRouter = Router();

CurricularUnitySkillRouter.use(authenticateToken)

CurricularUnitySkillRouter.post("/", CurricularUnitySkill.createCurricularUnitySkill);
CurricularUnitySkillRouter.get("/", CurricularUnitySkill.getAllCurricularUnitySkills);
CurricularUnitySkillRouter.get("/:id", CurricularUnitySkill.getCurricularUnitySkill);
CurricularUnitySkillRouter.put("/:id", CurricularUnitySkill.updateCurricularUnitySkill);
CurricularUnitySkillRouter.delete("/:id", CurricularUnitySkill.deleteCurricularUnitySkill);

export default CurricularUnitySkillRouter;