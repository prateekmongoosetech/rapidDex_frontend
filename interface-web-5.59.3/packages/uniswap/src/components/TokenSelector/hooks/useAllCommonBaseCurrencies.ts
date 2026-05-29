import { GqlResult } from 'uniswap/src/data/types'
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types'
import { getMstCurrencyInfos } from 'uniswap/src/features/tokens/mstTokenList'

/** MST DEX: common bases come from the local registry (MST, WMST, USDT, WBTC). */
export function useAllCommonBaseCurrencies(): GqlResult<CurrencyInfo[]> {
  return {
    data: getMstCurrencyInfos(),
    loading: false,
    error: undefined,
    refetch: () => {},
  }
}
