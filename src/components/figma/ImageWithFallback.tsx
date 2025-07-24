import React from "react"

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string
}

const ImageWithFallback = React.forwardRef<HTMLImageElement, ImageWithFallbackProps>(
  ({ className = "", fallback = "", onError, ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false)

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setHasError(true)
      if (onError) {
        onError(e)
      }
    }

    if (hasError && fallback) {
      return (
        <img
          ref={ref}
          className={className}
          src={fallback}
          {...props}
        />
      )
    }

    return (
      <img
        ref={ref}
        className={className}
        onError={handleError}
        {...props}
      />
    )
  }
)
ImageWithFallback.displayName = "ImageWithFallback"

export { ImageWithFallback }
