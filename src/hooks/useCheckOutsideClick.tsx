import { ReactNode, useEffect, useRef } from "react"

type OutsideClickProps = {
  children: ReactNode
  style?: string
  handler: () => void
}

export function useCheckOutsideClick({
  children,
  style,
  handler,
}: OutsideClickProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as any)
      ) {
        handler()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapperRef, handler])
  return (
    <div className={`${style}`} ref={wrapperRef}>
      {children}
    </div>
  )
}
