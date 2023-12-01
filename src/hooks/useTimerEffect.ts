import { useEffect, useRef } from 'react'

type TimerEffectCallback = () => void

const useTimerEffect = (callback: TimerEffectCallback, interval: number, dependencies?: any[]) => {
  const savedCallback = useRef<TimerEffectCallback | null>(null)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current()
      }
    }

    const id = setInterval(tick, interval)

    return () => clearInterval(id)
  }, [interval, ...(dependencies || [])])
}

export default useTimerEffect
