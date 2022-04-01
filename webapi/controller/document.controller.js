"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const document_repository_1 = require("../orm/repository/document.repository");
class DocumentController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/document/";
    }
    /**
     * @method addDocuments
     * @param app
     *
     */
    addDocuments(app) {
        app
            .post(this.controllerName + "addDocuments", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let doc = req.body;
            (0, typeorm_1.getCustomRepository)(document_repository_1.DocumentRepository).addDocuments(doc).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method getListDocuments
     * @param app
     *
     */
    getListDocuments(app) {
        app
            .post(this.controllerName + "getListDocuments", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let bookingID = req.body.bookingID;
            (0, typeorm_1.getCustomRepository)(document_repository_1.DocumentRepository).getListDocuments(bookingID).then(qb => { res.send(qb); });
        });
    }
    /**
     *
     * @param app
     * @method delete ducoment
     */
    deleteDocument(app) {
        app
            .post(this.controllerName + "deleteDocument", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let IDGenerate = req.body.IDGenerate;
            (0, typeorm_1.getCustomRepository)(document_repository_1.DocumentRepository).deleteDocument(IDGenerate).then(qb => { res.send(qb); });
        });
    }
}
exports.DocumentController = DocumentController;
//# sourceMappingURL=document.controller.js.map