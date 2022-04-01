"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupRepository = void 0;
const typeorm_1 = require("typeorm");
//import { DriverVehicleDetailRepository } from './vehicleDriver.repository';
const base_controller_1 = require("../../controller/base.controller");
const responseBody_1 = require("./responseBody");
const group_entity_1 = require("../entity/group.entity");
const permission_repository_1 = require("./permission.repository");
/**
 * @Rina Chen
 */
let GroupRepository = class GroupRepository extends typeorm_1.Repository {
    getListGroups(pageIndex, pageSize) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.createQueryBuilder("group")
                .skip(pageIndex)
                .take(pageSize)
                .where("group.status='1'")
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
    addGroup(grp) {
        console.log(grp.groupPermission);
        let resBody = new responseBody_1.ResponseBody();
        return this.save(grp).then(res => {
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
    /**
   * @@method getCountGroups
   */
    getCountGroups() {
        try {
            return this.createQueryBuilder("group").getCount().then(x => {
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
    getGroupByDepartmentID(departmentID) {
        let resBody = new responseBody_1.ResponseBody();
        return this
            .find({
            where: [{ departmentID: departmentID }]
        })
            .then(res => {
            resBody.body = res;
            resBody.status = base_controller_1.Status.success;
            return Promise.resolve(resBody);
        })
            .catch(err => {
            resBody.status = base_controller_1.Status.logic_error;
            resBody.body = [err.message];
            return Promise.resolve(resBody);
        });
    }
    updateGroupPermission(grp) {
        let resBody = new responseBody_1.ResponseBody();
        return this.update({ ID: grp.ID }, { group: grp.group, status: grp.status }).then(res => {
            return (0, typeorm_1.getCustomRepository)(permission_repository_1.PermissionRepository).updatePermission(grp.groupPermission)
                .then(res => {
                console.log(res);
                resBody.body = ["1"];
                resBody.status = base_controller_1.Status.success;
                return Promise.resolve(resBody);
            });
        })
            .catch(err => {
            resBody.status = base_controller_1.Status.logic_error;
            resBody.body = [err.message];
            return Promise.resolve(resBody);
        });
    }
    /**
     * @method getPermissionByGroupID
     * @param groupID
     */
    getPermissionByGroupID(groupID) {
        let resBody = new responseBody_1.ResponseBody();
        try {
            resBody.status = base_controller_1.Status.success;
            console.log(groupID);
            return this.createQueryBuilder("group")
                .innerJoinAndSelect("group.groupPermission", "permission")
                .innerJoinAndSelect("permission.page", "page")
                .where("group.ID = :ID", { ID: groupID })
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
GroupRepository = __decorate([
    (0, typeorm_1.EntityRepository)(group_entity_1.Group)
], GroupRepository);
exports.GroupRepository = GroupRepository;
//# sourceMappingURL=group.repository.js.map