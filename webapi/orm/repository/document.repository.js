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
exports.DocumentRepository = void 0;
const document_entity_1 = require("../entity/document.entity");
const typeorm_1 = require("typeorm");
const base_controller_1 = require("../../controller/base.controller");
const responseBody_1 = require("./responseBody");
const utilities_1 = require("../../utilities");
const uuid = require("uuid/v4");
let DocumentRepository = class DocumentRepository extends typeorm_1.Repository {
    addDocuments(doc) {
        return __awaiter(this, void 0, void 0, function* () {
            let resBody = new responseBody_1.ResponseBody();
            try {
                return yield this.save(doc).then(res => {
                    resBody.body = ["1"];
                    resBody.status = base_controller_1.Status.success;
                    this.saveCach(doc);
                    return Promise.resolve(resBody);
                });
            }
            catch (err) {
                resBody.status = base_controller_1.Status.logic_error;
                resBody.body = [err.message];
                return Promise.resolve(resBody);
            }
        });
    }
    getListDocuments(bookingID) {
        return __awaiter(this, void 0, void 0, function* () {
            let resBody = new responseBody_1.ResponseBody();
            try {
                return yield this.createQueryBuilder("doc")
                    .select("doc.ID")
                    .addSelect("doc.IDGenerate")
                    .addSelect("doc.bookingID")
                    .addSelect("doc.fileName")
                    .addSelect("doc.folder")
                    .addSelect("doc.ext")
                    .where("doc.bookingID = :bookingID and status=1", { "bookingID": bookingID })
                    .getMany()
                    .then(res => {
                    // let fileReader = new FileService()
                    // res.forEach(ele=>{
                    //      ele.file = fileReader.readDocument(ele.folder+"/"+ele.IDGenerate+"."+ele.ext)
                    //        if(!ele.file)  {
                    //                this.createQueryBuilder("doc")
                    //                .select("doc.file")
                    //                .where("doc.ID = :ID",{"ID":ele.ID})
                    //                .getOne()
                    //                .then(resFile=>{
                    //                      ele.file = resFile.file
                    //                      fileReader.saveLocalDocument(ele)
                    //                });
                    //      }
                    // })  
                    resBody.body = res;
                    resBody.status = base_controller_1.Status.success;
                    return Promise.resolve(resBody);
                });
            }
            catch (err) {
                resBody.status = base_controller_1.Status.logic_error;
                resBody.body = [err.message];
                return Promise.resolve(resBody);
            }
        });
    }
    deleteDocument(IDGenerate) {
        return __awaiter(this, void 0, void 0, function* () {
            let resBody = new responseBody_1.ResponseBody();
            try {
                return yield this.update({ IDGenerate: IDGenerate }, { status: 0 }).then(res => {
                    resBody.body = ["1"];
                    resBody.status = base_controller_1.Status.success;
                    return Promise.resolve(resBody);
                });
            }
            catch (err) {
                resBody.status = base_controller_1.Status.logic_error;
                resBody.body = [err.message];
                return Promise.resolve(resBody);
            }
        });
    }
    saveCach(documents) {
        try {
            let fileService = new utilities_1.FileService();
            documents.forEach(element => {
                try {
                    element.folder = fileService.getModayInWeek();
                    element.IDGenerate = uuid().toString();
                    fileService.saveLocalDocument(element);
                    this.update({ ID: element.ID }, { IDGenerate: element.IDGenerate, folder: fileService.getModayInWeek() });
                }
                catch (error) {
                    console.log(error);
                }
            });
        }
        catch (error) {
        }
    }
};
DocumentRepository = __decorate([
    (0, typeorm_1.EntityRepository)(document_entity_1.DocumentModel)
], DocumentRepository);
exports.DocumentRepository = DocumentRepository;
//# sourceMappingURL=document.repository.js.map