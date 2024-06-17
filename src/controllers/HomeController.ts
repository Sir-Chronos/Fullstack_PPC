import { Request, Response } from "express";

// Renderiza a página principal (home)
export function renderHomePage(req: Request, res: Response) {
  res.render('home'); // Certifique-se de que 'homePage.ejs' está no diretório de views
}
