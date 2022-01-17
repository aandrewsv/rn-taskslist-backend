import { Router } from "express";
import {
  getTasks,
  saveTask,
  getTasksCount,
  getTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: tasks endpoints
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 */
router.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Creates a new task
 *     tags: [Tasks]
 */
router.post("/tasks", saveTask);

/**
 * @swagger
 * /tasks/count:
 *   get:
 *     summary: Get tasks count
 *     tags: [Tasks]
 */
router.get("/tasks/count", getTasksCount);

/**
 * @swagger
 * /tasks/id:
 *   get:
 *     summary: Get a task by id
 *     tags: [Tasks]
 */
router.get("/tasks/:id", getTask);

/**
 * @swagger
 * /tasks/id:
 *   delete:
 *     summary: Delete a task by id
 *     tags: [Tasks]
 */
router.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * /tasks/id:
 *   put:
 *     summary: Update a task by id
 *     tags: [Tasks]
 */
router.put("/tasks/:id", updateTask);

export default router;
