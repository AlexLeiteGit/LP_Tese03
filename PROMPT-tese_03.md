# PROMPT BASE UNIVERSAL — LANDING PAGES JURÍDICAS
**Escritório Leite & Fontes Advogados Associados**
*Stack: React + Tailwind + Framer Motion | Paleta dinâmica por cor base*

---

## COMO USAR

Preencha os dois campos abaixo e cole o **PROMPT DE EXECUÇÃO** no Claude.

```yaml
# ───── CAMPO 1: COR BASE (obrigatório) ─────────────────────────
# A cor principal da landing page. Toda a paleta será derivada dela.
# O dourado (#c9a84c) permanece fixo como cor de destaque.
COR_BASE: "#ce6a85"   # ← substitua pelo hex desejado

# ───── CAMPO 2: RESUMO DA TESE (obrigatório) ────────────────────
# Cole abaixo o briefing completo da tese jurídica.
# Quanto mais detalhado, melhor o output. Inclua:
#   - Nome da tese
#   - Público-alvo
#   - Requisitos
#   - Documentos necessários
#   - Base legal (leis, artigos)
#   - Casos reais ou jurisprudência (se houver)
#   - Valores recuperáveis / prazos retroativos
RESUMO_DA_TESE: |
  RESTITUIÇÃO DE INSS ACIMA DO TETO PARA MÉDICOS ISENÇÃO DE IMPOSTO

CONTEXTO PRÁTICO: Médicos que contribuem acima do teto do INSS podem recuperar até R$ 100 mil em valores pagos indevidamente. 

NÚCLEO DA TESE: A contribuição previdenciária devida pelos trabalhadores é limitada ao teto do INSS, definido anualmente. Em 2025, esse teto é de R$ 8.157,41.
O que muitos médicos não sabem é que, ao acumularem dois ou mais vínculos empregatícios — o que é muito comum na área médica —, o desconto é feito integralmente em cada vínculo, sem que haja comunicação entre as fontes pagadoras. Isso gera uma cobrança duplicada, ilegal e absolutamente restituível. 
A própria legislação reconhece esse direito: O art. 28, §5º, da Lei 8.212/91 limita o salário de contribuição ao teto do INSS; A Instrução Normativa RFB nº 971/2009, no art. 89, disciplina expressamente a possibilidade de restituição ou compensação das contribuições recolhidas a maior. Além disso, o Código Tributário Nacional (CTN), em seu art. 168, garante ao contribuinte o direito de pleitear judicialmente os valores pagos indevidamente nos últimos 5 anos.
Na prática, médicos com múltiplas fontes de renda são fortemente impactados por esse problema. Um hospital público desconta até o teto, mas a clínica particular onde o mesmo médico também atua faz o mesmo — sem saber que ele já contribuiu no limite. O resultado: o médico paga duas vezes mais do que deveria.
O que poucos sabem é que esse valor não é perdido. Ele pode ser recuperado integralmente, com correção pela taxa Selic, por via administrativa ou judicial. 

CASOS CONCRETOS: 
Caso 1 - Apelação Cível 5000482-62.2012.4.04.7208/SC Médica com dois vínculos comprovou que teve contribuições duplicadas durante 4 anos. A União foi condenada a restituir os valores pagos a mais, corrigidos. O montante ultrapassou R$ 50 mil.
Caso 2 - STJ – REsp 1.230.957/RS O Superior Tribunal de Justiça firmou entendimento no sentido de que é “plenamente possível a restituição dos valores pagos indevidamente a título de contribuição previdenciária quando excedente ao teto legal”, obrigando a União a devolver as quantias.
Caso 3 - RI nº 0024386-35.2023.4.05.8400 A decisão determinou que o INSS restituísse os valores excedentes pagos por um médico com múltiplos contratos, reconhecendo a ilegalidade da contribuição acima do teto e aplicando atualização monetária conforme a Selic. 
REQUISITOS: O primeiro requisito é ser médico com 2 ou mais vínculos empregatícios. O segundo requisito é ter contribuído para INSS acima do teto.
PROCEDIMENTO: A petição deve estar lastreada na IN RFB 971/2009 (art. 89), no art. 168 do CTN e na jurisprudência pacífica do STJ (REsp 1.230.957/RS).  Os pedidos envolvem a devolução dos valores indevidos pagos nos últimos 5 anos, com correção integral.
Importante: o próprio STJ reconheceu que a restituição deve ser feita pelo ente arrecadador (a Receita Federal) e não pelo INSS, facilitando a delimitação da parte passiva da ação e a competência da Justiça Federal. 
DOCUMENTOS: Solicite ao cliente os informes de rendimentos (ou contracheques) de todos os vínculos e organize mês a mês as contribuições ao INSS. A soma mensal que exceder o teto já configura o valor indevidamente recolhido. 
RETROATIVO: Você pode pedir, judicialmente, a restituição dos valores descontados acima do teto do INSS, mas limitada aos últimos 5 anos.

```

```
Você é um engenheiro frontend sênior especializado em landing pages de alta conversão para escritórios de advocacia, com domínio avançado em React, Tailwind CSS e Framer Motion.

## IDENTIDADE FIXA DO ESCRITÓRIO
- Nome: Leite & Fontes Advogados Associados
- WhatsApp: https://wa.me/55[DDD][NÚMERO]?text=[MENSAGEM_CODIFICADA]
  → Substitua [DDD][NÚMERO] pelo número do escritório
  → A mensagem DEVE seguir o padrão obrigatório abaixo:
    "Envie esta mensagem como está para iniciar a conversa com o Atendente. Olá, tenho interesse em [NOME_CURTO_DA_TESE]."
  → Exemplo completo codificado:
    https://wa.me/5511999999999?text=Envie%20esta%20mensagem%20como%20est%C3%A1%20para%20iniciar%20a%20conversa%20com%20o%20Atendente.%20Ol%C3%A1%2C%20tenho%20interesse%20na%20isen%C3%A7%C3%A3o%20de%20IR%20para%20portadores%20de%20doen%C3%A7as%20graves.
  → Este link DEVE ser idêntico nos 3 pontos: Navbar CTA + Hero + FinalCTA + FloatingWhatsApp (4 ocorrências)
- OAB: [inserir número OAB]

## DADOS DE ENTRADA
COR_BASE: [inserir hex]
RESUMO_DA_TESE:
[inserir resumo completo]

## PASSO 1 — GERAÇÃO DA PALETA (execute antes de qualquer código)

A partir da COR_BASE fornecida, derive a paleta completa seguindo esta lógica:

| Token            | Derivação                                                        |
|------------------|------------------------------------------------------------------|
| `--color-bg`     | COR_BASE pura — fundo principal das seções neutras               |
| `--color-bg-dark`| COR_BASE escurecida 20% (mistura com #000) — seções alternadas   |
| `--color-bg-card`| COR_BASE clareada 8% (mistura com #fff) — fundo dos cards        |
| `--color-bg-footer`| COR_BASE escurecida 35% — rodapé                               |
| `--color-text`   | #ffffff — texto principal                                        |
| `--color-muted`  | COR_BASE clareada 45% com saturação reduzida — texto secundário  |
| `--color-gold`   | #c9a84c — FIXO — destaque, bordas, badges, números               |
| `--color-gold-light` | #e2c47a — FIXO — termos em destaque no texto                 |
| `--color-wa`     | #25d366 — FIXO — botões WhatsApp                                 |

**Regra de contraste obrigatória:** Verifique se `--color-text` sobre `--color-bg` atinge WCAG AA (4.5:1). Se a COR_BASE for clara demais (luminosidade > 60%), inverta: use texto escuro `#0d1b2e` e ajuste `--color-muted` para um tom médio.

Declare todos os tokens como variáveis CSS no `:root` e use-os via Tailwind com `var(--color-*)`.

## PASSO 2 — EXTRAÇÃO DO BRIEFING

A partir do RESUMO_DA_TESE, extraia e estruture os seguintes dados antes de escrever o JSX.
Se algum campo não puder ser extraído do resumo, sinalize com `[PREENCHER]` — nunca invente.

```js
// data/product.js — gere este arquivo primeiro
export default {
  // Identidade
  area: "",               // área jurídica (ex: "Direito Tributário")
  nome: "",               // nome da tese/produto
  publico: "",            // descrição do público-alvo

  // Hero
  headline: "",           // começa com a DOR — máx. 12 palavras — Playfair Display
  subheadline: "",        // problema + valor potencial — máx. 25 palavras
  valorMaximo: "",        // ex: "R$ 50.000"
  prazoRetroativo: "",    // ex: "5 anos"

  // Stats (exatamente 4)
  stats: [
    { valor: "", rotulo: "" },
    { valor: "", rotulo: "" },
    { valor: "", rotulo: "" },
    { valor: "", rotulo: "" },
  ],

  // Problema (exatamente 4 cards)
  dores: [
    { emoji: "", titulo: "", texto: "" },
    { emoji: "", titulo: "", texto: "" },
    { emoji: "", titulo: "", texto: "" },
    { emoji: "", titulo: "", texto: "" },
  ],

  // Como funciona (exatamente 4 passos)
  passos: [
    { numero: "01", titulo: "", descricao: "" },
    { numero: "02", titulo: "", descricao: "" },
    { numero: "03", titulo: "", descricao: "" },
    { numero: "04", titulo: "", descricao: "" },
  ],

  // Casos / Jurisprudência (mínimo 2, máximo 4)
  casos: [
    { processo: "", tribunal: "", resumo: "", resultado: "" },
  ],

  // Requisitos
  requisitos: [],         // lista de strings
  documentos: [],         // lista de strings

  // Base legal (exatamente 3)
  baseLegal: [
    { norma: "", artigo: "", descricao: "" },
    { norma: "", artigo: "", descricao: "" },
    { norma: "", artigo: "", descricao: "" },
  ],

  // CTA e WhatsApp
  beneficioPrincipal: "", // frase do benefício para o CTA final
  mensagemWhatsApp: "",   // texto pré-preenchido (sem encode)
  whatsappLink: "",       // https://wa.me/55XXXXXXXXXXX?text=...
}
```

## PASSO 3 — ARQUITETURA DE COMPONENTES (imutável)

Gere exatamente estes arquivos, nesta ordem:

```
tailwind.config.js        ← configuração com tokens de cor e tipografia
data/product.js           ← dados extraídos no Passo 2
App.jsx                   ← composição pura, sem lógica
components/
  GlobalStyles.jsx        ← Google Fonts + variáveis CSS do Passo 1
  FloatingWhatsApp.jsx    ← botão fixo independente do scroll
  Hero.jsx
  StatsBar.jsx
  TheProblem.jsx
  HowItWorks.jsx
  Precedents.jsx
  Requirements.jsx
  LegalBasis.jsx
  FinalCTA.jsx
  Footer.jsx
```

**Regras de componente:**
- Dados vêm exclusivamente de `data/product.js` via props — zero hardcode no JSX
- Cores vêm exclusivamente do `tailwind.config.js` via classes — zero hex inline (exceto o gradiente radial do FinalCTA)
- Animações Framer Motion sempre com `viewport: { once: true }` e `cubic-bezier(0.23, 1, 0.32, 1)`
- Stagger de `0.12s` entre elementos irmãos nas animações de entrada

## PASSO 4 — ESTRUTURA DAS SEÇÕES

### Navbar (componente fixo — idêntico em todas as LPs da série)
- Fundo: `var(--color-bg-footer)` — SEMPRE o tom mais escuro, nunca a cor base
- Border-bottom: `rgba(201,168,76,0.14)` — sutil linha dourada separadora
- Ao rolar `.scrolled`: `box-shadow: 0 4px 32px rgba(0,0,0,0.5)` + border `rgba(201,168,76,0.30)`
- **Logomarca:** bloco tipográfico fixo — `<div class="nav-logo-text">` com `.nav-logo-name` (Playfair Display, branco) e `.nav-logo-sub` (Lato, dourado, uppercase). Border-left dourado como âncora. Nunca usar `<img>` — a tipografia É a identidade visual.
- Links: 5 itens (O Problema, Como Funciona, Precedentes, Requisitos, Base Legal)
- Link ativo: `color: var(--color-gold)` via JS scroll detection
- CTA: botão WhatsApp verde, mesmo padrão dos demais CTAs
- Mobile: hamburger → menu vertical com os mesmos links + CTA

### Hero.jsx
- Badge: `{area}` — fundo `gold/20`, borda `gold/30`, texto dourado, `rounded-full`
- H1: `{headline}` — `font-display`, `clamp(2rem, 5vw, 4rem)`, branco, `font-weight: 900`
- Subtítulo: `{subheadline}` — `font-body`, `text-muted`
- Botão primário: "Verificar meu direito agora" — fundo `#25d366`, ícone SVG WhatsApp inline
- Âncora: "↓ Entenda como funciona" — scroll suave para `#como-funciona`
- Animação de entrada: `y: -20 → 0`, `opacity: 0 → 1`, stagger entre badge / H1 / sub / botão

### StatsBar.jsx
- Fundo: `--color-gold` (#c9a84c)
- Grid `grid-cols-2 md:grid-cols-4`
- Valor: `font-display`, `clamp(1.8rem, 4vw, 3rem)`, `--color-bg` (escuro sobre dourado)
- Rótulo: `font-body`, `text-xs uppercase tracking-widest`, `--color-bg/70`
- Separadores: `border-r border-[--color-bg]/20` entre itens

### TheProblem.jsx
- Fundo: `--color-bg-dark`
- Grid `grid-cols-1 md:grid-cols-2`, gap `1.5rem`
- Card: `border-t-2 border-gold`, fundo `--color-bg-card`, `rounded-2xl`, `padding: 1.5rem`
- Valores monetários e prazos: `<span>` com `text-gold-light font-bold`
- Animate com `whileInView` + stagger

### HowItWorks.jsx — id="como-funciona"
- Fundo: `--color-bg`
- Layout: `flex-col md:flex-row`, gap `2rem`
- Número: `w-12 h-12 rounded-full border-2 border-gold font-display text-gold text-center`
- Conector desktop: linha tracejada `border-t-2 border-dashed border-gold/30` entre círculos
- Separador mobile: `border-t border-gold/20`

### Precedents.jsx
- Fundo: `--color-bg-dark`
- Grid `grid-cols-1 md:grid-cols-3` (ou `md:grid-cols-2` se apenas 2 casos)
- Card: `border-l-4 border-gold`, fundo `--color-bg-card`, `rounded-2xl`
- Número do processo: `font-mono text-xs text-gold uppercase tracking-widest`
- Resultado/valor: `font-display text-white text-xl font-bold`
- Fallback: se `resultado` vazio → exibir "Decisão Favorável"

### Requirements.jsx
- Fundo: `--color-bg`
- Container `max-w-4xl mx-auto`, grid `grid-cols-1 md:grid-cols-2 gap-10`
- Requisitos (esquerda): ícone check em círculo `bg-gold/20 text-gold` + texto branco
- Documentos (direita): marcador "—" em `text-gold font-bold` + texto

### LegalBasis.jsx
- Fundo: `--color-bg-dark`
- Grid `grid-cols-1 md:grid-cols-3`
- Card: `border-t-2 border-gold`, fundo `--color-bg-card`, `rounded-2xl`
- Norma/artigo: `font-display text-gold text-lg font-bold`
- Descrição: `font-body text-muted text-sm leading-relaxed`

### FinalCTA.jsx
- Fundo: `--color-bg-card` com `radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)`
- Título: `{beneficioPrincipal}` — `font-display`, centralizado, branco
- Subtítulo: "Consulta gratuita e sem compromisso"
- Botão: igual ao Hero
- Disclaimer: "Consulta inicial gratuita · Sem compromisso · Atendimento 100% digital" — `text-xs text-muted/60`

### Footer.jsx
- Fundo: `--color-bg-footer`
- `border-t` com `border-gold/8`
- Nome + OAB: `font-display text-white/60`
- Aviso: `font-body text-xs text-muted/50` — "Este site tem caráter informativo. Não constitui consulta jurídica."

### FloatingWhatsApp.jsx
- `fixed bottom-6 right-6 z-50`
- Desktop: `rounded-full px-5 py-3 flex items-center gap-2 bg-wa` + animação `pulse-wa`
- Mobile: apenas ícone circular `w-14 h-14 rounded-full` (texto oculto com `hidden md:flex`)
- Ícone: SVG WhatsApp inline — não use biblioteca de ícones

## PASSO 5 — COPYWRITING (regras obrigatórias)

1. **Hero começa com a DOR**, nunca com o serviço ou o nome da lei
2. **Números concretos:** use `{valorMaximo}` e `{prazoRetroativo}` no hero e CTA
3. **Urgência real:** "Cada mês sem requerer, você perde {prazoRetroativo} de retroativo"
4. **CTA em 1ª pessoa do cliente:** "Verificar meu direito" / "Quero recuperar meu dinheiro"
6. **Termos técnicos sempre explicados:** ao citar lei ou artigo, adicionar frase de explicação simples
7. **Tom direto:** frases com no máximo 20 palavras, zero juridiquês desnecessário

## PASSO 6 — TAILWIND CONFIG (copie literalmente, ajuste apenas as cores)

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg:      { DEFAULT: "var(--color-bg)", dark: "var(--color-bg-dark)", card: "var(--color-bg-card)", footer: "var(--color-bg-footer)" },
        gold:    { DEFAULT: "#c9a84c", light: "#e2c47a" },
        muted:   "var(--color-muted)",
        wa:      "#25d366",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body:    ["Lato", "sans-serif"],
        mono:    ["'Courier Prime'", "monospace"],
      },
      fontSize: {
        hero:    ["clamp(2rem, 5vw, 4rem)",     { lineHeight: "1.1", fontWeight: "900" }],
        section: ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2", fontWeight: "700" }],
        stat:    ["clamp(1.8rem, 4vw, 3rem)",   { lineHeight: "1",   fontWeight: "700" }],
      },
      animation: {
        "pulse-wa":  "pulse-wa 2s cubic-bezier(0.4,0,0.6,1) infinite",
        "fade-down": "fadeDown 0.6s cubic-bezier(0.23,1,0.32,1) forwards",
      },
      keyframes: {
        "pulse-wa": {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(37,211,102,0.4)" },
          "50%":     { boxShadow: "0 0 0 12px rgba(37,211,102,0)" },
        },
        fadeDown: {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
```

## LINK DO WHATSAPP
Substitua o número em TODOS os botões:
https://wa.me/55[DDD][NÚMERO]?text=[MENSAGEM_CODIFICADA]

A mensagem pré-preenchida deve mencionar o produto específico.
Exemplo: "Envia esta mensagem como está para ter acesso ao Atendente correto. Olá, tenho interesse na [TESE]"

---

## AUTO-AVALIAÇÃO (execute internamente antes de entregar)

Antes de finalizar a resposta, verifique cada item. Se falhar, corrija:

- [ ] `data/product.js` gerado com todos os campos (sem `[PREENCHER]` restante)?
- [ ] Paleta derivada da COR_BASE com os 8 tokens definidos como variáveis CSS?
- [ ] Contraste WCAG AA verificado entre texto e fundo?
- [ ] `tailwind.config.js` usando `var(--color-*)` — sem hex hardcoded (exceto dourado e verde)?
- [ ] Todos os 11 componentes do contrato foram criados?
- [ ] Zero hex inline no JSX (exceto gradiente do FinalCTA)?
- [ ] Fontes proibidas ausentes: Inter, Roboto, Arial, Space Grotesk, system-ui?
- [ ] Animações Framer Motion com `viewport: { once: true }`?
- [ ] Botão flutuante: circular no mobile, com texto no desktop?
- [ ] WhatsApp link correto em Hero + FinalCTA + FloatingWhatsApp (3 ocorrências)?
- [ ] Noise overlay SVG aplicado globalmente com opacidade 0.04?
```

---

## ✅ CHECKLIST PÓS-GERAÇÃO

**Dados e Conteúdo**
- [ ] Número do WhatsApp correto nos 4 botões (Navbar CTA, Hero, FinalCTA, FloatingWhatsApp)
- [ ] Mensagem pré-preenchida segue o padrão: "Envie esta mensagem como está para iniciar a conversa com o Atendente. Olá, tenho interesse em [tese]."
- [ ] URL do WhatsApp está corretamente encodada (espaços = %20, ã = %C3%A3, etc.)
- [ ] Nenhum campo `[PREENCHER]` restante no `data/product.js`
- [ ] Valores monetários e prazos atualizados e verificados

**Código**
- [ ] `data/product.js` presente e importado em todos os componentes
- [ ] `tailwind.config.js` na raiz com tokens de cor via `var(--color-*)`
- [ ] Variáveis CSS declaradas no `GlobalStyles.jsx` com os valores derivados da COR_BASE
- [ ] Zero fontes proibidas no código

**Responsividade**
- [ ] 320px — hero legível, botão flutuante circular, stats em 2 colunas
- [ ] 375px / 414px — grid de cards em 1 coluna
- [ ] 1280px / 1440px — stats em 4 colunas, casos em 3 colunas

**Paleta**
- [ ] Verificar contraste visual entre texto e fundo nos 3 tons de fundo
- [ ] Dourado aparece como destaque em: badge, bordas dos cards, números de passo, separadores
- [ ] Verde WhatsApp apenas nos botões de CTA — não usado decorativamente

---

## 📌 EXEMPLO DE USO

```yaml
COR_BASE: "#003554"

RESUMO_DA_TESE: |
  A isenção de imposto de renda para aposentados e pensionistas com doenças
  graves está prevista no artigo 6º, inciso XIV da Lei 7.713.

  REQUISITOS: Ser aposentado ou pensionista (por qualquer motivo: idade,
  invalidez, tempo de contribuição) de qualquer regime (INSS, servidor
  público, militar etc). Ser portador de doença grave prevista na Lei 7.713:
  câncer, cegueira, Parkinson, cardiopatia grave, HIV, entre outras.

  PROCEDIMENTO: Requerer ao ente pagador da aposentadoria/pensão (INSS,
  Marinha, etc.) e submeter-se a perícia médica do instituto previdenciário.

  DOCUMENTOS: Relatório médico oficial emitido por perito do instituto
  previdenciário vinculado ao beneficiário.

  RETROATIVO: É possível pedir judicialmente a restituição dos valores
  descontados desde quando a doença foi constatada, limitado aos últimos
  5 anos.

  BASE LEGAL: Art. 6º, inciso XIV da Lei 7.713/1988.
```

---

*Versão 1.0 — Prompt Base Universal | Leite & Fontes Advogados*
*Paleta dinâmica por cor base + dourado fixo como destaque*
