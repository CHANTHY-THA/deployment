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
exports.Broker = void 0;
const typeorm_1 = require("typeorm");
let Broker = class Broker extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Broker.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: false
    }),
    __metadata("design:type", String)
], Broker.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: false
    }),
    __metadata("design:type", String)
], Broker.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 2,
        nullable: false
    }),
    __metadata("design:type", String)
], Broker.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: true }),
    __metadata("design:type", Date)
], Broker.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Broker.prototype, "telephone1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Broker.prototype, "telephone2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Broker.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Broker.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Broker.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Broker.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Broker.prototype, "commune", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Broker.prototype, "village", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Broker.prototype, "homeNo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Broker.prototype, "streetNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Broker.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: () => 1, nullable: true }),
    __metadata("design:type", Number)
], Broker.prototype, "isActive", void 0);
Broker = __decorate([
    (0, typeorm_1.Entity)("tblBroker")
], Broker);
exports.Broker = Broker;
//# sourceMappingURL=broker.entity.js.map