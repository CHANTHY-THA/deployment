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
exports.ContainerRepository = void 0;
const typeorm_1 = require("typeorm");
//import { DriverVehicleDetailRepository } from './vehicleDriver.repository';
const container_entity_1 = require("../entity/container.entity");
const responseBody_1 = require("./responseBody");
const base_controller_1 = require("../../controller/base.controller");
const utilities_1 = require("../../utilities");
const multiDelivery_repository_1 = require("./multiDelivery.repository");
const truck_repository_1 = require("./truck.repository");
const booking_repository_1 = require("./booking.repository");
const user_repository_1 = require("./user.repository");
const preDefined_repository_1 = require("./preDefined.repository");
/**
 * @Rina Chen
 */
let ContainerRepository = class ContainerRepository extends typeorm_1.Repository {
    /**
     *
     * @param container
     * @description for update existing record
     */
    saveTheContainer(containers) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //   console.log(containers)
                return yield this.save(containers)
                    .then((x) => __awaiter(this, void 0, void 0, function* () {
                    let res = new responseBody_1.ResponseBody();
                    res.status = base_controller_1.Status.success;
                    res.body = ["Success"];
                    return Promise.resolve(res);
                }));
            }
            catch (error) {
                console.log(error);
                let res = new responseBody_1.ResponseBody();
                res.status = base_controller_1.Status.server_error;
                res.body = [error];
                return Promise.resolve(res);
            }
        });
    }
    /**
     *
     * @param container
     * @description for update existing record
     */
    saveContainer(containers) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //     containers.forEach(async container=>{
                for (var i = 0; i < containers.length; i++) {
                    if (containers[i].pickUpDate != null) {
                        containers[i].pickUpDate = utilities_1.DateUtil.formatGMTDate(containers[i].pickUpDate);
                        // console.log(containers[i].pickUpDate);
                    }
                    if (containers[i].deliveryDate != null) {
                        containers[i].deliveryDate = utilities_1.DateUtil.formatGMTDate(containers[i].deliveryDate);
                    }
                    yield this.save(containers[i])
                        .then((x) => __awaiter(this, void 0, void 0, function* () {
                        if (x.multiDelivery != undefined) {
                            containers[i].multiDelivery.forEach((m) => __awaiter(this, void 0, void 0, function* () {
                                m.containerID = x.ID;
                                yield (0, typeorm_1.getCustomRepository)(multiDelivery_repository_1.MultiDeliveryRepository).save(m);
                            }));
                        }
                    }));
                }
                let res = new responseBody_1.ResponseBody();
                res.status = base_controller_1.Status.success;
                res.body = ["Success"];
                return Promise.resolve(res);
            }
            catch (error) {
                console.log(error);
                let res = new responseBody_1.ResponseBody();
                res.status = base_controller_1.Status.server_error;
                res.body = [error];
                return Promise.resolve(res);
            }
        });
    }
    /**
 *
 * @param containerID
 * @description for update existing record
 */
    removeContainerByID(containerID) {
        try {
            return this.update({ ID: containerID }, { isActive: 0 })
                .then(x => {
                let res = new responseBody_1.ResponseBody();
                res.status = base_controller_1.Status.success;
                res.body = ["1"];
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
    * @method getListBookings
    * @param pageIndex
    * @param pageSize
    * @param bookingStatusID
    */
    getListCotainters(pageIndex, pageSize, containerStatusID, fromDate, toDate, userID, groupID, isViewAll) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            //  if(containerStatusID != 0)
            //     {
            return this.createQueryBuilder("container")
                .innerJoinAndSelect("container.booking", "booking")
                .leftJoinAndSelect("booking.operation", "operation")
                .leftJoinAndSelect("container.multiDelivery", "multiDelivery")
                .leftJoinAndSelect("booking.notifyParty", "notifyParty")
                .leftJoinAndSelect("booking.broker", "broker")
                .leftJoinAndSelect("container.truck", "truck")
                .leftJoinAndSelect("container.driver", "driver")
                .leftJoinAndSelect("container.containerStatus", "containerStatus")
                .orderBy("booking.ID", "DESC")
                .skip(pageIndex)
                .take(pageSize)
                .where("((container.pickUpDate is not null and container.deliveryDate is not null) and container.containerStatusID = :containerStatusID and container.isActive=1 and booking.isActive=1 and booking.operationID = :userID and (date(container.pickUpDate) >= :fromDate and date(container.pickUpDate) <= :toDate) and :isViewAll = false)", { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "userID": userID, "isViewAll": isViewAll })
                .orWhere("((container.pickUpDate is not null and container.deliveryDate is not null) and 0 = :containerStatusID and container.isActive=1 and booking.isActive=1 and booking.operationID = :userID and (date(container.pickUpDate) >= :fromDate and date(container.pickUpDate) <= :toDate) and :isViewAll = false)", { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "userID": userID, "isViewAll": isViewAll })
                .orWhere("((container.pickUpDate is not null and  container.deliveryDate is not null)  and  :containerStatusID = container.containerStatusID and container.isActive=1 and booking.isActive=1 and (container.pickUpDate >= :fromDate and date(container.pickUpDate) <= :toDate) and :isViewAll=true)  ", { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "isViewAll": isViewAll })
                .orWhere("((container.pickUpDate is not null and  container.deliveryDate is not null)  and  :containerStatusID = 0 and container.isActive=1 and booking.isActive=1 and (container.pickUpDate >= :fromDate and date(container.pickUpDate) <= :toDate) and :isViewAll=true)  ", { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "isViewAll": isViewAll })
                // .where("((container.pickUpDate is not null and container.deliveryDate is not null) and container.containerStatusID = :containerStatusID and container.isActive=1 and booking.isActive=1 and booking.operationID = :userID and (date(container.pickUpDate) >= :fromDate and date(container.pickUpDate) <= :toDate) and 3 <> :groupID)",
                //     { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "userID": userID, "groupID": groupID })
                // .orWhere("((container.pickUpDate is not null and  container.deliveryDate is not null)  and  :containerStatusID = 0 and container.isActive=1 and booking.isActive=1 and booking.operationID = :userID and (container.pickUpDate >= :fromDate and date(container.pickUpDate) <= :toDate) and 3 <> :groupID)  ",
                //     { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "userID": userID, "groupID": groupID })
                // .orWhere("(container.pickUpDate is not null and container.deliveryDate is not null and container.containerStatusID = :containerStatusID and container.isActive=1 and booking.isActive=1 and container.isActive=1 and booking.isActive=1 and (date(container.pickUpDate) >= :fromDate and date(container.pickUpDate) <= :toDate) and 3=:groupID)",
                //     { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "groupID": groupID })
                // .orWhere("(container.pickUpDate is not null and container.deliveryDate is not null and :containerStatusID = 0 and container.isActive=1 and booking.isActive=1 and  (date(container.pickUpDate)  >= :fromDate and date(container.pickUpDate) <= :toDate) and 3=:groupID)",
                //     { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "groupID": groupID })
                .getMany()
                .then(x => {
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
            //   }
        }
        catch (error) {
            console.log(error);
            resBody.status = base_controller_1.Status.server_error;
            resBody.body = [error];
            return Promise.resolve(resBody);
        }
    }
    /**
    * @@method getCountContainers
    */
    getCountContainers(containerStatusID, userID, groupID, fromDate, toDate, isViewAll) {
        try {
            //  if(containerStatusID!=0){
            return this.createQueryBuilder("container")
                .innerJoin("container.booking", "booking")
                //   .where("(container.pickUpDate is not null and container.deliveryDate is not null and container.isActive=1 and booking.isActive=1 and container.containerStatusID=:containerStatusID and booking.operationID = :userID) and (container.pickUpDate >= :fromDate and container.pickUpDate <= :toDate)  and 3 <> :groupID",{containerStatusID:containerStatusID,userID:userID,"fromDate":fromDate,"toDate":toDate,"groupID":groupID})
                //    .orWhere("(container.pickUpDate is not null and container.deliveryDate is not null and container.isActive=1 and booking.isActive=1 and 0 = :containerStatusID  and booking.operationID = :userID and (container.pickUpDate >= :fromDate and container.pickUpDate <= :toDate)  and 3 <> :groupID)",{containerStatusID:containerStatusID,userID:userID,"fromDate":fromDate,"toDate":toDate,"groupID":groupID})
                //   .orWhere("(container.pickUpDate is not null and container.deliveryDate is not null and container.isActive=1 and booking.isActive=1 and container.containerStatusID = :containerStatusID and :groupID=3 and (container.pickUpDate >= :fromDate and container.pickUpDate <= :toDate))",{containerStatusID:containerStatusID,groupID:groupID,"fromDate":fromDate,"toDate":toDate})
                //   .orWhere("(container.pickUpDate is not null and container.deliveryDate is not null and container.isActive=1 and booking.isActive=1 and 0 = :containerStatusID and :groupID=3 and (container.pickUpDate >= :fromDate and container.pickUpDate <= :toDate)) ",{containerStatusID:containerStatusID,groupID:groupID,"fromDate":fromDate,"toDate":toDate})
                .where("((container.pickUpDate is not null and container.deliveryDate is not null) and container.containerStatusID = :containerStatusID and container.isActive=1 and booking.isActive=1 and booking.operationID = :userID and (date(container.pickUpDate) >= :fromDate and date(container.pickUpDate) <= :toDate) and :isViewAll = false)", { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "userID": userID, "isViewAll": isViewAll })
                .orWhere("((container.pickUpDate is not null and container.deliveryDate is not null) and 0 = :containerStatusID and container.isActive=1 and booking.isActive=1 and booking.operationID = :userID and (date(container.pickUpDate) >= :fromDate and date(container.pickUpDate) <= :toDate) and :isViewAll = false)", { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "userID": userID, "isViewAll": isViewAll })
                .orWhere("((container.pickUpDate is not null and  container.deliveryDate is not null)  and  :containerStatusID = container.containerStatusID and container.isActive=1 and booking.isActive=1 and (container.pickUpDate >= :fromDate and date(container.pickUpDate) <= :toDate) and :isViewAll=true)  ", { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "isViewAll": isViewAll })
                .orWhere("((container.pickUpDate is not null and  container.deliveryDate is not null)  and  :containerStatusID = 0 and container.isActive=1 and booking.isActive=1 and (container.pickUpDate >= :fromDate and date(container.pickUpDate) <= :toDate) and :isViewAll=true)  ", { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "isViewAll": isViewAll })
                // .where("((container.pickUpDate is not null and container.deliveryDate is not null) and container.containerStatusID = :containerStatusID and container.isActive=1 and booking.isActive=1 and booking.operationID = :userID and (date(container.pickUpDate) >= :fromDate and date(container.pickUpDate) <= :toDate) and 3 <> :groupID)",
                //     { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "userID": userID, "groupID": groupID })
                // .orWhere("((container.pickUpDate is not null and  container.deliveryDate is not null)  and  :containerStatusID = 0 and container.isActive=1 and booking.isActive=1 and booking.operationID = :userID and (container.pickUpDate >= :fromDate and date(container.pickUpDate) <= :toDate) and 3 <> :groupID)  ",
                //     { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "userID": userID, "groupID": groupID })
                // .orWhere("(container.pickUpDate is not null and container.deliveryDate is not null and container.containerStatusID = :containerStatusID and container.isActive=1 and booking.isActive=1 and container.isActive=1 and booking.isActive=1 and (date(container.pickUpDate) >= :fromDate and date(container.pickUpDate) <= :toDate) and 3=:groupID)",
                //     { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "groupID": groupID })
                // .orWhere("(container.pickUpDate is not null and container.deliveryDate is not null and :containerStatusID = 0 and container.isActive=1 and booking.isActive=1 and  (date(container.pickUpDate)  >= :fromDate and date(container.pickUpDate) <= :toDate) and 3=:groupID)",
                //     { "containerStatusID": containerStatusID, "fromDate": fromDate, "toDate": toDate, "groupID": groupID })
                .getCount().then(x => {
                let res = new responseBody_1.ResponseBody();
                console.log("count ");
                console.log(x);
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
     * @@method getContainerByID
     */
    getContainerByID(containerID) {
        try {
            return this.createQueryBuilder("container")
                .leftJoinAndSelect("container.truck", "truck")
                .leftJoinAndSelect("container.driver", "driver")
                .leftJoinAndSelect("truck.bizPartner", "bizPartner")
                .leftJoinAndSelect("container.gwUnitType", "gwUnitType")
                .leftJoinAndSelect("container.booking", "booking")
                .leftJoinAndSelect("booking.border", "border")
                .where("container.ID=:containerID", { containerID: containerID })
                .getOne().then(x => {
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
    saveDataImport(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = new responseBody_1.ResponseBody();
            try {
                console.log(data);
                let bks = yield (0, typeorm_1.getCustomRepository)(booking_repository_1.BookingRepository).find({ CKSNFile: ("" + data.FILE_NO).trim() });
                if (bks.length > 0 && bks.length == 1) {
                    let bk = bks[0];
                    bk.remarks = "" + data.BOOKING_REMARK;
                    // save container
                    yield (0, typeorm_1.getCustomRepository)(booking_repository_1.BookingRepository).save(bk);
                    /// check container 
                    let containers = yield this.find({ containerNo: ("" + data.CONTAINER_NO).trim(), bookingID: bk.ID });
                    // if (containers.length <= 1) {
                    if (containers.length == 1) {
                        // let container = containers.length==0?new Container(): containers[0];
                        let container = containers[0];
                        container.bookingID = bk.ID;
                        if (data.EMPTY_RETURN_DATE) {
                            container.emptyReturn = utilities_1.DateUtil.formatGMTDate(data.EMPTY_RETURN_DATE);
                        }
                        if (data.EMPTY_NOTIFY_AGENT) {
                            container.emptyNotifyAgent = utilities_1.DateUtil.formatGMTDate(data.EMPTY_NOTIFY_AGENT);
                        }
                        if (data.AGENT_PICKUP_EMPTY) {
                            container.agentPickUpEmpty = utilities_1.DateUtil.formatGMTDate(data.AGENT_PICKUP_EMPTY);
                        }
                        if (data.PICKUP_DATE) {
                            container.pickUpDate = utilities_1.DateUtil.formatGMTDate(data.PICKUP_DATE);
                        }
                        if (data.DELIVERY_DATE) {
                            container.deliveryDate = utilities_1.DateUtil.formatGMTDate(data.DELIVERY_DATE);
                        }
                        // find truck info
                        if (data.PLATE_NO) {
                            let truck = yield (0, typeorm_1.getCustomRepository)(truck_repository_1.TruckRepository).getTruckByPlateNo(data.PLATE_NO);
                            if (truck.status == base_controller_1.Status.success && truck.body.length > 0) {
                                container.truckID = truck.body[0].ID;
                            }
                        }
                        // find driver  by phone
                        if (data.DRIVER_TEL) {
                            let driver = yield (0, typeorm_1.getCustomRepository)(user_repository_1.UserRepository).findOne({ telephone1: "0" + Number(data.DRIVER_TEL) });
                            if (driver != undefined) {
                                container.driverID = driver.ID;
                            }
                        }
                        // container status
                        if (data.DELIVERY_STATUS) {
                            let resDStatus = yield (0, typeorm_1.getCustomRepository)(preDefined_repository_1.PreDefinedFieldRepository).getPreDefinedsByValue("containerStatus", ("" + data.DELIVERY_STATUS).toLowerCase());
                            if (resDStatus.status == base_controller_1.Status.success && resDStatus.body.length > 0) {
                                container.containerStatusID = resDStatus.body[0].ID;
                            }
                        }
                        container.emptyDepo = data.DROP_OFF_DEPOT != undefined ? data.DROP_OFF_DEPOT : "";
                        container.extraDeliveryFee = "" + data.EXTRA_CHARGE;
                        //check container is existing
                        yield this.save(container)
                            .then((x) => __awaiter(this, void 0, void 0, function* () {
                            res.status = base_controller_1.Status.success;
                            res.body = ["Success"];
                            if (container.containerStatusID == 93) {
                                let conCheckRes = yield this.isContainerComplete(bk.ID);
                                if (conCheckRes.status == base_controller_1.Status.success) {
                                    let conCheck = conCheckRes.body[0];
                                    console.log(conCheck == true);
                                    if (conCheck == true) {
                                        let res = yield (0, typeorm_1.getCustomRepository)(booking_repository_1.BookingRepository).updateBookingStatus(bk.ID, 37);
                                    }
                                }
                            }
                        }));
                    }
                    else if (containers.length > 1) {
                        res.status = base_controller_1.Status.logic_error;
                        res.body = ["Container is duplicate"];
                    }
                    else {
                        res.status = base_controller_1.Status.logic_error;
                        res.body = ["Container is not existing"];
                    }
                }
                else {
                    res.status = base_controller_1.Status.logic_error;
                    res.body = ["Booking is not existing"];
                }
                return Promise.resolve(res);
            }
            catch (error) {
                console.log(error);
                res.status = base_controller_1.Status.server_error;
                res.body = [error];
                return Promise.resolve(res);
            }
        });
    }
    // check container is status done
    isContainerComplete(bookingID) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = new responseBody_1.ResponseBody();
            try {
                return yield this.createQueryBuilder("container")
                    .select("container.ID")
                    .where("container.bookingID = :bookingID and container.containerStatusID<>93", { bookingID: bookingID })
                    .getCount().then(qb => {
                    res.status = base_controller_1.Status.success;
                    res.body = [qb > 0 ? false : true];
                    return Promise.resolve(res);
                }).catch(error => {
                    res.status = base_controller_1.Status.logic_error;
                    res.body = [error];
                    return Promise.resolve(res);
                });
            }
            catch (error) {
                res.status = base_controller_1.Status.server_error;
                res.body = [error];
                return Promise.resolve(res);
            }
        });
    }
    /**
    * @@method getMultiDropByContainers
    */
    getMultiDropByContainers(containerID, isActive) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, typeorm_1.getCustomRepository)(multiDelivery_repository_1.MultiDeliveryRepository)
                    .find({ "containerID": containerID, "isActive": isActive })
                    //  .where("container.containerStatusID=:containerStatusID",{containerStatusID:containerStatusID})
                    .then(x => {
                    let res = new responseBody_1.ResponseBody();
                    res.status = base_controller_1.Status.success;
                    res.body = x;
                    return Promise.resolve(res);
                });
            }
            catch (error) {
                let res = new responseBody_1.ResponseBody();
                res.status = base_controller_1.Status.server_error;
                res.body = [error.message];
                return Promise.resolve(res);
            }
        });
    }
    /**
    * @@method saveMultiDelivery
    */
    saveMultiDelivery(mults) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, typeorm_1.getCustomRepository)(multiDelivery_repository_1.MultiDeliveryRepository)
                    .save(mults)
                    .then(x => {
                    let res = new responseBody_1.ResponseBody();
                    res.status = base_controller_1.Status.success;
                    res.body = x;
                    return Promise.resolve(res);
                });
            }
            catch (error) {
                let res = new responseBody_1.ResponseBody();
                res.status = base_controller_1.Status.server_error;
                res.body = [error.message];
                return Promise.resolve(res);
            }
        });
    }
};
ContainerRepository = __decorate([
    (0, typeorm_1.EntityRepository)(container_entity_1.Container)
], ContainerRepository);
exports.ContainerRepository = ContainerRepository;
//# sourceMappingURL=container.repository.js.map