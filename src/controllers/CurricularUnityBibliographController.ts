import { Request, Response } from "express";
import { CreateBibliographCurricularUnity, DeleteBibliographCurricularUnity, ReadAllBibliographCurricularUnitys, ReadBibliographCurricularUnity, UpdateBibliographCurricularUnity } from "../config/repository"

// Cria uma Bibliografia de Unidade Curricular
export async function createBibliographCurricularUnity(req: Request, res: Response) {
  const { bibliographId, curricularUnityId } = req.body;
  try {
    const BibliographCurricularUnity = await CreateBibliographCurricularUnity(bibliographId, curricularUnityId);
    res.status(201).json(BibliographCurricularUnity);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar Bibliografia de Unidade Curricular" });
  }
}

// Recupera todas as Bibliografias da Unidade Curricular
export async function getAllBibliographCurricularUnitys(req: Request, res: Response) {
  try {
    const BibliographCurricularUnitys = await ReadAllBibliographCurricularUnitys();
    res.status(200).json(BibliographCurricularUnitys);
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar Bibliografia de Unidade Curriculars" });
  }
}

// Recupera um Bibliografia de Unidade Curricular específico
export async function getBibliographCurricularUnity(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const BibliographCurricularUnity = await ReadBibliographCurricularUnity(Number(id));
    if (BibliographCurricularUnity) {
      res.status(200).json(BibliographCurricularUnity);
    } else {
      res.status(404).json({ error: "Bibliografia de Unidade Curricular não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar Bibliografia de Unidade Curricular" });
  }
}

// Atualiza uma Bibliografia de Unidade Curricular específica
export async function updateBibliographCurricularUnity(req: Request, res: Response) {
  const { id } = req.params;
  const { bibliographId, curricularUnityId } = req.body;
  try {
    const BibliographCurricularUnity = await UpdateBibliographCurricularUnity(Number(id), bibliographId, curricularUnityId);
    if (BibliographCurricularUnity) {
      res.status(200).json(BibliographCurricularUnity);
    } else {
      res.status(404).json({ error: "Bibliografia de Unidade Curricular não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar Bibliografia de Unidade Curricular" });
  }
}

// Deleta uma Bibliografia de Unidade Curricular específica
export async function deleteBibliographCurricularUnity(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const success = await DeleteBibliographCurricularUnity(Number(id));
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Bibliografia de Unidade Curricular não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar Bibliografia de Unidade Curricular" });
  }
}