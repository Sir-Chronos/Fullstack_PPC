import { Request, Response } from "express";
import {
  CreatePPC,
  DeletePPC,
  ReadAllPPCs,
  ReadPPC,
  UpdatePPC,
} from "../repository/repository";

// Cria um PPC
export async function createPPC(req: Request, res: Response) {
  const { occupationArea, course, version } = req.body;
  try {
    const PPC = await CreatePPC(occupationArea, course, version);
    res.status(201).json(PPC);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar PPC" });
  }
}

// Recupera todos os PPC
export async function getAllPPCs(req: Request, res: Response) {
  try {
    const PPCs = await ReadAllPPCs();
    res.status(200).json(PPCs);
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar PPCs" });
  }
}

// Recupera um PPC específico
export async function getPPC(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const PPC = await ReadPPC(Number(id));
    if (PPC) {
      res.status(200).json(PPC);
    } else {
      res.status(404).json({ error: "PPC não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar PPC" });
  }
}

// Atualiza um PPC específico
export async function updatePPC(req: Request, res: Response) {
  const { id } = req.params;
  const { occupationArea, course, version } = req.body;
  try {
    const PPC = await UpdatePPC(Number(id), occupationArea, course, version);
    if (PPC) {
      res.status(200).json(PPC);
    } else {
      res.status(404).json({ error: "PPC não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar PPC" });
  }
}

// Deleta um PPC específico
export async function deletePPC(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const success = await DeletePPC(Number(id));
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "PPC não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar PPC" });
  }
}
