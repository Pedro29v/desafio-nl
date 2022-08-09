"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createTask_1 = __importDefault(require("../controllers/createTask"));
const getTask_1 = __importDefault(require("../controllers/getTask"));
const updateTask_1 = __importDefault(require("../controllers/updateTask"));
const deleteTask_1 = __importDefault(require("../controllers/deleteTask"));
const router = (0, express_1.Router)();
router.get("/task", getTask_1.default);
router.post("/post", createTask_1.default);
router.put("/task/:id", updateTask_1.default);
router.delete("/delete/:id", deleteTask_1.default);
exports.default = router;
