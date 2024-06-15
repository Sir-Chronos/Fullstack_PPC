import { Request, Response } from "express";
import { CreateCurricularUnitySkill, DeleteCurricularUnitySkill, ReadAllCurricularUnitySkills, ReadCurricularUnitySkill, UpdateCurricularUnitySkill } from "../config/repository"

// Cria uma Skill de Unidade Curricular
export async function createCurricularUnitySkill(req: Request, res: Response) {
  const { CurricularUnityId, skillId } = req.body;
  try {
    const CurricularUnitySkill = await CreateCurricularUnitySkill(CurricularUnityId, skillId);
    res.status(201).json(CurricularUnitySkill);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar Skill de Unidade Curricular" });
  }
}

// Recupera todas as Skills de Unidade Curricular
export async function getAllCurricularUnitySkills(req: Request, res: Response) {
  try {
    const CurricularUnitySkills = await ReadAllCurricularUnitySkills();
    res.status(200).json(CurricularUnitySkills);
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar Skill de Unidade Curriculars" });
  }
}

// Recupera uma Skill de Unidade Curricular específica
export async function getCurricularUnitySkill(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const CurricularUnitySkill = await ReadCurricularUnitySkill(Number(id));
    if (CurricularUnitySkill) {
      res.status(200).json(CurricularUnitySkill);
    } else {
      res.status(404).json({ error: "Skill de Unidade Curricular não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar Skill de Unidade Curricular" });
  }
}

// Atualiza uma Skill de Unidade Curricular específica
export async function updateCurricularUnitySkill(req: Request, res: Response) {
  const { id } = req.params;
  const { CurricularUnityId, skillId } = req.body;
  try {
    const CurricularUnitySkill = await UpdateCurricularUnitySkill(Number(id), CurricularUnityId, skillId);
    if (CurricularUnitySkill) {
      res.status(200).json(CurricularUnitySkill);
    } else {
      res.status(404).json({ error: "Skill de Unidade Curricular não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar Skill de Unidade Curricular" });
  }
}

// Deleta uma Skill de Unidade Curricular específica
export async function deleteCurricularUnitySkill(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const success = await DeleteCurricularUnitySkill(Number(id));
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Skill de Unidade Curricular não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar Skill de Unidade Curricular" });
  }
}