// Parâmetros de campanha repassados da landing para o formulário.
// Qualquer utm_* também é repassado, mesmo que não esteja nesta lista.
const CAMPAIGN_PARAMS = new Set([
    'gclid',
    'gbraid',
    'wbraid',
    'gad_source',
    'gad_campaignid',
    'fbclid',
    'msclkid',
    'ttclid',
    'li_fat_id',
    'src',
    'ref'
])

function isCampaignParam(key: string) {
    const k = key.toLowerCase()
    return k.startsWith('utm_') || CAMPAIGN_PARAMS.has(k)
}

/** Monta a URL do formulário com os parâmetros de campanha da URL atual. */
export function buildFormUrl(base: string, search: string): string {
    let url: URL
    try {
        url = new URL(base)
    } catch {
        return base
    }
    const current = new URLSearchParams(search)
    current.forEach((value, key) => {
        // Não sobrescreve o que já vem fixo na URL do formulário.
        if (isCampaignParam(key) && value && !url.searchParams.has(key)) {
            url.searchParams.set(key, value)
        }
    })
    return url.toString()
}

type Win = Window & {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
}

/**
 * Evento intermediário de clique no botão (passagem página > formulário).
 * A conversão em si é disparada no envio do formulário, não aqui.
 */
export function trackCtaClick(location: string) {
    const w = window as Win
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({ event: 'cta_diagnostico_click', cta_location: location })
    if (typeof w.gtag === 'function') {
        w.gtag('event', 'cta_diagnostico_click', { cta_location: location, transport_type: 'beacon' })
    }
    if (typeof w.fbq === 'function') {
        w.fbq('trackCustom', 'CtaDiagnosticoClick', { cta_location: location })
    }
}
