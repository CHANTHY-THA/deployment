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
exports.Booking = void 0;
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("./customer.entity");
const businesspartner_1 = require("./businesspartner");
const carrier_entity_1 = require("./carrier.entity");
const preDefinedField_entity_1 = require("./preDefinedField.entity");
const user_1 = require("./user");
const port_entity_1 = require("./port.entity");
const container_entity_1 = require("./container.entity");
let Booking = class Booking {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Booking.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Booking.prototype, "operationID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", length: 100, unique: true }),
    __metadata("design:type", String)
], Booking.prototype, "CKSNFile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: true }),
    __metadata("design:type", Number
    // require relationship with customer ID
    )
], Booking.prototype, "fileTypeID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint" }),
    __metadata("design:type", Number)
], Booking.prototype, "customerID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: true }),
    __metadata("design:type", Number)
], Booking.prototype, "shipperExporterSellerID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: true }),
    __metadata("design:type", Number)
], Booking.prototype, "consigneeID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: true }),
    __metadata("design:type", Number)
], Booking.prototype, "notifyPartyID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Booking.prototype, "mbl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Booking.prototype, "hbl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String
    //looseContainerLoad
    // @Column({type:'text',nullable:true,default:()=>0})
    // lclID:number
    )
], Booking.prototype, "dimension", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Booking.prototype, "lcl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String
    // cubic meter
    )
], Booking.prototype, "gw", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Booking.prototype, "cbm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Booking.prototype, "commodity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String
    // require relationship with bussiness
    )
], Booking.prototype, "selling", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Booking.prototype, "agentID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Booking.prototype, "borderID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Booking.prototype, "portID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Booking.prototype, "brokerID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Booking.prototype, "modeID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String
    // require relationship with predata
    )
], Booking.prototype, "docVN", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Booking.prototype, "carrierID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Booking.prototype, "polID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], Booking.prototype, "etdPOL", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Number)
], Booking.prototype, "podID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], Booking.prototype, "etaPOD", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], Booking.prototype, "ETABorder", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date
    // @Column({type:'text',nullable:true})
    // vassel:String
    )
], Booking.prototype, "etaDestination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Booking.prototype, "finalDestination", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], Booking.prototype, "docSubmitDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], Booking.prototype, "docRLSDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], Booking.prototype, "docBrokerDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], Booking.prototype, "clearance", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Booking.prototype, "deliveryContactName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Booking.prototype, "deliveryAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Booking.prototype, "deliveryContactPhone1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Booking.prototype, "deliveryContactPhone2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], Booking.prototype, "deliveryTimeArrival", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", Number)
], Booking.prototype, "incotermID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", Number)
], Booking.prototype, "billTypeID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String
    // relationship with table card
    //    @Column({
    //     type: "int",
    //     nullable:true
    //    })
    //     truckID:number
    )
], Booking.prototype, "contractNo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "double",
        nullable: true,
        default: () => 0
    }),
    __metadata("design:type", Number)
], Booking.prototype, "extraDeliveryFee", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Booking.prototype, "dlv", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], Booking.prototype, "MTBorder", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], Booking.prototype, "MTNotifyAgent", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], Booking.prototype, "agentPickUp", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: true
    }),
    __metadata("design:type", Number)
], Booking.prototype, "dem", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], Booking.prototype, "demDue", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Booking.prototype, "combileDetWithDem", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: true
    }),
    __metadata("design:type", Number)
], Booking.prototype, "det", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date
    // @Column({
    //     type: 'int',
    //     nullable:true
    //    })
    // detFreeLeft:number
    )
], Booking.prototype, "detDue", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Booking.prototype, "billingInfo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], Booking.prototype, "dateIssue", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Booking.prototype, "remarks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", String)
], Booking.prototype, "createDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", Number)
], Booking.prototype, "bookingStatusID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: () => 1, nullable: true }),
    __metadata("design:type", Number)
], Booking.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => customer_entity_1.Customer),
    (0, typeorm_1.JoinColumn)({ name: "customerID" }),
    __metadata("design:type", customer_entity_1.Customer)
], Booking.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => customer_entity_1.Customer),
    (0, typeorm_1.JoinColumn)({ name: "shipperExporterSellerID" }),
    __metadata("design:type", customer_entity_1.Customer)
], Booking.prototype, "shipperExporterSeller", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => customer_entity_1.Customer),
    (0, typeorm_1.JoinColumn)({ name: "consigneeID" }),
    __metadata("design:type", customer_entity_1.Customer)
], Booking.prototype, "consignee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => customer_entity_1.Customer),
    (0, typeorm_1.JoinColumn)({ name: "notifyPartyID" }),
    __metadata("design:type", customer_entity_1.Customer)
], Booking.prototype, "notifyParty", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => preDefinedField_entity_1.PreDefinedField),
    (0, typeorm_1.JoinColumn)({ name: "incotermID" }),
    __metadata("design:type", preDefinedField_entity_1.PreDefinedField
    // @ManyToOne(type=>PreDefinedField)
    // @JoinColumn({name:"distinationID"})
    // distination:PreDefinedField
    )
], Booking.prototype, "incoterm", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => preDefinedField_entity_1.PreDefinedField),
    (0, typeorm_1.JoinColumn)({ name: "billTypeID" }),
    __metadata("design:type", preDefinedField_entity_1.PreDefinedField)
], Booking.prototype, "billType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => businesspartner_1.BusinessPartner),
    (0, typeorm_1.JoinColumn)({ name: "agentID" }),
    __metadata("design:type", businesspartner_1.BusinessPartner)
], Booking.prototype, "businessPartner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => carrier_entity_1.Carrier),
    (0, typeorm_1.JoinColumn)({ name: "carrierID" }),
    __metadata("design:type", carrier_entity_1.Carrier)
], Booking.prototype, "carrier", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => preDefinedField_entity_1.PreDefinedField),
    (0, typeorm_1.JoinColumn)({ name: "borderID" }),
    __metadata("design:type", preDefinedField_entity_1.PreDefinedField
    //    @ManyToOne(type=>Broker)
    //    @JoinColumn({name:"brokerID"})
    //    broker:Broker
    )
], Booking.prototype, "border", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => businesspartner_1.BusinessPartner),
    (0, typeorm_1.JoinColumn)({ name: "brokerID" }),
    __metadata("design:type", businesspartner_1.BusinessPartner)
], Booking.prototype, "broker", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => preDefinedField_entity_1.PreDefinedField),
    (0, typeorm_1.JoinColumn)({ name: "modeID" }),
    __metadata("design:type", preDefinedField_entity_1.PreDefinedField)
], Booking.prototype, "mode", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => port_entity_1.Port),
    (0, typeorm_1.JoinColumn)({ name: "polID" }),
    __metadata("design:type", port_entity_1.Port)
], Booking.prototype, "pol", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => port_entity_1.Port),
    (0, typeorm_1.JoinColumn)({ name: "podID" }),
    __metadata("design:type", port_entity_1.Port)
], Booking.prototype, "pod", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => user_1.User),
    (0, typeorm_1.JoinColumn)({ name: "operationID" }),
    __metadata("design:type", user_1.User)
], Booking.prototype, "operation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => preDefinedField_entity_1.PreDefinedField),
    (0, typeorm_1.JoinColumn)({ name: "bookingStatusID" }),
    __metadata("design:type", preDefinedField_entity_1.PreDefinedField
    //    @ManyToOne(type=>Port)
    //    @JoinColumn({name:"portID"})
    //    port:Port
    )
], Booking.prototype, "bookingStatus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => container_entity_1.Container, container => container.booking),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Booking.prototype, "container", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: true
    }),
    __metadata("design:type", Number)
], Booking.prototype, "modify_by", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Booking.prototype, "modify_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => user_1.User),
    (0, typeorm_1.JoinColumn)({ name: "modify_by" }),
    __metadata("design:type", user_1.User)
], Booking.prototype, "modify_by_user", void 0);
Booking = __decorate([
    (0, typeorm_1.Entity)({ name: "tblBooking" })
], Booking);
exports.Booking = Booking;
//# sourceMappingURL=booking.entity.js.map