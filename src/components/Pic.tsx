type Props = {
  pic: Picture
  alt: string
  sizes?: string
  eager?: boolean
  className?: string
}

/** Responsive <picture>: WebP srcset + JPG fallback, intrinsic size reserved to avoid layout shift. */
export function Pic({ pic, alt, sizes = '(min-width: 768px) 50vw, 100vw', eager, className }: Props) {
  return (
    <picture>
      {Object.entries(pic.sources)
        .filter(([format]) => format !== 'jpeg' && format !== 'jpg')
        .map(([format, srcset]) => (
          <source key={format} type={`image/${format}`} srcSet={srcset} sizes={sizes} />
        ))}
      <img
        src={pic.img.src}
        width={pic.img.w}
        height={pic.img.h}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={eager ? 'high' : undefined}
        className={className}
      />
    </picture>
  )
}
