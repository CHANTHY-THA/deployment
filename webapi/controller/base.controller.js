"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.baseController = void 0;
let middleware = require('../authorization/AuthorizationServer');
class baseController {
    constructor() {
        this.mddileWare = middleware;
        this.bearer = "bearer";
        // role 
        this.roles_all = "all";
        this.role_admin = "admin";
        this.role_operation = "operation";
    }
}
exports.baseController = baseController;
var Status;
(function (Status) {
    Status["success"] = "success";
    Status["server_error"] = "server_error";
    Status["logic_error"] = "logic_error";
})(Status = exports.Status || (exports.Status = {}));
//# sourceMappingURL=base.controller.js.map