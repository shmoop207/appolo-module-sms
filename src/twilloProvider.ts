import {define, singleton, init, inject} from "@appolo/inject";
import {ISmsProvider} from "./ISmsProvider";
import {ILogger} from "@appolo/logger";
import {IOptions} from "./IOptions";
import twilio = require('twilio');

@define()
@singleton()
export class TwilloProvider implements ISmsProvider {

    @inject() logger: ILogger;
    @inject() protected moduleOptions: IOptions;

    private _smsClient: twilio.Twilio;

    @init()
    public initialize() {

        this._smsClient = new twilio.Twilio(this.moduleOptions.accountSid, this.moduleOptions.authToken);
    }


    public async send(opts: { toNumber: string, body: string, fromNumber?: string }): Promise<void> {
        try {

            await this._smsClient.messages.create({
                to: opts.toNumber,
                from: opts.fromNumber || this.moduleOptions.fromNumber,
                body: opts.body
            });
        } catch (e) {
            this.logger.error("failed to send sms", {toNumber: opts.toNumber, body: opts.body, e: e});
            throw e;
        }

    }

}
