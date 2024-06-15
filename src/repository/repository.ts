import sequelize from "../config/sequelize";

import Bibliograph from "../models/Bibliograph";
import CurricularUnity from "../models/CurricularUnity";
import BibliographCurricularUnity from "../models/CurricularUnityBibliograph";
import KnowledgeCurricularUnity from "../models/CurricularUnityKnowledge";
import CurricularUnitySkill from "../models/CurricularUnitySkill";
import EvaluationPeriods from "../models/EvaluationPeriods";
import Holidays from "../models/Holidays";
import Knowledge from "../models/Knowledge";
import PPC from "../models/PPC";
import Skill from "../models/Skill";
import User from "../models/User";

const db = sequelize;


//------------------------- user model ---------------------------------//

async function CreateUser(name: string, password: string, email: string) {
  try {
    const user = await User.create({ name, password, email });
    console.log("User created successfully:", user.id);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

async function ReadAllUsers() {
  try {
    const users = await User.findAll();
    console.log("Users retrieved successfully:", users);
    return users;
  } catch (error) {
    console.error("Error retrieving users:", error);
    throw error;
  }
}

async function ReadUser(id: number) {
  try {
    const user = await User.findByPk(id);
    if (user) {
      console.log("User retrieved successfully:", user);
      return user;
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading user:", error);
    throw error;
  }
}

async function UpdateUser(id: number, name: string, password: string, email: string) {
  try {
    const user = await User.findByPk(id);
    if (user) {
      user.name = name;
      user.password = password; // Be cautious with storing plain text passwords
      user.email = email;
      await user.save();
      console.log("User updated successfully:", user);
      return user;
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

async function DeleteUser(id: number) {
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      console.log("User deleted successfully");
      return true;
    } else {
      console.log("User not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

async function ReadUserByEmail(email: string) {
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      console.log("User retrieved successfully:", user);
      return user;
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading user:", error);
    throw error;
  }
}

//------------------------- Skill model ---------------------------------//

async function CreateSkill(type: string, description: string) {
  try {
    const skill = await Skill.create({ type, description });
    console.log("Skill created successfully:", skill.id);
    return skill;
  } catch (error) {
    console.error("Error creating skill:", error);
    throw error;
  }
}

async function ReadAllSkills() {
  try {
    const skills = await Skill.findAll();
    console.log("Skills retrieved successfully:", skills);
    return skills;
  } catch (error) {
    console.error("Error retrieving skills:", error);
    throw error;
  }
}

async function ReadSkill(id: number) {
  try {
    const skill = await Skill.findByPk(id);
    if (skill) {
      console.log("Skill retrieved successfully:", skill);
      return skill;
    } else {
      console.log("Skill not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading skill:", error);
    throw error;
  }
}

async function UpdateSkill(id: number, type: string, description: string) {
  try {
    const skill = await Skill.findByPk(id);
    if (skill) {
      skill.type = type;
      skill.description = description;
      await skill.save();
      console.log("Skill updated successfully:", skill);
      return skill;
    } else {
      console.log("Skill not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating skill:", error);
    throw error;
  }
}

async function DeleteSkill(id: number) {
  try {
    const skill = await Skill.findByPk(id);
    if (skill) {
      await skill.destroy();
      console.log("Skill deleted successfully");
      return true;
    } else {
      console.log("Skill not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting skill:", error);
    throw error;
  }
}

//------------------------- PPC model ---------------------------------//

async function CreatePPC(occupationArea: string, course: string, version: Date) {
  try {
    const ppc = await PPC.create({ occupationArea, course, version });
    console.log("PPC created successfully:", ppc.id);
    return ppc;
  } catch (error) {
    console.error("Error creating PPC:", error);
    throw error;
  }
}

async function ReadAllPPCs() {
  try {
    const ppcs = await PPC.findAll();
    console.log("PPCs retrieved successfully:", ppcs);
    return ppcs;
  } catch (error) {
    console.error("Error retrieving PPCs:", error);
    throw error;
  }
}

async function ReadPPC(id: number) {
  try {
    const ppc = await PPC.findByPk(id);
    if (ppc) {
      console.log("PPC retrieved successfully:", ppc);
      return { success: true, data: ppc };
    } else {
      console.log("PPC not found");
      return { success: false, message: "PPC not found" };
    }
  } catch (error) {
    console.error("Error reading PPC:", error);
    throw { success: false, message: "Error reading PPC", error };
  }
}

async function UpdatePPC(id: number, occupationArea: string, course: string, version: Date) {
  try {
    const ppc = await PPC.findByPk(id);
    if (ppc) {
      ppc.occupationArea = occupationArea;
      ppc.course = course;
      ppc.version = version;
      await ppc.save();
      console.log("PPC updated successfully:", ppc);
      return ppc;
    } else {
      console.log("PPC not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating PPC:", error);
    throw error;
  }
}

async function DeletePPC(id: number) {
  try {
    const ppc = await PPC.findByPk(id);
    if (ppc) {
      await ppc.destroy();
      console.log("PPC deleted successfully");
      return true;
    } else {
      console.log("PPC not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting PPC:", error);
    throw error;
  }
}

//------------------------- Knowledge model ---------------------------------//

async function CreateKnowledge(description: string, knowFatherId?: number) {
  try {
    const knowledge = await Knowledge.create({ description, knowFatherId });
    console.log("Knowledge created successfully:", knowledge.id);
    return knowledge;
  } catch (error) {
    console.error("Error creating Knowledge:", error);
    throw error;
  }
}

async function ReadAllKnowledge() {
  try {
    const knowledgeList = await Knowledge.findAll({
      include: [
        { model: Knowledge, as: 'childKnowledges' },
        { model: Knowledge, as: 'parentKnowledge' }
      ]
    });
    console.log("Knowledge retrieved successfully:", knowledgeList);
    return knowledgeList;
  } catch (error) {
    console.error("Error retrieving Knowledge:", error);
    throw error;
  }
}

async function ReadKnowledge(id: number) {
  try {
    const knowledge = await Knowledge.findByPk(id, {
      include: [
        { model: Knowledge, as: 'childKnowledges' },
        { model: Knowledge, as: 'parentKnowledge' }
      ]
    });
    if (knowledge) {
      console.log("Knowledge retrieved successfully:", knowledge);
      return knowledge;
    } else {
      console.log("Knowledge not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading Knowledge:", error);
    throw error;
  }
}

async function UpdateKnowledge(id: number, description: string, knowFatherId?: number) {
  try {
    const knowledge = await Knowledge.findByPk(id);
    if (knowledge) {
      knowledge.description = description;
      if (knowFatherId !== undefined) knowledge.knowFatherId = knowFatherId;
      await knowledge.save();
      console.log("Knowledge updated successfully:", knowledge);
      return knowledge;
    } else {
      console.log("Knowledge not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating Knowledge:", error);
    throw error;
  }
}

async function DeleteKnowledge(id: number) {
  try {
    const knowledge = await Knowledge.findByPk(id);
    if (knowledge) {
      await knowledge.destroy();
      console.log("Knowledge deleted successfully");
      return true;
    } else {
      console.log("Knowledge not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting Knowledge:", error);
    throw error;
  }
}

//------------------------- Holiday model ---------------------------------//

async function CreateHoliday(type: string, date: Date, compensation?: Date) {
  try {
    const holiday = await Holidays.create({ type, date, compensation });
    console.log("Holiday created successfully:", holiday.id);
    return holiday;
  } catch (error) {
    console.error("Error creating Holiday:", error);
    throw error;
  }
}

async function ReadAllHolidays() {
  try {
    const holidays = await Holidays.findAll();
    console.log("Holidays retrieved successfully:", holidays);
    return holidays;
  } catch (error) {
    console.error("Error retrieving Holidays:", error);
    throw error;
  }
}

async function ReadHoliday(id: number) {
  try {
    const holiday = await Holidays.findByPk(id);
    if (holiday) {
      console.log("Holiday retrieved successfully:", holiday);
      return holiday;
    } else {
      console.log("Holiday not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading Holiday:", error);
    throw error;
  }
}

async function UpdateHoliday(id: number, type: string, date: Date, compensation?: Date) {
  try {
    const holiday = await Holidays.findByPk(id);
    if (holiday) {
      holiday.type = type;
      holiday.date = date;
      if (compensation !== undefined) holiday.compensation = compensation;
      await holiday.save();
      console.log("Holiday updated successfully:", holiday);
      return holiday;
    } else {
      console.log("Holiday not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating Holiday:", error);
    throw error;
  }
}

async function DeleteHoliday(id: number) {
  try {
    const holiday = await Holidays.findByPk(id);
    if (holiday) {
      await holiday.destroy();
      console.log("Holiday deleted successfully");
      return true;
    } else {
      console.log("Holiday not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting Holiday:", error);
    throw error;
  }
}

//------------------------- EvaluationPeriod model ---------------------------------//

async function CreateEvaluationPeriod(name: string, beginning: Date, ending: Date) {
  try {
    const evaluationPeriod = await EvaluationPeriods.create({ name, beginning, ending });
    console.log("Evaluation Period created successfully:", evaluationPeriod.id);
    return evaluationPeriod;
  } catch (error) {
    console.error("Error creating Evaluation Period:", error);
    throw error;
  }
}

async function ReadAllEvaluationPeriods() {
  try {
    const evaluationPeriods = await EvaluationPeriods.findAll();
    console.log("Evaluation Periods retrieved successfully:", evaluationPeriods);
    return evaluationPeriods;
  } catch (error) {
    console.error("Error retrieving Evaluation Periods:", error);
    throw error;
  }
}

async function ReadEvaluationPeriod(id: number) {
  try {
    const evaluationPeriod = await EvaluationPeriods.findByPk(id);
    if (evaluationPeriod) {
      console.log("Evaluation Period retrieved successfully:", evaluationPeriod);
      return evaluationPeriod;
    } else {
      console.log("Evaluation Period not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading Evaluation Period:", error);
    throw error;
  }
}

async function UpdateEvaluationPeriod(id: number, name: string, beginning: Date, ending: Date) {
  try {
    const evaluationPeriod = await EvaluationPeriods.findByPk(id);
    if (evaluationPeriod) {
      evaluationPeriod.name = name;
      evaluationPeriod.beginning = beginning;
      evaluationPeriod.ending = ending;
      await evaluationPeriod.save();
      console.log("Evaluation Period updated successfully:", evaluationPeriod);
      return evaluationPeriod;
    } else {
      console.log("Evaluation Period not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating Evaluation Period:", error);
    throw error;
  }
}

async function DeleteEvaluationPeriod(id: number) {
  try {
    const evaluationPeriod = await EvaluationPeriods.findByPk(id);
    if (evaluationPeriod) {
      await evaluationPeriod.destroy();
      console.log("Evaluation Period deleted successfully");
      return true;
    } else {
      console.log("Evaluation Period not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting Evaluation Period:", error);
    throw error;
  }
}

//------------------------- CurricilarUnitySkill model ---------------------------------//

async function CreateCurricularUnitySkill(curricularUnityId: number, skillId: number) {
  try {
    const curricularUnitySkill = await CurricularUnitySkill.create({ curricularUnityId, skillId });
    console.log("CurricularUnitySkill created successfully:", curricularUnitySkill.id);
    return curricularUnitySkill;
  } catch (error) {
    console.error("Error creating CurricularUnitySkill:", error);
    throw error;
  }
}

async function ReadAllCurricularUnitySkills() {
  try {
    const curricularUnitySkills = await CurricularUnitySkill.findAll();
    console.log("CurricularUnitySkills retrieved successfully:", curricularUnitySkills);
    return curricularUnitySkills;
  } catch (error) {
    console.error("Error retrieving CurricularUnitySkills:", error);
    throw error;
  }
}

async function ReadCurricularUnitySkill(id: number) {
  try {
    const curricularUnitySkill = await CurricularUnitySkill.findByPk(id);
    if (curricularUnitySkill) {
      console.log("CurricularUnitySkill retrieved successfully:", curricularUnitySkill);
      return curricularUnitySkill;
    } else {
      console.log("CurricularUnitySkill not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading CurricularUnitySkill:", error);
    throw error;
  }
}

async function UpdateCurricularUnitySkill(id: number, curricularUnityId: number, skillId: number) {
  try {
    const curricularUnitySkill = await CurricularUnitySkill.findByPk(id);
    if (curricularUnitySkill) {
      curricularUnitySkill.curricularUnityId = curricularUnityId;
      curricularUnitySkill.skillId = skillId;
      await curricularUnitySkill.save();
      console.log("CurricularUnitySkill updated successfully:", curricularUnitySkill);
      return curricularUnitySkill;
    } else {
      console.log("CurricularUnitySkill not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating CurricularUnitySkill:", error);
    throw error;
  }
}

async function DeleteCurricularUnitySkill(id: number) {
  try {
    const curricularUnitySkill = await CurricularUnitySkill.findByPk(id);
    if (curricularUnitySkill) {
      await curricularUnitySkill.destroy();
      console.log("CurricularUnitySkill deleted successfully");
      return true;
    } else {
      console.log("CurricularUnitySkill not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting CurricularUnitySkill:", error);
    throw error;
  }
}

//------------------------- CurricularUnityKnowledge model ---------------------------------//

async function CreateKnowledgeCurricularUnity(knowledgeId: number, curricularUnityId: number) {
  try {
    const knowledgeCurricularUnity = await KnowledgeCurricularUnity.create({ knowledgeId, curricularUnityId });
    console.log("KnowledgeCurricularUnity created successfully:", knowledgeCurricularUnity.id);
    return knowledgeCurricularUnity;
  } catch (error) {
    console.error("Error creating KnowledgeCurricularUnity:", error);
    throw error;
  }
}

async function ReadAllKnowledgeCurricularUnitys() {
  try {
    const knowledgeCurricularUnityList = await KnowledgeCurricularUnity.findAll();
    console.log("KnowledgeCurricularUnity retrieved successfully:", knowledgeCurricularUnityList);
    return knowledgeCurricularUnityList;
  } catch (error) {
    console.error("Error retrieving KnowledgeCurricularUnity:", error);
    throw error;
  }
}

async function ReadKnowledgeCurricularUnity(id: number) {
  try {
    const knowledgeCurricularUnity = await KnowledgeCurricularUnity.findByPk(id);
    if (knowledgeCurricularUnity) {
      console.log("KnowledgeCurricularUnity retrieved successfully:", knowledgeCurricularUnity);
      return knowledgeCurricularUnity;
    } else {
      console.log("KnowledgeCurricularUnity not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading KnowledgeCurricularUnity:", error);
    throw error;
  }
}

async function UpdateKnowledgeCurricularUnity(id: number, knowledgeId: number, curricularUnityId: number) {
  try {
    const knowledgeCurricularUnity = await KnowledgeCurricularUnity.findByPk(id);
    if (knowledgeCurricularUnity) {
      knowledgeCurricularUnity.knowledgeId = knowledgeId;
      knowledgeCurricularUnity.curricularUnityId = curricularUnityId;
      await knowledgeCurricularUnity.save();
      console.log("KnowledgeCurricularUnity updated successfully:", knowledgeCurricularUnity);
      return knowledgeCurricularUnity;
    } else {
      console.log("KnowledgeCurricularUnity not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating KnowledgeCurricularUnity:", error);
    throw error;
  }
}

async function DeleteKnowledgeCurricularUnity(id: number) {
  try {
    const knowledgeCurricularUnity = await KnowledgeCurricularUnity.findByPk(id);
    if (knowledgeCurricularUnity) {
      await knowledgeCurricularUnity.destroy();
      console.log("KnowledgeCurricularUnity deleted successfully");
      return true;
    } else {
      console.log("KnowledgeCurricularUnity not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting KnowledgeCurricularUnity:", error);
    throw error;
  }
}

//------------------------- CurricularUnityBibliograph model ---------------------------------//

async function CreateBibliographCurricularUnity(bibliographId: number, curricularUnityId: number) {
  try {
    const bibliographCurricularUnity = await BibliographCurricularUnity.create({ bibliographId, curricularUnityId });
    console.log("BibliographCurricularUnity created successfully:", bibliographCurricularUnity.id);
    return bibliographCurricularUnity;
  } catch (error) {
    console.error("Error creating BibliographCurricularUnity:", error);
    throw error;
  }
}

async function ReadAllBibliographCurricularUnitys() {
  try {
    const bibliographCurricularUnityList = await BibliographCurricularUnity.findAll();
    console.log("BibliographCurricularUnity retrieved successfully:", bibliographCurricularUnityList);
    return bibliographCurricularUnityList;
  } catch (error) {
    console.error("Error retrieving BibliographCurricularUnity:", error);
    throw error;
  }
}

async function ReadBibliographCurricularUnity(id: number) {
  try {
    const bibliographCurricularUnity = await BibliographCurricularUnity.findByPk(id);
    if (bibliographCurricularUnity) {
      console.log("BibliographCurricularUnity retrieved successfully:", bibliographCurricularUnity);
      return bibliographCurricularUnity;
    } else {
      console.log("BibliographCurricularUnity not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading BibliographCurricularUnity:", error);
    throw error;
  }
}

async function UpdateBibliographCurricularUnity(id: number, bibliographId: number, curricularUnityId: number) {
  try {
    const bibliographCurricularUnity = await BibliographCurricularUnity.findByPk(id);
    if (bibliographCurricularUnity) {
      bibliographCurricularUnity.bibliographId = bibliographId;
      bibliographCurricularUnity.curricularUnityId = curricularUnityId;
      await bibliographCurricularUnity.save();
      console.log("BibliographCurricularUnity updated successfully:", bibliographCurricularUnity);
      return bibliographCurricularUnity;
    } else {
      console.log("BibliographCurricularUnity not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating BibliographCurricularUnity:", error);
    throw error;
  }
}

async function DeleteBibliographCurricularUnity(id: number) {
  try {
    const bibliographCurricularUnity = await BibliographCurricularUnity.findByPk(id);
    if (bibliographCurricularUnity) {
      await bibliographCurricularUnity.destroy();
      console.log("BibliographCurricularUnity deleted successfully");
      return true;
    } else {
      console.log("BibliographCurricularUnity not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting BibliographCurricularUnity:", error);
    throw error;
  }
}

//------------------------- CurricularUnity model ---------------------------------//

async function CreateCurricularUnity(objective: string, name: string, ppcId: number) {
  try {
    const curricularUnity = await CurricularUnity.create({ objective, name, ppcId });
    console.log("CurricularUnity created successfully:", curricularUnity.id);
    return curricularUnity;
  } catch (error) {
    console.error("Error creating CurricularUnity:", error);
    throw error;
  }
}

async function ReadAllCurricularUnitys() {
  try {
    const curricularUnities = await CurricularUnity.findAll();
    console.log("CurricularUnities retrieved successfully:", curricularUnities);
    return curricularUnities;
  } catch (error) {
    console.error("Error retrieving CurricularUnities:", error);
    throw error;
  }
}

async function ReadCurricularUnity(id: number) {
  try {
    const curricularUnity = await CurricularUnity.findByPk(id);
    if (curricularUnity) {
      console.log("CurricularUnity retrieved successfully:", curricularUnity);
      return curricularUnity;
    } else {
      console.log("CurricularUnity not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading CurricularUnity:", error);
    throw error;
  }
}

async function UpdateCurricularUnity(id: number, objective: string, name: string, ppcId: number) {
  try {
    const curricularUnity = await CurricularUnity.findByPk(id);
    if (curricularUnity) {
      curricularUnity.objective = objective;
      curricularUnity.name = name;
      curricularUnity.ppcId = ppcId;
      await curricularUnity.save();
      console.log("CurricularUnity updated successfully:", curricularUnity);
      return curricularUnity;
    } else {
      console.log("CurricularUnity not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating CurricularUnity:", error);
    throw error;
  }
}

async function DeleteCurricularUnity(id: number) {
  try {
    const curricularUnity = await CurricularUnity.findByPk(id);
    if (curricularUnity) {
      await curricularUnity.destroy();
      console.log("CurricularUnity deleted successfully");
      return true;
    } else {
      console.log("CurricularUnity not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting CurricularUnity:", error);
    throw error;
  }
}

//------------------------- Bibliograph model ---------------------------------//

async function CreateBibliograph(type: string, description: string) {
  try {
    const bibliograph = await Bibliograph.create({ type, description });
    console.log("Bibliograph created successfully:", bibliograph.id);
    return bibliograph;
  } catch (error) {
    console.error("Error creating Bibliograph:", error);
    throw new Error("Failed to create Bibliograph");
  }
}

async function ReadAllBibliographs() {
  try {
    const bibliographs = await Bibliograph.findAll();
    console.log("Bibliographs retrieved successfully:", bibliographs);
    return bibliographs;
  } catch (error) {
    console.error("Error retrieving Bibliographs:", error);
    throw new Error("Failed to retrieve Bibliographs");
  }
}

async function ReadBibliograph(id: number) {
  try {
    const bibliograph = await Bibliograph.findByPk(id);
    if (bibliograph) {
      console.log("Bibliograph retrieved successfully:", bibliograph);
      return bibliograph;
    } else {
      console.log("Bibliograph not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading Bibliograph:", error);
    throw new Error("Failed to read Bibliograph");
  }
}

async function UpdateBibliograph(id: number, type: string, description: string) {
  try {
    const bibliograph = await Bibliograph.findByPk(id);
    if (bibliograph) {
      bibliograph.type = type;
      bibliograph.description = description;
      await bibliograph.save();
      console.log("Bibliograph updated successfully:", bibliograph);
      return bibliograph;
    } else {
      console.log("Bibliograph not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating Bibliograph:", error);
    throw new Error("Failed to update Bibliograph");
  }
}

async function DeleteBibliograph(id: number) {
  try {
    const bibliograph = await Bibliograph.findByPk(id);
    if (bibliograph) {
      await bibliograph.destroy();
      console.log("Bibliograph deleted successfully");
      return true;
    } else {
      console.log("Bibliograph not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting Bibliograph:", error);
    throw new Error("Failed to delete Bibliograph");
  }
}

export {
  CreateBibliograph,
  ReadAllBibliographs,
  ReadBibliograph,
  UpdateBibliograph,
  DeleteBibliograph,
  CreateCurricularUnity,
  ReadAllCurricularUnitys,
  ReadCurricularUnity,
  UpdateCurricularUnity,
  DeleteCurricularUnity,
  CreateBibliographCurricularUnity,
  ReadAllBibliographCurricularUnitys,
  ReadBibliographCurricularUnity,
  UpdateBibliographCurricularUnity,
  DeleteBibliographCurricularUnity,
  CreateKnowledgeCurricularUnity,
  ReadAllKnowledgeCurricularUnitys,
  ReadKnowledgeCurricularUnity,
  UpdateKnowledgeCurricularUnity,
  DeleteKnowledgeCurricularUnity,
  CreateCurricularUnitySkill,
  ReadAllCurricularUnitySkills,
  ReadCurricularUnitySkill,
  UpdateCurricularUnitySkill,
  DeleteCurricularUnitySkill,
  CreateEvaluationPeriod, 
  ReadAllEvaluationPeriods, 
  ReadEvaluationPeriod, 
  UpdateEvaluationPeriod, 
  DeleteEvaluationPeriod,
  CreateHoliday,
  ReadAllHolidays,
  ReadHoliday,
  UpdateHoliday,
  DeleteHoliday,
  CreateKnowledge,
  ReadAllKnowledge,
  ReadKnowledge,
  UpdateKnowledge,
  DeleteKnowledge,
  CreatePPC,
  ReadAllPPCs,
  ReadPPC,
  UpdatePPC,
  DeletePPC,
  CreateSkill,
  ReadAllSkills,
  ReadSkill,
  UpdateSkill,
  DeleteSkill,
  CreateUser,
  ReadAllUsers,
  ReadUser,
  UpdateUser,
  DeleteUser,
  ReadUserByEmail
};