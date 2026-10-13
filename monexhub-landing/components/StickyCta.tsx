'use client'

import { useEffect, useState } from 'react'
import CtaButton from './CtaButton'

/** Barra fixa (telas < 700px). Só aparece depois que o hero sai da tela. */
export default function StickyCta({ heroId }: { heroId: string }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const hero = document.getElementById(heroId)
        if (!hero || !('IntersectionObserver' in window)) return
        const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0 })
        io.observe(hero)
        return () => io.disconnect()
    }, [heroId])

    return (
        <div className="sticky-cta" data-visible={visible} aria-hidden={!visible}>
            <CtaButton location="barra_fixa" className="btn btn--block" tabIndex={visible ? undefined : -1} />
        </div>
    )
}
