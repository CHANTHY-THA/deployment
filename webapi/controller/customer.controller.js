"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const customer_repository_1 = require("../orm/repository/customer.repository");
class CustomerController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/Customer/";
    }
    /**
  * @method addCustomers
  * @param app
  */
    addCustomers(app) {
        app
            .post(this.controllerName + "addCustomers", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let customer = req.body;
            (0, typeorm_1.getCustomRepository)(customer_repository_1.CustomerRepository).addCustomers(customer).then(qb => { res.send(qb); });
        });
    }
    /**
    * @method getCountCustomers
    * @param app
    */
    getCountCustomers(app) {
        app
            .post(this.controllerName + "getCountCustomers", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(customer_repository_1.CustomerRepository).getCountCustomers()
                .then(qb => { res.send(qb); });
        });
    }
    /**
    * @method getListCustomers
    * @param app
    */
    getListCustomers(app) {
        app
            .post(this.controllerName + "getListCustomers", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let pageIndex = req.body.pageIndex;
            let pageSize = req.body.pageSize;
            (0, typeorm_1.getCustomRepository)(customer_repository_1.CustomerRepository).getListCustomers(pageIndex, pageSize).then(qb => { res.send(qb); });
        });
    }
    removeCustomer(app) {
        app
            .post(this.controllerName + "removeCustomer", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let customerID = req.body.customerID;
            let userID = req.body.userID;
            (0, typeorm_1.getCustomRepository)(customer_repository_1.CustomerRepository).removeCustomer(customerID).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method getCustomerByType
     * @param app
     */
    getCustomerByType(app) {
        app
            .post(this.controllerName + "getCustomerByType", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let customerType = req.body.customerType;
            (0, typeorm_1.getCustomRepository)(customer_repository_1.CustomerRepository).getCustomerByType(customerType).then(qb => { res.send(qb); });
        });
    }
    /**
       * @method findCustomerByID
       * @param app
       */
    findCustomerByID(app) {
        app
            .post(this.controllerName + "findCustomerByID", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let customerID = req.body.customerID;
            (0, typeorm_1.getCustomRepository)(customer_repository_1.CustomerRepository).findCustomerByID(customerID).then(qb => { res.send(qb); });
        });
    }
}
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map