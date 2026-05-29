import { Currency } from '@uniswap/sdk-core'
import { useMemo } from 'react'
import { MST_NATIVE, USDT_MST, WBTC_MST, WMST } from 'uniswap/src/constants/tokens'
import { SafetyLevel } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks'
import { ProtectionResult } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks'
import { useTokenQuery } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks'
import { DEFAULT_NATIVE_ADDRESS } from 'uniswap/src/features/chains/chainInfo'
import { UniverseChainId } from 'uniswap/src/features/chains/types'
import { CurrencyInfo, TokenList } from 'uniswap/src/features/dataApi/types'
import { buildCurrencyInfo, currencyIdToContractInput, gqlTokenToCurrencyInfo } from 'uniswap/src/features/dataApi/utils'
import { buildNativeCurrencyId, buildWrappedNativeCurrencyId } from 'uniswap/src/utils/currencyId'

const MST_CHAIN_PREFIX = `${UniverseChainId.MstTestnet}-`

const MST_CURRENCY_MAP: Record<string, Currency> = {
  [DEFAULT_NATIVE_ADDRESS.toLowerCase()]: MST_NATIVE,
  [WMST.address.toLowerCase()]: WMST,
  [USDT_MST.address.toLowerCase()]: USDT_MST,
  [WBTC_MST.address.toLowerCase()]: WBTC_MST,
}

function buildMstCurrencyInfo(currencyId: string): CurrencyInfo | undefined {
  const address = currencyId.slice(MST_CHAIN_PREFIX.length).toLowerCase()
  const currency = MST_CURRENCY_MAP[address]

  if (!currency) {
    console.warn('[useCurrencyInfo] Unknown MST token address:', address, '— no local definition found')
    return undefined
  }

  return buildCurrencyInfo({
    currency,
    currencyId,
    logoUrl: null,
    safetyLevel: SafetyLevel.Verified,
    safetyInfo: {
      tokenList: TokenList.Default,
      protectionResult: ProtectionResult.Benign,
    },
    isSpam: false,
  })
}

export function useCurrencyInfo(
  _currencyId?: string,
  options?: { refetch?: boolean; skip?: boolean },
): Maybe<CurrencyInfo> {
  const isMstToken = Boolean(_currencyId?.startsWith(MST_CHAIN_PREFIX))

  const { data } = useTokenQuery({
    variables: currencyIdToContractInput(_currencyId ?? ''),
    skip: !_currencyId || options?.skip || isMstToken,
    fetchPolicy: options?.refetch ? 'cache-and-network' : 'cache-first',
  })

  return useMemo(() => {
    if (!_currencyId) {
      return undefined
    }

    if (isMstToken) {
      const result = buildMstCurrencyInfo(_currencyId)
      console.log('[useCurrencyInfo] MST token', _currencyId, '→', result?.currency.symbol ?? 'NOT FOUND')
      return result
    }

    if (!data?.token) {
      console.log('[useCurrencyInfo] GQL returned no token for', _currencyId)
      return undefined
    }

    return gqlTokenToCurrencyInfo(data.token)
  }, [data, _currencyId, isMstToken])
}

export function useNativeCurrencyInfo(chainId: UniverseChainId): Maybe<CurrencyInfo> {
  const nativeCurrencyId = buildNativeCurrencyId(chainId)
  return useCurrencyInfo(nativeCurrencyId)
}

export function useWrappedNativeCurrencyInfo(chainId: UniverseChainId): Maybe<CurrencyInfo> {
  const wrappedCurrencyId = buildWrappedNativeCurrencyId(chainId)
  return useCurrencyInfo(wrappedCurrencyId)
}
