"use strict";
import {define, factory, IFactory, inject, singleton} from '@appolo/inject'
import {ISmsProvider} from "./ISmsProvider";
import {TwilloProvider} from "./twilloProvider";

@define()
@singleton()
@factory()
export class SmsProvider implements IFactory<ISmsProvider> {

    @inject() protected twilloProvider: TwilloProvider;

    public async get(): Promise<ISmsProvider> {

        return this.twilloProvider;
    }
}
