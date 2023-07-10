import {
  useState,
  useLayoutEffect,
  ReactNode,
  Ref,
  ReactElement,
  MutableRefObject,
} from "react"

export function useFollowPointer(ref: MutableRefObject<null>) {
  const [point, setPoint] = useState({ x: 0, y: 0 })

  useLayoutEffect(() => {
    if (!ref?.current) return

    const handlePointerMove = ({
      clientX,
      clientY,
    }: {
      clientX: number
      clientY: number
    }) => {
      const element = ref.current

      if (!element) return

      const x =
        clientX -
        (element as HTMLElement).offsetLeft -
        (element as HTMLElement).offsetWidth / 2
      const y =
        clientY -
        (element as HTMLElement).offsetTop -
        (element as HTMLElement).offsetHeight / 2
      setPoint({ x, y })
    }

    window.addEventListener("pointermove", handlePointerMove)

    return () => window.removeEventListener("pointermove", handlePointerMove)
  }, [ref])

  return point
}
