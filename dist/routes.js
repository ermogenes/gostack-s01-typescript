"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUserService_1 = __importDefault(require("./services/CreateUserService"));
function helloWorld(request, response) {
    var user = CreateUserService_1.default('Ermogenes', 'a@bc.d', '123456');
    return response.json({ message: 'Hello Typescript' });
}
exports.helloWorld = helloWorld;
