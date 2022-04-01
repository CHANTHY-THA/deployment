"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentController = void 0;
const base_controller_1 = require("./base.controller");
const typeorm_1 = require("typeorm");
const department_repository_1 = require("../orm/repository/department.repository");
class DepartmentController extends base_controller_1.baseController {
    constructor() {
        super();
        this.controllerName = "/Department/";
    }
    /**
     * @method getDepartmentByID
     * @param app
     *
     */
    getDepartmentByID(app) {
        app
            .post(this.controllerName + "getDepartmentByID", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let departmentID = req.body.departmentID;
            (0, typeorm_1.getCustomRepository)(department_repository_1.DepartmentRepository).getDepartmentByID(departmentID).then(qb => { res.send(qb); });
        });
    }
    /**
     * @method addNewGroupPermission
     * @param app
     *
     */
    addDepartment(app) {
        app
            .post(this.controllerName + "addDepartment", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let department = req.body;
            (0, typeorm_1.getCustomRepository)(department_repository_1.DepartmentRepository).addDepartment(department).then(qb => {
                console.log(qb);
                res.send(qb);
            });
        });
    }
    /**
     * @method addNewGroupPermission
     * @param app
     *
     */
    getListDepartments(app) {
        app
            .post(this.controllerName + "getListDepartments", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(department_repository_1.DepartmentRepository).getListDepartments().then(qb => {
                console.log(qb);
                res.send(qb);
            });
        });
    }
    /**
     * @method getListDepartmentsPagin
     * @param app
     *
     */
    getListDepartmentsPagin(app) {
        app
            .post(this.controllerName + "getListDepartmentsPagin", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            let pageIndex = req.body.pageIndex;
            let pageSize = req.body.pageSize;
            (0, typeorm_1.getCustomRepository)(department_repository_1.DepartmentRepository).getListDepartmentsPagin(pageIndex, pageSize).then(qb => {
                console.log(qb);
                res.send(qb);
            });
        });
    }
    /**
    * @method getCountDepartments
    * @param app
    *
    */
    getCountDepartments(app) {
        app
            .post(this.controllerName + "getCountDepartments", (req, res, next) => {
            this.mddileWare.authori_attr(req, res, next, [this.roles_all]);
        }, (req, res) => {
            (0, typeorm_1.getCustomRepository)(department_repository_1.DepartmentRepository).getCountDepartments().then(qb => {
                res.send(qb);
            });
        });
    }
    /**
   * @method addNewGroupPermission
   * @param app
   *
   */
    updateDepartment(app) {
        app
            .post(this.controllerName + "updateDepartment", 
        //     passport.authenticate('bearer', { session: false }),
        (req, res) => {
            let department = req.body;
            (0, typeorm_1.getCustomRepository)(department_repository_1.DepartmentRepository).updateDepartment(department).then(qb => {
                console.log(qb);
                res.send(qb);
            });
        });
    }
}
exports.DepartmentController = DepartmentController;
//# sourceMappingURL=department.controler.js.map