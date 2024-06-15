import { Request, Response } from "express";
import {
  CreateEvaluationPeriod,
  DeleteEvaluationPeriod,
  ReadAllEvaluationPeriods,
  ReadEvaluationPeriod,
  UpdateEvaluationPeriod,
} from "../repository/repository";

// Cria um EvaluationPeriod
export async function createEvaluationPeriod(req: Request, res: Response) {
  const { name, beginning, ending } = req.body;
  try {
    const EvaluationPeriod = await CreateEvaluationPeriod(
      name,
      beginning,
      ending
    );
    res.status(201).json(EvaluationPeriod);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar EvaluationPeriod" });
  }
}

// Recupera todos os EvaluationPeriod
export async function getAllEvaluationPeriods(req: Request, res: Response) {
  try {
    const EvaluationPeriods = await ReadAllEvaluationPeriods();
    res.status(200).json(EvaluationPeriods);
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar EvaluationPeriods" });
  }
}

// Recupera um EvaluationPeriod específico
export async function getEvaluationPeriod(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const EvaluationPeriod = await ReadEvaluationPeriod(Number(id));
    if (EvaluationPeriod) {
      res.status(200).json(EvaluationPeriod);
    } else {
      res.status(404).json({ error: "EvaluationPeriod não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar EvaluationPeriod" });
  }
}

// Atualiza um EvaluationPeriod específico
export async function updateEvaluationPeriod(req: Request, res: Response) {
  const { id } = req.params;
  const { name, beginning, ending } = req.body;
  try {
    const EvaluationPeriod = await UpdateEvaluationPeriod(
      Number(id),
      name,
      beginning,
      ending
    );
    if (EvaluationPeriod) {
      res.status(200).json(EvaluationPeriod);
    } else {
      res.status(404).json({ error: "EvaluationPeriod não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar EvaluationPeriod" });
  }
}

// Deleta um EvaluationPeriod específico
export async function deleteEvaluationPeriod(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const success = await DeleteEvaluationPeriod(Number(id));
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "EvaluationPeriod não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar EvaluationPeriod" });
  }
}
