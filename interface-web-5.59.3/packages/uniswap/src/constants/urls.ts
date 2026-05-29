import { isDevEnv, isTestEnv } from 'utilities/src/environment/env'
import { isAndroid, isExtension, isInterface, isMobileApp } from 'utilities/src/platform'

enum TrafficFlows {
  GraphQL = 'graphql',
  Metrics = 'metrics',
  Gating = 'gating',
  TradingApi = 'trading-api-labs',
  Unitags = 'unitags',
  FOR = 'for',
  Scantastic = 'scantastic',
}

const FLOWS_USING_BETA = [TrafficFlows.FOR]

export const RAPIDDEX_SITE_URL = 'https://mstblockchain.com'
export const UNISWAP_WEB_HOSTNAME = 'mstblockchain.com'
export const UNISWAP_WEB_URL = RAPIDDEX_SITE_URL
export const UNISWAP_APP_URL = RAPIDDEX_SITE_URL
export const UNISWAP_MOBILE_REDIRECT_URL = RAPIDDEX_SITE_URL

const helpUrl = RAPIDDEX_SITE_URL

export const uniswapUrls = {
  // Help and web articles/items
  helpUrl,
  helpRequestUrl: helpUrl,
  helpArticleUrls: {
    acrossRoutingInfo: helpUrl,
    approvalsExplainer: helpUrl,
    cexTransferKorea: helpUrl,
    extensionHelp: helpUrl,
    extensionDappTroubleshooting: helpUrl,
    feeOnTransferHelp: helpUrl,
    howToSwapTokens: helpUrl,
    hiddenTokenInfo: helpUrl,
    hiddenNFTInfo: helpUrl,
    impermanentLoss: helpUrl,
    limitsFailure: helpUrl,
    limitsInfo: helpUrl,
    limitsNetworkSupport: helpUrl,
    lpCollectFees: helpUrl,
    fiatOnRampHelp: helpUrl,
    transferCryptoHelp: helpUrl,
    moonpayRegionalAvailability: helpUrl,
    networkFeeInfo: helpUrl,
    poolOutOfSync: helpUrl,
    positionsLearnMore: helpUrl,
    priceImpact: helpUrl,
    providingLiquidityInfo: helpUrl,
    recoveryPhraseHowToImport: helpUrl,
    recoveryPhraseHowToFind: helpUrl,
    recoveryPhraseForgotten: helpUrl,
    revokeExplainer: helpUrl,
    supportedNetworks: helpUrl,
    swapFeeInfo: helpUrl,
    swapProtection: helpUrl,
    swapSlippage: helpUrl,
    tokenWarning: helpUrl,
    transactionFailure: helpUrl,
    uniswapXInfo: helpUrl,
    uniswapXFailure: helpUrl,
    unitagClaimPeriod: helpUrl,
    unsupportedTokenPolicy: helpUrl,
    v4HooksInfo: helpUrl,
    walletHelp: helpUrl,
    walletSecurityMeasures: helpUrl,
    wethExplainer: helpUrl,
  },
  termsOfServiceUrl: RAPIDDEX_SITE_URL,
  privacyPolicyUrl: RAPIDDEX_SITE_URL,
  chromeExtension: RAPIDDEX_SITE_URL,

  // Core API Urls
  apiOrigin: 'https://api.uniswap.org',
  apiBaseUrl: getCloudflareApiBaseUrl(),
  apiBaseUrlV2: `${getCloudflareApiBaseUrl()}/v2`,
  graphQLUrl: `${getCloudflareApiBaseUrl(TrafficFlows.GraphQL)}/v1/graphql`,

  // Proxies
  amplitudeProxyUrl: `${getCloudflareApiBaseUrl(TrafficFlows.Metrics)}/v1/amplitude-proxy`,
  statsigProxyUrl: `${getCloudflareApiBaseUrl(TrafficFlows.Gating)}/v1/statsig-proxy`,

  // Feature service URL's
  unitagsApiUrl: `${getCloudflareApiBaseUrl(TrafficFlows.Unitags)}/v2/unitags`,
  scantasticApiUrl: `${getCloudflareApiBaseUrl(TrafficFlows.Scantastic)}/v2/scantastic`,
  fiatOnRampApiUrl: `${getCloudflareApiBaseUrl(TrafficFlows.FOR)}/v2/fiat-on-ramp`, // TODO: WALL-5189 - remove this once we finish migrating away from original FOR endpoint service
  forApiUrl: `${getCloudflareApiBaseUrl(TrafficFlows.FOR)}/v2/FOR.v1.FORService`,
  tradingApiUrl: getCloudflareApiBaseUrl(TrafficFlows.TradingApi),

  // API Paths
  trmPath: '/v1/screen',
  gasServicePath: '/v1/gas-fee',
  tradingApiPaths: {
    quote: '/v1/quote',
    indicativeQuote: '/v1/indicative_quote',
    approval: '/v1/check_approval',
    swap: '/v1/swap',
    order: '/v1/order',
    orders: '/v1/orders',
    swaps: '/v1/swaps',
    swappableTokens: '/v1/swappable_tokens',
    createLp: '/v1/lp/create',
    increaseLp: '/v1/lp/increase',
    decreaseLp: '/v1/lp/decrease',
    claimLpFees: '/v1/lp/claim',
    lpApproval: '/v1/lp/approve',
    migrate: '/v1/lp/migrate',
  },

  // App and Redirect URL's
  appBaseUrl: UNISWAP_APP_URL,
  redirectUrlBase: UNISWAP_MOBILE_REDIRECT_URL,
  requestOriginUrl: UNISWAP_WEB_URL,

  // Web Interface Urls (in-app routes for RapidDex)
  webInterfaceSwapUrl: '/swap',
  webInterfaceTokensUrl: '/explore/tokens/mst_testnet',
  webInterfaceAddressUrl: '/explore',
  webInterfaceNftItemUrl: '/explore',
  webInterfaceNftCollectionUrl: '/explore',
  webInterfaceBuyUrl: '/swap',
}

function getCloudflarePrefix(flow?: TrafficFlows): string {
  if (flow && isDevEnv() && FLOWS_USING_BETA.includes(flow)) {
    return `beta`
  }

  if (isMobileApp) {
    return `${isAndroid ? 'android' : 'ios'}.wallet`
  }

  if (isExtension) {
    return 'extension'
  }

  if (isInterface) {
    return 'interface'
  }

  if (isTestEnv()) {
    return 'wallet'
  }

  throw new Error('Could not determine app to generate Cloudflare prefix')
}

function getServicePrefix(flow?: TrafficFlows): string {
  if (flow && !(isDevEnv() && FLOWS_USING_BETA.includes(flow))) {
    return flow + '.'
  } else {
    return ''
  }
}

function getCloudflareApiBaseUrl(flow?: TrafficFlows): string {
  return `https://${getServicePrefix(flow)}${getCloudflarePrefix(flow)}.gateway.uniswap.org`
}
