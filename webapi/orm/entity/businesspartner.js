"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartner = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
let BusinessPartner = class BusinessPartner {
};
__decorate([
    (0, typeorm_2.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BusinessPartner.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], BusinessPartner.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], BusinessPartner.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], BusinessPartner.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: false
    }),
    __metadata("design:type", String)
], BusinessPartner.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], BusinessPartner.prototype, "handPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: false
    }),
    __metadata("design:type", String)
], BusinessPartner.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: false
    }),
    __metadata("design:type", String)
], BusinessPartner.prototype, "fax", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], BusinessPartner.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], BusinessPartner.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], BusinessPartner.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], BusinessPartner.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: () => 1, nullable: true }),
    __metadata("design:type", Number)
], BusinessPartner.prototype, "isActive", void 0);
BusinessPartner = __decorate([
    (0, typeorm_1.Entity)({ name: "tblBusinessPartner" })
], BusinessPartner);
exports.BusinessPartner = BusinessPartner;
//# sourceMappingURL=businesspartner.js.map