import { Request, Response } from "express";
import {
  CreateKnowledgeCurricularUnity,
  DeleteKnowledgeCurricularUnity,
  ReadAllKnowledgeCurricularUnitys,
  ReadKnowledgeCurricularUnity,
  UpdateKnowledgeCurricularUnity,
} 
from "../repository/CurricularUnityKnowledgeRepository";

// Cria um Conhecimento de Unidade Curricular
export async function createKnowledgeCurricularUnity(
  req: Request,
  res: Response
) {
  const { knowledgeId, curricularUnityId } = req.body;
  try {
    const KnowledgeCurricularUnity = await CreateKnowledgeCurricularUnity(
      knowledgeId,
      curricularUnityId
    );
    res.status(201).json(KnowledgeCurricularUnity);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao criar Conhecimento de Unidade Curricular" });
  }
}

// Recupera todos os Conhecimentos de Unidade Curriculare
export async function getAllKnowledgeCurricularUnitys(
  req: Request,
  res: Response
) {
  try {
    const KnowledgeCurricularUnitys = await ReadAllKnowledgeCurricularUnitys();
    res.status(200).json(KnowledgeCurricularUnitys);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao recuperar Conhecimento de Unidade Curriculars" });
  }
}

// Recupera um Conhecimento de Unidade Curricular específico
export async function getKnowledgeCurricularUnity(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const KnowledgeCurricularUnity = await ReadKnowledgeCurricularUnity(
      Number(id)
    );
    if (KnowledgeCurricularUnity) {
      res.status(200).json(KnowledgeCurricularUnity);
    } else {
      res
        .status(404)
        .json({ error: "Conhecimento de Unidade Curricular não encontrado" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao recuperar Conhecimento de Unidade Curricular" });
  }
}

// Atualiza um Conhecimento de Unidade Curricular específico
export async function updateKnowledgeCurricularUnity(
  req: Request,
  res: Response
) {
  const { id } = req.params;
  const { knowledgeId, curricularUnityId } = req.body;
  try {
    const KnowledgeCurricularUnity = await UpdateKnowledgeCurricularUnity(
      Number(id),
      knowledgeId,
      curricularUnityId
    );
    if (KnowledgeCurricularUnity) {
      res.status(200).json(KnowledgeCurricularUnity);
    } else {
      res
        .status(404)
        .json({ error: "Conhecimento de Unidade Curricular não encontrado" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao atualizar Conhecimento de Unidade Curricular" });
  }
}

// Deleta um Conhecimento de Unidade Curricular específico
export async function deleteKnowledgeCurricularUnity(
  req: Request,
  res: Response
) {
  const { id } = req.params;
  try {
    const success = await DeleteKnowledgeCurricularUnity(Number(id));
    if (success) {
      res.status(204).send();
    } else {
      res
        .status(404)
        .json({ error: "Conhecimento de Unidade Curricular não encontrado" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao deletar Conhecimento de Unidade Curricular" });
  }
}
