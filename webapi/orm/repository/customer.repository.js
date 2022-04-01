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
exports.CustomerRepository = void 0;
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("../entity/customer.entity");
const responseBody_1 = require("./responseBody");
const base_controller_1 = require("../../controller/base.controller");
const customer_type_repository_1 = require("./customer.type.repository");
let CustomerRepository = class CustomerRepository extends typeorm_1.Repository {
    addCustomers(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = new responseBody_1.ResponseBody();
                let dataExistByName = yield this.checkExistingCustomerByName(customer);
                let dataExistByEmail = yield this.checkExistingCustomerByEmail(customer);
                let dataExist = yield this.EditcheckExistingCustomerByEmail(customer);
                // console.log("Customer: " + customer.ID);
                if (dataExistByEmail.body[0] == 0 && dataExistByName.body[0] == 0) {
                    response = customer.ID == undefined ? yield this.saveNew(customer) : yield this.updateCustomer(customer);
                    this.addCustomerType(customer);
                }
                else if ((dataExistByName.body[0] >= 1 || dataExistByEmail.body[0] >= 1)) {
                    // ================Check customer name and email with validation============
                    if (customer.ID != undefined) {
                        if (dataExist.body[0] == 1) {
                            this.addCustomerType(customer);
                            response = yield this.updateCustomer(customer);
                            console.log('successfuly!');
                        }
                        else {
                            response.body = ["Data is Existed, Please Review again!"];
                            response.status = base_controller_1.Status.logic_error;
                        }
                        // ===================Check validation during create new customer=============
                    }
                    else if (dataExistByName.body[0] >= 1 && dataExistByEmail.body[0] == 0) {
                        response.body = ["Customer name is Existed, Please Try again!"];
                        response.status = base_controller_1.Status.logic_error;
                    }
                    else if (dataExistByName.body[0] == 0 && dataExistByEmail.body[0] >= 1) {
                        response.body = ["Email is Existed, Please Try again!"];
                        response.status = base_controller_1.Status.logic_error;
                    }
                    else {
                        response.body = ["Customer name & Email is Existed, Please Try again!"];
                        response.status = base_controller_1.Status.logic_error;
                    }
                }
                return Promise.resolve(response);
            }
            catch (error) {
                console.log("CustomerRepository -> addCustomer" + error);
                return Promise.resolve(error);
            }
        });
    }
    saveNew(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = new responseBody_1.ResponseBody();
            return yield this.save(customer)
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
    updateCustomer(customer) {
        let response = new responseBody_1.ResponseBody();
        if (customer.ID != undefined) {
            return this.update({ ID: customer.ID }, {
                name: customer.name,
                email1: customer.email1,
                email2: customer.email2,
                telephone1: customer.telephone1,
                telephone2: customer.telephone2,
                address1: customer.address1,
                address2: customer.address2,
                webSite: customer.webSite,
                country: customer.country,
                countryCode: customer.countryCode,
                isCustomer: customer.isCustomer,
                city: customer.city,
                nameKH: customer.nameKH,
                contactName: customer.contactName,
                VATNo: customer.VATNo,
                contactPhone: customer.contactPhone,
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
    addCustomerType(customer) {
        customer.customerType.forEach(((ele) => __awaiter(this, void 0, void 0, function* () {
            ele.customer = customer;
            yield (0, typeorm_1.getCustomRepository)(customer_type_repository_1.CustomerTypeRepository).addCustomerTypes(ele);
        })));
    }
    // =======================Check existing customer with email=============================
    EditcheckExistingCustomerByEmail(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.createQueryBuilder("customer")
                    .where("REPLACE(lower(email1),' ','') = :pemail or REPLACE(lower(name),' ','') = :pname", { pemail: "" + customer.email1.toLowerCase().replace(/\s+/g, ""), pname: "" + customer.name.toLowerCase().replace(/\s+/g, "") })
                    .getCount()
                    .then(res => {
                    let response = new responseBody_1.ResponseBody();
                    response.body = [res];
                    response.status = base_controller_1.Status.success;
                    console.log('Dataexist: ');
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
    // =======================Check existing email=============================
    checkExistingCustomerByEmail(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.createQueryBuilder("customer")
                    .where("REPLACE(lower(email1),' ','') = :pemail", { pemail: "" + customer.email1.toLowerCase().replace(/\s+/g, "") })
                    .getCount()
                    .then(res => {
                    let response = new responseBody_1.ResponseBody();
                    response.body = [res];
                    response.status = base_controller_1.Status.success;
                    console.log('email: ');
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
    // =========================Check existing customer==========================
    checkExistingCustomerByName(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.createQueryBuilder("customer")
                    .where("REPLACE(lower(name),' ','') = :pname", { pname: "" + customer.name.toLowerCase().replace(/\s+/g, "") })
                    .getCount()
                    .then(res => {
                    let response = new responseBody_1.ResponseBody();
                    response.body = [res];
                    response.status = base_controller_1.Status.success;
                    console.log('name:');
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
  * @method getCustomerByType
  */
    getCustomerByType(customerType) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.createQueryBuilder("customer")
                .innerJoin("customer.customerType", "customerType")
                .where("customerType.predataID = :customerType and customer.isActive=1", { customerType: customerType })
                //  .where(" customerType.predataID = :customerType",{customerType:customerType})
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
    /**
     *
     * @param customerID
     */
    removeCustomer(customerID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.update({ ID: customerID }, { isActive: 0 })
                    .then(res => {
                    let response = new responseBody_1.ResponseBody();
                    response.body = ["Deleted"];
                    response.status = base_controller_1.Status.success;
                    return Promise.resolve(response);
                })
                    .catch(error => {
                    let response = new responseBody_1.ResponseBody();
                    response.body = [error.message];
                    response.status = base_controller_1.Status.logic_error;
                    return Promise.resolve(response);
                });
            }
            catch (error) {
                return Promise.resolve(error);
            }
        });
    }
    /**
         * @method getListCustomers
         * @param pageIndex
         * @param pageSize
     */
    getListCustomers(pageIndex, pageSize) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            resBody.status = base_controller_1.Status.success;
            return this.createQueryBuilder("customer")
                .skip(pageIndex)
                .take(pageSize)
                .where("customer.isActive=1")
                .orderBy("createDate", "DESC")
                .getMany()
                .then(x => {
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
    /**
     * getCountCustomer
     */
    getCountCustomers() {
        try {
            return this.createQueryBuilder("customer").getCount().then(x => {
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
   * @method findCustomerByID
   * @param ID
   */
    findCustomerByID(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.createQueryBuilder("customer")
                    .leftJoinAndSelect("customer.customerType", "customerType")
                    .where("customer.ID=:ID and customer.isActive=1", { ID: ID })
                    //    .where("customer.ID=:ID",{ID:ID})
                    //       .cache(true)
                    .getOne()
                    .then(x => {
                    let res = new responseBody_1.ResponseBody();
                    res.body = [x];
                    console.log(x);
                    res.status = base_controller_1.Status.success;
                    return Promise.resolve(res);
                })
                    .catch(error => {
                    let resBody = new responseBody_1.ResponseBody();
                    resBody.status = base_controller_1.Status.server_error;
                    resBody.body = [error.message];
                    return Promise.resolve(resBody);
                });
            }
            catch (error) {
                let resBody = new responseBody_1.ResponseBody();
                resBody.status = base_controller_1.Status.server_error;
                resBody.body = [error.message];
                return Promise.resolve(resBody);
            }
        });
    }
};
CustomerRepository = __decorate([
    (0, typeorm_1.EntityRepository)(customer_entity_1.Customer)
], CustomerRepository);
exports.CustomerRepository = CustomerRepository;
//# sourceMappingURL=customer.repository.js.map