import { Request, Response } from "express";
import {
  CreateBibliograph,
  DeleteBibliograph,
  ReadAllBibliographs,
  ReadBibliograph,
  UpdateBibliograph,
} 
from "../repository/BibliographRepository";

// Cria uma Bibliografia
export async function createBibliograph(req: Request, res: Response) {
  const { type, description } = req.body;
  try {
    const Bibliograph = await CreateBibliograph(type, description);
    res.status(201).json(Bibliograph);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar Bibliografia" });
  }
}

// Recupera todas as Bibliografias
export async function getAllBibliographs(req: Request, res: Response) {
  try {
    const Bibliographs = await ReadAllBibliographs();
    res.status(200).json(Bibliographs);
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar Bibliografias" });
  }
}

// Recupera uma Bibliografia específica
export async function getBibliograph(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const Bibliograph = await ReadBibliograph(Number(id));
    if (Bibliograph) {
      res.status(200).json(Bibliograph);
    } else {
      res.status(404).json({ error: "Bibliografia não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar Bibliografia" });
  }
}

// Atualiza uma Bibliografia específica
export async function updateBibliograph(req: Request, res: Response) {
  const { id } = req.params;
  const { type, description } = req.body;
  try {
    const Bibliograph = await UpdateBibliograph(Number(id), type, description);
    if (Bibliograph) {
      res.status(200).json(Bibliograph);
    } else {
      res.status(404).json({ error: "Bibliografia não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar Bibliografia" });
  }
}

// Deleta uma Bibliografia específica
export async function deleteBibliograph(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const success = await DeleteBibliograph(Number(id));
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Bibliografia não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar Bibliografia" });
  }
}
