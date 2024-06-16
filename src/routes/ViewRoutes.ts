import { Router } from "express";
import * as UserController from '../controllers/UserController';
import { authenticateToken } from '../middleware/authMiddleware';

const ViewRouter = Router();

ViewRouter.post("/", UserController.createUser);
ViewRouter.get("/", authenticateToken, UserController.getAllUsers);
ViewRouter.get("/:id", authenticateToken, UserController.getUser);
ViewRouter.put("/:id", authenticateToken, UserController.updateUser);
ViewRouter.delete("/:id", authenticateToken, UserController.deleteUser);
ViewRouter.post("/login", UserController.loginUser);
ViewRouter.get("/login", UserController.renderLoginPage); // Nova rota para renderizar a página de login

export default ViewRouter;
