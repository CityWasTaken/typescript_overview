"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class Engineer extends Employee_1.default {
    constructor(firstName, lastName, age, title, salary, programmingLanguages) {
        super(firstName, lastName, age, title, salary);
        this.programmingLanguages = programmingLanguages;
    }
}
exports.default = Engineer;
