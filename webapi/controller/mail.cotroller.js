"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailController = void 0;
const base_controller_1 = require("./base.controller");
const utilities_1 = require("../utilities");
class MailController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/Mail/";
    }
    /**
     * @method sendMail
     * @param app s
     */
    sendMail(app) {
        app
            .post(this.controllerName + "sendMail", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let body = req.body;
            new utilities_1.Mailing().sendEmail(body, function (status) {
                res.send(status);
            });
        });
    }
}
exports.MailController = MailController;
//# sourceMappingURL=mail.cotroller.js.map