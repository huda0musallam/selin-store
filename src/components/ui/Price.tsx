import { formatPrice } from '../../utils/formatPrice.ts'
import './Price.css'

interface PriceProps {
  price: number
  originalPrice?: number
}

export function Price({ price, originalPrice }: PriceProps) {
  const isOnSale = originalPrice !== undefined && originalPrice > price

  if (!isOnSale) {
    return <p className="price">{formatPrice(price)}</p>
  }

  return (
    <p className="price">
      <span className="price__current price__current--sale">
        <span className="visually-hidden">Sale price </span>
        {formatPrice(price)}
      </span>{' '}
      <s className="price__original">
        <span className="visually-hidden">Original price </span>
        {formatPrice(originalPrice)}
      </s>
    </p>
  )
}
