import { Router } from "express";
import {
  CreateTagController,
  CreateUserController,
  ShowUsersController,
  DeleteUserController,
  AuthenticateUserController,
  CreateComplimentController,
  ShowTagsController,
} from "./controllers";

import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

// Users
const createUserController = new CreateUserController();
const showUsersController = new ShowUsersController();
const deleteUserController = new DeleteUserController();
const authenticateUserController = new AuthenticateUserController();

// Tags
const createTagController = new CreateTagController();
const showTagsController = new ShowTagsController();

// Compliments
const createComplimentController = new CreateComplimentController();

router.post("/login", authenticateUserController.handle);

router.post("/users", ensureAdmin, createUserController.handle);
router.get("/users", ensureAdmin, showUsersController.show);
router.delete("/users/del/:id", ensureAdmin, deleteUserController.delete);

router.post("/tags", ensureAdmin, createTagController.handle);
router.get("/tags", ensureAdmin, showTagsController.show);

router.post("/cumpliments/:id", ensureAdmin, createComplimentController.handle);

export { router };
