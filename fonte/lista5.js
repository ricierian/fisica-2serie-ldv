/* ===== Lista 5 · Ondulatória: Fenômenos ondulatórios (Cap. 18) ===== */
const TOOLS5 = [
  ['Equação fundamental', `v = λ · f`],
  ['Reflexão de pulsos', `Extremidade fixa: o pulso volta <b>invertido</b> (crista vira vale).<br>Extremidade livre: o pulso volta <b>sem inversão</b>.`],
  ['Refração', `A frequência <b>não muda</b>; a velocidade e o comprimento de onda mudam.<br>${f('sen î','sen r̂')} = ${f('v₁','v₂')} = ${f('λ₁','λ₂')}`],
  ['Difração', `A onda contorna obstáculos e se abre ao passar por fendas. É mais acentuada quando a abertura (ou o obstáculo) tem tamanho parecido com o comprimento de onda.`],
  ['Interferência', `Quando ondas se encontram, os deslocamentos se somam (com sinal). Depois do encontro, cada onda segue como era antes.`],
  ['Polarização', `Só acontece com ondas transversais.<br>Luz não polarizada num polarizador: I = ${f('I₀','2')}<br>Luz polarizada num analisador: I = I₀ · cos²θ`],
  ['Ressonância', `Um sistema recebe energia com frequência igual à sua frequência natural, e a amplitude cresce.`],
  ['Efeito Doppler (fonte em movimento)', `Aproximando: f = f<sub>F</sub> · ${f('v<sub>som</sub>','v<sub>som</sub> − v<sub>F</sub>')}<br>Afastando: f = f<sub>F</sub> · ${f('v<sub>som</sub>','v<sub>som</sub> + v<sub>F</sub>')}`],
];

/* Caminho SVG a partir de pontos [x, y] */
const caminho = pts => pts.map((p, k) => (k ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
/* Pulso suave (lombada) centrado em cx, com meia-largura w e altura h (h > 0 para cima) */
const pulso = (x0, x1, y, cx, w, h) => `M${x0} ${y} L${cx - w} ${y} C${cx - w * 0.45} ${y} ${cx - w * 0.45} ${y - h} ${cx} ${y - h} C${cx + w * 0.45} ${y - h} ${cx + w * 0.45} ${y} ${cx + w} ${y} L${x1} ${y}`;

/* Q1: reflexão em extremidade fixa e livre */
const FIG5_1 = (() => {
  const [d, mk] = seta('var(--ink)');
  return fig('0 0 340 220', 'Duas situações. Na situação I, uma corda horizontal está presa rigidamente a uma parede à direita, e um pulso em forma de crista se move para a direita. Na situação II, a corda está presa a uma argola leve que pode deslizar sem atrito numa haste vertical, e um pulso em forma de crista também se move para a direita.',
    `${d}<text x="10" y="22" class="pt pt-strong">I</text>
    <path d="${pulso(20, 296, 72, 120, 34, 30)}" fill="none" stroke="var(--sign)" stroke-width="3" stroke-linecap="round"/>
    <rect x="296" y="30" width="16" height="70" rx="3" fill="var(--muted)"/>
    <line x1="104" y1="26" x2="146" y2="26" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/>
    <text x="288" y="118" text-anchor="end" class="pt">presa rigidamente</text>
    <text x="10" y="132" class="pt pt-strong">II</text>
    <path d="${pulso(20, 296, 182, 120, 34, 30)}" fill="none" stroke="var(--sign)" stroke-width="3" stroke-linecap="round"/>
    <line x1="304" y1="128" x2="304" y2="214" stroke="var(--muted)" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="304" cy="182" rx="11" ry="5" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
    <line x1="104" y1="136" x2="146" y2="136" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/>
    <text x="290" y="212" text-anchor="end" class="pt">argola na haste</text>`, 330);
})();

/* Q2: rádio AM × FM */
const TAB5_2 = tabela(['Faixa', 'Frequência típica', 'Comprimento de onda'], [['AM', '1 000 kHz', '≈ 300 m'], ['FM', '100 MHz', '≈ 3 m']]);

/* Q5: refração de uma onda que passa de uma corda para outra */
const FIG5_5 = (() => {
  const [d, mk] = seta('var(--ink)');
  const A = 18, yc = 112;
  const c1 = sen(A, 90, 0, 180, 0, 160).map(([x, y]) => [20 + x, yc - y]);
  const c2 = sen(A, 45, 0, 135, 0, 160).map(([x, y]) => [200 + x, yc - y]);
  return fig('0 0 350 190', 'Uma onda passa da corda 1, mais fina, para a corda 2, mais grossa, ligadas no meio. Na corda 1, um trecho de 40 centímetros contém exatamente dois comprimentos de onda. Na corda 2, um trecho de 30 centímetros contém exatamente três comprimentos de onda.',
    `${d}<path d="${caminho(c1)}" fill="none" stroke="var(--plot2)" stroke-width="2.2"/>
    <path d="${caminho(c2)}" fill="none" stroke="var(--sign)" stroke-width="4.5"/>
    <circle cx="200" cy="${yc}" r="4" fill="var(--ink)"/>
    <line x1="20" y1="36" x2="20" y2="70" stroke="var(--muted)" stroke-dasharray="3 3"/><line x1="200" y1="36" x2="200" y2="70" stroke="var(--muted)" stroke-dasharray="3 3"/><line x1="335" y1="36" x2="335" y2="70" stroke="var(--muted)" stroke-dasharray="3 3"/>
    <line x1="24" y1="44" x2="196" y2="44" stroke="var(--ink)" stroke-width="1.5" marker-start="${mk}" marker-end="${mk}"/>
    <line x1="204" y1="44" x2="331" y2="44" stroke="var(--ink)" stroke-width="1.5" marker-start="${mk}" marker-end="${mk}"/>
    <text x="110" y="34" text-anchor="middle" class="pt pt-strong">40 cm</text>
    <text x="268" y="34" text-anchor="middle" class="pt pt-strong">30 cm</text>
    <line x1="60" y1="166" x2="110" y2="166" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/><text x="118" y="170" class="pt">v</text>
    <text x="110" y="186" text-anchor="middle" class="pt">corda 1 (fina)</text>
    <text x="268" y="186" text-anchor="middle" class="pt">corda 2 (grossa)</text>`, 340);
})();

/* Q6: dois pulsos que vão se encontrar */
const FIG5_6 = (() => {
  const [d, mk] = seta('var(--ink)');
  const y = 92;
  const path = `M10 ${y} L60 ${y} C78 ${y} 78 ${y - 36} 90 ${y - 36} C102 ${y - 36} 102 ${y} 120 ${y} L220 ${y} C238 ${y} 238 ${y + 24} 250 ${y + 24} C262 ${y + 24} 262 ${y} 280 ${y} L330 ${y}`;
  return fig('0 0 340 160', 'Corda horizontal com dois pulsos de mesmo formato e mesma largura. O pulso A, à esquerda, é uma crista de 3 centímetros e se move para a direita. O pulso B, à direita, é um vale de 2 centímetros e se move para a esquerda.',
    `${d}<path d="${path}" fill="none" stroke="var(--sign)" stroke-width="3" stroke-linecap="round"/>
    <line x1="74" y1="34" x2="112" y2="34" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/>
    <line x1="268" y1="146" x2="230" y2="146" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/>
    <text x="90" y="24" text-anchor="middle" class="pt pt-strong">A</text>
    <text x="250" y="138" text-anchor="middle" class="pt pt-strong">B</text>
    <text x="130" y="70" class="pt">3 cm</text>
    <text x="284" y="114" class="pt">2 cm</text>`, 330);
})();

/* Q7: efeito Doppler, fonte em movimento */
const FIG5_7 = (() => {
  const [d, mk] = seta('var(--ink)');
  let c = '';
  [1, 2, 3, 4].forEach(k => { c += `<circle cx="${230 - 11 * k}" cy="90" r="${22 * k}" fill="none" stroke="var(--sign)" stroke-width="1.6" opacity="${1 - k * 0.15}"/>`; });
  return fig('0 0 340 190', 'Frentes de onda do som emitido por uma ambulância que se move para a direita. As frentes ficam mais próximas umas das outras à frente da ambulância e mais afastadas atrás dela. Figura fora de escala.',
    `${d}${c}<rect x="218" y="80" width="26" height="18" rx="3" fill="var(--ink)"/>
    <line x1="252" y1="70" x2="290" y2="70" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/>
    <text x="270" y="62" text-anchor="middle" class="pt">v<tspan dy="4" font-size="75%">F</tspan></text>
    <text x="336" y="132" text-anchor="end" class="pt">à frente:</text><text x="336" y="146" text-anchor="end" class="pt">frentes</text><text x="336" y="160" text-anchor="end" class="pt">mais juntas</text>
    <text x="4" y="150" class="pt">atrás:</text><text x="4" y="164" class="pt">frentes mais</text><text x="4" y="178" class="pt">afastadas</text>`, 330)
    .replace('</figure>', '<figcaption>Figura fora de escala.</figcaption></figure>');
})();

/* Q8: refração de ondas na água (fundo → raso) */
const FIG5_8 = (() => {
  const cx = 170, cy = 100, si = 0.8, ci = 0.6, sr = 0.6, cr = 0.8;
  const seg = (px, py, ux, uy, h) => `<line x1="${(px - ux * h).toFixed(1)}" y1="${(py - uy * h).toFixed(1)}" x2="${(px + ux * h).toFixed(1)}" y2="${(py + uy * h).toFixed(1)}" stroke="var(--sign)" stroke-width="2"/>`;
  let fr = '';
  [30, 62, 94].forEach(dd => { fr += seg(cx - si * dd, cy - ci * dd, ci, -si, 22); });
  [24, 48, 72].forEach(dd => { fr += seg(cx + sr * dd, cy + cr * dd, cr, -sr, 22); });
  const [d, mk] = seta('var(--ink)');
  return fig('0 0 340 200', 'Frentes de onda retas passam de uma região funda (meio 1, em cima) para uma região rasa (meio 2, embaixo). O raio incidente forma o ângulo i com a normal, e o raio refratado forma o ângulo r, menor, com a normal. No meio 2 as frentes ficam mais próximas umas das outras.',
    `${d}<rect x="0" y="100" width="340" height="100" fill="var(--sign)" opacity=".10"/>
    <line x1="0" y1="100" x2="340" y2="100" stroke="var(--ink)" stroke-width="1.5"/>
    <line x1="${cx}" y1="12" x2="${cx}" y2="196" stroke="var(--muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
    <text x="${cx + 6}" y="22" class="pt">N</text>
    ${fr}
    <line x1="${cx - si * 120}" y1="${cy - ci * 120}" x2="${cx - 4}" y2="${cy - 3}" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/>
    <line x1="${cx}" y1="${cy}" x2="${cx + sr * 110}" y2="${cy + cr * 110}" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/>
    <text x="${cx - 18}" y="${cy - 38}" class="pt pt-strong">î</text>
    <text x="${cx + 8}" y="${cy + 48}" class="pt pt-strong">r̂</text>
    <text x="8" y="22" class="pt">meio 1 (fundo)</text>
    <text x="8" y="190" class="pt">meio 2 (raso)</text>`, 330);
})();

/* Q9: dois polarizadores vistos de frente */
const FIG5_9 = (() => {
  const [d, mk] = seta('var(--ink)');
  let est = '';
  [0, 60, 120, 180, 240, 300].forEach(a => { const r = a * Math.PI / 180, c = Math.cos(r), s2 = Math.sin(r); est += `<line x1="${(36 + 3 * c).toFixed(1)}" y1="${(95 + 3 * s2).toFixed(1)}" x2="${(36 + 22 * c).toFixed(1)}" y2="${(95 + 22 * s2).toFixed(1)}" stroke="var(--plot2)" stroke-width="1.1" marker-end="${mk}"/>`; });
  const ax = 42 * Math.sin(Math.PI / 3), ay = 42 * Math.cos(Math.PI / 3);
  return fig('0 0 340 190', 'Luz não polarizada, de intensidade I zero, passa por um polarizador P1, cujo eixo de transmissão é vertical, e depois por um polarizador P2, cujo eixo forma 60 graus com a vertical. Os polarizadores estão desenhados como vistos de frente, por quem recebe a luz.',
    `${d}${est}<text x="36" y="138" text-anchor="middle" class="pt">I₀</text>
    <line x1="64" y1="95" x2="82" y2="95" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/>
    <circle cx="128" cy="95" r="42" fill="var(--sign)" opacity=".12" stroke="var(--ink)" stroke-width="2"/>
    <line x1="128" y1="53" x2="128" y2="137" stroke="var(--sign)" stroke-width="3"/>
    <text x="128" y="160" text-anchor="middle" class="pt pt-strong">P₁</text>
    <line x1="176" y1="95" x2="196" y2="95" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/>
    <circle cx="244" cy="95" r="42" fill="var(--sign)" opacity=".12" stroke="var(--ink)" stroke-width="2"/>
    <line x1="244" y1="53" x2="244" y2="137" stroke="var(--muted)" stroke-width="1.3" stroke-dasharray="4 4"/>
    <line x1="${(244 - ax).toFixed(1)}" y1="${(95 + ay).toFixed(1)}" x2="${(244 + ax).toFixed(1)}" y2="${(95 - ay).toFixed(1)}" stroke="var(--sign)" stroke-width="3"/>
    <path d="M244 71 A24 24 0 0 1 ${(244 + 24 * Math.sin(Math.PI / 3)).toFixed(1)} ${(95 - 24 * Math.cos(Math.PI / 3)).toFixed(1)}" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
    <text x="262" y="64" class="pt">60°</text>
    <text x="244" y="160" text-anchor="middle" class="pt pt-strong">P₂</text>
    <line x1="292" y1="95" x2="318" y2="95" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/>
    <text x="324" y="99" class="pt">I</text>
    <text x="186" y="184" text-anchor="middle" class="pt">eixos de transmissão vistos de frente</text>`, 330);
})();

const QL5 = [
{
  nivel:'básico',
  text:`Num treino funcional, uma pessoa produz um pulso em forma de crista numa corda. A figura mostra duas maneiras de prender a outra extremidade: em I, a corda está presa rigidamente a um gancho na parede; em II, está amarrada a uma argola leve, que desliza sem atrito numa haste vertical.${FIG5_1}Ao voltar depois da reflexão, o pulso será:`,
  opts:['em I, um vale; em II, uma crista','em I, uma crista; em II, um vale','em I e em II, uma crista','em I e em II, um vale','em I, uma crista; em II, ele não volta'], ans:0,
  hint:'Pense no que a extremidade consegue fazer. O gancho fixo deixa a ponta da corda subir? E a argola?',
  steps:[
    ['Extremidade fixa (I)', `<p>A ponta não pode se mover. A parede reage puxando a corda para baixo (3ª Lei de Newton), e o pulso volta <b>invertido</b>: a crista vira um <b>vale</b>.</p>`],
    ['Extremidade livre (II)', `<p>A argola sobe e desce sem resistência, como se a corda continuasse. O pulso volta <b>sem inversão</b>: continua sendo uma <b>crista</b>.</p>`],
    ['Resposta', `<div class="eq"><span class="hl">I: vale · II: crista</span></div>`],
  ],
  alt:'Lembre do “chicote”: na ponta livre, a corda “sobe junto” com o pulso e devolve a mesma forma. Na ponta presa, a corda é “empurrada de volta” para o lado oposto.',
  warn:'Trocar as duas situações (alternativa b) é o erro mais comum. Quem inverte a fase é a extremidade <b>fixa</b>.'
},
{
  nivel:'básico',
  text:`Em cidades cercadas por morros, é comum que rádios AM sejam captadas com mais facilidade do que rádios FM em pontos “escondidos” atrás dos morros. A tabela mostra valores típicos das duas faixas.${TAB5_2}<p>A explicação física mais adequada para essa diferença é que as ondas AM:</p>`,
  opts:['se propagam no ar com velocidade bem maior que a das ondas FM','difratam mais, por terem comprimento de onda maior','têm frequência maior e, por isso, carregam mais energia','são polarizadas, e as FM não sofrem polarização','sofrem refração no morro e as FM não sofrem'], ans:1,
  hint:'Compare o comprimento de onda das duas faixas com o tamanho de um morro. Qual fenômeno faz uma onda contornar obstáculos?',
  steps:[
    ['O fenômeno', `<p>Contornar obstáculos é a <b>difração</b>. Ela fica mais acentuada quando o comprimento de onda é comparável ao tamanho do obstáculo.</p>`],
    ['AM × FM', `<p>As ondas AM têm λ da ordem de centenas de metros, parecido com o tamanho dos morros, e contornam o relevo. As FM, com λ de poucos metros, quase não contornam e se comportam mais como a luz.</p><div class="eq"><span class="hl">AM: mais difração</span></div>`],
  ],
  alt:'É a mesma razão pela qual você ouve uma conversa atrás de um muro, mas não vê as pessoas: o som tem λ de centímetros a metros; a luz, de menos de um milésimo de milímetro.',
  warn:'As duas são ondas eletromagnéticas e têm a mesma velocidade no ar (alternativa a está errada). E AM tem frequência <b>menor</b> que FM, não maior (alternativa c).'
},
{
  nivel:'básico',
  text:`Para fazer um balanço subir cada vez mais alto, um pai dá pequenos empurrões na criança, sempre no mesmo ponto do movimento, uma vez a cada ida e volta. Mesmo com empurrões fracos, a amplitude do movimento aumenta bastante.<p>Esse aumento de amplitude é um exemplo de:</p>`,
  opts:['interferência, porque os empurrões se somam às oscilações','ressonância, porque o ritmo dos empurrões é o do balanço','difração, porque o balanço contorna a posição de equilíbrio','refração, porque a velocidade do balanço muda a cada volta','ressonância, porque cada empurrão é mais forte que o anterior'], ans:1,
  hint:'O que importa aqui não é a força do empurrão, e sim o ritmo dele. Com que frequência o pai empurra?',
  steps:[
    ['O que acontece', `<p>O balanço tem uma <b>frequência natural</b> de oscilação. O pai empurra exatamente nesse ritmo, uma vez a cada ciclo.</p>`],
    ['O fenômeno', `<p>Quando um sistema recebe energia com frequência igual à sua frequência natural, a energia se acumula e a amplitude cresce: <span class="hl">ressonância</span>.</p>`],
  ],
  alt:'Se o pai empurrasse fora do ritmo (às vezes na ida, às vezes na volta), parte dos empurrões “freariam” o balanço, e a amplitude não cresceria. É a mesma ideia da taça que se quebra com uma nota de mesma frequência que a dela.',
  warn:'A alternativa e cita o fenômeno certo, mas com a explicação errada: os empurrões são fracos. O que faz a amplitude crescer é o <b>ritmo</b>, não a força.'
},
{
  nivel:'intermediário',
  text:`Em muitos cinemas 3D, cada lente dos óculos é um filtro polarizador: cada olho recebe só a imagem projetada com a polarização compatível com a sua lente. Um estudante propõe usar a mesma ideia para separar o som de dois alto-falantes, colocando “filtros polarizadores de som” nos fones. A proposta não funciona, porque o som no ar:`,
  opts:['é onda longitudinal, e só ondas transversais polarizam','se propaga devagar demais para conseguir atravessar um filtro','tem comprimento de onda menor que o da luz','é uma onda eletromagnética, como a luz','não sofre reflexão nem refração'], ans:0,
  hint:'Na polarização, o filtro “escolhe” uma direção de vibração perpendicular à propagação. Em que direção vibram as moléculas de ar numa onda sonora?',
  steps:[
    ['Como o som vibra', `<p>No ar, o som é uma onda <b>longitudinal</b>: as moléculas vibram na mesma direção em que a onda se propaga (compressões e rarefações).</p>`],
    ['Por que não polariza', `<p>Polarizar é deixar passar só uma direção de vibração <b>perpendicular</b> à propagação. Numa onda longitudinal não existe essa “escolha” de direção, então <span class="hl">o som no ar não pode ser polarizado</span>.</p>`],
  ],
  alt:'Lembre da corda passando por uma fenda: uma vibração para cima e para baixo atravessa uma fenda vertical, mas é barrada por uma horizontal. Uma mola sendo comprimida e esticada (longitudinal) passa por qualquer fenda.',
  warn:'O som não é onda eletromagnética (alternativa d), e seu comprimento de onda é muito <b>maior</b> que o da luz, não menor (alternativa c).'
},
{
  nivel:'intermediário',
  text:`Uma onda produzida numa corda fina passa para uma corda mais grossa, ligada a ela. Nos trechos indicados na figura há um número inteiro de comprimentos de onda. A velocidade da onda na corda fina é 4,0 m/s.${FIG5_5}A frequência da onda e sua velocidade na corda grossa são, respectivamente:`,
  opts:['10 Hz e 2,0 m/s','20 Hz e 2,0 m/s','20 Hz e 8,0 m/s','40 Hz e 4,0 m/s','20 Hz e 4,0 m/s'], ans:1,
  hint:'Conte quantos comprimentos de onda cabem em cada trecho. Na refração, qual grandeza da onda não muda?',
  steps:[
    ['Comprimentos de onda', `<p>Corda fina: 2 comprimentos de onda em 40 cm → λ₁ = 20 cm = 0,20 m.<br>Corda grossa: 3 comprimentos de onda em 30 cm → λ₂ = 10 cm = 0,10 m.</p>`],
    ['Frequência', `<div class="eq">f = ${f('v₁','λ₁')} = ${f('4,0','0,20')} = 20 Hz</div><p>Na refração a frequência não muda: é a mesma nas duas cordas.</p>`],
    ['Velocidade na corda grossa', `<div class="eq">v₂ = λ₂ · f = 0,10 · 20 = <span class="hl">2,0 m/s</span></div>`],
  ],
  alt:'Com a frequência igual, velocidade e comprimento de onda são proporcionais. λ caiu pela metade (de 20 cm para 10 cm), então a velocidade também caiu pela metade: de 4,0 para 2,0 m/s.',
  warn:'Achar que a velocidade não muda leva a 4,0 m/s (alternativa e). E usar 40 cm como se fosse um único comprimento de onda dá f = 10 Hz (alternativa a).'
},
{
  nivel:'intermediário',
  text:`Assinale a alternativa que preenche corretamente as lacunas do enunciado abaixo, na ordem em que aparecem.<p>Dois pulsos de mesmo formato e mesma largura se propagam em sentidos opostos numa corda, como mostra a figura: A é uma crista de 3 cm e B é um vale de 2 cm.${FIG5_6}</p><p>No instante em que os pulsos estão exatamente sobrepostos, a corda forma ........ . Depois do encontro, os pulsos ........ .</p>`,
  opts:['uma crista de 5 cm – seguem com as formas originais','uma crista de 1 cm – seguem com as formas originais','uma crista de 1 cm – viram um único pulso de 1 cm','um vale de 1 cm – trocam de forma entre si','uma linha reta – deixam de existir'], ans:1,
  hint:'Na superposição, os deslocamentos se somam com sinal: para cima é positivo, para baixo é negativo. E depois que os pulsos se cruzam, algum deles “sabe” que encontrou o outro?',
  steps:[
    ['Durante o encontro', `<p>Os deslocamentos se somam (interferência):</p><div class="eq">+3 cm + (−2 cm) = +1 cm</div><p>A corda forma uma <b>crista de 1 cm</b> (interferência destrutiva parcial).</p>`],
    ['Depois do encontro', `<p>Cada pulso continua como era antes: A segue para a direita como crista de 3 cm e B segue para a esquerda como vale de 2 cm.</p><div class="eq"><span class="hl">crista de 1 cm – seguem com as formas originais</span></div>`],
  ],
  alt:'Pense em dois grupos de pessoas atravessando uma rua em sentidos opostos: no meio, a calçada fica “confusa”, mas depois cada grupo segue o seu caminho como antes.',
  warn:'Somar as alturas sem considerar o sinal dá 5 cm (alternativa a). E a interferência não “funde” os pulsos (alternativa c): depois do encontro, cada um segue igual.'
},
{
  nivel:'intermediário',
  text:`Associe cada situação ao fenômeno ondulatório que melhor a explica.<p>1. O sonar de um navio mede a profundidade do mar pelo tempo que o eco leva para voltar.<br>2. Numa casa, ouve-se a música de uma festa que acontece do outro lado de um muro alto.<br>3. Ao atravessar um prisma, a luz branca se separa nas cores do arco-íris.<br>4. Fones de ouvido com cancelamento de ruído emitem um som “invertido” que anula o ruído externo.</p><p>A sequência correta, de 1 a 4, é:</p>`,
  opts:['reflexão – difração – refração – interferência','refração – difração – reflexão – interferência','reflexão – refração – difração – polarização','reflexão – difração – interferência – refração','difração – reflexão – refração – ressonância'], ans:0,
  hint:'Para cada situação, pergunte: a onda volta, contorna um obstáculo, muda de meio ou se encontra com outra onda?',
  steps:[
    ['1 e 2', `<p>O eco do sonar é o som que <b>volta</b> ao bater no fundo: <b>reflexão</b>.<br>Ouvir atrás do muro é o som <b>contornando</b> o obstáculo: <b>difração</b>.</p>`],
    ['3 e 4', `<p>No prisma, a luz muda de meio e cada cor sofre um desvio diferente: <b>refração</b> (com dispersão).<br>No fone, o som “invertido” se soma ao ruído e o anula: <b>interferência</b> destrutiva.</p><div class="eq"><span class="hl">reflexão – difração – refração – interferência</span></div>`],
  ],
  alt:'Uma forma de eliminar alternativas: só a situação 4 envolve duas ondas se encontrando. Isso já descarta as opções que não terminam em interferência.',
  warn:'A separação das cores no prisma não é difração nem interferência: ela acontece porque cada cor tem uma velocidade diferente no vidro, isto é, uma refração diferente.'
},
{
  nivel:'avançado',
  text:`Uma ambulância se move em linha reta a 20 m/s, com a sirene emitindo som de frequência 720 Hz. Uma pessoa parada na calçada ouve a sirene enquanto a ambulância se aproxima e, depois, enquanto ela se afasta.${FIG5_7}As frequências percebidas pela pessoa na aproximação e no afastamento são, respectivamente:<p>Dado: velocidade do som no ar = 340 m/s.</p>`,
  opts:['720 Hz e 720 Hz','740 Hz e 700 Hz','765 Hz e 680 Hz','680 Hz e 765 Hz','765 Hz e 720 Hz'], ans:2,
  hint:'Na aproximação, as frentes chegam mais juntas: a frequência percebida é maior. Use a fórmula com v<sub>som</sub> − v<sub>F</sub> no denominador; no afastamento, v<sub>som</sub> + v<sub>F</sub>.',
  steps:[
    ['Aproximação', `<div class="eq">f = 720 · ${f('340','340 − 20')} = 720 · ${f('340','320')}</div><div class="eq">f = 765 Hz</div>`],
    ['Afastamento', `<div class="eq">f = 720 · ${f('340','340 + 20')} = 720 · ${f('340','360')}</div><div class="eq">f = 680 Hz</div>`],
    ['Resposta', `<div class="eq"><span class="hl">765 Hz e 680 Hz</span></div>`],
  ],
  alt:'Antes de calcular, dá para eliminar alternativas: a frequência percebida tem de ser maior que 720 Hz na aproximação e menor no afastamento. Só sobram as alternativas b e c, e a conta decide.',
  warn:'A sirene continua emitindo 720 Hz o tempo todo; o que muda é a frequência <b>percebida</b>. Somar e subtrair 20 diretamente da frequência dá 740 e 700 Hz (alternativa b), o que não tem sentido físico.'
},
{
  nivel:'avançado',
  text:`Numa cuba de ondas, frentes de onda retas passam de uma região funda (meio 1) para uma região rasa (meio 2), onde se propagam mais devagar. No meio 1, as ondas têm velocidade 0,20 m/s e frequência 5,0 Hz, e o ângulo de incidência é î = 53°. No meio 2, o ângulo de refração é r̂ = 37°.${FIG5_8}A velocidade e o comprimento de onda no meio 2 são, respectivamente:<p>Dados: sen 53° = 0,80; sen 37° = 0,60.</p>`,
  opts:['0,15 m/s e 75 cm','0,27 m/s e 5,3 cm','0,15 m/s e 4,0 cm','0,15 m/s e 3,0 cm','0,20 m/s e 3,0 cm'], ans:3,
  hint:'Use a lei da refração, sen î / sen r̂ = v₁ / v₂. Depois lembre que a frequência não muda ao passar de um meio para o outro.',
  steps:[
    ['Lei da refração', `<div class="eq">${f('sen 53°','sen 37°')} = ${f('v₁','v₂')} → ${f('0,80','0,60')} = ${f('0,20','v₂')}</div><div class="eq">v₂ = ${f('0,20 · 0,60','0,80')} = 0,15 m/s</div>`],
    ['Comprimento de onda', `<p>A frequência continua 5,0 Hz:</p><div class="eq">λ₂ = ${f('v₂','f')} = ${f('0,15','5,0')} = 0,030 m = <span class="hl">3,0 cm</span></div>`],
  ],
  alt:'Como f não muda, λ é proporcional a v: λ₁ = 0,20 / 5,0 = 4,0 cm, e λ₂ = 4,0 · 0,60 / 0,80 = 3,0 cm. Na figura, as frentes no meio raso estão mesmo mais juntas.',
  warn:'Inverter a razão dos senos dá 0,27 m/s (alternativa b): a onda ficaria mais rápida na região rasa, ao contrário do enunciado. Manter o comprimento de onda do meio 1 dá 4,0 cm (alternativa c), e multiplicar v por f dá 75 cm (alternativa a).'
},
{
  nivel:'avançado',
  text:`Um feixe de luz não polarizada, de intensidade I₀ = 40 W/m², atravessa dois polarizadores ideais, P₁ e P₂. O eixo de transmissão de P₁ é vertical, e o de P₂ forma 60° com o de P₁, como mostra a figura.${FIG5_9}A intensidade I da luz que sai de P₂ é:<p>Dado: cos 60° = 0,50.</p>`,
  opts:['30 W/m²','20 W/m²','15 W/m²','10 W/m²','5 W/m²'], ans:4,
  hint:'São duas etapas. Quanto da luz não polarizada passa pelo primeiro polarizador? Só depois use a Lei de Malus no segundo.',
  steps:[
    ['Primeiro polarizador', `<p>A luz não polarizada sai de P₁ polarizada na vertical, com metade da intensidade:</p><div class="eq">I₁ = ${f('I₀','2')} = ${f('40','2')} = 20 W/m²</div>`],
    ['Segundo polarizador (Lei de Malus)', `<div class="eq">I = I₁ · cos²60° = 20 · (0,50)²</div><div class="eq">I = 20 · 0,25 = <span class="hl">5 W/m²</span></div>`],
  ],
  alt:'Em frações: metade passa no primeiro, e um quarto do que restou passa no segundo. 1/2 · 1/4 = 1/8 de 40 W/m², ou seja, 5 W/m².',
  warn:'Esquecer que a luz não polarizada perde metade no primeiro polarizador dá 10 W/m² (alternativa d). Usar cos 60° sem elevar ao quadrado também leva a 10 W/m².'
},
];
