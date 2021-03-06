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
exports.RefreshTokenOauth2 = void 0;
const typeorm_1 = require("typeorm");
let RefreshTokenOauth2 = class RefreshTokenOauth2 {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RefreshTokenOauth2.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], RefreshTokenOauth2.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RefreshTokenOauth2.prototype, "jti", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: true }),
    __metadata("design:type", String)
], RefreshTokenOauth2.prototype, "expirationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], RefreshTokenOauth2.prototype, "scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], RefreshTokenOauth2.prototype, "clientID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RefreshTokenOauth2.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: () => 1, nullable: true }),
    __metadata("design:type", Number)
], RefreshTokenOauth2.prototype, "isActive", void 0);
RefreshTokenOauth2 = __decorate([
    (0, typeorm_1.Entity)("tblRefreshTokenOauth2")
], RefreshTokenOauth2);
exports.RefreshTokenOauth2 = RefreshTokenOauth2;
//# sourceMappingURL=refreshTokens.oauth2.entity.js.map