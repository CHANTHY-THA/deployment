"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRepository = void 0;
const typeorm_1 = require("typeorm");
const responseBody_1 = require("./responseBody");
const base_controller_1 = require("../../controller/base.controller");
const country_entity_1 = require("../entity/country.entity");
let CountryRepository = class CountryRepository extends typeorm_1.Repository {
    /**
         * @method getListCustomers
     */
    getListCountry() {
        let resBody = new responseBody_1.ResponseBody();
        try {
            resBody.status = base_controller_1.Status.success;
            return this.createQueryBuilder("country")
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
};
CountryRepository = __decorate([
    (0, typeorm_1.EntityRepository)(country_entity_1.Country)
], CountryRepository);
exports.CountryRepository = CountryRepository;
//# sourceMappingURL=country.repository.js.map