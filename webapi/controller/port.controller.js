"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const port_repositoty_1 = require("../orm/repository/port.repositoty");
class PortController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/Port/";
    }
    /**
     * @method getPortList
     * @param app s
     */
    getPortList(app) {
        app
            .post(this.controllerName + "getPortList", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let portType = req.body.portType;
            (0, typeorm_1.getCustomRepository)(port_repositoty_1.PortRepository).getPortList(portType).then(qb => { res.send(qb); });
        });
    }
    getPortListWithSize(app) {
        app
            .post(this.controllerName + "getPortListWithSize", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let pageSize = req.body.pageSize;
            let pageIndex = req.body.pageIndex;
            (0, typeorm_1.getCustomRepository)(port_repositoty_1.PortRepository).getPortListWithSize(pageIndex, pageSize).then(qb => { res.send(qb); });
        });
    }
    getPortByID(app) {
        app
            .post(this.controllerName + "getPortByID", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let ID = req.body.ID;
            (0, typeorm_1.getCustomRepository)(port_repositoty_1.PortRepository).getPortByID(ID).then(qb => { res.send(qb); });
        });
    }
    addPort(app) {
        app
            .post(this.controllerName + "addPort", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let port = req.body;
            (0, typeorm_1.getCustomRepository)(port_repositoty_1.PortRepository).addPort(port).then(qb => { res.send(qb); });
        });
    }
    getCountPorts(app) {
        app
            .post(this.controllerName + "getCountPorts", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(port_repositoty_1.PortRepository).getCountPorts().then(qb => { res.send(qb); });
        });
    }
}
exports.PortController = PortController;
//# sourceMappingURL=port.controller.js.map