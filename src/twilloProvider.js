"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwilloProvider = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const twilio = require("twilio");
let TwilloProvider = class TwilloProvider {
    initialize() {
        this._smsClient = new twilio.Twilio(this.moduleOptions.accountSid, this.moduleOptions.authToken);
    }
    async send(opts) {
        try {
            await this._smsClient.messages.create({
                to: opts.toNumber,
                from: opts.fromNumber || this.moduleOptions.fromNumber,
                body: opts.body
            });
        }
        catch (e) {
            this.logger.error("failed to send sms", { toNumber: opts.toNumber, body: opts.body, e: e });
            throw e;
        }
    }
};
tslib_1.__decorate([
    inject_1.inject()
], TwilloProvider.prototype, "logger", void 0);
tslib_1.__decorate([
    inject_1.inject()
], TwilloProvider.prototype, "moduleOptions", void 0);
tslib_1.__decorate([
    inject_1.init()
], TwilloProvider.prototype, "initialize", null);
TwilloProvider = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], TwilloProvider);
exports.TwilloProvider = TwilloProvider;
//# sourceMappingURL=twilloProvider.js.map