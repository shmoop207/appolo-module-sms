"use strict";
import {Module, module, IModuleParams} from '@appolo/engine';
import {IOptions} from "./src/IOptions";
import {ISmsProvider} from "./src/ISmsProvider";
import {SmsProvider} from "./src/smsProvider";

export {IOptions} from "./src/IOptions"

export {ISmsProvider}

@module()
export class SmsModule extends Module<IOptions> {

    public static for(options?: IModuleParams) {
        return {type:SmsModule,options}
    }


    protected readonly Defaults: Partial<IOptions> = {
        id: "smsProvider"
    };


    public get exports() {
        return [{id: this.moduleOptions.id, type: SmsProvider}]
    }

}
