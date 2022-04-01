"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const container_repository_1 = require("../orm/repository/container.repository");
class ContainerController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/Container/";
    }
    /**
    * @method saveContainer
    * @param app
    */
    saveContainer(app) {
        app
            .post(this.controllerName + "saveContainer", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let container = req.body;
            (0, typeorm_1.getCustomRepository)(container_repository_1.ContainerRepository).saveContainer(container).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method saveTheContainer
     * @param app
     */
    saveDataImport(app) {
        app
            .post(this.controllerName + "saveDataImport", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let container = req.body;
            (0, typeorm_1.getCustomRepository)(container_repository_1.ContainerRepository).saveDataImport(container).then(qb => { res.send(qb); });
        });
    }
    /**
   * @method saveTheContainer
   * @param app
   */
    saveTheContainer(app) {
        app
            .post(this.controllerName + "saveTheContainer", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let container = req.body;
            (0, typeorm_1.getCustomRepository)(container_repository_1.ContainerRepository).saveTheContainer(container).then(qb => { res.send(qb); });
        });
    }
    /**
    * @method getListCotainters
    * @param app
    */
    getListCotainters(app) {
        app
            .post(this.controllerName + "getListCotainters", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let pageIndex = req.body.pageIndex;
            let pageSize = req.body.pageSize;
            let containerStatusID = req.body.containerStatusID;
            let fromDate = req.body.fromDate;
            let toDate = req.body.toDate;
            let groupID = req.body.groupID;
            let userID = req.body.userID;
            let isViewAll = req.body.isViewAll;
            (0, typeorm_1.getCustomRepository)(container_repository_1.ContainerRepository).getListCotainters(pageIndex, pageSize, containerStatusID, fromDate, toDate, userID, groupID, isViewAll).then(qb => { res.send(qb); });
        });
    }
    /**
     *
     * @param app
     * @method removeContainerByID
     */
    removeContainerByID(app) {
        app
            .post(this.controllerName + "removeContainerByID", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let containerID = req.body.containerID;
            (0, typeorm_1.getCustomRepository)(container_repository_1.ContainerRepository).removeContainerByID(containerID).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method getContainerByID
     * @param app
     */
    getContainerByID(app) {
        app
            .post(this.controllerName + "getContainerByID", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let containerID = req.body.containerID;
            (0, typeorm_1.getCustomRepository)(container_repository_1.ContainerRepository).getContainerByID(containerID).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method getCountBookings
     * @param app
     */
    getCountContainers(app) {
        app
            .post(this.controllerName + "getCountContainers", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let containerStatusID = req.body.containerStatusID;
            let groupID = req.body.groupID;
            let userID = req.body.userID;
            let fromDate = req.body.fromDate;
            let toDate = req.body.toDate;
            let isViewAll = req.body.isViewAll;
            console.log(req.body);
            (0, typeorm_1.getCustomRepository)(container_repository_1.ContainerRepository).getCountContainers(containerStatusID, userID, groupID, fromDate, toDate, isViewAll).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method getMultiDropByContainers
     * @param app
     */
    getMultiDropByContainers(app) {
        app
            .post(this.controllerName + "getMultiDropByContainers", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let containerID = req.body.containerID;
            let isActive = req.body.isActive;
            (0, typeorm_1.getCustomRepository)(container_repository_1.ContainerRepository).getMultiDropByContainers(containerID, isActive).then(qb => { res.send(qb); });
        });
    }
    /**
    * @method saveMultiDelivery
    * @param app
    */
    saveMultiDelivery(app) {
        app
            .post(this.controllerName + "saveMultiDelivery", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let multiDelivery = req.body;
            (0, typeorm_1.getCustomRepository)(container_repository_1.ContainerRepository).saveMultiDelivery(multiDelivery).then(qb => { res.send(qb); });
        });
    }
}
exports.ContainerController = ContainerController;
//# sourceMappingURL=container.controller.js.map