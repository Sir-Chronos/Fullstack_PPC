import { Request, Response } from "express";
import {
  CreateKnowledge,
  DeleteKnowledge,
  ReadAllKnowledge,
  ReadKnowledge,
  UpdateKnowledge,
} 
from "../repository/KnowledgeRepository";

// Cria um Knowledge
export async function createKnowledge(req: Request, res: Response) {
  const { description, knowFatherId } = req.body;
  try {
    const Knowledge = await CreateKnowledge(description, knowFatherId);
    res.status(201).json(Knowledge);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar Knowledge" });
  }
}

// Recupera todos os Knowledge
export async function getAllKnowledges(req: Request, res: Response) {
  try {
    const Knowledges = await ReadAllKnowledge();
    res.status(200).json(Knowledges);
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar Knowledges" });
  }
}

// Recupera um Knowledge específico
export async function getKnowledge(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const Knowledge = await ReadKnowledge(Number(id));
    if (Knowledge) {
      res.status(200).json(Knowledge);
    } else {
      res.status(404).json({ error: "Knowledge não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar Knowledge" });
  }
}

// Atualiza um Knowledge específico
export async function updateKnowledge(req: Request, res: Response) {
  const { id } = req.params;
  const { description, knowFatherId } = req.body;
  try {
    const Knowledge = await UpdateKnowledge(
      Number(id),
      description,
      knowFatherId
    );
    if (Knowledge) {
      res.status(200).json(Knowledge);
    } else {
      res.status(404).json({ error: "Knowledge não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar Knowledge" });
  }
}

// Deleta um Knowledge específico
export async function deleteKnowledge(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const success = await DeleteKnowledge(Number(id));
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Knowledge não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar Knowledge" });
  }
}
