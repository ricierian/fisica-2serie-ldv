/* ===== Consulta rápida (2ª série LDV): formulário, prefixos, grandezas, constantes, pistas e pegadinhas =====
   Trazida do app modelo (3ª série CIB) e adaptada aos capítulos estudados pela turma.
   Formulário: "Essenciais" = fórmulas usadas nas listas do app; "Para ir além" = complementares dos mesmos capítulos. */
const FORMULARIO = [
  { nome: 'Calorimetria',
    ess: [
      ['Calor sensível', `Q = m · c · ΔT`],
      ['Capacidade térmica', `C = ${f('Q','ΔT')} &nbsp;;&nbsp; C = m · c`],
      ['Calor latente', `Q = m · L<br><small>a temperatura fica constante durante a mudança de fase</small>`],
      ['Potência de uma fonte', `P = ${f('Q','Δt')}`],
      ['Trocas de calor (sistema isolado)', `ΣQ = 0<br><small>quem esquenta: Q &gt; 0 · quem esfria: Q &lt; 0</small>`]],
    ext: [
      ['Fonte com rendimento', `Q<sub>útil</sub> = η · P · Δt`],
      ['Curva de aquecimento', `subida: Q = m · c · ΔT<br>patamar: Q = m · L`]] },

  { nome: 'Gases ideais',
    ess: [
      ['Equação de Clapeyron', `p · V = n · R · T`],
      ['Lei geral dos gases', `${f('p₀ · V₀','T₀')} = ${f('p · V','T')}<br><small>T sempre em kelvin</small>`],
      ['Isotérmica (T constante)', `p₀ · V₀ = p · V`],
      ['Isobárica (p constante)', `${f('V₀','T₀')} = ${f('V','T')}`],
      ['Isocórica (V constante)', `${f('p₀','T₀')} = ${f('p','T')}`]],
    ext: [
      ['Número de mols', `n = ${f('m','M')} <small>(M: massa molar)</small>`]] },

  { nome: '1ª Lei da Termodinâmica',
    ess: [
      ['Primeira Lei', `Q = τ + ΔU`],
      ['Trabalho a pressão constante', `τ = p · ΔV<br><small>em qualquer caso: τ = área no gráfico p × V</small>`],
      ['Energia interna (gás monoatômico)', `ΔU = ${f('3','2')} · n · R · ΔT`]],
    ext: [
      ['Casos especiais', `isotérmica: ΔU = 0 → Q = τ<br>isocórica: τ = 0 → Q = ΔU<br>adiabática: Q = 0 → ΔU = −τ<br>ciclo: ΔU = 0 → Q = τ`],
      ['Isobárica com gás monoatômico', `τ = n · R · ΔT &nbsp;;&nbsp; Q = ${f('5','2')} · n · R · ΔT`]] },

  { nome: 'Características das ondas',
    ess: [
      ['Período e frequência', `T = ${f('Δt','n')} &nbsp;;&nbsp; f = ${f('n','Δt')}<br>T = ${f('1','f')}<br><small>n: número de oscilações no intervalo Δt</small>`],
      ['Equação fundamental', `v = λ · f &nbsp;;&nbsp; v = ${f('λ','T')}`],
      ['Ondas em cordas (Taylor)', `μ = ${f('m','ℓ')} &nbsp;;&nbsp; v = √(F / μ)`]],
    ext: [
      ['Ondas eletromagnéticas no vácuo', `c = λ · f`]] },

  { nome: 'Fenômenos ondulatórios',
    ess: [
      ['Lei da refração', `${f('sen î','sen r̂')} = ${f('v₁','v₂')} = ${f('λ₁','λ₂')}<br><small>a frequência não muda</small>`],
      ['Polarização', `luz não polarizada: I = ${f('I₀','2')}<br>Lei de Malus: I = I₀ · cos²θ`],
      ['Efeito Doppler (fonte em movimento)', `aproximando: f = f<sub>F</sub> · ${f('v<sub>som</sub>','v<sub>som</sub> − v<sub>F</sub>')}<br>afastando: f = f<sub>F</sub> · ${f('v<sub>som</sub>','v<sub>som</sub> + v<sub>F</sub>')}`]],
    ext: [] }
];

/* Resumo de símbolos e unidades (SI) ao fim de cada assunto: símbolo | significado | unidade */
const RESUMO_TXT = {
  'Calorimetria': `Q | quantidade de calor | J (usual: cal)
m | massa | kg (usual: g)
c | calor específico | J/(kg·K) (usual: cal/(g·°C))
ΔT | variação de temperatura | K (ou °C: mesma variação)
C | capacidade térmica | J/K (usual: cal/°C)
L | calor latente | J/kg (usual: cal/g)
P | potência | W (usual: cal/min)
Δt | intervalo de tempo | s
η | rendimento | sem unidade (%)`,
  'Gases ideais': `p | pressão | Pa (usual: atm)
V | volume | m³ (usual: L)
n | quantidade de matéria | mol
R | constante dos gases | J/(mol·K)
T | temperatura absoluta | K
M | massa molar | kg/mol (usual: g/mol)`,
  '1ª Lei da Termodinâmica': `Q | calor trocado pelo gás | J
τ | trabalho do gás | J
ΔU | variação da energia interna | J
ΔV | variação de volume | m³
p | pressão | Pa`,
  'Características das ondas': `A | amplitude | m
n | número de oscilações | sem unidade
λ | comprimento de onda | m
T | período | s
f | frequência | Hz
v | velocidade de propagação | m/s
c | velocidade da luz no vácuo | m/s
μ | densidade linear | kg/m
m | massa da corda | kg
ℓ | comprimento da corda | m
F | força de tração na corda | N`,
  'Fenômenos ondulatórios': `î, r̂ | ângulos de incidência e de refração | grau (°)
v₁, v₂ | velocidades nos meios 1 e 2 | m/s
λ₁, λ₂ | comprimentos de onda nos meios 1 e 2 | m
I₀, I | intensidade antes e depois do polarizador | W/m²
θ | ângulo entre os eixos dos polarizadores | grau (°)
f<sub>F</sub> | frequência emitida pela fonte | Hz
f | frequência percebida | Hz
v<sub>F</sub> | velocidade da fonte | m/s
v<sub>som</sub> | velocidade do som no meio | m/s`
};
const RESUMO = Object.fromEntries(Object.entries(RESUMO_TXT).map(([k, v]) => [k, v.split('\n').map(l => l.split(' | '))]));

/* ----- Prefixos do SI ----- */
const PREFIXOS = [
  ['tera','T','10¹²','HD de 1 TB'],
  ['giga','G','10⁹','Wi-Fi de 2,4 GHz'],
  ['mega','M','10⁶','rádio FM de 100 MHz'],
  ['quilo','k','10³','1 km = 1 000 m'],
  ['hecto','h','10²','1 hPa = 100 Pa (meteorologia)'],
  ['deca','da','10¹','pouco usado'],
  ['deci','d','10⁻¹','1 dm³ = 1 L'],
  ['centi','c','10⁻²','1 cm = 0,01 m'],
  ['mili','m','10⁻³','1 mL = 10⁻³ L'],
  ['micro','µ','10⁻⁶','fio de cabelo: dezenas de µm'],
  ['nano','n','10⁻⁹','luz verde: cerca de 500 nm'],
  ['pico','p','10⁻¹²','capacitores de pF']
];

/* ----- Grandezas e unidades (SI) ----- */
const GRANDEZAS_FUND = [
  ['Comprimento','metro','m'],['Massa','quilograma','kg'],['Tempo','segundo','s'],['Corrente elétrica','ampère','A'],
  ['Temperatura','kelvin','K'],['Quantidade de matéria','mol','mol'],['Intensidade luminosa','candela','cd']
];
const GRANDEZAS_DERIV = [
  ['Área','metro quadrado','m²',''],['Volume','metro cúbico','m³','1 m³ = 1 000 L'],
  ['Densidade','quilograma por metro cúbico','kg/m³','1 g/cm³ = 1 000 kg/m³'],['Velocidade','metro por segundo','m/s',''],
  ['Aceleração','metro por segundo ao quadrado','m/s²',''],['Força','newton','N','1 N = 1 kg·m/s²'],['Pressão','pascal','Pa','1 Pa = 1 N/m²'],
  ['Trabalho, energia, calor','joule','J','1 J = 1 N·m'],['Potência','watt','W','1 W = 1 J/s'],
  ['Frequência','hertz','Hz','1 Hz = 1 s⁻¹ (oscilações por segundo)'],['Intensidade (de onda)','watt por metro quadrado','W/m²',''],
  ['Densidade linear','quilograma por metro','kg/m','']
];

/* ----- Constantes e conversões ----- */
const CONSTANTES = [
  ['Velocidade da luz no vácuo','c','3,0 × 10⁸ m/s'],
  ['Velocidade do som no ar (≈ 20 °C)','v<sub>som</sub>','≈ 340 m/s'],
  ['Aceleração da gravidade (Terra)','g','≈ 10 m/s² <small>(9,8 m/s²)</small>'],
  ['Constante dos gases','R','8,31 J/(mol·K) = 0,082 atm·L/(mol·K)'],
  ['Calor específico da água','c<sub>água</sub>','1 cal/(g·°C) ≈ 4 200 J/(kg·K)'],
  ['Calor específico do gelo','c<sub>gelo</sub>','0,5 cal/(g·°C)'],
  ['Calor latente de fusão do gelo','L<sub>F</sub>','80 cal/g'],
  ['Calor latente de vaporização da água','L<sub>V</sub>','540 cal/g'],
  ['Densidade da água','ρ<sub>água</sub>','1 g/cm³ = 1 000 kg/m³']
];
const CONVERSOES = [
  ['Temperatura','T (K) = θ (°C) + 273<br><small>variações: Δ1 °C = Δ1 K</small>'],
  ['Tempo','1 h = 60 min = 3 600 s'],
  ['Volume','1 L = 1 dm³ = 1 000 cm³ = 1 000 mL<br>1 m³ = 1 000 L'],
  ['Área e volume com prefixo','1 cm² = 10⁻⁴ m² &nbsp;;&nbsp; 1 cm³ = 10⁻⁶ m³<br><small>o prefixo também vai ao quadrado ou ao cubo</small>'],
  ['Pressão','1 atm ≈ 1,0 × 10⁵ Pa = 760 mmHg'],
  ['Energia','1 cal ≈ 4,2 J &nbsp;;&nbsp; 1 kcal = 1 000 cal<br>1 kWh = 3,6 × 10⁶ J'],
  ['Trabalho de um gás','1 Pa · 1 m³ = 1 J<br><small>volume em litros: converta para m³ antes de calcular p · ΔV</small>'],
  ['Velocidade','1 m/s = 3,6 km/h']
];

/* Páginas da Consulta rápida */
const CONSULTA = [
  { id: 'formulario', ico: 'ƒ', nome: 'Formulário', resumo: 'As fórmulas dos capítulos estudados, por assunto, com os símbolos e as unidades.' },
  { id: 'prefixos', ico: 'µ', nome: 'Prefixos e potências de 10', resumo: 'De tera a pico, com exemplos e as armadilhas das conversões de área e volume.' },
  { id: 'grandezas', ico: 'SI', nome: 'Grandezas e unidades', resumo: 'As grandezas fundamentais do SI e as derivadas que aparecem nas listas.' },
  { id: 'constantes', ico: 'c', nome: 'Constantes e conversões', resumo: 'Valores para usar nos cálculos e as conversões de unidades mais cobradas.' },
  { id: 'pistas', ico: '→', nome: 'Pistas do enunciado', resumo: 'Palavras e situações do texto que indicam o conceito cobrado, em calor, gases e ondas.' },
  { id: 'pegadinhas', ico: '!', nome: 'Pegadinhas clássicas', resumo: 'Os erros que mais derrubam em calor, gases e ondas, e como evitar cada um.' }
];

/* Pistas do enunciado: [o que aparece no texto, o que pensar] */
const PISTAS = [
  { nome: 'Calor e gases', itens: [
    ['litoral × interior, areia quente e água fria, “demora para esquentar”', '<b>Calor específico</b>. c alto → ΔT pequeno (Q = m · c · ΔT).'],
    ['ferver, derreter, vaporizar, patamar no gráfico', '<b>Calor latente</b>. Q = m · L, com temperatura constante.'],
    ['calorímetro, “misturam-se”, “até o equilíbrio”', '<b>Trocas de calor</b>. ΣQ = 0; o recipiente também troca calor.'],
    ['“X% da energia é aproveitada”, perdas, rendimento', '<b>Rendimento</b>. Só essa parte aquece; a fonte fornece mais do que a água recebe.'],
    ['lata, recipiente rígido, botijão, “volume constante”', '<b>Isocórica</b>. τ = 0; p/T constante.'],
    ['“lentamente”, “temperatura constante”, banho térmico', '<b>Isotérmica</b>. p · V constante; ΔU = 0 → Q = τ.'],
    ['êmbolo livre, “pressão constante”', '<b>Isobárica</b>. V/T constante; τ = p · ΔV.'],
    ['“rapidamente”, “sem trocar calor”, “isolado termicamente”', '<b>Adiabática</b>. Q = 0 → ΔU = −τ.'],
    ['“ciclo”, “volta ao estado inicial”', '<b>Transformação cíclica</b>. ΔU = 0; τ = área dentro do ciclo.'],
    ['pneu, aerossol, balão, temperatura em °C nas leis dos gases', '<b>Kelvin</b>. T (K) = θ (°C) + 273 antes de qualquer proporção.']] },
  { nome: 'Ondas', itens: [
    ['“sobe e desce no lugar”, boia, ola, corda balançada', '<b>Onda transversal</b>. O meio vibra perpendicular à propagação; não há transporte de matéria.'],
    ['som, mola comprimida e esticada, compressões', '<b>Onda longitudinal</b>. O meio vibra na direção da propagação.'],
    ['“foto” da onda, gráfico y × x', 'Lê-se <b>λ</b> (de crista a crista) e a <b>amplitude</b> (do eixo à crista).'],
    ['oscilação de um ponto, gráfico y × t', 'Lê-se o <b>período T</b>; f = 1/T.'],
    ['“mesma corda”, “mesmo meio”, “mesma tensão”', '<b>Mesma velocidade</b>. λ e f inversamente proporcionais.'],
    ['tensão na corda, corda mais grossa, afinar o violão', '<b>Taylor</b>. v = √(F/μ).'],
    ['raios X, ultravioleta, micro-ondas, Wi-Fi, rádio', '<b>Espectro eletromagnético</b>. Mesma velocidade no vácuo; maior frequência → menor λ e mais energia.'],
    ['eco, sonar, extremidade fixa ou livre', '<b>Reflexão</b>. Extremidade fixa inverte o pulso; livre não inverte.'],
    ['“ouve atrás do muro”, “contorna”, fenda, rádio AM atrás do morro', '<b>Difração</b>. Forte quando λ é parecido com o obstáculo.'],
    ['muda de meio, águas fundas → rasas, prisma', '<b>Refração</b>. A frequência não muda; v e λ mudam juntos.'],
    ['pulsos que se cruzam, cancelamento de ruído', '<b>Interferência</b>. Os deslocamentos se somam com sinal.'],
    ['óculos polarizados, óculos 3D, filtro', '<b>Polarização</b>. Só ondas transversais.'],
    ['taça que quebra, balanço, frequência natural', '<b>Ressonância</b>. Frequência recebida = frequência natural.'],
    ['ambulância, sirene, “se aproxima”, “se afasta”', '<b>Efeito Doppler</b>. Aproximação → f maior; afastamento → f menor.']] }
];

/* Pegadinhas clássicas: [erro, como evitar] */
const PEGADINHAS = [
  { nome: 'Calor e gases', itens: [
    ['Usar a temperatura final no lugar de ΔT', 'ΔT = T<sub>final</sub> − T<sub>inicial</sub>. Em °C ou em K, a variação tem o mesmo valor.'],
    ['Pular o patamar', 'Chegar a 0 °C ou a 100 °C não basta: mudar de fase exige Q = m · L.'],
    ['Esquecer um corpo', 'Calorímetro, recipiente e garrafa também recebem ou cedem calor.'],
    ['Multiplicar pelo rendimento em vez de dividir', 'Se só 80% chega à água, a fonte precisa fornecer mais: E = Q<sub>útil</sub> / 0,8.'],
    ['Usar °C nas leis dos gases', 'Nas proporções e em p · V = n · R · T, a temperatura é sempre em kelvin.'],
    ['Litros em τ = p · ΔV', 'Pa · m³ = J. Com a pressão em Pa, passe o volume para m³.'],
    ['Sinal do trabalho', 'Expansão: τ &gt; 0 (o gás realiza). Compressão: τ &lt; 0 (o trabalho é feito sobre o gás).'],
    ['ΔU = 0 não é Q = 0', 'Na isotérmica e no ciclo, ΔU = 0 significa que todo o calor vira trabalho (Q = τ).'],
    ['Sentido do ciclo', 'Horário: τ &gt; 0. Anti-horário: τ &lt; 0.']] },
  { nome: 'Ondas', itens: [
    ['Amplitude de crista a vale', 'A amplitude vai do eixo até a crista: metade da distância crista–vale.'],
    ['λ entre cruzamentos do eixo', 'Dois cruzamentos seguidos do eixo estão a λ/2. Um comprimento de onda vai de crista a crista.'],
    ['Confundir os gráficos', 'y × x dá o comprimento de onda; y × t dá o período. Olhe o eixo horizontal.'],
    ['Esquecer a raiz em Taylor', 'Tensão 4 vezes maior → velocidade 2 vezes maior, não 4.'],
    ['Achar que a frequência muda na refração', 'A frequência é da fonte. Na mudança de meio, v e λ mudam na mesma proporção.'],
    ['“Mais energia, mais rápida”', 'No vácuo, todas as ondas eletromagnéticas têm a mesma velocidade.'],
    ['Prefixos', 'Confira o prefixo da unidade (veja a página de prefixos) antes de usar λ = v / f.'],
    ['Polarizar o som', 'Só ondas transversais se polarizam. O som no ar é longitudinal.'],
    ['Esquecer a metade na luz não polarizada', 'No primeiro polarizador passa só metade: I = I₀ / 2. Depois, a Lei de Malus.'],
    ['Doppler invertido', 'Aproximação → frequência percebida maior; afastamento → menor. A fonte continua emitindo a mesma frequência.']] }
];
