"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const responseBody_1 = require("../../orm/repository/responseBody");
const base_controller_1 = require("../../controller/base.controller");
const port_entity_1 = require("../entity/port.entity");
let PortRepository = class PortRepository extends typeorm_2.Repository {
    getPortList(portType) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.createQueryBuilder("port")
                .where("port.portType = :portType", { portType: portType })
                .orderBy('port.port', 'ASC')
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
    getPortListWithSize(pageIndex, pageSize) {
        console.log(pageIndex, pageSize);
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.createQueryBuilder("port")
                .skip(pageIndex)
                .take(pageSize)
                .where("port.isActive='1'")
                .orderBy("port.ID", 'DESC')
                .getMany()
                .then(res => {
                resBody.body = res;
                resBody.status = base_controller_1.Status.success;
                return Promise.resolve(resBody);
            })
                .catch(err => {
                resBody.body = [err];
                resBody.status = base_controller_1.Status.logic_error;
                return Promise.resolve(resBody);
            });
        }
        catch (err) {
            resBody.status = base_controller_1.Status.logic_error;
            resBody.body = [err];
            return Promise.resolve(resBody);
        }
    }
    getPortByID(ID) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.createQueryBuilder("port")
                .where("port.isActive='1' and port.ID=ID", { ID: ID })
                .getMany()
                .then(res => {
                resBody.body = res;
                resBody.status = base_controller_1.Status.success;
                return Promise.resolve(resBody);
            })
                .catch(err => {
                resBody.body = [];
                resBody.status = base_controller_1.Status.logic_error;
                return Promise.resolve(resBody);
            });
        }
        catch (err) {
            resBody.status = base_controller_1.Status.logic_error;
            resBody.body = [err];
            return Promise.resolve(resBody);
        }
    }
    addPort(port) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.save(port).then(res => {
                resBody.body = ["1"];
                resBody.status = base_controller_1.Status.success;
                return Promise.resolve(resBody);
            })
                .catch(err => {
                resBody.status = base_controller_1.Status.logic_error;
                resBody.body = [err.message];
                return Promise.resolve(resBody);
            });
        }
        catch (error) {
            resBody.status = base_controller_1.Status.server_error;
            resBody.body = [error];
            return Promise.resolve(resBody);
        }
    }
    getCountPorts() {
        try {
            return this.createQueryBuilder("port")
                .where("port.isActive='1'")
                .getCount().then(x => {
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
};
PortRepository = __decorate([
    (0, typeorm_1.EntityRepository)(port_entity_1.Port)
], PortRepository);
exports.PortRepository = PortRepository;
//# sourceMappingURL=port.repositoty.js.map