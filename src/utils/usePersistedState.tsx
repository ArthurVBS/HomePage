import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    // if (typeof window !== 'undefined') {
    //   const storageValue = localStorage.getItem(key)

    //   if (storageValue) {
    //     if (storageValue !== undefined) {
    //       return JSON.parse(storageValue)
    //     }
    //   }
    //   return initialState
    // }
    return initialState
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
}

export default usePersistedState
