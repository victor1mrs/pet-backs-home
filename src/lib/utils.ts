import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  oprtions: {
    currency?: "USD" | "EUR" | "UYU",
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  const { currency = 'USD', notation= 'compact'} = oprtions
  const numericPrice =  typeof price === 'string' ? parseFloat(price) : price

  return new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}
