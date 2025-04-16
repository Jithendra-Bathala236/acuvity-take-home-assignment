import { useEffect, useState } from "react"

/**
 * Similar to `useState` but its initial state will come from the local storage,
 * and each state update will be persisted to the local storage.
 * Note that it doesn't listen to the local storage for changes.
 */
export function useLocalState<T extends string = string>(
  defaultState: T,
  name: string
): [T, (state: T) => void] {
  const [state, setState] = useState(
    (localStorage.getItem(name) as T) || defaultState
  )
  useEffect(() => {
    localStorage.setItem(name, state)
  }, [state])
  return [state, setState]
}
