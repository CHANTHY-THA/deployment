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
exports.AuthenticationHandler = void 0;
const JWTGenerator_1 = require("./JWTGenerator");
const typeorm_1 = require("typeorm");
const user_repository_1 = require("../orm/repository/user.repository");
const jwt_decode = require("jwt-decode");
const base_controller_1 = require("../controller/base.controller");
const responseBody_1 = require("../orm/repository/responseBody");
const crypto_helper_1 = require("../helper/crypto.helper");
const token_repository_1 = require("../orm/repository/token.repository");
// import * as clientStore from '../helper/auth_store';
const token_entity_1 = require("../orm/entity/token.entity");
const clients = [
    {
        "client_id": "CK9999",
        "key": "99596168-f64f-489a-8679-c02eaf7b3d49"
    }
];
/**
 * @author <auth>RINA </auth>
 */
class AuthenticationHandler {
    token(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = new responseBody_1.ResponseBody();
            var client_id = req.headers.client_id;
            var key = req.headers.key;
            let status = false;
            let tokenData = "";
            if (client_id != null && key != null) {
                let cStore = clients;
                for (let cl of cStore) {
                    if (cl.client_id == client_id && cl.key == key) {
                        status = true;
                        break;
                    }
                }
            }
            if (status == true) {
                status = false; // reset status
                let userRepo = (0, typeorm_1.getCustomRepository)(user_repository_1.UserRepository);
                let username = req.body.username;
                let password = crypto_helper_1.CryptoHelper.decrypt_req(req.body.password);
                //   console.log(CryptoHelper.descrypt("516clZJAUErXWL/bJtl2rw=="))
                //    console.log("Password",password)
                let userRes = yield userRepo.findUser(username, password);
                if (userRes.status == base_controller_1.Status.success && userRes.body.length > 0) {
                    let user = userRes.body[0];
                    if (user != null) {
                        //      console.log(user.password)
                        //     CryptoHelper.decrypt_db(user.password)
                        if (user.password == password) {
                            // add more condition
                            let jwtUtil = new JWTGenerator_1.JWTUtil();
                            tokenData = jwtUtil.creatToken(43200, "" + user.ID, "" + user.group.group);
                            let decode = jwt_decode(tokenData);
                            // save token
                            let tokenModel = new token_entity_1.Token();
                            tokenModel.jti = decode.jti;
                            tokenModel.expirationDate = "" + decode.exp;
                            tokenModel.userId = "" + user.ID;
                            tokenModel.token = tokenData;
                            let tokenRepo = (0, typeorm_1.getCustomRepository)(token_repository_1.TokenRepository);
                            let tokenRes = yield tokenRepo.saveToken(tokenModel);
                            if (tokenRes.status == base_controller_1.Status.success) {
                                status = true;
                            }
                        }
                    }
                }
                else {
                    status = false;
                }
            }
            // response
            if (status == true) {
                response.body = [{
                        "type": "bearer",
                        "access_token": tokenData
                    }];
                response.status = base_controller_1.Status.success;
            }
            else {
                res.status(401);
                response.body = [{
                        "erro_description": "Authorization is denied"
                    }];
                response.status = base_controller_1.Status.logic_error;
            }
            res.json(response);
        });
    }
    // check header
    checkHeader(headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                try {
                    return resolve(status);
                }
                catch (err) {
                    console.log('error ');
                    console.log(err);
                    resolve(status);
                }
            });
        });
    }
}
exports.AuthenticationHandler = AuthenticationHandler;
//# sourceMappingURL=AuthenticationHandler.js.map