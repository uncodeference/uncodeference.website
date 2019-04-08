import { dimensions } from './variables'
import { MarginProperty, UserSelectProperty, TextTransformProperty, FontSizeProperty } from 'csstype'
import { CSSPropertiesWithMultiValues } from '@emotion/serialize'

type TLength = number | string

export const getEmSize = (size: number) => size / dimensions.fontSize.regular

export const scale = (minimum: number, anchor: number, growth: number) => `calc(${minimum}em + ${anchor}vmin + ${growth}vw)`

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
