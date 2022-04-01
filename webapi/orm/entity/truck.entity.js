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
exports.Truck = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const businesspartner_1 = require("./businesspartner");
let Truck = class Truck {
};
__decorate([
    (0, typeorm_2.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Truck.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Truck.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Truck.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 20,
        nullable: true
    }),
    __metadata("design:type", String)
], Truck.prototype, "plateNo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "nvarchar",
        length: 20,
        nullable: true
    }),
    __metadata("design:type", String)
], Truck.prototype, "assetOf", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: () => '0' }),
    __metadata("design:type", Number)
], Truck.prototype, "bizID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Truck.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: () => 1, nullable: true }),
    __metadata("design:type", Number)
], Truck.prototype, "status", void 0);
__decorate([
    (0, typeorm_2.ManyToOne)(type => businesspartner_1.BusinessPartner),
    (0, typeorm_1.JoinColumn)({ name: "bizID" }),
    __metadata("design:type", businesspartner_1.BusinessPartner)
], Truck.prototype, "bizPartner", void 0);
Truck = __decorate([
    (0, typeorm_1.Entity)("tblTruck"),
    (0, typeorm_1.Unique)(["plateNo"])
], Truck);
exports.Truck = Truck;
// @Entity("tblTruck")
// export class Truck{
//     @PrimaryGeneratedColumn()
//     ID:number
//     @Column({type:"int",nullable:true})
//     userID:number
//     @Column({
//         type: "nvarchar",
//         length: 100,
//         nullable:true
//     })
//     model:String
//     @Column({
//         type: "nvarchar",
//         length: 100,
//         nullable:true
//     })
//     weight:String
//     @Column({
//         type: "nvarchar",
//         length: 20,
//         nullable:true
//     })
//     plateNo:String
//     @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
//     created:Date
//     @Column({default:()=>1,nullable:true})
//     status:number
//     @ManyToOne(type=>User)
//     @JoinColumn({name:"userID"})
//     driver:User
// }
//# sourceMappingURL=truck.entity.js.map