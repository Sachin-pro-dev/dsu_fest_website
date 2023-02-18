/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react"

function useOnScreen(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false)
    const observer = useMemo(() => new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    ), [ref])
    useEffect(() => {
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])
    return isIntersecting
}

export default useOnScreen