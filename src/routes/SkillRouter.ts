import { Router } from "express";
import * as SkillController from '../controllers/SkillController';
import { authenticateToken } from "../middleware/authMiddleware";

const SkillRouter = Router();

SkillRouter.use(authenticateToken)

SkillRouter.post("/", SkillController.createSkill);
SkillRouter.get("/", SkillController.getAllSkills);
SkillRouter.get("/:id", SkillController.getSkill);
SkillRouter.put("/:id", SkillController.updateSkill);
SkillRouter.delete("/:id", SkillController.deleteSkill);

export default SkillRouter;