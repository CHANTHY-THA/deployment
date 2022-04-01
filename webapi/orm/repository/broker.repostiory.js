"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerRepository = void 0;
const typeorm_1 = require("typeorm");
//import { DriverVehicleDetailRepository } from './vehicleDriver.repository';
const base_controller_1 = require("../../controller/base.controller");
const responseBody_1 = require("./responseBody");
const broker_entity_1 = require("../entity/broker.entity");
/**
 * @Rina Chen
 */
let BrokerRepository = class BrokerRepository extends typeorm_1.Repository {
    /**
     * @method getAllBrokers
     */
    getAllBrokers() {
        let resBody = new responseBody_1.ResponseBody();
        try {
            resBody.status = base_controller_1.Status.success;
            return this.createQueryBuilder("broker")
                .where("broker.isActive='1'")
                .getMany().then(x => {
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
BrokerRepository = __decorate([
    (0, typeorm_1.EntityRepository)(broker_entity_1.Broker)
], BrokerRepository);
exports.BrokerRepository = BrokerRepository;
//# sourceMappingURL=broker.repostiory.js.map