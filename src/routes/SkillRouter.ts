import { Router } from "express";
import * as SkillController from './SkillController';

const SkillRouter = Router();

SkillRouter.post("/", SkillController.createSkill);
SkillRouter.get("/", SkillController.getAllSkills);
SkillRouter.get("/:id", SkillController.getSkill);
SkillRouter.put("/:id", SkillController.updateSkill);
SkillRouter.delete("/:id", SkillController.deleteSkill);

export default SkillRouter;