import { useEffect, useLayoutEffect } from 'react'

export const useBetterEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect
