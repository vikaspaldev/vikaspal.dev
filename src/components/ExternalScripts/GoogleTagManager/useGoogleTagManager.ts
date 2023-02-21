import { useScript } from '@/utils/useScript'
import { getGTMId } from './constants'

function getGTMUrl() {
  const id = getGTMId()
  if (!id) {
    return null
  }
  return `https://www.googletagmanager.com/gtag/js?id=${id}`
}

export const useGoogleTagManager = () => {
  useScript({
    src: getGTMUrl(),
    id: 'google-tag-manager',
    onLoad: () => {
      window.dataLayer = window.dataLayer || []

      function gtag(...args: any) {
        window.dataLayer.push(args)
      }

      // @ts-ignore
      gtag('js', new Date())
      // @ts-ignore
      gtag('config', getGTMId())
    },
  })
}
