"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrierController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const carrier_repository_1 = require("../orm/repository/carrier.repository");
class CarrierController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/Carrier/";
    }
    /**
     * @method getAllCarriers
     * @param app s
     */
    getAllCarriers(app) {
        app
            .post(this.controllerName + "getAllCarriers", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(carrier_repository_1.CarrierRepository).getAllCarriers().then(qb => { res.send(qb); });
        });
    }
    /**
     * @method getAllCarriers
     * @param app s
     */
    getListCarriers(app) {
        app
            .post(this.controllerName + "getListCarriers", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(carrier_repository_1.CarrierRepository).getListCarriers(req.body.pageIndex, req.body.pageSize).then(qb => { res.send(qb); });
        });
    }
    getCarriersByID(app) {
        app
            .post(this.controllerName + "getCarriersByID", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let ID = req.body.ID;
            (0, typeorm_1.getCustomRepository)(carrier_repository_1.CarrierRepository).getCarriersByID(ID).then(qb => { res.send(qb); });
        });
    }
    /**
    * @method getCountCarriers
    * @param app
    */
    getCountCarriers(app) {
        app
            .post(this.controllerName + "getCountCarriers", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(carrier_repository_1.CarrierRepository).getCountCarriers()
                .then(qb => { res.send(qb); });
        });
    }
    /**
    * @method saveCarriers
    * @param app
    */
    addCarrier(app) {
        app
            .post(this.controllerName + "addCarrier", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(carrier_repository_1.CarrierRepository).addCarrier(req.body)
                .then(qb => { res.send(qb); });
        });
    }
    /**
    * @method saveCarriers
    * @param app
    */
    removeCarrier(app) {
        app
            .post(this.controllerName + "removeCarrier", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(carrier_repository_1.CarrierRepository).removeCarrier(req.body.ID)
                .then(qb => { res.send(qb); });
        });
    }
}
exports.CarrierController = CarrierController;
//# sourceMappingURL=carrier.controller.js.map