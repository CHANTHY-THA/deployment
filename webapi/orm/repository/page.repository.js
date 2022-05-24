"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const responseBody_1 = require("../../orm/repository/responseBody");
const base_controller_1 = require("../../controller/base.controller");
const page_entity_1 = require("../entity/page.entity");
let PageRepository = class PageRepository extends typeorm_2.Repository {
    getAllPages() {
        let resBody = new responseBody_1.ResponseBody();
        try {
            return this.createQueryBuilder("page")
                .where("page.isActive = 1")
                .getMany().then(x => {
                resBody.body = x;
                console.log(x);
                resBody.status = base_controller_1.Status.success;
                return Promise.resolve(resBody);
            })
                .catch(err => {
                resBody.body = [err];
                resBody.status = base_controller_1.Status.logic_error;
                return Promise.resolve(resBody);
            });
        }
        catch (error) {
            resBody.status = base_controller_1.Status.server_error;
            resBody.body = [error];
            return Promise.resolve(resBody);
        }
    }
    // ===========Save new page===============
    savePage(page) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = new responseBody_1.ResponseBody();
            return yield this.save(page)
                .then(() => {
                response.body = ["Success"];
                response.status = base_controller_1.Status.success;
                return Promise.resolve(response);
            })
                .catch(error => {
                response.body = [error.message];
                response.status = base_controller_1.Status.logic_error;
                return Promise.resolve(response);
            });
        });
    }
};
PageRepository = __decorate([
    (0, typeorm_1.EntityRepository)(page_entity_1.Page)
], PageRepository);
exports.PageRepository = PageRepository;
//# sourceMappingURL=page.repository.js.map