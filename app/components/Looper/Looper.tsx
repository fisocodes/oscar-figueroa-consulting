import React, { useEffect, useRef } from 'react'

interface LooperProps {
  children: React.ReactElement[]
}

export function Looper ({ children }: LooperProps): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null)

  function hideElement (element: Element): void {
    element.classList.remove('block')
    element.classList.add('hidden')
  }

  function showElement (element: Element): void {
    element.classList.remove('hidden')
    element.classList.add('block')
  }

  function switchElement (element: Element): void {
    if (element.previousElementSibling != null) {
      hideElement(element.previousElementSibling)
    } else {
      if (element.parentElement !== null) {
        if (element.parentElement.lastElementChild !== null) { hideElement(element.parentElement.lastElementChild) }
      }
    }
    showElement(element)
  }

  function setSwitchTimeout (element: Element, index: number): void {
    setTimeout(() => switchElement(element), index * 5000)
  }

  function startSwitching (): void {
    if (ref.current !== null) { Array.from(ref.current.children).forEach(setSwitchTimeout) }
  }

  useEffect(() => {
    if (ref.current !== null) {
      startSwitching()

      const interval = setInterval(startSwitching, ref.current.children.length * 5000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [])

  return <div ref={ref}>{children.map((child, index) => <div key={index} className='hidden'>{child}</div>)}</div>
}
