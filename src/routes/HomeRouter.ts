import { Router } from "express";
import * as HomeController from "../controllers/HomeController";
import { authenticateToken } from "../middleware/authMiddleware";

const HomeRouter = Router();

// Rota para renderizar a página principal (home)
// Aqui, assumimos que a página inicial é protegida e precisa de autenticação
HomeRouter.get("/", authenticateToken, HomeController.renderHomePage);

export default HomeRouter;
