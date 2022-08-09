import { Request, Response } from "express";
import { taskModel } from "../models/Task";

const getTask = async (req: Request, res: Response) => {
  try {
    const allTask = await taskModel.findAll();

    return res.status(200).json(allTask);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default getTask;
