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
exports.TruckRepository = void 0;
const typeorm_1 = require("typeorm");
const truck_entity_1 = require("../entity/truck.entity");
const typeorm_2 = require("typeorm");
const responseBody_1 = require("./responseBody");
const base_controller_1 = require("../../controller/base.controller");
let TruckRepository = class TruckRepository extends typeorm_1.Repository {
    /**
     *
     * @param truck
     * @description for save new ,delete (set by status), update existing record
     */
    saveTruck(truck) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.save(truck)
                    .then((x) => __awaiter(this, void 0, void 0, function* () {
                    let res = new responseBody_1.ResponseBody();
                    res.status = base_controller_1.Status.success;
                    res.body = ["Success"];
                    console.log(res);
                    return Promise.resolve(res);
                }));
            }
            catch (error) {
                let res = new responseBody_1.ResponseBody();
                res.status = base_controller_1.Status.server_error;
                res.body = [error.message];
                return Promise.resolve(res);
            }
        });
    }
    getAllTrucks(pageSize, pageIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = new responseBody_1.ResponseBody();
            try {
                return yield this.createQueryBuilder("truck")
                    .leftJoinAndSelect("truck.bizPartner", "bizPartner")
                    .where("status=1")
                    .skip(pageIndex)
                    .take(pageSize)
                    .getMany()
                    .then(x => {
                    res.body = x;
                    res.status = base_controller_1.Status.success;
                    return Promise.resolve(res);
                })
                    .catch(error => {
                    res.body = [error];
                    res.status = base_controller_1.Status.logic_error;
                    return Promise.resolve(res);
                });
            }
            catch (error) {
                res.body = [error];
                res.status = base_controller_1.Status.server_error;
                return Promise.resolve(res);
            }
        });
    }
    getCountTrucks() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = new responseBody_1.ResponseBody();
            try {
                return yield this.createQueryBuilder("truck")
                    .where("status=1")
                    .getCount()
                    .then(x => {
                    res.body = [x];
                    res.status = base_controller_1.Status.success;
                    return Promise.resolve(res);
                })
                    .catch(error => {
                    res.body = [error];
                    res.status = base_controller_1.Status.logic_error;
                    return Promise.resolve(res);
                });
            }
            catch (error) {
                res.body = [error];
                res.status = base_controller_1.Status.server_error;
                return Promise.resolve(res);
            }
        });
    }
    getAllTruck() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = new responseBody_1.ResponseBody();
            try {
                return yield this.createQueryBuilder("truck")
                    .leftJoinAndSelect("truck.bizPartner", "bizPartner")
                    .where("status=1")
                    .getMany()
                    .then(x => {
                    res.body = x;
                    res.status = base_controller_1.Status.success;
                    return Promise.resolve(res);
                })
                    .catch(error => {
                    res.body = [error];
                    res.status = base_controller_1.Status.logic_error;
                    return Promise.resolve(res);
                });
            }
            catch (error) {
                res.body = [error];
                res.status = base_controller_1.Status.server_error;
                return Promise.resolve(res);
            }
        });
    }
    getListTruck() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = new responseBody_1.ResponseBody();
            try {
                return yield this.createQueryBuilder("truck")
                    .getMany()
                    .then(x => {
                    res.body = x;
                    res.status = base_controller_1.Status.success;
                    return Promise.resolve(res);
                })
                    .catch(error => {
                    res.body = [error];
                    res.status = base_controller_1.Status.logic_error;
                    return Promise.resolve(res);
                });
            }
            catch (error) {
                res.body = [error];
                res.status = base_controller_1.Status.server_error;
                return Promise.resolve(res);
            }
        });
    }
    getListTruckByDriver() {
        let res = new responseBody_1.ResponseBody();
        try {
            return this.createQueryBuilder("truck")
                .select("truck")
                //  .addSelect("driver.lastName")
                //  .addSelect("driver.firstName")
                //  .addSelect("driver.telephone1")
                .addSelect("truck.plateNo")
                //  .innerJoin("truck.driver","driver")
                // .where("user.positionID='21'")
                .getMany()
                .then(x => {
                res.body = x;
                res.status = base_controller_1.Status.success;
                return Promise.resolve(res);
            })
                .catch(error => {
                res.body = [error];
                res.status = base_controller_1.Status.success;
                return Promise.resolve(res);
            });
        }
        catch (error) {
            res.body = [error];
            res.status = base_controller_1.Status.success;
            return Promise.resolve(res);
        }
    }
    getTruckByPlateNo(plateno) {
        let res = new responseBody_1.ResponseBody();
        try {
            // this.find({plateNo: (""+plateno).trim().toLowerCase()})
            return this.createQueryBuilder("truck")
                .select("truck")
                .where("LOWER(TRIM(truck.plateNo))=:plateno", { plateno: plateno.trim().toLowerCase() })
                .getOne()
                .then(x => {
                res.body = [x];
                res.status = base_controller_1.Status.success;
                return Promise.resolve(res);
            })
                .catch(error => {
                res.body = [error];
                res.status = base_controller_1.Status.success;
                return Promise.resolve(res);
            });
        }
        catch (error) {
            res.body = [error];
            res.status = base_controller_1.Status.success;
            return Promise.resolve(res);
        }
    }
};
TruckRepository = __decorate([
    (0, typeorm_2.EntityRepository)(truck_entity_1.Truck)
], TruckRepository);
exports.TruckRepository = TruckRepository;
//# sourceMappingURL=truck.repository.js.map