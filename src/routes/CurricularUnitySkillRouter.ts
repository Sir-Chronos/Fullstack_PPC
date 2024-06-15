import { Router } from "express";
import * as CurricularUnitySkill from './CurricularUnitySkill';

const CurricularUnitySkillRouter = Router();

CurricularUnitySkillRouter.post("/", CurricularUnitySkill.createUser);
CurricularUnitySkillRouter.get("/", CurricularUnitySkill.getAllUsers);
CurricularUnitySkillRouter.get("/:id", CurricularUnitySkill.getUser);
CurricularUnitySkillRouter.put("/:id", CurricularUnitySkill.updateUser);
CurricularUnitySkillRouter.delete("/:id", CurricularUnitySkill.deleteUser);

export default CurricularUnitySkillRouter;