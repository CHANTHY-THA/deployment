"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const business_repository_1 = require("../orm/repository/business.repository");
class BusinessPartnerController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/Business/";
    }
    /**
     * @method getAllBusinessPartners
     * @param app s
     */
    getAllBusinessPartners(app) {
        app
            .post(this.controllerName + "getAllBusinessPartners", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(business_repository_1.BusinessPartnerRepository).getAllBusinessPartners().then(qb => { res.send(qb); });
        });
    }
    /**
     *
     */
    getCountBusinessPartner(app) {
        app
            .post(this.controllerName + "getCountBusinessPartner", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(business_repository_1.BusinessPartnerRepository).getCountBusinessPartner().then(qb => { res.send(qb); });
        });
    }
    /**
     *
     */
    getListBusinessPartner(app) {
        app
            .post(this.controllerName + "getListBusinessPartner", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let pageIndex = req.body.pageIndex;
            let pageSize = req.body.pageSize;
            (0, typeorm_1.getCustomRepository)(business_repository_1.BusinessPartnerRepository).getListBusinessPartner(pageIndex, pageSize).then(qb => { res.send(qb); });
        });
    }
    /**
     *
     */
    getBusinessPartnerByID(app) {
        app
            .post(this.controllerName + "getBusinessPartnerByID", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let ID = req.body.ID;
            (0, typeorm_1.getCustomRepository)(business_repository_1.BusinessPartnerRepository).getBusinessPartnerByID(ID).then(qb => { res.send(qb); });
        });
    }
    /**
    *
    */
    removeBusinessPartnerByID(app) {
        app
            .post(this.controllerName + "removeBusinessPartnerByID", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let ID = req.body.ID;
            (0, typeorm_1.getCustomRepository)(business_repository_1.BusinessPartnerRepository).removeBusinessPartnerByID(ID).then(qb => { res.send(qb); });
        });
    }
    /**
     *
     */
    saveBusinessPartner(app) {
        app
            .post(this.controllerName + "saveBusinessPartner", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let biz = req.body;
            (0, typeorm_1.getCustomRepository)(business_repository_1.BusinessPartnerRepository).saveBusinessPartner(biz).then(qb => { res.send(qb); });
        });
    }
}
exports.BusinessPartnerController = BusinessPartnerController;
//# sourceMappingURL=business.controller.js.map