"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const booking_repository_1 = require("../orm/repository/booking.repository");
class DashboardController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/Dashboard/";
    }
    /**
  * @method getCountBookingStatusInMonth
  * @param app
  */
    getCountBookingStatusInMonth(app) {
        app
            .post(this.controllerName + "getCountBookingStatusInMonth", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(booking_repository_1.BookingRepository).getCountBookingStatusInMonth().then(qb => { res.send(qb); });
        });
    }
    getCountDataInMonth(app) {
        app
            .post(this.controllerName + "getCountDataInMonth", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(booking_repository_1.BookingRepository).getCountDataInMonth().then(qb => { res.send(qb); });
        });
    }
    getCountMonthlyBooking(app) {
        app
            .post(this.controllerName + "getCountMonthlyBooking", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(booking_repository_1.BookingRepository).getCountMonthlyBooking().then(qb => { res.send(qb); });
        });
    }
}
exports.DashboardController = DashboardController;
//# sourceMappingURL=dashboard.controller.js.map