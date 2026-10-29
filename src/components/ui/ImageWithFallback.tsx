import './ImageWithFallback.css'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
}

/** Keeps remote image failures from leaving empty or broken image boxes. */
export function ImageWithFallback({
  src,
  alt,
  className,
  loading = 'lazy',
  fetchPriority,
}: ImageWithFallbackProps) {
  const classes = ['image-with-fallback', className].filter(Boolean).join(' ')

  return (
    <>
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        className={classes}
        onError={(event) => {
          const image = event.currentTarget
          image.hidden = true
          image.nextElementSibling?.removeAttribute('hidden')
        }}
      />
      <span className={['image-fallback', className].filter(Boolean).join(' ')} hidden aria-hidden="true">
        Photo temporarily unavailable
      </span>
    </>
  )
}
