import createCache from '@emotion/cache'

export const createEmotionCache = () => {
  return createCache({ key: 'css' })
}

export const isPhone = (s) => {
  return /^1[0-9]{10}$/.test(s)
}

export const isEmail = (s) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

export function isAndroid() {
  if (typeof window !== `undefined`) {
    return /Android/i.test(navigator.userAgent)
  }
  return null
}

export function isWechat() {
  if (typeof window !== `undefined`) {
    return /micromessenger/.test(navigator.userAgent.toLowerCase())
  }
  return null
}
