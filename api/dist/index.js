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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./models/Task.js");
const database_1 = require("./database/database");
const index_1 = __importDefault(require("./routes/index"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var cors = require("cors");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.use(index_1.default);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.db.sync({ force: true });
            app.listen(process.env.DATABASE_PORT, () => {
                console.log("server listen on port", process.env.DATABASE_PORT);
            });
        }
        catch (error) { }
    });
}
main();
exports.default = app;
