"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const page_repository_1 = require("../orm/repository/page.repository");
class PageController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/Page/";
    }
    /**
     * @method getAllPages
     * @param app s
     */
    getAllPages(app) {
        app
            .post(this.controllerName + "getAllPages", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(page_repository_1.PageRepository).getAllPages().then(qb => { res.send(qb); });
        });
    }
    /**
     * @method savePage
     */
    savePage(app) {
        app
            .post(this.controllerName + "savePage", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(page_repository_1.PageRepository).savePage(req.body).then(qb => { res.send(qb); });
        });
    }
}
exports.PageController = PageController;
//# sourceMappingURL=page.controller.js.map