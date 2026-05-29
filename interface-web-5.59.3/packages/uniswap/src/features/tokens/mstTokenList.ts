import { COMMON_BASES } from 'uniswap/src/constants/routing'
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types'
import { SUPPORTED_CHAIN_IDS, UniverseChainId } from 'uniswap/src/features/chains/types'
import { currencyAddress, currencyId } from 'uniswap/src/utils/currencyId'

export const MST_CHAIN_ID = UniverseChainId.MstTestnet

export function isMstDexChain(chainId?: UniverseChainId | null): chainId is UniverseChainId {
  return chainId === MST_CHAIN_ID
}

/** When the app only supports one chain, default filters to that chain. */
export function getEffectiveChainFilter(chainFilter: UniverseChainId | null): UniverseChainId | null {
  if (chainFilter) {
    return chainFilter
  }
  if (SUPPORTED_CHAIN_IDS.length === 1) {
    return SUPPORTED_CHAIN_IDS[0]!
  }
  return null
}

export function getMstCurrencyInfos(): CurrencyInfo[] {
  return (COMMON_BASES[MST_CHAIN_ID] ?? []).map((info) =>
    info.currencyId ? info : { ...info, currencyId: currencyId(info.currency) },
  )
}

export function searchMstCurrencyInfos(searchQuery: string): CurrencyInfo[] {
  const query = searchQuery.trim().toLowerCase()
  const tokens = getMstCurrencyInfos()

  if (!query) {
    return tokens
  }

  return tokens.filter((info) => {
    const { symbol, name } = info.currency
    const address = currencyAddress(info.currency).toLowerCase()

    return (
      symbol?.toLowerCase().includes(query) ||
      name?.toLowerCase().includes(query) ||
      address.includes(query) ||
      address.startsWith(query)
    )
  })
}
