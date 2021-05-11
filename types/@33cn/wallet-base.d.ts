type NewMnemonic = (lang?: string, bitsize?: number) => string
type NewWalletFromMnemonic = (mnemonic: string, coinType?: string) => any
interface iSeed {
    newMnemonic: NewMnemonic;
    newWalletFromMnemonic: NewWalletFromMnemonic
}
interface iSign {

}
declare module '@33cn/wallet-base' {
    export const seed: iSeed = require('@33cn/wallet-base')
    export const sign: iSign = require('@33cn/wallet-base')
}

