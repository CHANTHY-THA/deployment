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
exports.DriverVehicleDetail = void 0;
const typeorm_1 = require("typeorm");
let DriverVehicleDetail = class DriverVehicleDetail extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DriverVehicleDetail.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        width: 10,
        nullable: false
    }),
    __metadata("design:type", String)
], DriverVehicleDetail.prototype, "numberPlate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "int",
        nullable: false
    }),
    __metadata("design:type", Number)
], DriverVehicleDetail.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], DriverVehicleDetail.prototype, "vehicleType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        width: 20,
        nullable: false
    }),
    __metadata("design:type", String)
], DriverVehicleDetail.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], DriverVehicleDetail.prototype, "createDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: () => 1, nullable: true }),
    __metadata("design:type", Number)
], DriverVehicleDetail.prototype, "isActive", void 0);
DriverVehicleDetail = __decorate([
    (0, typeorm_1.Entity)("tblDriverVehicleDetail")
], DriverVehicleDetail);
exports.DriverVehicleDetail = DriverVehicleDetail;
//# sourceMappingURL=driverVehicleDetail.entity.js.map