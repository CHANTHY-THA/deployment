"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportController = void 0;
const base_controller_1 = require("./base.controller");
const report_repository_1 = require("../orm/repository/report.repository");
class ReportController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/report/";
        this.repo = new report_repository_1.ReportRepository();
    }
    getEmptyReport(app) {
        app
            .post(this.controllerName + "getEmptyReport", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let filterModel = req.body;
            console.log(this.repo.getEmptyReport(filterModel));
            return this.repo.getEmptyReport(filterModel).then(qb => { res.send(qb); });
        });
    }
    getConsoleReport(app) {
        app
            .post(this.controllerName + "getConsoleReport", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let filterModel = req.body;
            return this.repo.getConsoleReport(filterModel).then(qb => { res.send(qb); });
        });
    }
}
exports.ReportController = ReportController;
//# sourceMappingURL=report.controller.js.map