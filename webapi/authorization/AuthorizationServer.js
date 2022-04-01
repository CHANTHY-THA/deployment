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
const JWTGenerator_1 = require("./JWTGenerator");
const typeorm_1 = require("typeorm");
const base_controller_1 = require("../controller/base.controller");
const token_repository_1 = require("../orm/repository/token.repository");
/**
 * @author <auth>RINA </auth>
 */
/**
 * @param  req : Resquest,
 * @param  res : Response,
 * @param  role: array of string ,contain role
 *
 * */
let authori_attr = (req, res, next, roles) => __awaiter(void 0, void 0, void 0, function* () {
    let token = req.headers['x-access-token'] || req.headers['authorization'] || ''; // Express headers are auto converted to lowercase
    if (token) {
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
        else {
            res.status(401);
            return res.json({
                status: 401,
                message: 'Auth token is not valid.'
            });
        }
        let jwtUtil = new JWTGenerator_1.JWTUtil();
        let result = jwtUtil.verifyToken(token);
        var tokenRepo = (0, typeorm_1.getCustomRepository)(token_repository_1.TokenRepository);
        if (result != null) {
            // check with db
            var jti = result.jti;
            var role = result.role;
            // check role 
            let isGranted = false;
            if (roles != null || roles.length > 0) {
                isGranted = roles.filter(r => (r.toLowerCase() == "all") || r.toLowerCase() == role).length > 0 ? true : false;
            }
            if (isGranted == true) {
                var tokenReult = yield tokenRepo.findToken(jti);
                console.log(tokenReult);
                if (tokenReult.status == base_controller_1.Status.success && tokenReult.body.length > 0) {
                    next();
                }
                else {
                    res.status(401);
                    return res.json({
                        status: 401,
                        message: 'Auth token is expires.'
                    });
                }
            }
            else {
                res.status(401);
                return res.json({
                    status: 401,
                    message: 'Request is not granted!'
                });
            }
        }
        else {
            try {
                var decode = jwtUtil.decode(token);
                yield tokenRepo.deleteToken(decode.jti);
            }
            catch (err) {
                console.error(err);
            }
            res.status(401);
            return res.json({
                status: 401,
                message: 'Auth token is not valid.'
            });
        }
    }
    else {
        res.status(401);
        return res.json({
            status: 401,
            message: 'Auth token is not supplied'
        });
    }
});
module.exports = {
    authori_attr: authori_attr
};
//# sourceMappingURL=AuthorizationServer.js.map