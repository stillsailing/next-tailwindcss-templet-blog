'use client'

import { useEffect } from 'react'
import { Workbox } from 'workbox-window'

function register() {
  window.addEventListener('load', async () => {
    if ('serviceWorker' in navigator) {
      try {
        const wb = new Workbox("/service_worker.js", { scope: "/" })
        await wb.register()
        console.info('service_worker register successful')
      } catch (error) {
        console.warn('service_worker register failed!')
      }
    }
  })
}

const Register = () => {
  useEffect(() => {
    register()
  }, [])
  return null
}

export default Register