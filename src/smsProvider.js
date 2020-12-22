"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsProvider = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
let SmsProvider = class SmsProvider {
    async get() {
        return this.twilloProvider;
    }
};
tslib_1.__decorate([
    inject_1.inject()
], SmsProvider.prototype, "twilloProvider", void 0);
SmsProvider = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton(),
    inject_1.factory()
], SmsProvider);
exports.SmsProvider = SmsProvider;
//# sourceMappingURL=smsProvider.js.map