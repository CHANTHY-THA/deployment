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
exports.BusinessPartnerRepository = void 0;
const businesspartner_1 = require("../entity/businesspartner");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const responseBody_1 = require("../../orm/repository/responseBody");
const base_controller_1 = require("../../controller/base.controller");
let BusinessPartnerRepository = class BusinessPartnerRepository extends typeorm_2.Repository {
    getAllBusinessPartners() {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.createQueryBuilder("business")
                .where("business.isActive=1")
                .getMany().then(x => {
                resBody.body = x;
                resBody.status = base_controller_1.Status.success;
                return Promise.resolve(resBody);
            })
                .catch(err => {
                resBody.body = [err];
                resBody.status = base_controller_1.Status.logic_error;
                return Promise.resolve(resBody);
            });
        }
        catch (error) {
            resBody.status = base_controller_1.Status.server_error;
            resBody.body = [error];
            return Promise.resolve(resBody);
        }
    }
    getCountBusinessPartner() {
        try {
            return this.createQueryBuilder("biz").getCount().then(x => {
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
    getListBusinessPartner(pageIndex, pageSize) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            resBody.status = base_controller_1.Status.success;
            return this.createQueryBuilder("biz")
                .skip(pageIndex)
                .take(pageSize)
                .where("biz.isActive=1")
                .orderBy("ID", "DESC")
                .getMany().then(x => {
                let rr = new responseBody_1.ResponseBody();
                rr.body = x;
                rr.status = base_controller_1.Status.success;
                return Promise.resolve(rr);
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
    getBusinessPartnerByID(ID) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.createQueryBuilder("biz")
                .where("biz.ID = :ID", { ID: ID })
                .getMany().then(x => {
                resBody.body = x;
                resBody.status = base_controller_1.Status.success;
                return Promise.resolve(resBody);
            })
                .catch(err => {
                resBody.body = [err];
                resBody.status = base_controller_1.Status.logic_error;
                return Promise.resolve(resBody);
            });
        }
        catch (error) {
            console.log(error);
            resBody.status = base_controller_1.Status.server_error;
            resBody.body = [error];
            return Promise.resolve(resBody);
        }
    }
    removeBusinessPartnerByID(ID) {
        let response = new responseBody_1.ResponseBody();
        try {
            return this.update({ ID: ID }, { isActive: 0 })
                .then(res => {
                response.body = ["Remove"];
                response.status = base_controller_1.Status.success;
                return Promise.resolve(response);
            })
                .catch(error => {
                response.body = [error.message];
                response.status = base_controller_1.Status.logic_error;
                return Promise.resolve(response);
            });
        }
        catch (error) {
            response.status = base_controller_1.Status.server_error;
            response.body = [error.message];
            return Promise.resolve(response);
        }
    }
    saveBusinessPartner(biz) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = new responseBody_1.ResponseBody();
            try {
                let dataExisting = yield this.checkExistingByEmail(biz);
                console.log(dataExisting.body[0]);
                if (dataExisting.body[0] == 0) {
                    return yield this.save(biz)
                        .then(res => {
                        response.body = ["1"];
                        response.status = base_controller_1.Status.success;
                        return Promise.resolve(response);
                    })
                        .catch(error => {
                        response.body = [error.message];
                        response.status = base_controller_1.Status.logic_error;
                        return Promise.resolve(response);
                    });
                }
                else {
                    if (biz.ID != null) {
                        return yield this.save(biz)
                            .then(res => {
                            response.body = ["1"];
                            response.status = base_controller_1.Status.success;
                            return Promise.resolve(response);
                        })
                            .catch(error => {
                            response.body = [error.message];
                            response.status = base_controller_1.Status.logic_error;
                            return Promise.resolve(response);
                        });
                    }
                    else {
                        response.body = ["Data is Existed, Please Review again!"];
                        response.status = base_controller_1.Status.logic_error;
                        return Promise.resolve(response);
                    }
                }
            }
            catch (error) {
                response.status = base_controller_1.Status.server_error;
                response.body = [error.message];
                return Promise.resolve(response);
            }
        });
    }
    checkExistingByEmail(biz) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.count({ email: biz.email.trim() })
                    .then(res => {
                    let response = new responseBody_1.ResponseBody();
                    response.body = [res];
                    response.status = base_controller_1.Status.success;
                    return Promise.resolve(response);
                })
                    .catch(error => {
                    let response = new responseBody_1.ResponseBody();
                    response.body = [-1];
                    response.status = base_controller_1.Status.logic_error;
                    return Promise.resolve(response);
                });
            }
            catch (error) {
                return Promise.resolve(error);
            }
        });
    }
};
BusinessPartnerRepository = __decorate([
    (0, typeorm_1.EntityRepository)(businesspartner_1.BusinessPartner)
], BusinessPartnerRepository);
exports.BusinessPartnerRepository = BusinessPartnerRepository;
//# sourceMappingURL=business.repository.js.map