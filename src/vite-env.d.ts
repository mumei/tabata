/// <reference types="vite/client" />

declare module '*?w=1280&format=jpeg&quality=100' {
  const src: string
  export default src
}

declare module '*?w=320;640;1280&format=jpeg&quality=100&as=srcset' {
  const srcset: string
  export default srcset
}

declare module '*?w=320;640;1280&format=webp&quality=100&as=srcset' {
  const srcset: string
  export default srcset
}
