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
exports.MailLog = void 0;
const typeorm_1 = require("typeorm");
let MailLog = class MailLog extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MailLog.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], MailLog.prototype, "cksnFile", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], MailLog.prototype, "from", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], MailLog.prototype, "to", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], MailLog.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], MailLog.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "datetime",
        nullable: true
    }),
    __metadata("design:type", Date)
], MailLog.prototype, "sentDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: () => 1, nullable: true }),
    __metadata("design:type", Number)
], MailLog.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], MailLog.prototype, "byUser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], MailLog.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], MailLog.prototype, "created", void 0);
MailLog = __decorate([
    (0, typeorm_1.Entity)("tblMailLog")
], MailLog);
exports.MailLog = MailLog;
//# sourceMappingURL=mailLog.entity.js.map