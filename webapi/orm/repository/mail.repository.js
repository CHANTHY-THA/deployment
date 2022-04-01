"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const responseBody_1 = require("../../orm/repository/responseBody");
const mail_entity_1 = require("../entity/mail.entity");
const base_controller_1 = require("../../controller/base.controller");
let MailRepository = class MailRepository extends typeorm_2.Repository {
    getEmail() {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.findOne({ status: 1 }).then(x => {
                resBody.body = [x];
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
};
MailRepository = __decorate([
    (0, typeorm_1.EntityRepository)(mail_entity_1.Mail)
], MailRepository);
exports.MailRepository = MailRepository;
//# sourceMappingURL=mail.repository.js.map