import { clsx, ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'


/**
 * Handles interpreting and merging tailwind classes
 * 
 * A higher index in the array will take precedence
 * * i.e. where 2 classes `a` and `b` conflict, the result would be class `b`
 * 
 * @param inputs Tailwind classvalues
 * @returns Merged tailwind classstring
 */
export const cn = ( ...inputs: ClassValue[] ): string => {
  return twMerge(clsx(inputs))
}
