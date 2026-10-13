# MonexHub · Landing page

Next.js (App Router) + TypeScript, CSS puro com variáveis. Página única, estática, pronta para a Vercel.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção (página 100% estática)
```

Na Vercel, defina **Root Directory** como `monexhub-landing`.

## Variáveis de ambiente

| Variável | Uso |
|---|---|
| `NEXT_PUBLIC_FORM_URL` | URL do formulário de triagem (destino dos botões). Hoje é um placeholder. |
| `NEXT_PUBLIC_PRIVACY_URL` | URL da política de privacidade. |

## Rastreamento

- **Repasse de parâmetros**: todo `utm_*` e os IDs de clique (`gclid`, `gbraid`, `wbraid`, `gad_source`, `gad_campaignid`, `fbclid`, `msclkid`, `ttclid`, `li_fat_id`, `src`, `ref`) presentes na URL da landing são anexados ao link do formulário. O `href` é atualizado no carregamento, então abrir em nova aba também preserva a origem. A lista fica em `lib/tracking.ts`.
- **Evento intermediário**: cada clique em botão faz `dataLayer.push({ event: 'cta_diagnostico_click', cta_location })`, com `cta_location` = `topo`, `criterios`, `fechamento` ou `barra_fixa`. Se `gtag` ou `fbq` estiverem carregados, o evento também é enviado para eles. A conversão acontece no envio do formulário, não aqui.
- A página não carrega GTM nem pixels. Ao instalar, configure no GTM um gatilho de evento personalizado `cta_diagnostico_click`.

## Pendências

- **Logo**: `components/Mark.tsx` monta um logo provisório (X + nome em Archivo). Substituir pelo SVG oficial em versão branca.
- URLs reais do formulário e da política de privacidade.
