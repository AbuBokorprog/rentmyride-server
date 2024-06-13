"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.castErrorHandler = void 0;
const http_status_1 = __importDefault(require("http-status"));
const castErrorHandler = (err) => {
    const errorMessages = [
        { path: err.path, message: err.message },
    ];
    const statusCode = http_status_1.default.BAD_REQUEST;
    return {
        statusCode,
        message: 'Mongoose cast error',
        errorMessages,
    };
};
exports.castErrorHandler = castErrorHandler;
