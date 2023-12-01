import { useEffect, useState } from 'react'

export type UseScriptStatus = 'idle' | 'loading' | 'ready' | 'error'

export interface UseScriptOptions {
  shouldPreventLoad?: boolean
  removeOnUnmount?: boolean
}

const cachedScriptStatuses: Record<string, UseScriptStatus | undefined> = {}

function getScriptNode(src: string) {
  const node: HTMLScriptElement | null = document.querySelector(
    `script[src="${src}"]`,
  )
  const status = node?.getAttribute('data-status') as
    | UseScriptStatus
    | undefined

  return {
    node,
    status,
  }
}

function useScript(
  src: string | null,
  options?: UseScriptOptions,
): UseScriptStatus {
  const [status, setStatus] = useState<UseScriptStatus>(() => {
    if (!src || options?.shouldPreventLoad) {
      return 'idle'
    }

    if (typeof window === 'undefined') {
      return 'loading'
    }

    return cachedScriptStatuses[src] ?? 'loading'
  })

  useEffect(() => {
    if (!src || options?.shouldPreventLoad) {
      return
    }

    const cachedScriptStatus = cachedScriptStatuses[src]
    if (cachedScriptStatus === 'ready' || cachedScriptStatus === 'error') {
      setStatus(cachedScriptStatus)
      return
    }

    const script = getScriptNode(src)
    let scriptNode = script.node

    if (!scriptNode) {
      scriptNode = document.createElement('script')
      scriptNode.src = src
      scriptNode.async = true
      scriptNode.setAttribute('data-status', 'loading')
      document.body.appendChild(scriptNode)

      const setAttributeFromEvent = (event: Event) => {
        const scriptStatus: UseScriptStatus =
          event.type === 'load' ? 'ready' : 'error'

        scriptNode?.setAttribute('data-status', scriptStatus)
      }

      scriptNode.addEventListener('load', setAttributeFromEvent)
      scriptNode.addEventListener('error', setAttributeFromEvent)
    } else {
      setStatus(script.status ?? cachedScriptStatus ?? 'loading')
    }

    const setStateFromEvent = (event: Event) => {
      const newStatus = event.type === 'load' ? 'ready' : 'error'
      setStatus(newStatus)
      cachedScriptStatuses[src] = newStatus
    }

    scriptNode.addEventListener('load', setStateFromEvent)
    scriptNode.addEventListener('error', setStateFromEvent)

    return () => {
      if (scriptNode) {
        scriptNode.removeEventListener('load', setStateFromEvent)
        scriptNode.removeEventListener('error', setStateFromEvent)
      }

      if (scriptNode && options?.removeOnUnmount) {
        scriptNode.remove()
      }
    }
  }, [src, options?.shouldPreventLoad, options?.removeOnUnmount])

  return status
}

export default useScript
