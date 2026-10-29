import { useEffect } from 'react'

const STORE_NAME = 'Selin Baby Store'

/** Sets the browser tab title, e.g. "Cart | Selin Baby Store". */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${STORE_NAME}` : STORE_NAME
  }, [title])
}
