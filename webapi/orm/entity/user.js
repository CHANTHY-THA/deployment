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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const group_entity_1 = require("./group.entity");
const preDefinedField_entity_1 = require("./preDefinedField.entity");
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "userImage", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 2,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: false }),
    __metadata("design:type", Date)
], User.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 45,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "telephone1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 45,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "telephone2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "nationalIDCard", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 45,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "commune", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 45,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "village", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 45,
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "homeNo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 45,
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "streetNo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", Number)
], User.prototype, "userType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "organization", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], User.prototype, "groupID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "positionID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: false }),
    __metadata("design:type", Date)
], User.prototype, "dateJoined", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], User.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: () => 1, nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => group_entity_1.Group),
    (0, typeorm_1.JoinColumn)({ name: "groupID" }),
    __metadata("design:type", group_entity_1.Group)
], User.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => preDefinedField_entity_1.PreDefinedField),
    (0, typeorm_1.JoinColumn)({ name: "positionID" }),
    __metadata("design:type", preDefinedField_entity_1.PreDefinedField)
], User.prototype, "position", void 0);
User = __decorate([
    (0, typeorm_1.Entity)("tblUser")
], User);
exports.User = User;
//# sourceMappingURL=user.js.map