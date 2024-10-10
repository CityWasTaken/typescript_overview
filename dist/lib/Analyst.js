"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class Analyst extends Employee_1.default {
    constructor(firstName, lastName, age, title, salary, certifications) {
        super(firstName, lastName, age, title, salary);
        this.certifications = certifications;
    }
}
exports.default = Analyst;
