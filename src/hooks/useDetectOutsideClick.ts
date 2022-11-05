import { useEffect } from 'react'

export const useDetectOutsideClick = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  el: React.MutableRefObject<any>,
  handleOnClickOut: () => void,
  isActive: boolean
) => {
  useEffect(() => {
    const onClick = (evt: MouseEvent) => {
      // If the active element exists and is clicked outside of
      // we exectute the handle
      if (el.current !== null && !el.current.contains(evt.target)) {
        handleOnClickOut()
      }
    }

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener('click', onClick)
    }

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [el, isActive])
}
