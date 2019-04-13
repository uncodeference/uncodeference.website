import { dimensions } from './variables'
import { MarginProperty, UserSelectProperty, TextTransformProperty, FontSizeProperty } from 'csstype'
import { CSSPropertiesWithMultiValues } from '@emotion/serialize'

type TLength = number | string

export const getEmSize = (size: number) => size / dimensions.fontSize.regular

const minimumScale = {
  xxs: 0.1,
  xs: 0.3,
  s: 0.6,
  m: 1,
  l: 1.6,
  xl: 2,
}

const anchorScale = {
  none: 0,
  normal: 0.6,
}

const growthScale = {
  dontGrow: 0,
  growSlow: 0.8,
  growNormal: 1.4,
  growFast: 1.8,
}

export const scale = (
  minimum: keyof typeof minimumScale,
  anchor: keyof typeof anchorScale = 'normal',
  growth: keyof typeof growthScale = 'growNormal'
) => `calc(${minimumScale[minimum]}em + ${anchorScale[anchor]}vmin + ${growthScale[growth]}vw)`
export const scaleCustom = (minimum: number, anchor: number, growth: number) => `calc(${minimum}em + ${anchor}vmin + ${growth}vw)`

const growFactors = {
  slow: { anchor: 0.3, growth: 0.9 },
  normal: { anchor: 0.6, growth: 1.4 },
  fast: { anchor: 0.9, growth: 1.9 },
}

type GrowFactors = keyof typeof growFactors

export const grow: { [key in GrowFactors]: { grow: GrowFactors } } = {
  slow: { grow: 'slow' },
  normal: { grow: 'normal' },
  fast: { grow: 'fast' },
}

// tslint:disable-next-line: no-shadowed-variable
export const scaleEm = (em: number, { grow }: { grow: GrowFactors } = { grow: 'normal' }) => {
  const { anchor, growth } = growFactors[grow]
  const vmin = 375 / 100
  return `calc(${em}em + ${anchor}vmin + ${growth}vw - ${vmin * (anchor + growth)}px)`
}

export const userSelect = (value: UserSelectProperty | UserSelectProperty[]): CSSPropertiesWithMultiValues => ({
  userSelect: value,
})

export const textTransform = (value: TextTransformProperty | TextTransformProperty[]): CSSPropertiesWithMultiValues => ({
  textTransform: value,
})

export const fontSize = (value: FontSizeProperty<TLength> | FontSizeProperty<TLength>[]): CSSPropertiesWithMultiValues => ({
  fontSize: value,
})

export const marginX = (margin: MarginProperty<TLength> | MarginProperty<TLength>[]): CSSPropertiesWithMultiValues => ({
  marginLeft: margin,
  marginRight: margin,
})

export const marginY = (margin: MarginProperty<TLength> | MarginProperty<TLength>[]): CSSPropertiesWithMultiValues => ({
  marginTop: margin,
  marginBottom: margin,
})
