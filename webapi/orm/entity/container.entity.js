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
exports.Container = void 0;
const typeorm_1 = require("typeorm");
const booking_entity_1 = require("./booking.entity");
const preDefinedField_entity_1 = require("./preDefinedField.entity");
const truck_entity_1 = require("./truck.entity");
const user_1 = require("./user");
const multipleDelivery_entity_1 = require("./multipleDelivery.entity");
let Container = class Container extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Container.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Container.prototype, "containerNo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Container.prototype, "containerSize", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "double",
        nullable: true
    }),
    __metadata("design:type", Number)
], Container.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "int",
        nullable: true,
        default: () => 80
    }),
    __metadata("design:type", Number)
], Container.prototype, "containerStatusID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Container.prototype, "customerToReceive", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Container.prototype, "customerReceiveContact", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Container.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Container.prototype, "pickUpFrom", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'datetime',
        nullable: true
    }),
    __metadata("design:type", Object)
], Container.prototype, "pickUpDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        nullable: true
    }),
    __metadata("design:type", Number)
], Container.prototype, "driverID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        nullable: true
    }),
    __metadata("design:type", Number)
], Container.prototype, "bookingID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bigint",
        nullable: true
    }),
    __metadata("design:type", Number)
], Container.prototype, "truckID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Container.prototype, "extraDeliveryFee", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'datetime',
        nullable: true
    }),
    __metadata("design:type", Object)
], Container.prototype, "deliveryDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Container.prototype, "dlv", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Container.prototype, "emptyDepo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'datetime',
        nullable: true
    }),
    __metadata("design:type", Date)
], Container.prototype, "emptyReturn", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'datetime',
        nullable: true
    }),
    __metadata("design:type", Date)
], Container.prototype, "emptyNotifyAgent", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'datetime',
        nullable: true
    }),
    __metadata("design:type", Date)
], Container.prototype, "agentPickUpEmpty", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], Container.prototype, "demDue", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'datetime',
        nullable: true
    }),
    __metadata("design:type", Date)
], Container.prototype, "detDue", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'double',
        nullable: true
    }),
    __metadata("design:type", Number)
], Container.prototype, "gw", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        nullable: true
    }),
    __metadata("design:type", Number)
], Container.prototype, "gwUnitTypeID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'double',
        nullable: true
    }),
    __metadata("design:type", Number)
], Container.prototype, "cbm", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        nullable: true
    }),
    __metadata("design:type", Number)
], Container.prototype, "cbmUnitTypeID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'double',
        nullable: true
    }),
    __metadata("design:type", Number)
], Container.prototype, "quantityUnitTypeID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => preDefinedField_entity_1.PreDefinedField),
    (0, typeorm_1.JoinColumn)({ name: "containerStatusID" }),
    __metadata("design:type", preDefinedField_entity_1.PreDefinedField)
], Container.prototype, "containerStatus", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => truck_entity_1.Truck, { cascade: false }),
    (0, typeorm_1.JoinColumn)({ name: "truckID" }),
    __metadata("design:type", truck_entity_1.Truck)
], Container.prototype, "truck", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => user_1.User, { cascade: false }),
    (0, typeorm_1.JoinColumn)({ name: "driverID" }),
    __metadata("design:type", user_1.User)
], Container.prototype, "driver", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: () => 1, nullable: true }),
    __metadata("design:type", Number)
], Container.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Container.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => booking_entity_1.Booking, booking => booking.container),
    (0, typeorm_1.JoinColumn)({ name: "bookingID" }),
    __metadata("design:type", booking_entity_1.Booking)
], Container.prototype, "booking", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => preDefinedField_entity_1.PreDefinedField),
    (0, typeorm_1.JoinColumn)({ name: "cbmUnitTypeID" }),
    __metadata("design:type", preDefinedField_entity_1.PreDefinedField)
], Container.prototype, "cbmUnitType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => preDefinedField_entity_1.PreDefinedField),
    (0, typeorm_1.JoinColumn)({ name: "gwUnitTypeID" }),
    __metadata("design:type", preDefinedField_entity_1.PreDefinedField)
], Container.prototype, "gwUnitType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => preDefinedField_entity_1.PreDefinedField),
    (0, typeorm_1.JoinColumn)({ name: "quantityUnitTypeID" }),
    __metadata("design:type", preDefinedField_entity_1.PreDefinedField)
], Container.prototype, "quantityUnitType", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => multipleDelivery_entity_1.MultipleDelivery, multiDelivery => multiDelivery.container),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Container.prototype, "multiDelivery", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: true
    }),
    __metadata("design:type", Number)
], Container.prototype, "modify_by", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Container.prototype, "modify_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => user_1.User),
    (0, typeorm_1.JoinColumn)({ name: "modify_by" }),
    __metadata("design:type", user_1.User)
], Container.prototype, "modify_by_user", void 0);
Container = __decorate([
    (0, typeorm_1.Entity)("tblContainer")
], Container);
exports.Container = Container;
//# sourceMappingURL=container.entity.js.map