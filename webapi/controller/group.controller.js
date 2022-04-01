"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const group_repository_1 = require("../orm/repository/group.repository");
class GroupController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/group/";
    }
    /**
     * @method getListGroups
     */
    getListGroups(app) {
        app.
            post(this.controllerName + "getListGroups", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let pageIndex = req.body.pageIndex;
            let pageSize = req.body.pageSize;
            (0, typeorm_1.getCustomRepository)(group_repository_1.GroupRepository).getListGroups(pageIndex, pageSize)
                .then(qb => {
                res.send(qb);
            });
        });
    }
    /**
    * @method getCountGroups
    */
    getCountGroups(app) {
        app.
            post(this.controllerName + "getCountGroups", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(group_repository_1.GroupRepository).getCountGroups()
                .then(qb => {
                res.send(qb);
            });
        });
    }
    /**
     * @method getPermissionByGroupID
     * @param app
     *
     */
    getPermissionByGroupID(app) {
        app
            .post(this.controllerName + "getPermissionByGroupID", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let groupID = req.body.groupID;
            (0, typeorm_1.getCustomRepository)(group_repository_1.GroupRepository).getPermissionByGroupID(groupID).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method addNewGroupPermission
     * @param app
     *
     */
    addGroup(app) {
        app
            .post(this.controllerName + "addGroup", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let groupPersmissions = req.body;
            (0, typeorm_1.getCustomRepository)(group_repository_1.GroupRepository).addGroup(groupPersmissions).then(qb => { res.send(qb); });
        });
    }
    /**
    * @method getGroupByDepartmentID
    * @param app
    *
    */
    getGroupByDepartmentID(app) {
        app
            .post(this.controllerName + "getGroupByDepartmentID", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let departmentID = req.body.departmentID;
            (0, typeorm_1.getCustomRepository)(group_repository_1.GroupRepository).getGroupByDepartmentID(departmentID).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method addNewGroupPermission
     * @param app
     *
     */
    updateGroupPermission(app) {
        app
            .post(this.controllerName + "updateGroupPermission", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let groupPersmissions = req.body;
            (0, typeorm_1.getCustomRepository)(group_repository_1.GroupRepository).updateGroupPermission(groupPersmissions).then(qb => { res.send(qb); });
        });
    }
}
exports.GroupController = GroupController;
//# sourceMappingURL=group.controller.js.map