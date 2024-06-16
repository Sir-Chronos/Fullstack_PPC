import { Request, Response } from "express";
import {
  CreateUser,
  DeleteUser,
  LoginUser,
  ReadAllUsers,
  ReadUser,
  UpdateUser,
} 
from "../repository/UserRepository";
import bcrypt from "bcrypt";

// Cria um usuário
export async function createUser(req: Request, res: Response) {
  const { name, password, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await CreateUser(name, hashedPassword, email);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
}

// Recupera todos os usuários
export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await ReadAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar usuários" });
  }
}

// Recupera um usuário específico
export async function getUser(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const user = await ReadUser(Number(id));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao recuperar usuário" });
  }
}

// Atualiza um usuário específico
export async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const { name, password, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UpdateUser(Number(id), name, hashedPassword, email);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
}

// Deleta um usuário específico
export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const success = await DeleteUser(Number(id));
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
}

// // Login de usuário
// export async function loginUser(req: Request, res: Response) {
//   const { email, password } = req.body;
//   try {
//     const user = await ReadUserByEmail(email);
//     if (user && (await bcrypt.compare(password, user.password))) {
//       // Suponha que você gera um token JWT aqui
//       const token = "fake-jwt-token";
//       res.status(200).json({ token });
//     } else {
//       res.status(401).json({ error: "Credenciais inválidas" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao fazer login" });
//   }
// }

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
      const { user, token } = await LoginUser(email, password);
      res.status(200).json({ user, token });
  } catch (error) {
      res.status(401).json({ error: "Credenciais inválidas" });
  }
}