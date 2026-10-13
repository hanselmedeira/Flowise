import CtaButton from '@/components/CtaButton'
import StickyCta from '@/components/StickyCta'
import { Logo, MarkTexture } from '@/components/Mark'
import { CTA_NOTE, PRIVACY_URL } from '@/lib/config'

const situacoes = [
    {
        title: 'O banco aprovou menos do que a empresa pediu',
        text: 'Muita empresa saudável recebe menos do que precisava só por não ter um imóvel livre para dar em garantia. Existem linhas em que um fundo garantidor assume esse papel.'
    },
    {
        title: 'As parcelas dos empréstimos consomem o caixa do mês',
        text: 'Várias dívidas curtas e caras podem ser reorganizadas em uma única operação longa, com parcela menor.'
    },
    {
        title: 'A empresa vende a prazo e paga fornecedor à vista',
        text: 'O dinheiro já é da empresa, só ainda não chegou. Existem estruturas para antecipar esse ciclo sem comprometer o limite bancário.'
    },
    {
        title: 'É hora de crescer sem usar o capital de giro',
        text: 'Máquina, frota, obra e expansão têm linhas próprias, com prazo e carência que o giro não tem.'
    },
    {
        title: 'A empresa tem restrição cadastral e nada é aprovado',
        text: 'Quando a análise não pode recair sobre a empresa, existe estrutura em que ela recai sobre o imóvel.'
    }
]

const pilares = [
    {
        title: 'Multibancos',
        text: 'Mais de 25 bancos, fundos e fintechs conectados. A análise não fica limitada ao portfólio de uma única instituição.'
    },
    {
        title: 'Diagnóstico antes do produto',
        text: 'Primeiro entendemos objetivo, faturamento, capacidade de pagamento e garantias. A linha é consequência disso, não o ponto de partida.'
    },
    {
        title: 'Estruturação completa',
        text: 'Da análise do perfil à montagem da operação, acompanhando o processo junto à instituição até a captação.'
    }
]

const linhas = [
    {
        name: 'Pronampe',
        text: 'Capital de giro com aval de fundo garantidor, para empresas de até R$ 4,8 milhões de faturamento anual, sem exigir garantia real'
    },
    {
        name: 'FGI',
        text: 'Mesma lógica, com aval do BNDES, para empresas de maior porte e operações de até R$ 10 milhões'
    },
    {
        name: 'Garantia de imóvel',
        text: 'Operações longas com taxa menor, para reorganizar dívidas ou injetar capital estrutural'
    },
    {
        name: 'BNDES Finame e FINEM',
        text: 'Financiamento de máquinas, equipamentos e projetos de expansão, com prazo e carência próprios'
    },
    {
        name: 'Antecipação de recebíveis',
        text: 'Adiantamento de valores a receber, com ou sem coobrigação, conforme o perfil do pagador'
    },
    {
        name: 'Consórcio estruturado',
        text: 'Aquisição planejada de ativos sem registrar endividamento durante a fase de acumulação'
    }
]

const criterios = [
    { value: 'R$ 1,2 mi', text: 'de faturamento anual, no mínimo' },
    { value: '2 anos', text: 'de exercício fechado, no mínimo' },
    { value: 'R$ 250 mil', text: 'de captação pretendida, a partir de' },
    { value: 'DRE e balanço', text: 'mais relatórios cadastrais da empresa e dos sócios' }
]

const etapas = [
    {
        title: 'Diagnóstico',
        text: 'Um questionário rápido identifica porte, objetivo, garantias disponíveis e situação cadastral da empresa.'
    },
    {
        title: 'Análise',
        text: 'Com o cenário em mãos, avaliamos quais linhas o perfil da empresa realmente acessa e qual delas faz mais sentido para o objetivo.'
    },
    {
        title: 'Estruturação',
        text: 'A operação é montada e apresentada às instituições com maior aderência ao caso, em vez de uma única tentativa isolada.'
    },
    {
        title: 'Captação',
        text: 'Acompanhamos o processo até a liberação, com a empresa sabendo em que etapa está a cada momento.'
    }
]

const faq = [
    {
        q: 'A MonexHub é um banco?',
        a: 'Não. A MonexHub é um hub de soluções financeiras que conecta empresas a bancos, fundos e fintechs. A operação é contratada com a instituição, e a MonexHub estrutura e acompanha o processo.'
    },
    {
        q: 'Como funciona a remuneração?',
        a: 'O modelo depende da complexidade da operação. Na maior parte dos casos, a MonexHub é remunerada por uma taxa de sucesso sobre o valor efetivamente captado, ou seja, só há cobrança quando a captação acontece. Operações que exigem trabalho de estruturação mais profundo podem envolver também um valor de consultoria. O formato é apresentado na primeira conversa, antes de qualquer envio de documentação.'
    },
    {
        q: 'Quanto tempo leva?',
        a: 'Depende da linha e da organização documental da empresa. Operações com aval de fundo garantidor costumam ser mais rápidas que operações com garantia real, que envolvem avaliação de imóvel.'
    },
    {
        q: 'A empresa tem restrição cadastral. Ainda assim existe caminho?',
        a: 'Em alguns casos sim. Quando a análise não pode recair sobre a empresa, existem estruturas em que ela recai sobre o imóvel. O diagnóstico identifica se é o caso.'
    },
    {
        q: 'Vocês garantem a aprovação?',
        a: 'Não. A decisão é sempre da instituição financeira. O que a MonexHub faz é aumentar as chances, apresentando a operação às instituições certas e no formato que elas analisam.'
    },
    {
        q: 'Precisa ter imóvel?',
        a: 'Não necessariamente. Pronampe e FGI não exigem garantia real, justamente porque um fundo garantidor assume esse papel.'
    }
]

function Cta({ location }: { location: string }) {
    return (
        <div className="cta">
            <CtaButton location={location} />
            <p className="cta__note">{CTA_NOTE}</p>
        </div>
    )
}

export default function Page() {
    return (
        <>
            <header className="site-header">
                <div className="wrap">
                    <Logo />
                </div>
            </header>

            <main>
            {/* 1 · Topo */}
            <section className="hero dark" id="topo" aria-labelledby="topo-t">
                <MarkTexture className="markx--hero" />
                <div className="wrap hero__body">
                    <h1 className="display" id="topo-t">Seu banco te deu uma resposta. O mercado tem outras.</h1>
                    <p className="lead">
                        A MonexHub estrutura alternativas de crédito empresarial a partir de R$ 250 mil, conectando cada empresa à
                        linha mais adequada ao seu objetivo, faturamento, capacidade de pagamento e disponibilidade de garantias.
                    </p>
                    <Cta location="topo" />
                    <p className="proof">
                        <span className="proof__num">25+</span>
                        <span className="proof__text">bancos, fundos e fintechs conectados em um só lugar</span>
                    </p>
                </div>
            </section>

            {/* 2 · Situações */}
            <section className="section" aria-labelledby="situacoes-t">
                <div className="wrap">
                    <h2 id="situacoes-t">Em que ponto sua empresa está hoje?</h2>
                    <p className="sub">Situações diferentes pedem linhas diferentes. Veja qual se parece com a sua.</p>
                    <ul className="path">
                        {situacoes.map((s) => (
                            <li key={s.title} className="path__item">
                                <h3>{s.title}</h3>
                                <p>{s.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 3 · O modelo */}
            <section className="section section--alt" aria-labelledby="modelo-t">
                <div className="wrap">
                    <div className="split">
                        <h2 id="modelo-t" className="statement">
                            A MonexHub não é uma instituição financeira
                        </h2>
                        <div className="prose">
                            <p>Um banco só pode oferecer o que ele tem. A MonexHub olha o mercado e encontra novas possibilidades.</p>
                            <p>
                                Isso muda a pergunta. Em vez de quanto esse banco libera, a pergunta passa a ser qual solução resolve o
                                caso da sua empresa, e qual instituição oferece a melhor condição para ela hoje.
                            </p>
                        </div>
                    </div>
                    <ul className="pillars">
                        {pilares.map((p) => (
                            <li key={p.title}>
                                <h3>{p.title}</h3>
                                <p>{p.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 4 · Linhas */}
            <section className="section" aria-labelledby="linhas-t">
                <div className="wrap">
                    <h2 id="linhas-t">As linhas que estruturamos</h2>
                    <p className="sub">Cada uma atende um porte, uma finalidade e um tipo de garantia diferente.</p>
                    <table className="lines">
                        <thead>
                            <tr>
                                <th scope="col">Linha</th>
                                <th scope="col">Para quê</th>
                            </tr>
                        </thead>
                        <tbody>
                            {linhas.map((l) => (
                                <tr key={l.name}>
                                    <th scope="row">{l.name}</th>
                                    <td>{l.text}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 5 · Critérios */}
            <section className="section dark criteria" aria-labelledby="criterios-t">
                <div className="wrap">
                    <h2 id="criterios-t">A MonexHub atende empresas que</h2>
                    <ul className="criteria__grid">
                        {criterios.map((c) => (
                            <li key={c.value}>
                                <p className="criteria__value">{c.value}</p>
                                <p className="criteria__text">{c.text}</p>
                            </li>
                        ))}
                    </ul>
                    <p className="criteria__close">
                        Se a sua empresa se encaixa nesses pontos, o diagnóstico indica quais caminhos existem para o seu caso.
                    </p>
                    <Cta location="criterios" />
                </div>
            </section>

            {/* 6 · Etapas */}
            <section className="section" aria-labelledby="etapas-t">
                <div className="wrap">
                    <h2 id="etapas-t">Como a operação acontece</h2>
                    <ol className="steps">
                        {etapas.map((e, i) => (
                            <li key={e.title}>
                                <span className="steps__num" aria-hidden="true">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h3>{e.title}</h3>
                                <p>{e.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* 7 · Documentação */}
            <section className="section section--alt" aria-labelledby="docs-t">
                <div className="wrap">
                    <h2 id="docs-t">O que a empresa precisa ter em mãos</h2>
                    <p className="sub">
                        Toda operação de crédito estruturado passa por análise documental. Ter esse material organizado é o que separa um
                        processo de semanas de um processo de meses.
                    </p>
                    <div className="docs">
                        <div>
                            <h3>Da empresa</h3>
                            <p>
                                Contrato social, DRE, balanço e fluxo de caixa dos últimos exercícios, relação de faturamento, relação de
                                endividamento e relatórios cadastrais.
                            </p>
                        </div>
                        <div>
                            <h3>Dos sócios</h3>
                            <p>Documento pessoal, comprovante de residência, imposto de renda e relatórios cadastrais.</p>
                        </div>
                    </div>
                    <p className="docs__close">
                        Não é preciso enviar nada agora. O diagnóstico apenas confirma se a empresa tem acesso a esse material.
                    </p>
                </div>
            </section>

            {/* 8 · Perguntas frequentes */}
            <section className="section" aria-labelledby="faq-t">
                <div className="wrap">
                    <h2 id="faq-t">Perguntas frequentes</h2>
                    <div className="faq">
                        {faq.map((f) => (
                            <details key={f.q}>
                                <summary>
                                    <h3>{f.q}</h3>
                                </summary>
                                <div className="faq__a">
                                    <p>{f.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9 · Fechamento */}
            <section className="section dark closing" aria-labelledby="fechamento-t">
                <MarkTexture className="markx--closing" />
                <div className="wrap">
                    <h2 id="fechamento-t">Nem toda empresa acessa as mesmas linhas</h2>
                    <p className="lead">
                        Porte, tempo de operação, objetivo da captação, capacidade de pagamento e garantias disponíveis determinam o que
                        está ao alcance de cada empresa. A mesma operação recusada em uma instituição pode ser viável em outra, sob uma
                        estrutura diferente.
                    </p>
                    <p className="lead">O diagnóstico identifica quais caminhos existem para o seu caso.</p>
                    <Cta location="fechamento" />
                </div>
            </section>
            </main>

            <footer className="footer dark">
                <div className="wrap footer__inner">
                    <Logo />
                    <a href={PRIVACY_URL}>Política de privacidade</a>
                </div>
            </footer>

            <StickyCta heroId="topo" />
        </>
    )
}
