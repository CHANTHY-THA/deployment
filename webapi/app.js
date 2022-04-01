"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const typeorm_1 = require("typeorm");
const user_controller_1 = require("./controller/user.controller");
const group_controller_1 = require("./controller/group.controller");
const department_controler_1 = require("./controller/department.controler");
const pre_defined_controller_1 = require("./controller/pre_defined.controller");
const customer_controller_1 = require("./controller/customer.controller");
const business_controller_1 = require("./controller/business.controller");
const carrier_controller_1 = require("./controller/carrier.controller");
const truck_controller_1 = require("./controller/truck.controller");
const booking_controller_1 = require("./controller/booking.controller");
const port_controller_1 = require("./controller/port.controller");
const document_controller_1 = require("./controller/document.controller");
const container_controller_1 = require("./controller/container.controller");
const broker_controller_1 = require("./controller/broker.controller");
const page_controller_1 = require("./controller/page.controller");
const mail_cotroller_1 = require("./controller/mail.cotroller");
const country_controller_1 = require("./controller/country.controller");
const dashboard_controller_1 = require("./controller/dashboard.controller");
const report_controller_1 = require("./controller/report.controller");
var path = require('path');
/**
 * Scripter  : Rina Chen :>
 */
class App {
    constructor() {
        // public token=new Token()
        this.userController = new user_controller_1.UserController();
        this.truckController = new truck_controller_1.TruckController();
        this.usrGrpPermisController = new group_controller_1.GroupController();
        this.usrDepartmentController = new department_controler_1.DepartmentController();
        this.preDefinedFieldController = new pre_defined_controller_1.PreDefinedFieldController();
        this.customerController = new customer_controller_1.CustomerController();
        this.businessController = new business_controller_1.BusinessPartnerController();
        this.carrierController = new carrier_controller_1.CarrierController();
        this.bookingController = new booking_controller_1.BookingController();
        this.reportController = new report_controller_1.ReportController();
        this.portController = new port_controller_1.PortController();
        this.documentController = new document_controller_1.DocumentController();
        this.containerController = new container_controller_1.ContainerController();
        this.brokerController = new broker_controller_1.BrokerController();
        this.pageController = new page_controller_1.PageController();
        this.mailController = new mail_cotroller_1.MailController();
        this.countryController = new country_controller_1.CountryController();
        this.dasbaordControler = new dashboard_controller_1.DashboardController();
        this.app = express();
        this.initDatabase();
        this.config();
        // inititalize database
        //1/ USE
        this.getUserController();
        //2/ Permission
        this.groupPermissionController();
        //2/     
        this.getPredefinedFieldController();
        //2/ 
        this.departmentController();
        //2/
        this.getCustomerController();
        //
        this.getBusinessController();
        //
        this.getCarrierController();
        // 
        this.getTruckController();
        // 
        this.getBookingController();
        //
        this.getPortController();
        // 
        this.getDocumentController();
        //
        this.getContainerController();
        //
        this.getBrokerController();
        //
        this.getPageController();
        this.getDashboardController();
        this.getReportController();
        this.countryController.getListCountrys(this.app);
        //
        this.mailController.sendMail(this.app);
        // let model = new EmailModel()
        //     model.to = ["chhenrina@gmail.com"] 
        //     model.subject = "My Nodejs email"
        //     model.from = "narason90@gmail.com"
        //     model.text = ["Dear Value friend","This is testing email"]
        // new Mailing().sendEmail(model,function(res){
        //     console.log(res)
        // })
    }
    config() {
        // serving static files 
        //    this.app.use(express.static(__dirname+"/document"));
        // this.app.use(express.static('public'));
        this.app.use(express.static(path.join(__dirname + "/document")));
        this.app.use(bodyParser.json({ limit: '20mb' }));
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,client_id,key");
            next();
        });
        //  this.sessionManager()
    }
    /**
    * @method init Database
    */
    initDatabase() {
        (0, typeorm_1.createConnection)().then((connection) => __awaiter(this, void 0, void 0, function* () {
            // await connection.runMigrations()
            console.log("ORM connected");
        })).catch(error => {
            console.log(error);
        });
    }
    /**
     * @controller  getUserController
     */
    getUserController() {
        // this.userController.addNewUser(this.app)
        this.userController.logIn(this.app);
        this.userController.addUsers(this.app);
        this.userController.updateUser(this.app);
        this.userController.getListUsers(this.app);
        this.userController.getListUsersByType(this.app);
        this.userController.getCountUsers(this.app);
        this.userController.findUserByID(this.app);
        this.userController.removeUserByID(this.app);
        this.userController.getUserByGroups(this.app);
        //authorization setting
        // this.userController.addClientAuhtorization(this.app)
        this.userController.getListUserByPosition(this.app);
        this.userController.getListUserOperation(this.app);
    }
    /**
    *   @Truck
    */
    getTruckController() {
        this.truckController.getListTruckByDriver(this.app);
        this.truckController.getAllTruck(this.app);
        this.truckController.getAllTrucks(this.app);
        this.truckController.getCountTrucks(this.app);
        this.truckController.saveTruck(this.app);
    }
    groupPermissionController() {
        this.usrGrpPermisController.getPermissionByGroupID(this.app);
        this.usrGrpPermisController.updateGroupPermission(this.app);
        this.usrGrpPermisController.addGroup(this.app);
        this.usrGrpPermisController.getCountGroups(this.app);
        this.usrGrpPermisController.getGroupByDepartmentID(this.app);
        this.usrGrpPermisController.getListGroups(this.app);
    }
    departmentController() {
        this.usrDepartmentController.addDepartment(this.app);
        //   this.usrDepartmentController.addMoreGroupIntoDepartment(this.app)
        this.usrDepartmentController.getListDepartments(this.app);
        this.usrDepartmentController.updateDepartment(this.app);
        this.usrDepartmentController.getDepartmentByID(this.app);
        this.usrDepartmentController.getCountDepartments(this.app);
        this.usrDepartmentController.getListDepartmentsPagin(this.app);
    }
    /**
     * @controller getPredefinedFieldController
     */
    getPredefinedFieldController() {
        this.preDefinedFieldController.getPredataByCriterial(this.app);
        this.preDefinedFieldController.addPreData(this.app);
        this.preDefinedFieldController.getListPredatas(this.app);
        this.preDefinedFieldController.getListCriterial(this.app);
        this.preDefinedFieldController.getCountPredatas(this.app);
    }
    /**
     * @controller customer
     */
    getCustomerController() {
        this.customerController.addCustomers(this.app);
        this.customerController.getCountCustomers(this.app);
        this.customerController.getListCustomers(this.app);
        this.customerController.findCustomerByID(this.app);
        this.customerController.getCustomerByType(this.app);
        this.customerController.removeCustomer(this.app);
    }
    /**
     * @controller bussiness
     */
    getBusinessController() {
        this.businessController.getAllBusinessPartners(this.app);
        this.businessController.getCountBusinessPartner(this.app);
        this.businessController.getListBusinessPartner(this.app);
        this.businessController.saveBusinessPartner(this.app);
        this.businessController.getBusinessPartnerByID(this.app);
        this.businessController.removeBusinessPartnerByID(this.app);
    }
    /**
     * @controler carrier
     */
    getCarrierController() {
        this.carrierController.getAllCarriers(this.app);
        this.carrierController.addCarrier(this.app);
        this.carrierController.getListCarriers(this.app);
        this.carrierController.getCountCarriers(this.app);
        this.carrierController.getCarriersByID(this.app);
        this.carrierController.removeCarrier(this.app);
    }
    /**
     * @cointroler booking
     */
    getBookingController() {
        this.bookingController.saveBooking(this.app);
        this.bookingController.getCountBookings(this.app);
        this.bookingController.getListBookings(this.app);
        this.bookingController.getBookingByID(this.app);
        this.bookingController.updateBookingStatus(this.app);
        // this.bookingController.getGenerateCKSNCode(this.app)
        this.bookingController.removeBooking(this.app);
        this.bookingController.getBookingByCKSNNo(this.app);
        //reporting
        this.bookingController.getBookingsReport(this.app);
    }
    /**
     * @controller container
     */
    getContainerController() {
        this.containerController.getListCotainters(this.app);
        this.containerController.getCountContainers(this.app);
        this.containerController.saveContainer(this.app);
        this.containerController.getContainerByID(this.app);
        this.containerController.removeContainerByID(this.app);
        this.containerController.getMultiDropByContainers(this.app);
        this.containerController.saveMultiDelivery(this.app);
        this.containerController.saveTheContainer(this.app);
        this.containerController.saveDataImport(this.app);
    }
    /**
     * @controller
     */
    getPortController() {
        this.portController.getPortList(this.app);
        this.portController.addPort(this.app);
        this.portController.getCountPorts(this.app);
        this.portController.getPortByID(this.app);
        this.portController.getPortListWithSize(this.app);
        this.portController.addPort(this.app);
    }
    /**
     * @controller
     */
    getDocumentController() {
        this.documentController.addDocuments(this.app);
        this.documentController.getListDocuments(this.app);
        this.documentController.deleteDocument(this.app);
    }
    /**
     * @Controller
     */
    getBrokerController() {
        this.brokerController.getAllBrokers(this.app);
    }
    /**
     * @Controller
     */
    getPageController() {
        this.pageController.getAllPages(this.app);
        this.pageController.savePage(this.app);
    }
    /**
     * @Controller
     */
    getDashboardController() {
        this.dasbaordControler.getCountBookingStatusInMonth(this.app);
        this.dasbaordControler.getCountDataInMonth(this.app);
        this.dasbaordControler.getCountMonthlyBooking(this.app);
    }
    getReportController() {
        this.reportController.getConsoleReport(this.app);
        this.reportController.getEmptyReport(this.app);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map