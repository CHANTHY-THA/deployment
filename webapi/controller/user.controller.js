"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const user_repository_1 = require("../orm/repository/user.repository");
const AuthenticationHandler_1 = require("../authorization/AuthenticationHandler");
class UserController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/User/";
    }
    /**
    * @method getListUsers
    * @param app
    */
    logIn(app) {
        app.post('/user/login', new AuthenticationHandler_1.AuthenticationHandler().token);
    }
    /**
    * @method addUsers
    * @param app
    */
    addUsers(app) {
        app
            .post(this.controllerName + "addUsers", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let user = req.body;
            (0, typeorm_1.getCustomRepository)(user_repository_1.UserRepository).addUser(user).then(qb => { res.send(qb); });
        });
    }
    /**
    * @method updateUser
    * @param app
    */
    updateUser(app) {
        app
            .post(this.controllerName + "updateUser", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let user = req.body;
            (0, typeorm_1.getCustomRepository)(user_repository_1.UserRepository).updateUser(user).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method getUserByGroups
     * @param app
     */
    getUserByGroups(app) {
        app
            .post(this.controllerName + "getUserByGroups", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let groupID = req.body.groupID;
            (0, typeorm_1.getCustomRepository)(user_repository_1.UserRepository).getUserByGroups(groupID).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method getListUserByPosition
     * @param app
     */
    getListUserByPosition(app) {
        app
            .post(this.controllerName + "getListUserByPosition", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let positionID = req.body.positionID;
            (0, typeorm_1.getCustomRepository)(user_repository_1.UserRepository).getListUserByPosition(positionID).then(qb => { res.send(qb); });
        });
    }
    getListUserOperation(app) {
        app
            .post(this.controllerName + "getListUserOperation", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(user_repository_1.UserRepository).getListUserOperation().then(qb => { res.send(qb); });
        });
    }
    /**
     * @method getListUsers
     * @param app
     */
    getListUsers(app) {
        app
            .post(this.controllerName + "getListUsers", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let pageIndex = req.body.pageIndex;
            let pageSize = req.body.pageSize;
            (0, typeorm_1.getCustomRepository)(user_repository_1.UserRepository).getListUsers(pageIndex, pageSize).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method : getListUsersByType
     * @param app
     */
    getListUsersByType(app) {
        app
            .post(this.controllerName + "getListUsersByType", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let userType = req.body.userType;
            console.log(userType);
            (0, typeorm_1.getCustomRepository)(user_repository_1.UserRepository).getListUsersByType(userType).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method getCountUser
     * @param app
     */
    getCountUsers(app) {
        app
            .post(this.controllerName + "getCountUsers", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(user_repository_1.UserRepository).getCountUsers()
                .then(qb => { res.send(qb); });
        });
    }
    /**
     * @method
     */
    findUserByID(app) {
        app
            .post(this.controllerName + "findUserByID", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let ID = req.body.ID;
            (0, typeorm_1.getCustomRepository)(user_repository_1.UserRepository).findUserByID(ID)
                .then(qb => {
                res.send(qb);
            });
        });
    }
    /**
     * @method removeUserByID
     * @param userID
     */
    removeUserByID(app) {
        app
            .post(this.controllerName + "removeUserByID", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let ID = req.body.ID;
            (0, typeorm_1.getCustomRepository)(user_repository_1.UserRepository).removeUserByID(ID)
                .then(qb => { res.send(qb); });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map