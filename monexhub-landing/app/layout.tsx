import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import { MarkSprite } from '@/components/Mark'
import './globals.css'

// Archivo variável (peso e largura), auto-hospedada pelo next/font: sem requisição ao Google em tempo de execução.
const archivo = Archivo({
    subsets: ['latin'],
    axes: ['wdth'],
    display: 'swap',
    variable: '--font-archivo'
})

export const metadata: Metadata = {
    title: 'MonexHub | Crédito empresarial estruturado a partir de R$ 250 mil',
    description:
        'A MonexHub estrutura alternativas de crédito empresarial a partir de R$ 250 mil, conectando cada empresa à linha mais adequada ao seu objetivo, faturamento, capacidade de pagamento e disponibilidade de garantias.'
}

export const viewport: Viewport = {
    themeColor: '#082349',
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" className={archivo.variable}>
            <body>
                <MarkSprite />
                {children}
            </body>
        </html>
    )
}
