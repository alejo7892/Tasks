import { Router } from "express";
import {
  getTasks,
  getUsers,
  createTasks,
  deleteTask,
  updateTasks,
} from "../controllers/task.controllers.js";

const router = Router();

router.get("/tasksShow", getTasks);
router.get("/usersShow", getUsers);
router.post("/tasks", createTasks);
router.put("/taskUpdate", updateTasks);
router.delete("/taskDelete/:title", deleteTask);


export default router;
