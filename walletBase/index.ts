import { seed } from '@33cn/wallet-base'

const mn = seed.newMnemonic('en')
const wa = seed.newWalletFromMnemonic(mn)
console.log(wa);

