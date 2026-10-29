/* ===== Lista 2 · Termologia: Gases ideais (Cap. 22) ===== */
const TOOLS2 = [
  ['Equação de Clapeyron', `p · V = n · R · T`],
  ['Lei geral dos gases', `${f('p₀ · V₀','T₀')} = ${f('p · V','T')} &nbsp;(mesma amostra de gás)`],
  ['Casos particulares', `Isotérmica (T constante): p₀V₀ = pV<br>Isobárica (p constante): ${f('V₀','T₀')} = ${f('V','T')}<br>Isocórica (V constante): ${f('p₀','T₀')} = ${f('p','T')}`],
  ['Temperatura sempre em kelvin', `T (K) = θ (°C) + 273`],
  ['Constante R', `0,082 atm·L/(mol·K)<br>8,31 J/(mol·K) = 8,31 Pa·m³/(mol·K)`],
  ['Unidades', `1 atm ≈ 10<sup>5</sup> Pa · 1 L = 10<sup>−3</sup> m³<br>1 m³ = 1 000 L`],
];

/* Hipérbole p = k/V */
const hip = (k, va, vb) => { const p = []; for (let v = va; v <= vb + 1e-9; v += (vb - va) / 60) p.push([+v.toFixed(3), +(k / v).toFixed(3)]); return p; };

/* Q2: três isotermas com rótulos embaralhados */
const FIG2_2 = plot({ aria:'Diagrama pressão em função do volume com três isotermas de uma mesma amostra de gás. A curva mais próxima dos eixos é T B, a do meio é T C e a mais afastada dos eixos é T A.',
  xmax:10, ymax:10, xl:'V', yl:'p', noxl:true,
  L:[{ p:hip(6, 0.65, 5.6), c:'var(--plot2)', lab:'T<tspan dy="5" font-size="75%">B</tspan>', lp:[5.75, 1.35] },
     { p:hip(12, 1.25, 7.4), c:'var(--muted)', lab:'T<tspan dy="5" font-size="75%">C</tspan>', lp:[7.55, 1.95] },
     { p:hip(20, 2.1, 9.2), c:'var(--sign)', lab:'T<tspan dy="5" font-size="75%">A</tspan>', lp:[9.0, 2.75] }] });

/* Q5: Charles, V × T em kelvin */
const FIG2_5 = plot({ aria:'Gráfico do volume, em litros, em função da temperatura absoluta, em kelvin, para pressão constante: uma reta que passa pela origem e pelo ponto 300 kelvin, 6 litros.',
  xmax:420, ymax:9, xt:[100,200,300,400], yt:[2,4,6,8], xl:'T (K)', yl:'V (L)',
  L:[{ p:[[0,0],[300,6]], c:'var(--sign)' }, { p:[[300,6],[400,8]], c:'var(--sign)', dash:'6 5' }, { p:[[0,6],[300,6],[300,0]], c:'var(--muted)', w:1.4, dash:'5 4' }],
  pts:[[300,6]] });

/* Q9: isoterma com pontos A, B, C, D */
const FIG2_9 = plot({ aria:'Diagrama pressão, em 10 elevado a 5 pascal, em função do volume, em 10 elevado a menos 3 metros cúbicos. Uma curva passa pelos pontos A (1; 8), B (2; 4), C (3; cerca de 2,7) e D (4; 2), e continua até o volume 8 com pressão 1.',
  xmax:8.6, ymax:9, xt:[1,2,3,4,5,6,7,8], yt:[1,2,3,4,5,6,7,8], xl:'V (10⁻³ m³)', yl:'p (10⁵ Pa)',
  L:[{ p:hip(8, 1, 8), c:'var(--sign)' }],
  pts:[[1,8],[2,4],[3,8/3],[4,2]],
  ann:[[1.25,8.3,'A','start'],[2.25,4.3,'B','start'],[3.25,3.0,'C','start'],[4.25,2.3,'D','start']] });

const QL2 = [
{
  src:'Inédita', nivel:'básico',
  text:`No modelo de gás ideal (gás perfeito), qual das afirmações abaixo <b>não</b> faz parte das hipóteses do modelo?`,
  opts:['As partículas se movem o tempo todo, em todas as direções','O volume das partículas é desprezível perto do volume do recipiente','As partículas se atraem fortemente, mesmo afastadas umas das outras','As colisões entre as partículas e com as paredes são elásticas','Só há interação entre as partículas quando elas colidem'], ans:2,
  hint:'O gás ideal é o “gás mais simples possível”. Que tipo de força entre as partículas complicaria o modelo?',
  steps:[
    ['As hipóteses do modelo', `<p>No gás ideal: partículas de volume desprezível, em movimento constante e desordenado, colisões perfeitamente elásticas e <b>nenhuma força de atração ou repulsão</b> entre elas, a não ser durante as colisões.</p>`],
    ['A afirmação errada', `<p>Dizer que as partículas se atraem fortemente, mesmo à distância, contraria o modelo. É justamente por desprezar essas forças que o gás ideal fica tão simples.</p>`],
  ],
  alt:'Gases reais se aproximam do ideal quando estão a baixa pressão e alta temperatura: as partículas ficam longe umas das outras e rápidas, e a atração entre elas quase não faz diferença.',
  warn:'Não confunda “só interagem quando colidem” (alternativa e, que é hipótese do modelo) com “se atraem à distância” (alternativa c, que não é).',
  mod:'Inédita (hipóteses do gás ideal e da teoria cinética, slides dos capítulos 22 e 23).'
},
{
  src:'Inédita', nivel:'básico',
  text:`O diagrama mostra três isotermas, T<sub>A</sub>, T<sub>B</sub> e T<sub>C</sub>, de uma mesma amostra de gás perfeito.${FIG2_2}Sobre as temperaturas absolutas, pode-se afirmar que:`,
  opts:['T<sub>A</sub> = T<sub>B</sub> = T<sub>C</sub>','T<sub>B</sub> &gt; T<sub>C</sub> &gt; T<sub>A</sub>','T<sub>A</sub> &gt; T<sub>C</sub> &gt; T<sub>B</sub>','T<sub>C</sub> &gt; T<sub>A</sub> &gt; T<sub>B</sub>','T<sub>B</sub> = T<sub>C</sub> &lt; T<sub>A</sub>'], ans:2,
  hint:'Escolha um mesmo volume e compare as pressões das três curvas. Pela equação de Clapeyron, com n e V fixos, quem tem maior pressão tem maior temperatura.',
  steps:[
    ['Mesmo volume', `<p>Trace uma linha vertical (mesmo V). Ela corta primeiro T<sub>B</sub> (pressão menor), depois T<sub>C</sub> e por último T<sub>A</sub> (pressão maior).</p>`],
    ['Clapeyron', `<div class="eq">p = ${f('n · R · T','V')}</div><p>Com n e V iguais, a pressão é proporcional a T. Quanto mais afastada dos eixos a isoterma, maior a temperatura:</p><div class="eq"><span class="hl">T<sub>A</sub> &gt; T<sub>C</sub> &gt; T<sub>B</sub></span></div>`],
  ],
  alt:'Cada isoterma tem p · V = n · R · T constante. A curva mais afastada da origem tem o maior produto p · V e, portanto, a maior temperatura.',
  warn:'Os índices não estão em ordem na figura de propósito. Não basta decorar “T₃ é a maior”: olhe qual curva está mais longe dos eixos.',
  mod:'Inédita, inspirada no Exemplo 1 dos slides do capítulo 22, com as curvas fora de ordem.'
},
{
  src:'Livro, p. 37', nivel:'básico',
  text:`O pneu de uma moto é calibrado com pressão de 35 psi num dia frio, a 7 °C. Após uma longa viagem, a temperatura do ar no interior do pneu chega a 37 °C. Considerando desprezível a variação do volume do pneu, a pressão final, em psi, é:`,
  opts:['31,61','35,00','38,75','45,50','185,00'], ans:2,
  hint:'Volume constante: é uma transformação isocórica. E as temperaturas precisam estar em kelvin.',
  steps:[
    ['Tipo de transformação', `<p>O volume não muda: transformação <b>isocórica</b>. Vale ${f('p₀','T₀')} = ${f('p','T')}.</p>`],
    ['Kelvin', `<p>T₀ = 7 + 273 = 280 K · T = 37 + 273 = 310 K</p>`],
    ['Pressão final', `<div class="eq">p = 35 · ${f('310','280')} = <span class="hl">38,75 psi</span></div>`],
  ],
  alt:'A temperatura absoluta aumentou na razão 310/280 ≈ 1,11, cerca de 11%. A pressão aumenta na mesma proporção: 35 · 1,11 ≈ 38,75 psi.',
  warn:'Usar as temperaturas em °C dá 35 · 37/7 = 185 psi (alternativa e), um absurdo: o pneu estouraria. Nas leis dos gases, a temperatura é sempre em kelvin.',
  mod:'Questão do livro (“Agora é com você”, p. 37), item b, transformada em múltipla escolha.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`Um gás perfeito está num cilindro fechado por um pistão. No estado A: p<sub>A</sub> = 3,0 atm, V<sub>A</sub> = 2,0 L e T<sub>A</sub> = 27 °C. No estado B, a temperatura é 127 °C e a pressão é 2,0 atm. O volume V<sub>B</sub> é:`,
  opts:['2,25 L','3,0 L','4,0 L','4,5 L','14 L'], ans:2,
  hint:'Mudaram pressão, volume e temperatura ao mesmo tempo: use a lei geral dos gases, com T em kelvin.',
  steps:[
    ['Kelvin', `<p>T<sub>A</sub> = 27 + 273 = 300 K · T<sub>B</sub> = 127 + 273 = 400 K</p>`],
    ['Lei geral', `<div class="eq">${f('3,0 · 2,0','300')} = ${f('2,0 · V<sub>B</sub>','400')}</div>`],
    ['Resolvendo', `<div class="eq">V<sub>B</sub> = ${f('3,0 · 2,0 · 400','300 · 2,0')} = <span class="hl">4,0 L</span></div>`],
  ],
  alt:'Pense em dois efeitos: a pressão caiu de 3 para 2 atm (o volume aumenta 3/2 vezes) e a temperatura subiu de 300 para 400 K (o volume aumenta 4/3 vezes). 2,0 · 3/2 · 4/3 = 4,0 L.',
  warn:'Com as temperaturas em °C, a conta dá cerca de 14 L (alternativa e). E inverter a razão das temperaturas dá 2,25 L (alternativa a).',
  mod:'Inédita, inspirada no Exemplo 2 (PUCCAMP) dos slides do capítulo 22, com outros valores.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`O gráfico mostra o volume de uma amostra de gás ideal em função da temperatura absoluta, numa transformação a pressão constante.${FIG2_5}Mantida a pressão, qual será o volume do gás a 87 °C?`,
  opts:['1,7 L','5,0 L','6,0 L','7,2 L','8,7 L'], ans:3,
  hint:'O eixo do gráfico está em kelvin, mas a temperatura pedida está em °C. Converta antes de usar a proporção.',
  steps:[
    ['Leitura do gráfico', `<p>A reta passa pela origem e pelo ponto (300 K; 6,0 L). Pressão constante: V é proporcional a T (lei de Charles).</p>`],
    ['Kelvin', `<div class="eq">T = 87 + 273 = 360 K</div>`],
    ['Volume', `<div class="eq">${f('6,0','300')} = ${f('V','360')} → V = <span class="hl">7,2 L</span></div>`],
  ],
  alt:'A temperatura absoluta passou de 300 K para 360 K: aumentou 20%. O volume aumenta os mesmos 20%: 6,0 · 1,2 = 7,2 L.',
  warn:'Usar 87 direto na proporção dá cerca de 1,7 L (alternativa a): o gás “encolheria” ao ser aquecido, o que não faz sentido.',
  mod:'Inédita (lei de Charles e o zero absoluto, slides do capítulo 22).'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`Que volume devem ocupar 4,0 mols de um gás perfeito, a 27 °C, para exercer uma pressão de 12 atm nas paredes do recipiente?<p>Dado: R = 0,082 atm·L/(mol·K).</p>`,
  opts:['0,74 L','8,2 L','16,4 L','82 L','831 L'], ans:1,
  hint:'Equação de Clapeyron. Repare nas unidades de R: pressão em atm, volume em L e temperatura em K.',
  steps:[
    ['Dados', `<p>n = 4,0 mol · p = 12 atm · T = 27 + 273 = 300 K</p>`],
    ['Clapeyron', `<div class="eq">V = ${f('n · R · T','p')} = ${f('4,0 · 0,082 · 300','12')}</div><div class="eq">V = ${f('98,4','12')} = <span class="hl">8,2 L</span></div>`],
  ],
  alt:'Como R está em atm·L/(mol·K), a pressão entra em atm e o volume já sai em litros. Não é preciso converter nada além da temperatura.',
  warn:'Usar 27 (°C) no lugar de 300 K dá 0,74 L (alternativa a). Usar R = 8,31 com a pressão em atm mistura unidades e dá 831 (alternativa e).',
  mod:'Baseada no Exemplo 4 dos slides do capítulo 22 (6,0 mol, 227 °C, 12 atm), com outros valores.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`Um cilindro rígido de 20 L contém oxigênio a 150 atm. O gás é usado para encher balões à pressão de 1,0 atm, na mesma temperatura do cilindro. Que volume esse gás ocuparia a 1,0 atm?`,
  opts:['7,5 L','150 L','300 L','1 500 L','3 000 L'], ans:4,
  hint:'A temperatura não muda: é uma transformação isotérmica. O produto p · V fica constante.',
  steps:[
    ['Tipo de transformação', `<p>Temperatura constante: <b>isotérmica</b> (lei de Boyle-Mariotte).</p>`],
    ['Boyle-Mariotte', `<div class="eq">p₀ · V₀ = p · V</div><div class="eq">150 · 20 = 1,0 · V</div><div class="eq">V = <span class="hl">3 000 L</span></div>`],
  ],
  alt:'A pressão ficou 150 vezes menor. Na isotérmica, o volume fica 150 vezes maior: 20 · 150 = 3 000 L.',
  warn:'Dividir em vez de multiplicar (20 ÷ 150 ≈ 0,13 ou 150 ÷ 20 = 7,5, alternativa a) faria o gás ocupar menos espaço a uma pressão menor. Pressão e volume variam em sentidos opostos.',
  mod:'Inédita (lei de Boyle-Mariotte, slides do capítulo 22).'
},
{
  src:'Inédita', nivel:'avançado',
  text:`Uma amostra de gás ideal passa do estado 1 para o 2 e depois do 2 para o 3. Alguns valores estão na tabela.${tabela(['Estado','p (atm)','V (L)','T (K)'], [['1','2,0','6,0','300'],['2','3,0','6,0','T₂'],['3','3,0','V₃','600']])}<p>Os valores de T₂ e V₃ são, respectivamente:</p>`,
  opts:['200 K e 8,0 L','450 K e 4,5 L','450 K e 8,0 L','450 K e 12 L','900 K e 4,0 L'], ans:2,
  hint:'Olhe qual grandeza fica igual em cada etapa. De 1 para 2, o volume não muda; de 2 para 3, a pressão não muda.',
  steps:[
    ['De 1 para 2: isocórica', `<div class="eq">${f('2,0','300')} = ${f('3,0','T₂')} → T₂ = 450 K</div>`],
    ['De 2 para 3: isobárica', `<div class="eq">${f('6,0','450')} = ${f('V₃','600')} → V₃ = 8,0 L</div>`],
    ['Resposta', `<div class="eq"><span class="hl">T₂ = 450 K e V₃ = 8,0 L</span></div>`],
  ],
  alt:`Confira com a lei geral entre os estados 1 e 3: ${f('2,0 · 6,0','300')} = 0,04 e ${f('3,0 · 8,0','600')} = 0,04. Mesma amostra, mesmo valor de pV/T.`,
  warn:'Inverter a proporção na isobárica dá V₃ = 4,5 L (alternativa b): o gás seria aquecido e diminuiria de volume, o que não acontece a pressão constante.',
  mod:'Inédita (transformações isocórica e isobárica, slides do capítulo 22).'
},
{
  src:'Livro, p. 37', nivel:'avançado',
  text:`Um mol de um gás sofre a transformação representada no diagrama p × V.${FIG2_9}A temperatura do gás no estado A e a pressão no estado C são, respectivamente:<p>Dado: R = 8,0 J/(mol·K).</p>`,
  opts:['100 K e 2,7 · 10⁵ Pa','100 K e 3,0 · 10⁵ Pa','300 K e 2,7 · 10⁵ Pa','800 K e 2,7 · 10⁵ Pa','1 K e 2,7 · 10⁵ Pa'], ans:0,
  hint:'Calcule p · V em A, B e D. Se der sempre o mesmo valor, que tipo de transformação é essa?',
  steps:[
    ['Que transformação é essa', `<p>A: 8,0 · 10⁵ · 1,0 · 10⁻³ = 800 J<br>B: 4,0 · 10⁵ · 2,0 · 10⁻³ = 800 J<br>D: 2,0 · 10⁵ · 4,0 · 10⁻³ = 800 J</p><p>p · V é constante: <b>isotérmica</b>.</p>`],
    ['Temperatura em A', `<div class="eq">T = ${f('p · V','n · R')} = ${f('800','1 · 8,0')} = <span class="hl">100 K</span></div>`],
    ['Pressão em C', `<div class="eq">p<sub>C</sub> = ${f('800','3,0 · 10⁻³')} ≈ <span class="hl">2,7 · 10⁵ Pa</span></div>`],
  ],
  alt:'Como a curva é uma isoterma, a temperatura é a mesma (100 K) em todos os pontos, inclusive em C.',
  warn:'Ler p<sub>C</sub> “no olho” pela malha leva a 3,0 · 10⁵ Pa (alternativa b), mas C está abaixo da linha de 3,0. E esquecer as potências de 10 (usar 8 · 1 = 8) dá T = 1 K (alternativa e).',
  mod:'Questão do livro (“Agora é com você”, p. 37, n.º 3), itens b e c, transformada em múltipla escolha. Gráfico redesenhado.'
},
{
  src:'Inédita', nivel:'avançado',
  text:`Um balão meteorológico é liberado na superfície com 6,0 m³ de gás, a 1,0 atm e 27 °C. Ao atingir certa altitude, a pressão do gás é 0,40 atm e a temperatura, −33 °C. Considerando o gás ideal e a quantidade de gás constante, o volume do balão nessa altitude é:`,
  opts:['1,9 m³','4,8 m³','12 m³','15 m³','18,75 m³'], ans:2,
  hint:'Pressão e temperatura mudam juntas. Use a lei geral com T em kelvin; cuidado com a temperatura negativa em °C.',
  steps:[
    ['Kelvin', `<p>T₀ = 27 + 273 = 300 K · T = −33 + 273 = 240 K</p>`],
    ['Lei geral', `<div class="eq">${f('1,0 · 6,0','300')} = ${f('0,40 · V','240')}</div>`],
    ['Volume', `<div class="eq">V = ${f('1,0 · 6,0 · 240','300 · 0,40')} = <span class="hl">12 m³</span></div>`],
  ],
  alt:'Dois efeitos opostos. A pressão caiu para 0,40 da inicial: o volume multiplica por 2,5 (6 → 15 m³). O resfriamento de 300 K para 240 K multiplica por 0,8: 15 · 0,8 = 12 m³.',
  warn:'Considerar só a queda de pressão dá 15 m³ (alternativa d); considerar só o resfriamento dá 4,8 m³ (alternativa b). Os dois efeitos acontecem juntos.',
  mod:'Inédita (lei geral dos gases perfeitos, slides do capítulo 22).'
},
];
