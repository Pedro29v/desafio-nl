import { Router } from "express";
import createTask from "../controllers/createTask";
import getTask from "../controllers/getTask";
import updateTask from "../controllers/updateTask";
import deleteTask from "../controllers/deleteTask";

const router = Router();

router.get("/task", getTask);
router.post("/post", createTask);
router.put("/task/:id", updateTask);
router.delete("/delete/:id", deleteTask);

export default router;
