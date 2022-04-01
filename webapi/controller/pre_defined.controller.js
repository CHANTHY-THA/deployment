"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreDefinedFieldController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const preDefined_repository_1 = require("../orm/repository/preDefined.repository");
/**
 * @Controller
 */
class PreDefinedFieldController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/predata/";
    }
    /**
   * @method getListPreDefinedsByCriterial
   * @param app
   */
    getPredataByCriterial(app) {
        app
            .post(this.controllerName + "getPredataByCriterial", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let criterial = req.body.criterial;
            (0, typeorm_1.getCustomRepository)(preDefined_repository_1.PreDefinedFieldRepository).getPreDefinedsByCriterial(criterial).then(qb => { res.send(qb); });
        });
    }
    /**
       * @method addPreData
       * @param app
       */
    addPreData(app) {
        app
            .post(this.controllerName + "addPreData", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let criterial = req.body.predata;
            (0, typeorm_1.getCustomRepository)(preDefined_repository_1.PreDefinedFieldRepository).addPreData(criterial).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method getListPredatas
     * @param app
     */
    getListPredatas(app) {
        app
            .post(this.controllerName + "getListPredatas", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let criterial = req.body.criterial;
            let pageIndex = req.body.pageIndex;
            let pageSize = req.body.pageSize;
            (0, typeorm_1.getCustomRepository)(preDefined_repository_1.PreDefinedFieldRepository).getListPredatas(criterial, pageIndex, pageSize).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method getListCriterial
     * @param app
     */
    getListCriterial(app) {
        app
            .post(this.controllerName + "getListCriterial", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(preDefined_repository_1.PreDefinedFieldRepository).getListCriterial().then(qb => { res.send(qb); });
        });
    }
    /**
    * @method getCountPredatas
    * @param app
    */
    getCountPredatas(app) {
        app
            .post(this.controllerName + "getCountPredatas", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let criterial = req.body.criterial;
            (0, typeorm_1.getCustomRepository)(preDefined_repository_1.PreDefinedFieldRepository).getCountPredatas(criterial).then(qb => { res.send(qb); });
        });
    }
}
exports.PreDefinedFieldController = PreDefinedFieldController;
//# sourceMappingURL=pre_defined.controller.js.map