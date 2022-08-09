"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("../models/Task");
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, priority } = req.body;
    try {
        const query = yield Task_1.taskModel.findAll({ where: { name: name } });
        if (query.length > 0)
            return res.status(400).json("Task already exist");
        yield Task_1.taskModel.create({
            name,
            priority,
        });
        return res.status(201).json("The new task was successfully created");
    }
    catch (error) {
        return res.status(400).send(error);
    }
});
exports.default = createTask;
