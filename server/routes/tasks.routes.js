import { Router } from "express";
import {
  getTasks,
  getTask,
  createTasks,
  deleteTask,
  updateTasks,
} from "../controllers/task.controllers.js";

const router = Router();

router.get("/tasks", getTasks);
router.get("/task/:id", getTask);
router.post("/tasks", createTasks);
router.put("/taskUpdate", updateTasks);
router.delete("/taskDelete", deleteTask);

export default router;
