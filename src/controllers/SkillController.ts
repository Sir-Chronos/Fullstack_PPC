import { Request, Response } from "express";
import {
  CreateSkill,
  DeleteSkill,
  ReadAllSkills,
  ReadSkill,
  UpdateSkill,
} 
from "../repository/SkillRepository";

// Cria uma Skill
export async function createSkill(req: Request, res: Response) {
  const { type, description } = req.body;
  try {
    const Skill = await CreateSkill(type, description);
    res.status(201).json(Skill);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar Skill" });
  }
}

// Recupera todas os Skill
export async function getAllSkills(req: Request, res: Response) {
  try {
    const Skills = await ReadAllSkills();
    res.status(200).json(Skills);
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar Skills" });
  }
}

// Recupera uma Skill específica
export async function getSkill(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const Skill = await ReadSkill(Number(id));
    if (Skill) {
      res.status(200).json(Skill);
    } else {
      res.status(404).json({ error: "Skill não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar Skill" });
  }
}

// Atualiza uma Skill específica
export async function updateSkill(req: Request, res: Response) {
  const { id } = req.params;
  const { type, description } = req.body;
  try {
    const Skill = await UpdateSkill(Number(id), type, description);
    if (Skill) {
      res.status(200).json(Skill);
    } else {
      res.status(404).json({ error: "Skill não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar Skill" });
  }
}

// Deleta uma Skill específica
export async function deleteSkill(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const success = await DeleteSkill(Number(id));
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Skill não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar Skill" });
  }
}
