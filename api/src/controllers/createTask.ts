import { Request, Response } from "express";
import { taskModel } from "../models/Task";

const createTask = async (req: Request, res: Response) => {
  const { name, priority } = req.body;

  try {
    const query = await taskModel.findAll({ where: { name: name } });

    if (query.length > 0) return res.status(400).json("Task already exist");

    await taskModel.create({
      name,
      priority,
    });

    return res.status(201).json("The new task was successfully created");
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default createTask;
