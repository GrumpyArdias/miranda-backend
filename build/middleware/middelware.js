"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleWare = void 0;
function middleWare(error, _req, res, _next) {
    res.status(500).send(error.message);
}
exports.middleWare = middleWare;
