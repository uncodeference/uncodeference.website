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
