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
exports.MultipleDelivery = void 0;
const typeorm_1 = require("typeorm");
const container_entity_1 = require("./container.entity");
const preDefinedField_entity_1 = require("./preDefinedField.entity");
let MultipleDelivery = class MultipleDelivery {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MultipleDelivery.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: "100",
        nullable: true
    }),
    __metadata("design:type", String)
], MultipleDelivery.prototype, "contactName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        // length:"45",
        length: "100",
        nullable: true
    }),
    __metadata("design:type", String)
], MultipleDelivery.prototype, "phoneContact", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: "300",
        nullable: true
    }),
    __metadata("design:type", String)
], MultipleDelivery.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bigint",
        nullable: true
    }),
    __metadata("design:type", Number)
], MultipleDelivery.prototype, "containerID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "datetime",
        nullable: true
    }),
    __metadata("design:type", Date)
], MultipleDelivery.prototype, "deliveryDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bigint",
        nullable: true
    }),
    __metadata("design:type", Number)
], MultipleDelivery.prototype, "deliveryStatusID", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: () => 1, nullable: true }),
    __metadata("design:type", Number)
], MultipleDelivery.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], MultipleDelivery.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => container_entity_1.Container, container => container.multiDelivery),
    (0, typeorm_1.JoinColumn)({ name: "containerID" }),
    __metadata("design:type", container_entity_1.Container)
], MultipleDelivery.prototype, "container", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => preDefinedField_entity_1.PreDefinedField),
    (0, typeorm_1.JoinColumn)({ name: "deliveryStatusID" }),
    __metadata("design:type", preDefinedField_entity_1.PreDefinedField)
], MultipleDelivery.prototype, "deliveryStatus", void 0);
MultipleDelivery = __decorate([
    (0, typeorm_1.Entity)("tblMultipleDelivery")
], MultipleDelivery);
exports.MultipleDelivery = MultipleDelivery;
//# sourceMappingURL=multipleDelivery.entity.js.map