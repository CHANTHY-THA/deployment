"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const truck_repository_1 = require("../orm/repository/truck.repository");
class TruckController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/Truck/";
    }
    /**
   * @method getListTruckByDriver
   * @param app
   */
    getListTruckByDriver(app) {
        app
            .post(this.controllerName + "getListTruckByDriver", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(truck_repository_1.TruckRepository).getListTruckByDriver().then(qb => { res.send(qb); });
        });
    }
    getAllTrucks(app) {
        app
            .post(this.controllerName + "getAllTrucks", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let pageIndex = req.body.pageIndex;
            let pageSize = req.body.pageSize;
            (0, typeorm_1.getCustomRepository)(truck_repository_1.TruckRepository).getAllTrucks(pageSize, pageIndex).then(qb => { res.send(qb); });
        });
    }
    getCountTrucks(app) {
        app
            .post(this.controllerName + "getCountTrucks", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(truck_repository_1.TruckRepository).getCountTrucks().then(qb => { res.send(qb); });
        });
    }
    /**
     * @method getAllTruck
     */
    getAllTruck(app) {
        app
            .post(this.controllerName + "getAllTruck", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(truck_repository_1.TruckRepository).getAllTruck().then(qb => { res.send(qb); });
        });
    }
    /**
     * @method getAllTruck
     */
    saveTruck(app) {
        app
            .post(this.controllerName + "saveTruck", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(truck_repository_1.TruckRepository).saveTruck(req.body).then(qb => { res.send(qb); });
        });
    }
}
exports.TruckController = TruckController;
//# sourceMappingURL=truck.controller.js.map