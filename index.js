"use strict";
var SmsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsModule = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
const smsProvider_1 = require("./src/smsProvider");
let SmsModule = SmsModule_1 = class SmsModule extends engine_1.Module {
    constructor() {
        super(...arguments);
        this.Defaults = {
            id: "smsProvider"
        };
    }
    static for(options) {
        return { type: SmsModule_1, options };
    }
    get exports() {
        return [{ id: this.moduleOptions.id, type: smsProvider_1.SmsProvider }];
    }
};
SmsModule = SmsModule_1 = tslib_1.__decorate([
    engine_1.module()
], SmsModule);
exports.SmsModule = SmsModule;
//# sourceMappingURL=index.js.map