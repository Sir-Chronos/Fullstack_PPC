import { Router } from "express";
import * as UserController from '../controllers/UserController';
import { authenticateToken } from '../middleware/authMiddleware';

const UserRouter = Router();

UserRouter.post("/", UserController.createUser);
UserRouter.get("/", authenticateToken, UserController.getAllUsers);
UserRouter.get("/:id", authenticateToken, UserController.getUser);
UserRouter.put("/:id", authenticateToken, UserController.updateUser);
UserRouter.delete("/:id", authenticateToken, UserController.deleteUser);
UserRouter.post("/login", UserController.loginUser);
UserRouter.get("/login", UserController.renderLoginPage); // Nova rota para renderizar a página de login

export default UserRouter;
