import { useEffect } from 'react'
import { noop } from './noop'

export interface UseScriptProps {
  src: string | null
  id?: string
  async?: boolean
  defer?: boolean
  onLoad?: () => void
  onError?: () => void
}

export const useScript = ({
  src,
  async,
  defer,
  onError,
  onLoad,
}: UseScriptProps) => {
  useEffect(() => {
    if (!src) {
      return noop
    }

    const isScriptExist = document.querySelector(`script[src="${src}"]`)
    if (isScriptExist) {
      return noop
    }

    const script = document.createElement('script')
    script.src = src
    script.async = !!async
    script.defer = !!defer
    if (onLoad && typeof onLoad === 'function') {
      script.onload = onLoad
    }
    if (onError && typeof onError === 'function') {
      script.onerror = onError
    }

    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [async, defer, onError, onLoad, src])
}
