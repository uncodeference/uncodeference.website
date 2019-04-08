interface CSSModule {
  [className: string]: string
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}

// type shims for Images, JSON data and SVGs

declare module '*.png'
declare module '*.jpg'
declare module '*.json'
declare module '*.svg'

// type shims for react plugins without types

declare module 'react-anchor-link-smooth-scroll' {
  export interface AnchorLinkProps {
    /** the id of the element you want to scroll to */
    href: string

    /** the amount of pixels from the top */
    offset?: number | string | (() => number | string)
  }

  export default class AnchorLink extends React.Component<AnchorLinkProps, any> {}
}
