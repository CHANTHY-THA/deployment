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
exports.Permission = void 0;
const typeorm_1 = require("typeorm");
const page_entity_1 = require("./page.entity");
// for page cotroller in front end you can get from tblPreData : criterial :PagePermission
let Permission = class Permission extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Permission.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: true
    }),
    __metadata("design:type", Number)
], Permission.prototype, "pageID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Permission.prototype, "isView", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Permission.prototype, "isViewAll", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Permission.prototype, "isAdd", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Permission.prototype, "isDelete", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Permission.prototype, "isUpdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: () => 1, nullable: true }),
    __metadata("design:type", Number)
], Permission.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Permission.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => page_entity_1.Page),
    (0, typeorm_1.JoinColumn)({ name: "pageID" }),
    __metadata("design:type", page_entity_1.Page
    // @ManyToMany(type=>Group,group=>group.groupPermission)
    // group:Group[]
    // @OneToMany(type=>Permission)
    //  @JoinTable()
    // permission:Permission[]
    )
], Permission.prototype, "page", void 0);
Permission = __decorate([
    (0, typeorm_1.Entity)("tblPermission")
], Permission);
exports.Permission = Permission;
//# sourceMappingURL=group.permission.js.map