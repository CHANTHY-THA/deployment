"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRepository = void 0;
const typeorm_1 = require("typeorm");
const booking_entity_1 = require("../entity/booking.entity");
const responseBody_1 = require("../../orm/repository/responseBody");
const base_controller_1 = require("../../controller/base.controller");
const container_repository_1 = require("./container.repository");
const booking_code_repository_1 = require("./booking.code.repository");
let BookingRepository = class BookingRepository extends typeorm_1.Repository {
    // async  saveBooking(booking:Booking)  {
    //     let resBody : ResponseBody<any> = new ResponseBody()
    //         try {
    //             let container = booking.container
    //              await getCustomRepository(ContainerRepository).saveContainer(container)
    //              booking.container = container
    //                   return await  this.save(booking).then(async res=>{
    //                       if(this.hasNumber(booking.CKSNFile)==false)
    //                       {
    //                             await  getCustomRepository(BookingCodeRepository).findOne({fileTypeID:booking.fileTypeID}).then(async res=>{
    //                                       //    let valueOriginal =  parseInt(res.value.toString())
    //                                       console.log(res)
    //                                           let number = Number(res.value.toString()) + 1
    //                                           let year = new Date().getFullYear().toString();
    //                                               booking.CKSNFile = booking.CKSNFile +  year.substring(2,4)+"-";
    //                                         let newID = res.value.toString().substring(0,res.value.toString().length-number.toString().length) + number
    //                                               booking.CKSNFile = booking.CKSNFile + newID
    //                                               res.value = newID
    //                                          await  this.save(booking).then(async bcode=>{
    //                                             await  getCustomRepository(BookingCodeRepository).save(res)
    //                                          })
    //                                 })
    //                      }
    //                      resBody.body = [res.ID]
    //                      resBody.status = Status.success
    //                      return Promise.resolve(resBody)
    //                  })
    //                  .catch(error=>{
    //                      resBody.body = [error.message]
    //                      resBody.status = Status.logic_error
    //                      return Promise.resolve(resBody)
    //                  })
    //               } catch (error) {
    //                  resBody.body = [error.message]
    //                  resBody.status = Status.server_error
    //                  return Promise.resolve(resBody)
    //              }
    // }
    saveBooking(booking) {
        return __awaiter(this, void 0, void 0, function* () {
            let resBody = new responseBody_1.ResponseBody();
            try {
                let container = booking.container;
                console.log("container");
                console.log(container);
                yield (0, typeorm_1.getCustomRepository)(container_repository_1.ContainerRepository).saveContainer(container);
                booking.container = container;
                if (this.hasNumber(booking.CKSNFile) == false) {
                    return yield (0, typeorm_1.getCustomRepository)(booking_code_repository_1.BookingCodeRepository).findOne({ fileTypeID: booking.fileTypeID }).then((res) => __awaiter(this, void 0, void 0, function* () {
                        let number = Number(res.value.toString()) + 1;
                        let year = new Date().getFullYear().toString();
                        booking.CKSNFile = booking.CKSNFile + year.substring(2, 4) + "-";
                        let newID = res.value.toString().substring(0, res.value.toString().length - number.toString().length) + number;
                        booking.CKSNFile = booking.CKSNFile + newID;
                        res.value = newID;
                        return yield this.save(booking).then((bcode) => __awaiter(this, void 0, void 0, function* () {
                            yield (0, typeorm_1.getCustomRepository)(booking_code_repository_1.BookingCodeRepository).save(res);
                            resBody.body = [bcode.ID];
                            resBody.status = base_controller_1.Status.success;
                            return Promise.resolve(resBody);
                        }))
                            .catch(error => {
                            resBody.body = [error.message];
                            resBody.status = base_controller_1.Status.logic_error;
                            return Promise.resolve(resBody);
                        });
                    }));
                }
                else {
                    return yield this.save(booking).then((bcode) => __awaiter(this, void 0, void 0, function* () {
                        resBody.body = [bcode.ID];
                        resBody.status = base_controller_1.Status.success;
                        return Promise.resolve(resBody);
                    }))
                        .catch(error => {
                        resBody.body = [error.message];
                        resBody.status = base_controller_1.Status.logic_error;
                        return Promise.resolve(resBody);
                    });
                }
            }
            catch (error) {
                resBody.body = [error.message];
                resBody.status = base_controller_1.Status.server_error;
                return Promise.resolve(resBody);
            }
        });
    }
    /**
     *
     * @param booking
     */
    removeBooking(bookingID) {
        return __awaiter(this, void 0, void 0, function* () {
            let resBody = new responseBody_1.ResponseBody();
            try {
                return yield this.update({ ID: bookingID }, { isActive: 0 }).then((res) => __awaiter(this, void 0, void 0, function* () {
                    resBody.body = [1];
                    resBody.status = base_controller_1.Status.success;
                    return Promise.resolve(resBody);
                }))
                    .catch(error => {
                    resBody.body = [error.message];
                    resBody.status = base_controller_1.Status.logic_error;
                    return Promise.resolve(resBody);
                });
            }
            catch (error) {
                resBody.body = [error.message];
                resBody.status = base_controller_1.Status.server_error;
                return Promise.resolve(resBody);
            }
        });
    }
    /**
       * @@method updateBookingStatus
       */
    updateBookingStatus(bookingID, statusID) {
        let res = new responseBody_1.ResponseBody();
        try {
            return this.update({ ID: bookingID }, { bookingStatusID: statusID })
                .then(x => {
                res.status = base_controller_1.Status.success;
                res.body = ["Success"];
                return Promise.resolve(res);
            }).catch(err => {
                res.status = base_controller_1.Status.logic_error;
                res.body = [err.message];
                return Promise.resolve(res);
            });
        }
        catch (error) {
            res.status = base_controller_1.Status.server_error;
            res.body = [error];
            return Promise.resolve(res);
        }
    }
    /**
  * @method getListBookings
  * @param pageIndex
  * @param pageSize
  * @param bookingStatusID
  */
    getListBookings(pageIndex, pageSize, bookingStatusID, fromDate, toDate, operationID, groupID, isViewAll) {
        let resBody = new responseBody_1.ResponseBody();
        console.log(bookingStatusID, operationID, groupID, fromDate, toDate, isViewAll);
        try {
            //  if(bookingStatusID!=0){
            return this.createQueryBuilder("booking")
                // .select("booking.ID")
                // .addSelect("booking.CKSNFile")
                // .addSelect("booking.commodity")
                // .addSelect("booking.etdPOL")
                // .addSelect("booking.etaPOD")
                // .addSelect("booking.ETABorder")
                // .addSelect("booking.demDue")
                // .addSelect("booking.detDue")
                // .addSelect("booking.hbl")
                // .addSelect("booking.mbl")
                // .addSelect("customer.name")
                // .addSelect("operation.lastName")
                // .addSelect("operation.firstName")
                // .addSelect("businessPartner.name")
                // .addSelect("customer.ID")
                // .addSelect("operation.ID")
                // .addSelect("businessPartner.ID")
                .innerJoinAndSelect("booking.operation", "operation")
                .leftJoinAndSelect("booking.customer", "customer")
                .leftJoinAndSelect("booking.businessPartner", "businessPartner")
                .leftJoinAndSelect("booking.bookingStatus", "bookingStatus")
                .orderBy("booking.ID", "DESC")
                .skip(pageIndex)
                .take(pageSize)
                .where("(booking.bookingStatusID = :bookingStatusID and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and (booking.operationID = :operationID and :isViewAll=false))", { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "operationID": operationID, "isViewAll": isViewAll })
                .orWhere("(0 = :bookingStatusID and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and (booking.operationID = :operationID and :isViewAll=false))", { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "operationID": operationID, "isViewAll": isViewAll })
                .orWhere("(:bookingStatusID=0 and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and :isViewAll=true)", { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "isViewAll": isViewAll })
                .orWhere("(booking.bookingStatusID = :bookingStatusID and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and :isViewAll=true)", { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "isViewAll": isViewAll })
                // .where("(booking.bookingStatusID = :bookingStatusID and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and booking.operationID = :operationID and 3 <> :groupID)",
                //     { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "operationID": operationID, "groupID": groupID })
                // .orWhere("(:bookingStatusID=0 and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and booking.operationID = :operationID and 3 <> :groupID)",
                //     { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "operationID": operationID, "groupID": groupID })
                // .orWhere("(booking.bookingStatusID = :bookingStatusID and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and 3=:groupID)",
                //     { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "groupID": groupID })
                // .orWhere("(:bookingStatusID=0 and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and 3=:groupID)",
                //     { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "groupID": groupID })
                .getMany().then(x => {
                resBody.body = x;
                console.log(resBody);
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
    /**
    * @@method getCountBookings
    */
    getCountBookings(bookingStatusID, operationID, groupID, fromDate, toDate, isViewAll) {
        // console.log(bookingStatusID, operationID, groupID, fromDate, toDate, isViewAll)
        try {
            return this.createQueryBuilder("booking")
                .where("(booking.bookingStatusID = :bookingStatusID and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and (booking.operationID = :operationID and :isViewAll=false))", { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "operationID": operationID, "isViewAll": isViewAll })
                .orWhere("(0 = :bookingStatusID and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and (booking.operationID = :operationID and :isViewAll=false))", { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "operationID": operationID, "isViewAll": isViewAll })
                .orWhere("(:bookingStatusID=0 and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and :isViewAll=true)", { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "isViewAll": isViewAll })
                .orWhere("(booking.bookingStatusID = :bookingStatusID and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and :isViewAll=true)", { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "isViewAll": isViewAll })
                // .where("(booking.bookingStatusID = :bookingStatusID and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and booking.operationID = :operationID and 3 <> :groupID)",
                //     { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "operationID": userID, "groupID": groupID })
                // .orWhere("(:bookingStatusID=0 and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and booking.operationID = :operationID and 3 <> :groupID)",
                //     { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "operationID": userID, "groupID": groupID })
                // .orWhere("(booking.bookingStatusID = :bookingStatusID and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and 3=:groupID)",
                //     { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "groupID": groupID })
                // .orWhere("(:bookingStatusID=0 and booking.isActive = 1 and (date(booking.createDate) >= :fromDate and date(booking.createDate) <= :toDate) and 3=:groupID)",
                //     { "bookingStatusID": bookingStatusID, "fromDate": fromDate, "toDate": toDate, "groupID": groupID })
                .getCount().then(x => {
                let res = new responseBody_1.ResponseBody();
                res.status = base_controller_1.Status.success;
                res.body = [x];
                return Promise.resolve(res);
            });
        }
        catch (error) {
            let res = new responseBody_1.ResponseBody();
            res.status = base_controller_1.Status.server_error;
            res.body = [error];
            return Promise.resolve(res);
        }
    }
    /**
     *
     * @param ID
     */
    getBookingByID(ID) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.createQueryBuilder("booking")
                .leftJoinAndSelect("booking.carrier", "carrier")
                .leftJoinAndSelect("booking.businessPartner", "businessPartner")
                .leftJoinAndSelect("booking.container", "container")
                .leftJoinAndSelect("booking.customer", "customer")
                .leftJoinAndSelect("booking.border", "border")
                .leftJoinAndSelect("booking.pol", "pol")
                .leftJoinAndSelect("booking.pod", "pod")
                //   .innerJoinAndSelect("booking.lcl","lcl")
                .leftJoinAndSelect("booking.operation", "operation")
                .leftJoinAndSelect("booking.broker", "broker")
                .leftJoinAndSelect("booking.bookingStatus", "bookingStatus")
                //  .leftJoinAndSelect("booking.truck","truck")
                //  .leftJoinAndSelect("truck.driver","driver")
                .leftJoinAndSelect("booking.billType", "billType")
                //   .leftJoinAndSelect("booking.finalDestination","finalDestination")
                .leftJoinAndSelect("booking.incoterm", "incoterm")
                .leftJoinAndSelect("booking.notifyParty", "notifyParty")
                .leftJoinAndSelect("booking.consignee", "consignee")
                .leftJoinAndSelect("container.cbmUnitType", "cbmUnitType")
                .leftJoinAndSelect("container.gwUnitType", "gwUnitType")
                .leftJoinAndSelect("container.quantityUnitType", "quantityUnitType")
                .leftJoinAndSelect("booking.shipperExporterSeller", "shipperExporterSeller")
                .where("booking.ID=:ID", { ID: ID })
                .getMany().then(x => {
                console.log(x[0].container);
                let rr = new responseBody_1.ResponseBody();
                rr.body = x;
                rr.status = base_controller_1.Status.success;
                return Promise.resolve(rr);
            })
                .catch(err => {
                console.log(err);
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
    /**
     * generate code
     */
    getGenerateCKSNCode(ext) {
        try {
            let res = new responseBody_1.ResponseBody();
            return this.createQueryBuilder("booking")
                .getCount().then(x => {
                let year = new Date().getFullYear().toString();
                //    let CKSNFile = ext+(year.substring(2,4))+"-"+(Math.floor(Math.random() * 1000000))+(x+1); 
                let trail = (Math.floor(Math.random() * 1000000)) + (x + 1);
                ext = ext.substring(ext.indexOf("("), ext.length);
                ext = ext.replace("(", "").replace(")", "").replace(" ", "");
                ext = ext.replace("##-", year.substring(2, 4) + "-");
                console.log(ext.substring(ext.indexOf("-"), ext.length));
                ext = ext.replace(ext.substring(ext.indexOf("-"), ext.length), "-" + trail);
                res.status = base_controller_1.Status.success;
                res.body = [ext];
                res.body = [ext];
                return Promise.resolve(res);
            });
        }
        catch (error) {
        }
    }
    hasNumber(myString) {
        return /\d/.test(myString);
    }
    /**
   * @method getListBookings
   * @param pageIndex
   * @param pageSize
   * @param bookingStatusID
   */
    getBookingByCKSNNo(CKSNFile, operationID, groupID) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.createQueryBuilder("booking")
                .select("booking.ID")
                .addSelect("booking.CKSNFile")
                .addSelect("booking.commodity")
                .addSelect("booking.etdPOL")
                .addSelect("booking.etaPOD")
                .addSelect("booking.ETABorder")
                .addSelect("booking.demDue")
                .addSelect("booking.detDue")
                .addSelect("booking.hbl")
                .addSelect("booking.mbl")
                .addSelect("customer.name")
                .addSelect("operation.lastName")
                .addSelect("operation.firstName")
                .addSelect("businessPartner.name")
                .addSelect("customer.ID")
                .addSelect("operation.ID")
                .addSelect("businessPartner.ID")
                .innerJoin("booking.operation", "operation")
                .innerJoin("booking.customer", "customer")
                .leftJoin("booking.businessPartner", "businessPartner")
                .where("(booking.CKSNFile = :CKSNFile and booking.isActive = 1 and booking.operationID = :operationID)", // and 3 <> :groupID
            { "CKSNFile": CKSNFile, "operationID": operationID, "groupID": groupID })
                .orWhere("(booking.CKSNFile = :CKSNFile and booking.isActive = 1)", // and 3=:groupID
            { "CKSNFile": CKSNFile, "groupID": groupID })
                .getMany().then(x => {
                console.log(x);
                resBody.body = x;
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
    //reporting
    getBookingsReport(filter) {
        console.log(filter);
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.query("CALL sp_getBookingsReport('" +
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
                // console.log(resBody);
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
    // dashboard
    /**
 * @@method getCountDataInMonth()
 */
    getCountDataInMonth() {
        let resBody = new responseBody_1.ResponseBody();
        try {
            //  if(bookingStatusID!=0){
            return this.query("CALL sp_getCountDataInMonth();")
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
    getCountBookingStatusInMonth() {
        let resBody = new responseBody_1.ResponseBody();
        try {
            //  if(bookingStatusID!=0){
            return this.query("CALL sp_getCountBookingStatusInMonth();")
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
    getCountMonthlyBooking() {
        let resBody = new responseBody_1.ResponseBody();
        try {
            //  if(bookingStatusID!=0){
            return this.query("CALL sp_getCountMonthlyBooking();")
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
};
BookingRepository = __decorate([
    (0, typeorm_1.EntityRepository)(booking_entity_1.Booking)
], BookingRepository);
exports.BookingRepository = BookingRepository;
//# sourceMappingURL=booking.repository.js.map