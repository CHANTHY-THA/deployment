"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoHelper = void 0;
const crypto = require('crypto');
const JSEncrypt = require('node-jsencrypt');
const fs = require("fs");
const CryptoJS = require("crypto-js");
// const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
//   modulusLength: 2048,
//   publicKeyEncoding: {
//     type: 'spki',
//     format: 'pem'
//   },
//   privateKeyEncoding: {
//     type: 'pkcs8',
//     format: 'pem'
//   }
// }); 
class CryptoHelper {
    static encrypt_req(text) {
        // let public_key = fs.readFileSync(__dirname+"/public.pem", 'utf8' )
        this.crypt.setKey(`-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD2cxMSIzVgsY0d1OjQ9g371z9n
    jI1VAjUxdDx1hJz2G/CUiXl2hK8FsLmYiMiDOvVGVgVQH5OD6tz3Z3N1z/21EsqI
    Xc8A9RJZnb1NWpvY1g+8Uv4xlcMV1I/QoGG9IAUhWbqTwLCSAq2RctfU06BkbDRT
    Pcu7wXqaKDwdg6g3bQIDAQAB
    -----END PUBLIC KEY-----
    `);
        return this.crypt.encrypt(text);
    }
    static decrypt_req(encrypted) {
        //  let privateKey = fs.readFileSync(__dirname+"/private.pem", 'utf8' )
        this.crypt.setPrivateKey(`-----BEGIN RSA PRIVATE KEY-----
    MIICXAIBAAKBgQD2cxMSIzVgsY0d1OjQ9g371z9njI1VAjUxdDx1hJz2G/CUiXl2
    hK8FsLmYiMiDOvVGVgVQH5OD6tz3Z3N1z/21EsqIXc8A9RJZnb1NWpvY1g+8Uv4x
    lcMV1I/QoGG9IAUhWbqTwLCSAq2RctfU06BkbDRTPcu7wXqaKDwdg6g3bQIDAQAB
    AoGBAIXGVRXFUtYXypfk2DOFPHX1kw8sNhNszV74z1CjGWhmJiMatHnm7/JQyY3I
    wb6qJDV3wA6L9VDoDeWlnADZU8cDpKINkTjoB4RURrFZutWGZOT+21alIUNJrr75
    pFHXUg6ahQjsz07OTYOkQufzMzKZ87CwrhIPdGgaFC2eSFNpAkEA/k642B5gMI3Z
    71hBj8nO5VUT9UwjtnvywynMV4ayKsvBglgvU8FOc2SZQhHu+t+wDMhMIJ+r5CCd
    ZnuSJOFQEwJBAPgW9t62hokSx+Arz0TEXwyIUSYm/0Kos3JydifQwYBBuPwLc3PT
    tHjQ5JqY7x1eO3eZbn4sHT0dtu9nOf3USn8CQF+kq9BcXEDmmLhzsPSrKa0GumLf
    J+9R3pOX/MpOVmPSDg0/rU0Kvr6XbyxyIjcoOcYU7sy2QKejvI72mphURRECQFe+
    b4PnlH+oh87OT9lnhqJ9GA5hXoip+AWzW/zLBZUiKZXjSusdZkgQwbm3+2IssOWk
    +4JegdzaxJe5r7YJvmsCQF1/ZHg8Lv7ilNzDr8SR/QGr1U7jmfER/Ik08Yr2k/I8
    G8w770VVBhrs2QJx+VseGJVrEOn/3V15AaJQweO90vw=
    -----END RSA PRIVATE KEY-----
    `);
        return this.crypt.decrypt(encrypted);
    }
    static encrypt_db(text) {
        var ciphertext = CryptoJS.AES.encrypt(text, '1').toString();
        return ciphertext;
    }
    static decrypt_db(ciphertext) {
        var bytes = CryptoJS.AES.decrypt(ciphertext, '1');
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        return originalText;
    }
}
exports.CryptoHelper = CryptoHelper;
CryptoHelper.crypt = new JSEncrypt();
//# sourceMappingURL=crypto.helper.js.map