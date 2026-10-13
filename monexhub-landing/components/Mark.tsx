/** Sprite SVG com o X da marca. Renderizado uma vez no layout. */
export function MarkSprite() {
    return (
        <svg className="sprite" aria-hidden="true" focusable="false" width="0" height="0">
            <defs>
                <linearGradient id="gx" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#47C7C6" />
                    <stop offset="100%" stopColor="#0C3160" />
                </linearGradient>
                <symbol id="markx" viewBox="0 0 100 100">
                    <path d="M0,7 L7,0 L48,42 L42,48 Z" fill="url(#gx)" />
                    <path d="M93,0 L100,7 L58,48 L52,42 Z" fill="url(#gx)" />
                    <path d="M100,93 L93,100 L52,58 L58,52 Z" fill="url(#gx)" />
                    <path d="M7,100 L0,93 L42,52 L48,58 Z" fill="url(#gx)" />
                </symbol>
                <symbol id="markx-solid" viewBox="0 0 100 100">
                    <path d="M0,7 L7,0 L48,42 L42,48 Z" />
                    <path d="M93,0 L100,7 L58,48 L52,42 Z" />
                    <path d="M100,93 L93,100 L52,58 L58,52 Z" />
                    <path d="M7,100 L0,93 L42,52 L48,58 Z" />
                </symbol>
            </defs>
        </svg>
    )
}

/** X grande decorativo, atrás do conteúdo das seções escuras. */
export function MarkTexture({ className }: { className: string }) {
    return (
        <svg className={`markx ${className}`} aria-hidden="true" focusable="false">
            <use href="#markx" />
        </svg>
    )
}

/**
 * Logo em versão branca.
 * PLACEHOLDER: montado com o X + nome em Archivo. Substituir pelo SVG oficial da marca.
 */
export function Logo() {
    return (
        <span className="logo" role="img" aria-label="MonexHub">
            <svg className="logo__mark" aria-hidden="true" focusable="false">
                <use href="#markx-solid" />
            </svg>
            <span className="logo__word" aria-hidden="true">
                MonexHub
            </span>
        </span>
    )
}
