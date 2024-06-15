import { Request, Response } from "express";
import { CreateCurricularUnity, DeleteCurricularUnity, ReadAllCurricularUnitys, ReadCurricularUnity, UpdateCurricularUnity } from "../config/repository"

// Cria uma Unidade Curricular
export async function createCurricularUnity(req: Request, res: Response) {
  const { objetive, name, ppcId } = req.body;
  try {
    const CurricularUnity = await CreateCurricularUnity(objetive, name, ppcId);
    res.status(201).json(CurricularUnity);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar Unidade Curricular" });
  }
}

// Recupera todas as Unidades Curriculares
export async function getAllCurricularUnitys(req: Request, res: Response) {
  try {
    const CurricularUnitys = await ReadAllCurricularUnitys();
    res.status(200).json(CurricularUnitys);
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar Unidade Curriculars" });
  }
}

// Recupera uma Unidade Curricular específica
export async function getCurricularUnity(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const CurricularUnity = await ReadCurricularUnity(Number(id));
    if (CurricularUnity) {
      res.status(200).json(CurricularUnity);
    } else {
      res.status(404).json({ error: "Unidade Curricular não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar Unidade Curricular" });
  }
}

// Atualiza uma Unidade Curricular específica
export async function updateCurricularUnity(req: Request, res: Response) {
  const { id } = req.params;
  const { objetive, name, ppcId } = req.body;
  try {
    const CurricularUnity = await UpdateCurricularUnity(Number(id), objetive, name, ppcId);
    if (CurricularUnity) {
      res.status(200).json(CurricularUnity);
    } else {
      res.status(404).json({ error: "Unidade Curricular não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar Unidade Curricular" });
  }
}

// Deleta uma Unidade Curricular específica
export async function deleteCurricularUnity(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const success = await DeleteCurricularUnity(Number(id));
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Unidade Curricular não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar Unidade Curricular" });
  }
}