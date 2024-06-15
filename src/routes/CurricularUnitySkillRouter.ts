import { Router } from "express";
import * as CurricularUnitySkill from '../controllers/CurricularUnitySkillController';

const CurricularUnitySkillRouter = Router();

CurricularUnitySkillRouter.post("/", CurricularUnitySkill.createCurricularUnitySkill);
CurricularUnitySkillRouter.get("/", CurricularUnitySkill.getAllCurricularUnitySkills);
CurricularUnitySkillRouter.get("/:id", CurricularUnitySkill.getCurricularUnitySkill);
CurricularUnitySkillRouter.put("/:id", CurricularUnitySkill.updateCurricularUnitySkill);
CurricularUnitySkillRouter.delete("/:id", CurricularUnitySkill.deleteCurricularUnitySkill);

export default CurricularUnitySkillRouter;