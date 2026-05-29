import { useCallback, useMemo } from 'react'
import { useSearchTokensQuery } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks'
import { GqlResult } from 'uniswap/src/data/types'
import { useEnabledChains } from 'uniswap/src/features/chains/hooks'
import { UniverseChainId } from 'uniswap/src/features/chains/types'
import { hasGraphqlBackendChains, toGraphQLChain } from 'uniswap/src/features/chains/utils'
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types'
import { gqlTokenToCurrencyInfo, usePersistedError } from 'uniswap/src/features/dataApi/utils'
import {
  getEffectiveChainFilter,
  isMstDexChain,
  searchMstCurrencyInfos,
} from 'uniswap/src/features/tokens/mstTokenList'

export function useSearchTokens(
  searchQuery: string | null,
  chainFilter: UniverseChainId | null,
  skip: boolean,
): GqlResult<CurrencyInfo[]> {
  const effectiveChainFilter = getEffectiveChainFilter(chainFilter)
  const gqlChainFilter = effectiveChainFilter ? toGraphQLChain(effectiveChainFilter) : null
  const { gqlChains } = useEnabledChains()
  const useLocalMstSearch = isMstDexChain(effectiveChainFilter)

  const { data, loading, error, refetch } = useSearchTokensQuery({
    variables: {
      searchQuery: searchQuery ?? '',
      chains: gqlChainFilter ? [gqlChainFilter] : gqlChains,
    },
    skip: skip || !searchQuery || useLocalMstSearch || !hasGraphqlBackendChains(gqlChainFilter ? [gqlChainFilter] : gqlChains),
  })

  const persistedError = usePersistedError(loading, error)

  const formattedData = useMemo(() => {
    if (!data || !data.searchTokens) {
      return undefined
    }

    return data.searchTokens
      .map((token) => {
        if (!token) {
          return null
        }

        return gqlTokenToCurrencyInfo(token)
      })
      .filter((c): c is CurrencyInfo => Boolean(c))
  }, [data])

  const localMstResults = useMemo(() => {
    if (!useLocalMstSearch || !searchQuery) {
      return undefined
    }
    return searchMstCurrencyInfos(searchQuery)
  }, [searchQuery, useLocalMstSearch])

  const retry = useCallback(() => !skip && refetch({ searchQuery: searchQuery ?? '' }), [refetch, searchQuery, skip])

  return useMemo(
    () => ({
      data: useLocalMstSearch ? localMstResults : formattedData,
      loading: useLocalMstSearch ? false : loading,
      error: useLocalMstSearch ? undefined : persistedError,
      refetch: retry,
    }),
    [formattedData, loading, localMstResults, persistedError, retry, useLocalMstSearch],
  )
}
