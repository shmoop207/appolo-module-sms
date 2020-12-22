export interface ISmsProvider {
    send(opts: { toNumber: string, body: string, fromNumber?: string }): Promise<void>


}