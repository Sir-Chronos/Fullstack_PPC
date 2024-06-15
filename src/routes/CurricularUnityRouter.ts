import { Router } from "express";
import * as CurricularUnitySkillController from './CurricularUnitySkillController';

const CurricularUnitySkillRouter = Router();

CurricularUnitySkillRouter.post("/", CurricularUnitySkillController.createUser);
CurricularUnitySkillRouter.get("/", CurricularUnitySkillController.getAllUsers);
CurricularUnitySkillRouter.get("/:id", CurricularUnitySkillController.getUser);
CurricularUnitySkillRouter.put("/:id", CurricularUnitySkillController.updateUser);
CurricularUnitySkillRouter.delete("/:id", CurricularUnitySkillController.deleteUser);

export default CurricularUnitySkillRouter;