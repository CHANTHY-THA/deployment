"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const country_repository_1 = require("../orm/repository/country.repository");
class CountryController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/Country/";
    }
    /**
    * @method getListCountrys
    * @param app
    */
    getListCountrys(app) {
        app
            .get(this.controllerName + "getListCountrys", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(country_repository_1.CountryRepository).getListCountry().then(qb => { res.send(qb); });
        });
    }
}
exports.CountryController = CountryController;
//# sourceMappingURL=country.controller.js.map