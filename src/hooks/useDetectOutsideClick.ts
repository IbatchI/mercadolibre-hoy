import { useState, useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDetectOutsideClick = (el: React.MutableRefObject<any>, initialState: boolean) => {
  const [isActive, setIsActive] = useState<boolean>(initialState)

  const handleIsActive = () => setIsActive(!isActive)

  useEffect(() => {
    const onClick = (evt: MouseEvent) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(evt.target)) {
        setIsActive(!isActive)
      }
    }

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener('click', onClick)
    }

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [isActive, el])

  return [isActive, handleIsActive]
}
