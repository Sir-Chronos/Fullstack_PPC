import { Router } from "express";
import * as UserController from '../controllers/UserController';
import { authenticateToken } from '../middleware/authMiddleware';

const UserRouter = Router();

UserRouter.get("/", authenticateToken, UserController.getAllUsers);
UserRouter.post("/signup", UserController.createUser);
UserRouter.get('/signup', UserController.renderRegisterPage)
UserRouter.post("/login", UserController.loginUser);
UserRouter.get("/login", UserController.renderLoginPage);
UserRouter.get("/:id", authenticateToken, UserController.getUser);
UserRouter.put("/:id", authenticateToken, UserController.updateUser);
UserRouter.delete("/:id", authenticateToken, UserController.deleteUser);
 // Nova rota para renderizar a página de login

export default UserRouter;
