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
exports.CustomerTypeRepository = void 0;
const typeorm_1 = require("typeorm");
const responseBody_1 = require("./responseBody");
const base_controller_1 = require("../../controller/base.controller");
const customer_type_entity_1 = require("../entity/customer.type.entity");
let CustomerTypeRepository = class CustomerTypeRepository extends typeorm_1.Repository {
    addCustomerTypes(cusType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("customerType", cusType);
                return yield this.save(cusType)
                    .then(res => {
                    let response = new responseBody_1.ResponseBody();
                    response.body = ["1"];
                    response.status = base_controller_1.Status.success;
                    return Promise.resolve(response);
                })
                    .catch(error => {
                    let response = new responseBody_1.ResponseBody();
                    response.body = [error.message];
                    response.status = base_controller_1.Status.logic_error;
                    console.log("error addCustomerTypes", error);
                    return Promise.resolve(response);
                });
            }
            catch (error) {
                console.log("CustomerTypeRepository -> addCustomerType " + error);
                return Promise.resolve(error);
            }
        });
    }
    remove(customerID) {
        try {
            return this
                .createQueryBuilder("customerType")
                .delete()
                .where("customerType.customerID = :customerID", { customerID: customerID })
                .execute()
                .then(res => {
                let response = new responseBody_1.ResponseBody();
                response.body = ["1"];
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
            console.log("CustomerTypeRepository -> delete " + error);
            return Promise.resolve(error);
        }
    }
};
CustomerTypeRepository = __decorate([
    (0, typeorm_1.EntityRepository)(customer_type_entity_1.CustomerType)
], CustomerTypeRepository);
exports.CustomerTypeRepository = CustomerTypeRepository;
//# sourceMappingURL=customer.type.repository.js.map