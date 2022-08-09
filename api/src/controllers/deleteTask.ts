import { Request, Response } from "express";
import { taskModel } from "../models/Task";

const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);
    await taskModel.destroy({ where: { id: id } });

    return res.status(204).json();
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default deleteTask;
