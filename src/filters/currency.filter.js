export default function currencyFilter(value,currency = 'KGS') {
  return new Intl.NumberFormat('ru-RU',{
    style:'currency',
    currency
  }).format(value)
}
