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
exports.DepartmentRepository = void 0;
const typeorm_1 = require("typeorm");
//import { DriverVehicleDetailRepository } from './vehicleDriver.repository';
const base_controller_1 = require("../../controller/base.controller");
const responseBody_1 = require("./responseBody");
const department_1 = require("../entity/department");
/**
 * @Rina Chen
 */
let DepartmentRepository = class DepartmentRepository extends typeorm_1.Repository {
    addDepartment(grp) {
        return __awaiter(this, void 0, void 0, function* () {
            let resBody = new responseBody_1.ResponseBody();
            try {
                return this.save(grp).then(res => {
                    resBody.body = ["1"];
                    resBody.status = base_controller_1.Status.success;
                    return Promise.resolve(resBody);
                });
            }
            catch (err) {
                resBody.status = base_controller_1.Status.logic_error;
                resBody.body = [err.message];
                return Promise.resolve(resBody);
            }
        });
    }
    getListDepartments() {
        return __awaiter(this, void 0, void 0, function* () {
            let resBody = new responseBody_1.ResponseBody();
            try {
                return this.find({ "status": 1 }).then(res => {
                    resBody.body = res;
                    resBody.status = base_controller_1.Status.success;
                    return Promise.resolve(resBody);
                });
            }
            catch (err) {
                resBody.status = base_controller_1.Status.logic_error;
                resBody.body = [err.message];
                return Promise.resolve(resBody);
            }
        });
    }
    getListDepartmentsPagin(pageIndex, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            let resBody = new responseBody_1.ResponseBody();
            console.log(pageIndex + " " + pageSize);
            try {
                resBody.status = base_controller_1.Status.success;
                return this.createQueryBuilder("department")
                    .take(pageSize)
                    .skip(pageIndex)
                    .getMany()
                    .then(x => {
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
        });
    }
    getCountDepartments() {
        return __awaiter(this, void 0, void 0, function* () {
            let resBody = new responseBody_1.ResponseBody();
            try {
                return this.createQueryBuilder("department")
                    .getCount()
                    .then(res => {
                    resBody.body = [res];
                    resBody.status = base_controller_1.Status.success;
                    return Promise.resolve(resBody);
                });
            }
            catch (err) {
                resBody.status = base_controller_1.Status.logic_error;
                resBody.body = [err.message];
                return Promise.resolve(resBody);
            }
        });
    }
    updateDepartment(grp) {
        return __awaiter(this, void 0, void 0, function* () {
            let resBody = new responseBody_1.ResponseBody();
            try {
                return yield this.update({ ID: grp.ID }, grp).then(res => {
                    resBody.body = ["1"];
                    resBody.status = base_controller_1.Status.success;
                    return Promise.resolve(resBody);
                });
            }
            catch (err) {
                resBody.status = base_controller_1.Status.logic_error;
                resBody.body = [err.message];
                return Promise.resolve(resBody);
            }
        });
    }
    /**
     * @method getPermissionByGroupID
     * @param departmentID
     */
    getDepartmentByID(departmentID) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            resBody.status = base_controller_1.Status.success;
            console.log(departmentID);
            return this.createQueryBuilder("department")
                .innerJoinAndSelect("department.group", "group")
                .where("department.ID = :ID", { ID: departmentID })
                .getMany().then(x => {
                console.log(x);
                let rr = new responseBody_1.ResponseBody();
                rr.body = x;
                rr.status = base_controller_1.Status.success;
                return Promise.resolve(rr);
            })
                .catch(err => {
                let rr = new responseBody_1.ResponseBody();
                rr.body = [err];
                rr.status = base_controller_1.Status.success;
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
DepartmentRepository = __decorate([
    (0, typeorm_1.EntityRepository)(department_1.Department)
], DepartmentRepository);
exports.DepartmentRepository = DepartmentRepository;
//# sourceMappingURL=department.repository.js.map