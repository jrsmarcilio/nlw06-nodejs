import { Router } from "express";
import { CreateTagController, CreateUserController } from "./controllers";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", ensureAdmin, createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };
