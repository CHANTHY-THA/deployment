"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreDefinedFieldRepository = void 0;
const preDefinedField_entity_1 = require("../entity/preDefinedField.entity");
const typeorm_1 = require("typeorm");
const responseBody_1 = require("./responseBody");
const base_controller_1 = require("../../controller/base.controller");
let PreDefinedFieldRepository = class PreDefinedFieldRepository extends typeorm_1.Repository {
    getPreDefinedsByCriterial(criterial) {
        let response = new responseBody_1.ResponseBody();
        return this.createQueryBuilder("pre")
            //  .select("pre.ID")
            //  .addSelect("pre.criterial")
            //  .addSelect("pre.value")
            .orderBy('pre.value', 'ASC')
            .where("pre.status='1' and pre.criterial=:criterial", { "criterial": criterial })
            .getMany()
            .then(qb => {
            response.body = qb;
            response.status = base_controller_1.Status.success;
            return Promise.resolve(response);
        })
            .catch(err => {
            response.body = [err.message];
            response.status = base_controller_1.Status.logic_error;
            return Promise.resolve(response);
        });
    }
    getPreDefinedsByValue(criterial, value) {
        let response = new responseBody_1.ResponseBody();
        return this.createQueryBuilder("pre")
            .select("pre.ID")
            .addSelect("pre.criterial")
            .addSelect("pre.value")
            .orderBy('pre.value')
            .where("criterial = :criterial and LOWER(pre.value) = :value", { "criterial": criterial, "value": value })
            .getOne()
            .then(qb => {
            response.body = [qb];
            response.status = base_controller_1.Status.success;
            return Promise.resolve(response);
        })
            .catch(err => {
            response.body = [err.message];
            response.status = base_controller_1.Status.logic_error;
            return Promise.resolve(response);
        });
    }
    addPreData(data) {
        console.log(data);
        let response = new responseBody_1.ResponseBody();
        return this.save(data)
            .then(qb => {
            response.body = ["1"];
            response.status = base_controller_1.Status.success;
            return Promise.resolve(response);
        })
            .catch(err => {
            response.body = [err.message];
            response.status = base_controller_1.Status.logic_error;
            return Promise.resolve(response);
        });
    }
    /**
     * @method getListPredatas
     * @param criterial
     * @param pageIndex
     * @param pageSize
     */
    getListPredatas(criterial, pageIndex, pageSize) {
        console.log("it called " + criterial);
        let resBody = new responseBody_1.ResponseBody();
        try {
            if (criterial.toLocaleLowerCase() != "all") {
                return this.createQueryBuilder("predata")
                    // .select("predata.criterial","criterial")
                    // .addSelect("predata.description","description")
                    // .groupBy("predata.criterial")
                    // .addGroupBy("predata.description")
                    .skip(pageIndex)
                    .take(pageSize)
                    .where("criterial=:criterial", { criterial: criterial })
                    .getMany()
                    .then(res => {
                    resBody.body = res;
                    resBody.status = base_controller_1.Status.success;
                    return Promise.resolve(resBody);
                })
                    .catch(err => {
                    resBody.body = [];
                    resBody.status = base_controller_1.Status.logic_error;
                    return Promise.resolve(resBody);
                });
            }
            else {
                return this.createQueryBuilder("predata")
                    .select("predata.description")
                    .addSelect("predata.criterial")
                    // .skip(pageIndex)
                    //.take(pageSize)
                    .getMany()
                    .then(res => {
                    resBody.body = [];
                    res.forEach(ele => {
                        if (resBody.body.length == 0) {
                            resBody.body.push(ele);
                        }
                        else {
                            let ch = resBody.body.filter(res => res.criterial == ele.criterial);
                            if (ch.length == 0) {
                                resBody.body.push(ele);
                            }
                        }
                    });
                    resBody.status = base_controller_1.Status.success;
                    return Promise.resolve(resBody);
                })
                    .catch(err => {
                    resBody.body = [];
                    resBody.status = base_controller_1.Status.logic_error;
                    return Promise.resolve(resBody);
                });
            }
        }
        catch (err) {
            resBody.status = base_controller_1.Status.logic_error;
            resBody.body = [err];
            return Promise.resolve(resBody);
        }
    }
    getListCriterial() {
        try {
            return this.createQueryBuilder("predata")
                .select("predata.criterial", "criterial")
                .groupBy("predata.criterial")
                .getRawMany()
                .then(x => {
                let res = new responseBody_1.ResponseBody();
                res.status = base_controller_1.Status.success;
                res.body = x;
                return Promise.resolve(res);
            });
        }
        catch (error) {
            let res = new responseBody_1.ResponseBody();
            res.status = base_controller_1.Status.server_error;
            res.body = [error];
            return Promise.resolve(res);
        }
    }
    /**
     * @@method getCountPredatas
     */
    getCountPredatas(criterial) {
        try {
            if (criterial.toLocaleLowerCase() == "all") {
                return this.
                    createQueryBuilder("predata").getCount().then(x => {
                    let res = new responseBody_1.ResponseBody();
                    console.log(x);
                    res.status = base_controller_1.Status.success;
                    res.body = [x];
                    return Promise.resolve(res);
                });
            }
            else {
                return this.
                    createQueryBuilder("predata")
                    .where("predata.criterial=:criterial", { criterial: criterial })
                    .getCount()
                    .then(x => {
                    let res = new responseBody_1.ResponseBody();
                    res.status = base_controller_1.Status.success;
                    res.body = [x];
                    return Promise.resolve(res);
                });
            }
        }
        catch (error) {
            let res = new responseBody_1.ResponseBody();
            res.status = base_controller_1.Status.server_error;
            res.body = [error];
            return Promise.resolve(res);
        }
    }
};
PreDefinedFieldRepository = __decorate([
    (0, typeorm_1.EntityRepository)(preDefinedField_entity_1.PreDefinedField)
], PreDefinedFieldRepository);
exports.PreDefinedFieldRepository = PreDefinedFieldRepository;
//# sourceMappingURL=preDefined.repository.js.map