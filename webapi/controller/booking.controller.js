"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const booking_repository_1 = require("../orm/repository/booking.repository");
class BookingController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/Booking/";
    }
    /**
    * @method saveBooking
    * @param app
    */
    saveBooking(app) {
        app
            .post(this.controllerName + "saveBooking", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let booking = req.body;
            (0, typeorm_1.getCustomRepository)(booking_repository_1.BookingRepository).saveBooking(booking).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method updateBookingStatus
     * @param app
     */
    updateBookingStatus(app) {
        app
            .post(this.controllerName + "updateBookingStatus", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let bookingID = req.body.bookingID;
            let statusID = req.body.statusID;
            (0, typeorm_1.getCustomRepository)(booking_repository_1.BookingRepository).updateBookingStatus(bookingID, statusID).then(qb => { res.send(qb); });
        });
    }
    /**
    * @method getListBookings
    * @param app
    */
    getListBookings(app) {
        app
            .post(this.controllerName + "getListBookings", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let pageIndex = req.body.pageIndex;
            let pageSize = req.body.pageSize;
            let bookingStatusID = req.body.bookingStatusID;
            let fromDate = req.body.fromDate;
            let toDate = req.body.toDate;
            let userID = req.body.userID;
            let groupID = req.body.groupID;
            let isViewAll = req.body.isViewAll;
            (0, typeorm_1.getCustomRepository)(booking_repository_1.BookingRepository).getListBookings(pageIndex, pageSize, bookingStatusID, fromDate, toDate, userID, groupID, isViewAll)
                .then(qb => { res.send(qb); });
        });
    }
    getBookingByCKSNNo(app) {
        app
            .post(this.controllerName + "getBookingByCKSNNo", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let CKSNFile = req.body.CKSNFile;
            let operationID = req.body.userID;
            let groupID = req.body.groupID;
            (0, typeorm_1.getCustomRepository)(booking_repository_1.BookingRepository).getBookingByCKSNNo(CKSNFile, operationID, groupID)
                .then(qb => { res.send(qb); });
        });
    }
    /**
     * @method getCountBookings
     * @param app
     */
    getCountBookings(app) {
        app
            .post(this.controllerName + "getCountBookings", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let bookingStatusID = req.body.bookingStatusID;
            let userID = req.body.userID;
            let groupID = req.body.groupID;
            let fromDate = req.body.fromDate;
            let toDate = req.body.toDate;
            let isViewAll = req.body.isViewAll;
            (0, typeorm_1.getCustomRepository)(booking_repository_1.BookingRepository).getCountBookings(bookingStatusID, userID, groupID, fromDate, toDate, isViewAll).then(qb => { res.send(qb); });
        });
    }
    //    /**
    //     * @method getGenerateCKSNCode
    //     * @param app 
    //     */
    //    public getGenerateCKSNCode(app):void{
    //     app
    //     .post(this.controllerName+"getGenerateCKSNCode",
    //         (req: Request, res: Response) => {  
    //         let   ext = req.body.ext
    //         getCustomRepository(BookingRepository).getGenerateCKSNCode(ext).then(
    //             qb =>{res.send(qb)}
    //         ) 
    //      })
    //    }
    /**
     * @method remove booking
     */
    removeBooking(app) {
        app
            .post(this.controllerName + "removeBooking", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let bookingID = req.body.bookingID;
            let userID = req.body.userID;
            (0, typeorm_1.getCustomRepository)(booking_repository_1.BookingRepository).removeBooking(bookingID).then(qb => { res.send(qb); });
        });
    }
    /**
    * @method getBookingsByID
    * @param app
    */
    getBookingByID(app) {
        app
            .post(this.controllerName + "getBookingByID", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let bookingID = req.body.bookingID;
            (0, typeorm_1.getCustomRepository)(booking_repository_1.BookingRepository).getBookingByID(bookingID).then(qb => { res.send(qb); });
        });
    }
    /**
   * @method getBookingsByID
   * @param app
   */
    getBookingsReport(app) {
        app
            .post(this.controllerName + "getBookingsReport", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let filterModel = req.body;
            (0, typeorm_1.getCustomRepository)(booking_repository_1.BookingRepository).getBookingsReport(filterModel).then(qb => { res.send(qb); });
        });
    }
}
exports.BookingController = BookingController;
//# sourceMappingURL=booking.controller.js.map