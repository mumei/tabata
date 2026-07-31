/// <reference types="vite/client" />

declare module '*?preset=img&src' {
  const src: string
  export default src
}

declare module '*?preset=img&srcset' {
  const srcset: string
  export default srcset
}

declare module '*?preset=img&format=webp&srcset' {
  const srcset: string
  export default srcset
}
