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
exports.Customer = void 0;
//import { validateOrReject } from 'class-validator';
const typeorm_1 = require("typeorm");
const customer_type_entity_1 = require("./customer.type.entity");
let Customer = class Customer {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Customer.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], Customer.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], Customer.prototype, "nameKH", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Customer.prototype, "isCustomer", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], Customer.prototype, "contactName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 22,
        nullable: false
    }),
    __metadata("design:type", String)
], Customer.prototype, "contactPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 45,
        nullable: true
    }),
    __metadata("design:type", String)
], Customer.prototype, "VATNo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 22,
        nullable: false
    }),
    __metadata("design:type", String)
], Customer.prototype, "telephone1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 22,
        nullable: false
    }),
    __metadata("design:type", String)
], Customer.prototype, "telephone2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 45,
        nullable: true
    }),
    __metadata("design:type", String)
], Customer.prototype, "email1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 45,
        nullable: true
    }),
    __metadata("design:type", String)
], Customer.prototype, "email2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Customer.prototype, "webSite", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 45,
        nullable: true
    }),
    __metadata("design:type", String)
], Customer.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 60,
        nullable: false
    }),
    __metadata("design:type", String)
], Customer.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], Customer.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: false
    }),
    __metadata("design:type", String)
], Customer.prototype, "address1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: false
    }),
    __metadata("design:type", String)
], Customer.prototype, "address2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => customer_type_entity_1.CustomerType, customerType => customerType.customer),
    __metadata("design:type", Array)
], Customer.prototype, "customerType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", String)
], Customer.prototype, "createDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: () => 1, nullable: true }),
    __metadata("design:type", Number)
], Customer.prototype, "isActive", void 0);
Customer = __decorate([
    (0, typeorm_1.Entity)({ name: "tblCustomer" })
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=customer.entity.js.map