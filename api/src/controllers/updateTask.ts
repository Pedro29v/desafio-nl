import { Request, Response } from "express";
import { taskModel } from "../models/Task";

const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await taskModel.update(req.body, {
      where: {
        id: id,
      },
    });

    return res.status(204).json();
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default updateTask;
