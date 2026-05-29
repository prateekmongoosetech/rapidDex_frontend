import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Text, TouchableArea } from 'ui/src'
import { currencyInfosToTokenOptions } from 'uniswap/src/components/TokenSelector/hooks/useCurrencyInfosToTokenOptions'
import { useRecentlySearchedTokens } from 'uniswap/src/components/TokenSelector/hooks/useRecentlySearchedTokens'
import { TokenOptionSection, TokenSection } from 'uniswap/src/components/TokenSelector/types'
import { useTokenOptionsSection } from 'uniswap/src/components/TokenSelector/utils'
import { GqlResult } from 'uniswap/src/data/types'
import { useEnabledChains } from 'uniswap/src/features/chains/hooks'
import { UniverseChainId } from 'uniswap/src/features/chains/types'
import { clearSearchHistory } from 'uniswap/src/features/search/searchHistorySlice'
import { getEffectiveChainFilter, getMstCurrencyInfos } from 'uniswap/src/features/tokens/mstTokenList'

function ClearAll({ onPress }: { onPress: () => void }): JSX.Element {
  const { t } = useTranslation()
  return (
    <TouchableArea onPress={onPress}>
      <Text color="$accent1" variant="buttonLabel3">
        {t('tokens.selector.button.clear')}
      </Text>
    </TouchableArea>
  )
}

export function useTokenSectionsForEmptySearch(chainFilter: UniverseChainId | null): GqlResult<TokenSection[]> {
  const dispatch = useDispatch()
  const { defaultChainId } = useEnabledChains()
  const effectiveChainFilter = getEffectiveChainFilter(chainFilter) ?? defaultChainId

  const recentlySearchedTokenOptions = useRecentlySearchedTokens(effectiveChainFilter)

  const onPressClearSearchHistory = useCallback((): void => {
    dispatch(clearSearchHistory())
  }, [dispatch])

  const recentSection = useTokenOptionsSection({
    sectionKey: TokenOptionSection.RecentTokens,
    tokenOptions: recentlySearchedTokenOptions,
    endElement: <ClearAll onPress={onPressClearSearchHistory} />,
  })

  const popularSection = useTokenOptionsSection({
    sectionKey: TokenOptionSection.PopularTokens,
    tokenOptions:
      effectiveChainFilter === UniverseChainId.MstTestnet
        ? currencyInfosToTokenOptions(getMstCurrencyInfos())
        : undefined,
  })

  const sections = useMemo(() => [...(recentSection ?? []), ...(popularSection ?? [])], [popularSection, recentSection])

  return useMemo(
    () => ({
      data: sections,
      loading: false,
    }),
    [sections],
  )
}
