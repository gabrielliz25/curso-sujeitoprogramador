"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createPeople_1 = require("./createPeople");
const createPeople_2 = __importDefault(require("./createPeople"));
const p1 = (0, createPeople_1.createPeople)("Gabriel", "Liz", 19);
(0, createPeople_2.default)(p1, "João");
console.log(p1);
//# sourceMappingURL=modules.js.map