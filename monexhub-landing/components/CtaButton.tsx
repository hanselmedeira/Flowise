'use client'

import { useEffect, useState } from 'react'
import { CTA_LABEL, FORM_URL } from '@/lib/config'
import { buildFormUrl, trackCtaClick } from '@/lib/tracking'

type Props = {
    location: string
    className?: string
    tabIndex?: number
}

export default function CtaButton({ location, className = 'btn', tabIndex }: Props) {
    const [href, setHref] = useState(FORM_URL)

    // Atualiza o href já no carregamento, para que abrir em nova aba também leve os parâmetros.
    useEffect(() => {
        setHref(buildFormUrl(FORM_URL, window.location.search))
    }, [])

    return (
        <a
            className={className}
            href={href}
            tabIndex={tabIndex}
            onClick={(e) => {
                trackCtaClick(location)
                e.currentTarget.href = buildFormUrl(FORM_URL, window.location.search)
            }}
        >
            {CTA_LABEL}
        </a>
    )
}
