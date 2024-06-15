import { Router } from "express";
import * as UserController from '../controllers/UserController';

const UserRouter = Router();

UserRouter.post("/", UserController.createUser);
UserRouter.get("/", UserController.getAllUsers);
UserRouter.get("/:id", UserController.getUser);
UserRouter.put("/:id", UserController.updateUser);
UserRouter.delete("/:id", UserController.deleteUser);
UserRouter.post("/login", UserController.loginUser);

export default UserRouter;