import { opacifyRaw } from 'ui/src/theme/color/utils'

const accentColors = {
  pinkLight: '#FEF4FF',
  pinkPastel: '#FDAFF0',
  pinkBase: '#FC74FE',
  pinkVibrant: '#F50DB4',
  pinkDark: '#361A37',

  redLight: '#FFF2F1',
  redPastel: '#FDCFC4',
  redBase: '#FF5F52',
  redVibrant: '#FF0000',
  redDark: '#220D0C',

  orangeLight: '#FEF5EA',
  orangePastel: '#FFE8BC',
  orangeBase: '#FF8934',
  orangeVibrant: '#FF4D00',
  orangeDark: '#371B0C',

  yellowLight: '#FFFE8B',
  yellowPastel: '#FFF8B4',
  yellowBase: '#FFBF17',
  yellowVibrant: '#FFF612',
  yellowDark: '#1F1E02',

  brownLight: '#F7F6F1',
  brownPastel: '#E2E0CD',
  brownBase: '#85754A',
  brownVibrant: '#996F01',
  brownDark: '#231E0F',

  greenLight: '#EEFBF1',
  greenPastel: '#C2E7D0',
  greenBase: '#0C8911',
  greenVibrant: '#21C95E',
  greenDark: '#0F2C1A',

  limeLight: '#F7FEEB',
  limePastel: '#E4F6C4',
  limeBase: '#78E744',
  limeVibrant: '#B1F13C',
  limeDark: '#232917',

  turquoiseLight: '#F7FEEB',
  turquoisePastel: '#CAFFDF',
  turquoiseBase: '#00C3A0',
  turquoiseVibrant: '#5CFE9D',
  turquoiseDark: '#1A2A21',

  cyanLight: '#EBF8FF',
  cyanPastel: '#B9E3F8',
  cyanBase: '#23A3FF',
  cyanVibrant: '#3ADCFF',
  cyanDark: '#15242B',

  blueLight: '#EFF4FF',
  bluePastel: '#D0D9F8',
  blueBase: '#4981FF',
  blueVibrant: '#0047FF',
  blueDark: '#10143D',

  purpleLight: '#FAF5FF',
  purplePastel: '#E9D8FD',
  purpleBase: '#9E62FF',
  purpleVibrant: '#4300B0',
  purpleDark: '#1A0040',
}

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  scrim: 'rgba(0,0,0,0.60)',

  ...accentColors,

  uniswapXViolet: '#4673FA',
  uniswapXPurple: '#9646FA',

  fiatOnRampBanner: '#FB36D0',
}

export const DEP_accentColors = {
  blue200: '#ADBCFF',
  blue300: '#869EFF',
  blue400: '#4C82FB',
  gold200: '#EEB317',
  goldVibrant: '#FEB239',
  green300: '#40B66B',
  green400: '#209853',
  magenta100: '#FAD8F8',
  magenta50: '#FFF1FE',
  magentaVibrant: '#FC72FF',
  red200: '#FEA79B',
  red300: '#FD766B',
  red400: '#FA2B39',
  violet200: '#BDB8FA',
  violet400: '#7A7BEB',
  yellow100: '#F0E49A',
  yellow200: '#DBBC19',
}

export const networkColors = {
  ethereum: {
    light: '#627EEA',
    dark: '#627EEA',
  },
  optimism: {
    light: '#FF0420',
    dark: '#FF0420',
  },
  polygon: {
    light: '#8247E5',
    dark: '#8247E5',
  },
  arbitrum: {
    light: '#12AAFF',
    dark: '#12AAFF',
  },
  bnb: {
    light: '#B08603',
    dark: '#FFBF17',
  },
  base: {
    light: '#0052FF',
    dark: '#0052FF',
  },
  blast: {
    light: '#222222',
    dark: '#FCFC03',
  },
  avalanche: {
    light: '#E84142',
    dark: '#E84142',
  },
  celo: {
    light: '#222222',
    dark: '#FCFF52',
  },
  worldchain: {
    light: '#222222',
    dark: '#FFFFFF',
  },
  astrochain: {
    light: '#fc0fa4',
    dark: '#fc0fa4',
  },
  zora: {
    light: '#222222',
    dark: '#FFFFFF',
  },
  zksync: {
    light: '#3667F6',
    dark: '#3667F6',
  },
  mst: {
    light: '#4984FF',
    dark: '#4984FF',
  },
}

// ---------------------------------------------------------------------------
// RapidDEX palette  —  applied via /design package (Phase 1).
// Token NAMES preserved 1:1 with prior Spore palette so all downstream
// Tamagui props (surface1, accent1, etc.) keep working. Only VALUES change.
// Mapping reference: /design/MIGRATION.md §A.
// ---------------------------------------------------------------------------
const sporeLight = {
  white: colors.white,
  black: colors.black,
  scrim: colors.scrim,

  // Text — RapidDEX light theme (§1.6 DESIGN_SYSTEM)
  neutral1: '#0B0418',
  neutral1Hovered: '#1F1340',
  neutral2: '#3D3656',
  neutral2Hovered: '#4F4870',
  neutral3: '#6A6485',
  neutral3Hovered: '#7E7896',

  // Surface — RapidDEX light spine
  surface1: '#FAF8FF',
  surface1Hovered: 'rgba(124,58,237,0.04)', // glass on light
  surface2: '#FFFFFF',
  surface2Hovered: '#F4EEFF',
  surface3: 'rgba(11,4,24,0.06)', // border-subtle
  surface3Solid: '#F4EEFF', // bg-elevated-2
  surface3Hovered: 'rgba(11,4,24,0.10)', // border-default
  surface4: 'rgba(255,255,255,0.64)',
  surface5: 'rgba(11,4,24,0.18)', // border-strong

  // Brand (violet) — RapidDEX --brand-500 / 600 + lighter surfaces
  accent1: '#8B5CF6',
  accent1Hovered: '#7C3AED',
  accent2: '#EBE0FF', // brand-100 (light feature card surface)
  accent2Hovered: '#D6BFFF', // brand-200
  accent3: '#0B0418',
  accent3Hovered: colors.black,

  DEP_accentSoft: '#8B5CF633', // 20% violet
  DEP_blue400: '#4C82FB',

  statusSuccess: '#2FB344',
  statusSuccessHovered: '#27A03D',
  statusSuccess2: '#E5F5E8',
  statusWarning: '#F3BA2F',
  statusWarningHovered: '#DEA61C',
  statusWarning2: '#FFFBEB',
  statusWarning2Hovered: '#FFF3CC',
  statusCritical: '#EF4444',
  statusCriticalHovered: '#DC2626',
  statusCritical2: '#FFE9E9',
  statusCritical2Hovered: '#FFD0D0',
}

const sporeDark = {
  none: 'transparent',

  white: colors.white,
  black: colors.black,
  scrim: colors.scrim,

  // Text — RapidDEX dark (§1.4 DESIGN_SYSTEM)
  neutral1: colors.white, // #FFF
  neutral1Hovered: '#F5F0FF', // brand-50 tinted
  neutral2: '#C1B8D9', // text-secondary
  neutral2Hovered: '#D4CDEA',
  neutral3: '#8A82A6', // text-tertiary
  neutral3Hovered: '#9F97BA',

  // Surface — RapidDEX dark spine (deep violet, never #000)
  surface1: '#0B0418', // --bg / brand-ink
  surface1Hovered: 'rgba(255,255,255,0.04)', // --surface-glass
  surface2: '#160A2E', // --bg-elevated / brand-950
  surface2Hovered: 'rgba(255,255,255,0.08)', // --surface-glass-hover
  surface3: 'rgba(255,255,255,0.10)', // --border-default
  surface3Solid: '#1F1340', // --bg-elevated-2
  surface3Hovered: 'rgba(255,255,255,0.18)', // --border-strong
  surface4: 'rgba(255,255,255,0.20)',
  surface5: 'rgba(255,255,255,0.06)', // --border-subtle

  // Brand (violet) — RapidDEX --brand-500 / 600 / 800 / 900
  accent1: '#8B5CF6',
  accent1Hovered: '#7C3AED',
  accent2: '#2E1065', // brand-900 surface
  accent2Hovered: '#4C1D95', // brand-800
  accent3: colors.white,
  accent3Hovered: '#F5F0FF',

  DEP_accentSoft: '#8B5CF633', // 20% violet
  DEP_blue400: '#4C82FB',

  statusSuccess: '#2FB344',
  statusSuccessHovered: '#3FCF55',
  statusSuccess2: '#0E2E16',
  statusSuccess2Hovered: '#143E1F',
  statusWarning: '#F3BA2F',
  statusWarningHovered: '#FFD24A',
  statusWarning2: '#3A2D08',
  statusWarning2Hovered: '#4E3B0A',
  statusCritical: '#EF4444',
  statusCriticalHovered: '#F56565',
  statusCritical2: '#3A0F12',
  statusCritical2Hovered: '#4E1417',
}

export const colorsLight = {
  none: 'transparent',

  white: sporeLight.white,
  black: sporeLight.black,
  scrim: sporeLight.scrim,

  neutral1: sporeLight.neutral1,
  neutral1Hovered: sporeLight.neutral1Hovered,
  neutral2: sporeLight.neutral2,
  neutral2Hovered: sporeLight.neutral2Hovered,
  neutral3: sporeLight.neutral3,
  neutral3Hovered: sporeLight.neutral3Hovered,

  surface1: sporeLight.surface1,
  surface1Hovered: sporeLight.surface1Hovered,
  surface2: sporeLight.surface2,
  surface2Hovered: sporeLight.surface2Hovered,
  surface3: sporeLight.surface3,
  surface3Solid: sporeLight.surface3Solid,
  surface3Hovered: sporeLight.surface3Hovered,
  surface4: sporeLight.surface4,
  surface5: sporeLight.surface5,

  accent1: sporeLight.accent1,
  accent1Hovered: sporeLight.accent1Hovered,
  accent2: sporeLight.accent2,
  accent2Hovered: sporeLight.accent2Hovered,
  accent3: sporeLight.accent3,
  accent3Hovered: sporeLight.accent3Hovered,

  DEP_accentSoft: sporeLight.DEP_accentSoft,
  DEP_blue400: sporeLight.DEP_blue400,

  statusSuccess: sporeLight.statusSuccess,
  statusSuccess2: sporeLight.statusSuccess2,
  statusCritical: sporeLight.statusCritical,
  statusCriticalHovered: sporeLight.statusCriticalHovered,
  statusCritical2: sporeLight.statusCritical2,
  statusCritical2Hovered: sporeLight.statusCritical2Hovered,
  statusWarning: sporeLight.statusWarning,
  statusWarning2: sporeLight.statusWarning2,

  DEP_backgroundBranded: '#FCF7FF',
  DEP_backgroundOverlay: opacifyRaw(60, colors.white),

  DEP_accentWarning: DEP_accentColors.goldVibrant,

  DEP_accentBranded: DEP_accentColors.magentaVibrant,
  DEP_shadowBranded: DEP_accentColors.magentaVibrant,

  DEP_accentSuccessSoft: opacifyRaw(24, DEP_accentColors.green400),
  DEP_accentWarningSoft: opacifyRaw(24, DEP_accentColors.goldVibrant),
  DEP_accentCriticalSoft: opacifyRaw(12, DEP_accentColors.red400),

  DEP_brandedAccentSoft: DEP_accentColors.magenta100,
  DEP_magentaDark: opacifyRaw(12, DEP_accentColors.magentaVibrant),

  DEP_fiatBanner: colors.fiatOnRampBanner,

  chain_1: sporeLight.neutral1,
  chain_10: networkColors.optimism.light,
  chain_137: networkColors.polygon.light,
  chain_42161: networkColors.arbitrum.light,
  chain_80001: networkColors.polygon.light,
  chain_8453: networkColors.base.light,
  chain_7777777: networkColors.zora.light,
  chain_81457: networkColors.blast.light,
  chain_56: networkColors.bnb.light,
  chain_42220: networkColors.celo.light,
  chain_43114: networkColors.avalanche.light,
  chain_324: networkColors.zksync.light,
  chain_480: networkColors.worldchain.light,

  // Testnets
  chain_11155111: networkColors.ethereum.light,
  chain_1301: networkColors.astrochain.light,
  chain_91562037: networkColors.mst.light,
}

export type ColorKeys = keyof typeof colorsLight

export const colorsDark = {
  none: 'transparent',

  white: sporeDark.white,
  black: sporeDark.black,

  surface1: sporeDark.surface1,
  surface1Hovered: sporeDark.surface1Hovered,
  surface2: sporeDark.surface2,
  surface2Hovered: sporeDark.surface2Hovered,
  surface3: sporeDark.surface3,
  surface3Solid: sporeDark.surface3Solid,
  surface3Hovered: sporeDark.surface3Hovered,
  surface4: sporeDark.surface4,
  surface5: sporeDark.surface5,

  scrim: sporeDark.scrim,

  neutral1: sporeDark.neutral1,
  neutral1Hovered: sporeDark.neutral1Hovered,
  neutral2: sporeDark.neutral2,
  neutral2Hovered: sporeDark.neutral2Hovered,
  neutral3: sporeDark.neutral3,
  neutral3Hovered: sporeDark.neutral3Hovered,

  accent1: sporeDark.accent1,
  accent1Hovered: sporeDark.accent1Hovered,
  accent2: sporeDark.accent2,
  accent2Hovered: sporeDark.accent2Hovered,
  accent3: sporeDark.accent3,
  accent3Hovered: sporeDark.accent3Hovered,

  DEP_accentSoft: sporeDark.DEP_accentSoft,
  DEP_blue400: sporeDark.DEP_blue400,

  statusSuccess: sporeDark.statusSuccess,
  statusSuccess2: sporeDark.statusSuccess2,
  statusCritical: sporeDark.statusCritical,
  statusCriticalHovered: sporeDark.statusCriticalHovered,
  statusCritical2: sporeDark.statusCritical2,
  statusCritical2Hovered: sporeDark.statusCritical2Hovered,
  statusWarning: sporeDark.statusWarning,
  statusWarning2: sporeDark.statusWarning2,

  DEP_backgroundBranded: '#100D1C',
  DEP_backgroundOverlay: opacifyRaw(10, colors.white),

  DEP_accentWarning: colors.yellowVibrant,

  DEP_accentBranded: DEP_accentColors.magentaVibrant,
  // TODO(MOB-160): accommodate one-off color in cleaner way
  DEP_shadowBranded: '#B60ACF',

  DEP_accentSuccessSoft: opacifyRaw(24, colors.greenVibrant),
  DEP_accentWarningSoft: opacifyRaw(24, colors.yellowBase),
  DEP_accentCriticalSoft: opacifyRaw(12, colors.redVibrant),

  DEP_brandedAccentSoft: '#46244F', // git blame Chelsy
  DEP_magentaDark: opacifyRaw(12, DEP_accentColors.magentaVibrant),

  DEP_fiatBanner: colors.fiatOnRampBanner,

  chain_1: sporeDark.neutral1,
  chain_10: networkColors.optimism.dark,
  chain_137: networkColors.polygon.dark,
  chain_42161: networkColors.arbitrum.dark,
  chain_80001: networkColors.polygon.dark,
  chain_8453: networkColors.base.dark,
  chain_7777777: networkColors.zora.dark,
  chain_81457: networkColors.blast.dark,
  chain_56: networkColors.bnb.dark,
  chain_42220: networkColors.celo.dark,
  chain_43114: networkColors.avalanche.dark,
  chain_324: networkColors.zksync.dark,
  chain_480: networkColors.worldchain.dark,

  // Testnets
  chain_11155111: networkColors.ethereum.dark,
  chain_1301: networkColors.astrochain.dark,
  chain_91562037: networkColors.mst.dark,
}
