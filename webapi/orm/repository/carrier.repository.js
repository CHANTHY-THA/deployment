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
exports.CarrierRepository = void 0;
const carrier_entity_1 = require("../entity/carrier.entity");
const typeorm_1 = require("typeorm");
const responseBody_1 = require("./responseBody");
const base_controller_1 = require("../../controller/base.controller");
let CarrierRepository = class CarrierRepository extends typeorm_1.Repository {
    addCarrier(carrier) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let dataExist = yield this.EditcheckExistingCustomerByEmail(carrier);
                let response = new responseBody_1.ResponseBody();
                if (dataExist.body[0] == 0) {
                    response = carrier.ID == undefined ? yield this.saveCarrier(carrier) : yield this.updateCarrier(carrier);
                }
                else if (dataExist.body[0] == 1 && carrier.ID != undefined) {
                    response = yield this.updateCarrier(carrier);
                }
                else {
                    response.body = ["Carrier is Existed, Please Review again!"];
                    response.status = base_controller_1.Status.logic_error;
                }
                return Promise.resolve(response);
            }
            catch (error) {
                console.log(error);
                console.log("CarrierRepository -> addcarrier" + error);
                return Promise.resolve(error);
            }
        });
    }
    saveCarrier(carrier) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = new responseBody_1.ResponseBody();
            return yield this.save(carrier)
                .then(() => {
                response.body = ["Success"];
                response.status = base_controller_1.Status.success;
                return Promise.resolve(response);
            })
                .catch(error => {
                response.body = [error.message];
                response.status = base_controller_1.Status.logic_error;
                return Promise.resolve(response);
            });
        });
    }
    getAllCarriers() {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.createQueryBuilder("carrier")
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
    getListCarriers(pageIndex, pageSize) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.createQueryBuilder("carrier")
                .skip(pageIndex)
                .take(pageSize)
                .orderBy("ID", "DESC")
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
    getCountCarriers() {
        try {
            return this.createQueryBuilder("carrier").getCount().then(x => {
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
    getCarriersByID(ID) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.createQueryBuilder("carrier")
                .where("carrier.ID = :ID", { ID: ID })
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
    /**
   * @method updateCarrierByID
   * @param ID
   */
    updateCarrier(carrier) {
        let response = new responseBody_1.ResponseBody();
        if (carrier.ID != undefined) {
            return this.update({ ID: carrier.ID }, {
                name: carrier.name,
                company: carrier.company,
                email: carrier.email,
                telephone: carrier.telephone,
                handPhone: carrier.handPhone,
                address: carrier.address,
                website: carrier.website,
                fax: carrier.fax,
                position: carrier.position,
                description: carrier.description
            })
                .then(() => {
                response.body = ["Success"];
                response.status = base_controller_1.Status.success;
                return Promise.resolve(response);
            })
                .catch(error => {
                response.body = [error.message];
                response.status = base_controller_1.Status.logic_error;
                return Promise.resolve(response);
            });
        }
    }
    // =======================Check existing customer with email=============================
    EditcheckExistingCustomerByEmail(carrier) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.createQueryBuilder("carrier")
                    .where("REPLACE(lower(email),' ','') = :pemail or REPLACE(lower(name),' ','') = :pname", { pemail: "" + carrier.email.toLowerCase().replace(/\s+/g, ""), pname: "" + carrier.name.toLowerCase().replace(/\s+/g, "") })
                    .getCount()
                    .then(res => {
                    let response = new responseBody_1.ResponseBody();
                    response.body = [res];
                    response.status = base_controller_1.Status.success;
                    console.log(response);
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
                console.log("CustomerRepository -> addCustomer" + error);
                return Promise.resolve(error);
            }
        });
    }
    /**
     * @method removeCarrierByID
     * @param ID
     */
    removeCarrier(ID) {
        let res = new responseBody_1.ResponseBody();
        try {
            return this.delete({ ID: ID }).then(x => {
                res.body = ["Deleted"];
                res.status = base_controller_1.Status.success;
                return Promise.resolve(res);
            })
                .catch(err => {
                res.status = base_controller_1.Status.logic_error;
                res.body = [err.message];
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
};
CarrierRepository = __decorate([
    (0, typeorm_1.EntityRepository)(carrier_entity_1.Carrier)
], CarrierRepository);
exports.CarrierRepository = CarrierRepository;
//# sourceMappingURL=carrier.repository.js.map