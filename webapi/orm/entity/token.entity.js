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
exports.Token = void 0;
const typeorm_1 = require("typeorm");
let Token = class Token {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Token.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Token.prototype, "jti", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Token.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", length: 50 }),
    __metadata("design:type", String)
], Token.prototype, "expirationDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Token.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: 1, nullable: true }),
    __metadata("design:type", Number)
], Token.prototype, "isActive", void 0);
Token = __decorate([
    (0, typeorm_1.Entity)("tblToken")
], Token);
exports.Token = Token;
//# sourceMappingURL=token.entity.js.map