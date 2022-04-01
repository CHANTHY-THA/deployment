"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportRepository = void 0;
const responseBody_1 = require("./responseBody");
const typeorm_1 = require("typeorm");
const base_controller_1 = require("../../controller/base.controller");
class ReportRepository {
    //reporting
    getEmptyReport(filter) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return (0, typeorm_1.getConnection)().query("CALL sp_getEmptyReport('" +
                filter.fromDate + "', '"
                + filter.toDate + "','"
                + filter.customerID + "','"
                + filter.userOperationID + "','"
                + filter.bizPartnerID + "','"
                + filter.bookingStatusID + "','"
                + filter.selectionDate
                + "');")
                .then(x => {
                resBody.body = x[0];
                resBody.status = base_controller_1.Status.success;
                return Promise.resolve(resBody);
            })
                .catch(err => {
                let rr = new responseBody_1.ResponseBody();
                rr.body = [err];
                rr.status = base_controller_1.Status.logic_error;
                return Promise.resolve(rr);
            });
        }
        catch (error) {
            console.log(error);
            resBody.status = base_controller_1.Status.server_error;
            resBody.body = [error];
            return Promise.resolve(resBody);
        }
    }
    getConsoleReport(filter) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return (0, typeorm_1.getConnection)().query("CALL sp_getConsoleReport('" +
                filter.fromDate + "', '"
                + filter.toDate + "','"
                + filter.customerID + "','"
                + filter.userOperationID + "','"
                + filter.bizPartnerID + "','"
                + filter.bookingStatusID + "','"
                + filter.selectionDate
                + "');")
                .then(x => {
                resBody.body = x[0];
                resBody.status = base_controller_1.Status.success;
                return Promise.resolve(resBody);
            })
                .catch(err => {
                let rr = new responseBody_1.ResponseBody();
                rr.body = [err];
                rr.status = base_controller_1.Status.logic_error;
                return Promise.resolve(rr);
            });
        }
        catch (error) {
            console.log(error);
            resBody.status = base_controller_1.Status.server_error;
            resBody.body = [error];
            return Promise.resolve(resBody);
        }
    }
}
exports.ReportRepository = ReportRepository;
//# sourceMappingURL=report.repository.js.map