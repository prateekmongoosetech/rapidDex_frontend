import { UniverseChainId } from 'uniswap/src/features/chains/types'

const MST_CHAIN_ID = UniverseChainId.MstTestnet

const MST_CONTRACT_ADDRESSES = {
  V3_FACTORY: '0x8b61241011a397A67a75B68998005821C45e59B2',
  NONFUNGIBLE_POSITION_MANAGER: '0x78D1cfdb77adE9e3F57c7B02Db72A5ADb9297AD5',
  SWAP_ROUTER: '0x25c065ec2dd432b0B8986e30B1132A0Ef95AE479',
  QUOTER_V2: '0x2Ad8a328ddf9398D9CBa50dfb487a77dfc44D1C9',
  MULTICALL: '0x6BAE3603f4C64D39F0F4eDfA9EbDAd635A3e1Fb6',
  // V2 — fill in after running: npx hardhat run scripts/deployV2.ts --network mstTestnet
  V2_FACTORY: '0xCe2af6B8DBE2710F733aFB9d3dBcC8f2A9B5616c' as string,
  V2_ROUTER: '0xA35645dbfAedFA7B4D3965F37EA3C1dC13800C4F' as string,
} as const

export function getMstContractAddress(
  chainId: number | undefined,
  contract: keyof typeof MST_CONTRACT_ADDRESSES,
  fallback: string | undefined,
): string | undefined {
  if (chainId === MST_CHAIN_ID) {
    return MST_CONTRACT_ADDRESSES[contract]
  }
  return fallback
}

export function getV3FactoryAddress(chainId: number | undefined, fallback?: string): string | undefined {
  return getMstContractAddress(chainId, 'V3_FACTORY', fallback)
}

export function getNonfungiblePositionManagerAddress(
  chainId: number | undefined,
  fallback?: string,
): string | undefined {
  return getMstContractAddress(chainId, 'NONFUNGIBLE_POSITION_MANAGER', fallback)
}

export function getSwapRouterAddress(chainId: number | undefined, fallback?: string): string | undefined {
  return getMstContractAddress(chainId, 'SWAP_ROUTER', fallback)
}

export function getQuoterV2Address(chainId: number | undefined, fallback?: string): string | undefined {
  return getMstContractAddress(chainId, 'QUOTER_V2', fallback)
}

export function getMulticallAddress(chainId: number | undefined, fallback?: string): string | undefined {
  return getMstContractAddress(chainId, 'MULTICALL', fallback)
}

export function getV2FactoryAddress(chainId: number | undefined, fallback?: string): string | undefined {
  return getMstContractAddress(chainId, 'V2_FACTORY', fallback) || fallback
}

export function getV2RouterAddress(chainId: number | undefined, fallback?: string): string | undefined {
  return getMstContractAddress(chainId, 'V2_ROUTER', fallback) || fallback
}

export const isMstChain = (chainId: number | undefined): boolean => chainId === MST_CHAIN_ID

export const MST_V2_FACTORY = MST_CONTRACT_ADDRESSES.V2_FACTORY
export const MST_V2_ROUTER = MST_CONTRACT_ADDRESSES.V2_ROUTER
