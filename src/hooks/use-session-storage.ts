// "use client"

// import { useState, useEffect } from "react"

// const SESSION_STORAGE_PREFIX = "ai-steve-"
// const SESSION_EXPIRY_TIME = 7 * 60 * 60 * 1000 // 7 hours in milliseconds

// interface StorageData<T> {
//   data: T
//   timestamp: number
// }

// export function useSessionStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
//   const storageKey = `${SESSION_STORAGE_PREFIX}${key}`
//   const [storedValue, setStoredValue] = useState<T>(initialValue)
//   const [isClient, setIsClient] = useState(false)

//   // Initialize from session storage on client side
//   useEffect(() => {
//     setIsClient(true)
//     try {
//       const item = sessionStorage.getItem(storageKey)
//       if (item) {
//         const parsed: StorageData<T> = JSON.parse(item)
//         const now = Date.now()
//         const isExpired = now - parsed.timestamp > SESSION_EXPIRY_TIME

//         if (isExpired) {
//           sessionStorage.removeItem(storageKey)
//           setStoredValue(initialValue)
//         } else {
//           setStoredValue(parsed.data)
//         }
//       }
//     } catch (error) {
//       console.error(`Error reading from session storage: ${storageKey}`, error)
//     }
//   }, [storageKey])

//   // Save to session storage whenever value changes
//   const setValue = (value: T) => {
//     try {
//       setStoredValue(value)
//       if (isClient) {
//         const storageData: StorageData<T> = {
//           data: value,
//           timestamp: Date.now(),
//         }
//         sessionStorage.setItem(storageKey, JSON.stringify(storageData))
//       }
//     } catch (error) {
//       console.error(`Error writing to session storage: ${storageKey}`, error)
//     }
//   }

//   return [storedValue, setValue]
// }


"use client"

import { useState, useEffect } from "react"

const SESSION_STORAGE_PREFIX = "ai-steve-"
const SESSION_EXPIRY_TIME = 7 * 60 * 60 * 1000 // 7 hours in milliseconds

interface StorageData<T> {
  data: T
  timestamp: number
}

export function useSessionStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const storageKey = `${SESSION_STORAGE_PREFIX}${key}`
  const [storedValue, setStoredValue] = useState<T>(initialValue)
  const [isClient, setIsClient] = useState(false)

  // Initialize from session storage on client side
  // Initialize from session storage on client side
  useEffect(() => {
    setIsClient(true)
    try {
      const item = sessionStorage.getItem(storageKey)
      if (item) {
        const parsed: StorageData<T> = JSON.parse(item)
        const now = Date.now()
        const isExpired = now - parsed.timestamp > SESSION_EXPIRY_TIME

        if (isExpired) {
          sessionStorage.removeItem(storageKey)
          setStoredValue(initialValue)
        } else {
          setStoredValue(parsed.data)
        }
      }
    } catch (error) {
      console.error(`Error reading from session storage: ${storageKey}`, error)
    }
      // ✅ only run on mount or key change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey])

  // Save to session storage whenever value changes
  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      if (isClient) {
        const storageData: StorageData<T> = {
          data: value,
          timestamp: Date.now(),
        }
        sessionStorage.setItem(storageKey, JSON.stringify(storageData))
      }
    } catch (error) {
      console.error(`Error writing to session storage: ${storageKey}`, error)
    }
  }

  return [storedValue, setValue]
}
