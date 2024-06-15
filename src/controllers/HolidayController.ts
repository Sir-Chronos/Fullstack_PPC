import { Request, Response } from "express";
import {
  CreateHoliday,
  DeleteHoliday,
  ReadAllHolidays,
  ReadHoliday,
  UpdateHoliday,
} from "../repository/repository";

// Cria um Holiday
export async function createHoliday(req: Request, res: Response) {
  const { type, date, compensation } = req.body;
  try {
    const Holiday = await CreateHoliday(type, date, compensation);
    res.status(201).json(Holiday);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar Holiday" });
  }
}

// Recupera todos os Holiday
export async function getAllHolidays(req: Request, res: Response) {
  try {
    const Holidays = await ReadAllHolidays();
    res.status(200).json(Holidays);
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar Holidays" });
  }
}

// Recupera um Holiday específico
export async function getHoliday(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const Holiday = await ReadHoliday(Number(id));
    if (Holiday) {
      res.status(200).json(Holiday);
    } else {
      res.status(404).json({ error: "Holiday não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar Holiday" });
  }
}

// Atualiza um Holiday específico
export async function updateHoliday(req: Request, res: Response) {
  const { id } = req.params;
  const { type, date, compensation } = req.body;
  try {
    const Holiday = await UpdateHoliday(Number(id), type, date, compensation);
    if (Holiday) {
      res.status(200).json(Holiday);
    } else {
      res.status(404).json({ error: "Holiday não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar Holiday" });
  }
}

// Deleta um Holiday específico
export async function deleteHoliday(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const success = await DeleteHoliday(Number(id));
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Holiday não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar Holiday" });
  }
}
