/// <reference types="vite/client" />

/** Output of vite-imagetools `as=picture` (see the `?pic` directive in vite.config.ts). */
type Picture = {
  sources: Record<string, string>
  img: { src: string; w: number; h: number }
}

declare module '*?pic' {
  const picture: Picture
  export default picture
}
