"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const broker_repostiory_1 = require("../orm/repository/broker.repostiory");
class BrokerController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/Broker/";
    }
    /**
     * @method getListBroker
     * @param app
     */
    getAllBrokers(app) {
        app
            .post(this.controllerName + "getAllBrokers", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(broker_repostiory_1.BrokerRepository).getAllBrokers().then(qb => { res.send(qb); });
        });
    }
}
exports.BrokerController = BrokerController;
//# sourceMappingURL=broker.controller.js.map