/* ===== Lista 3 · Termologia: Primeira Lei da Termodinâmica (Cap. 23) ===== */
const TOOLS3 = [
  ['1ª Lei da Termodinâmica', `Q = τ + ΔU &nbsp;(tudo na mesma unidade de energia)`],
  ['Sinais', `Q &gt; 0: recebe calor · Q &lt; 0: cede calor<br>τ &gt; 0: expansão (o gás realiza trabalho)<br>τ &lt; 0: compressão (trabalho sobre o gás)<br>ΔU &gt; 0: a temperatura sobe`],
  ['Trabalho', `Pressão constante: τ = p · ΔV<br>Em qualquer caso: τ = área sob a curva no gráfico p × V<br>Volume constante: τ = 0`],
  ['Energia interna (gás monoatômico)', `U = ${f('3','2')} n · R · T &nbsp;&nbsp; ΔU = ${f('3','2')} n · R · ΔT`],
  ['Casos especiais', `Isotérmica: ΔU = 0 → Q = τ<br>Adiabática: Q = 0 → ΔU = −τ<br>Ciclo: ΔU = 0 → Q = τ = área do ciclo`],
  ['Unidades', `1 L = 10<sup>−3</sup> m³ · 1 N/m² = 1 Pa<br>Pa · m³ = J`],
];

/* Q3: bomba de encher pneu */
const FIG3_3 = (() => {
  const [d, mk] = seta('var(--ink)');
  return fig('0 0 340 190', 'Bomba de encher pneu em corte: um cilindro com ar, um êmbolo empurrado rapidamente para baixo por uma força F. As paredes não dão tempo para o ar trocar calor com o ambiente.',
    `${d}<rect x="120" y="30" width="100" height="140" rx="6" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
    <rect x="124" y="98" width="92" height="68" fill="var(--sign)" opacity=".22"/>
    ${[[140,112],[170,130],[200,118],[150,150],[188,154],[132,136],[205,142],[165,108]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="3" fill="var(--sign)"/>`).join('')}
    <rect x="122" y="86" width="96" height="12" fill="var(--muted)"/>
    <rect x="164" y="14" width="12" height="72" fill="var(--muted)"/>
    <line x1="250" y1="22" x2="250" y2="72" stroke="var(--ink)" stroke-width="2.5" marker-end="${mk}"/>
    <text x="262" y="50" class="pt pt-strong">F</text>
    <text x="104" y="134" text-anchor="end" class="pt">ar</text>
    <text x="236" y="150" class="pt">compressão</text><text x="236" y="166" class="pt">rápida</text>`, 320);
})();

/* Q5: A → B → C */
const FIG3_5 = plot({ aria:'Gráfico pressão, em newtons por metro quadrado, em função do volume, em metros cúbicos. O gás vai do ponto A (1; 20) ao ponto B (3; 40) em linha reta e depois do ponto B ao ponto C (5; 40) a pressão constante.',
  xmax:6, ymax:50, xt:[1,2,3,4,5], yt:[10,20,30,40], xl:'V (m³)', yl:'p (N/m²)',
  L:[{ p:[[1,20],[3,40],[5,40]], c:'var(--sign)' }, { p:[[1,0],[1,20]], c:'var(--muted)', w:1.2, dash:'4 4' }, { p:[[3,0],[3,40]], c:'var(--muted)', w:1.2, dash:'4 4' }, { p:[[5,0],[5,40]], c:'var(--muted)', w:1.2, dash:'4 4' }],
  pts:[[1,20],[3,40],[5,40]],
  ann:[[0.8,24,'A','end'],[3,45,'B'],[5,45,'C'],[2,33,'<tspan font-size="20" fill="var(--sign)">↗</tspan>'],[4,43,'<tspan font-size="20" fill="var(--sign)">→</tspan>']] });

/* Q6: ciclo retangular no sentido horário */
const FIG3_6 = plot({ aria:'Ciclo retangular no diagrama pressão em função do volume. A (2; 100) sobe até B (2; 300), vai a pressão constante até C (5; 300), desce até D (5; 100) e volta a A: sentido horário.',
  xmax:6, ymax:380, xt:[1,2,3,4,5], yt:[100,200,300], xl:'V (m³)', yl:'p (N/m²)',
  L:[{ p:[[2,100],[2,300],[5,300],[5,100],[2,100]], c:'var(--sign)' }],
  pts:[[2,100],[2,300],[5,300],[5,100]],
  ann:[[1.8,90,'A','end'],[1.8,320,'B','end'],[5.2,320,'C','start'],[5.2,90,'D','start'],[1.75,210,'<tspan font-size="20" fill="var(--sign)">↑</tspan>'],[3.5,318,'<tspan font-size="20" fill="var(--sign)">→</tspan>'],[5.25,210,'<tspan font-size="20" fill="var(--sign)">↓</tspan>','start'],[3.5,82,'<tspan font-size="20" fill="var(--sign)">←</tspan>']] });

/* Q9: ciclo triangular no sentido anti-horário */
const FIG3_9 = plot({ aria:'Ciclo triangular no diagrama pressão em função do volume. A (0,1; 200) vai a pressão constante até B (0,5; 200), depois em linha reta até C (0,1; 600) e desce a volume constante de volta a A: sentido anti-horário.',
  xmax:0.6, ymax:700, xt:[0.1,0.2,0.3,0.4,0.5], yt:[200,400,600], xl:'V (m³)', yl:'p (N/m²)',
  L:[{ p:[[0.1,200],[0.5,200],[0.1,600],[0.1,200]], c:'var(--sign)' }],
  pts:[[0.1,200],[0.5,200],[0.1,600]],
  ann:[[0.09,175,'A','end'],[0.51,175,'B','start'],[0.09,625,'C','end'],[0.3,250,'<tspan font-size="20" fill="var(--sign)">→</tspan>'],[0.32,435,'<tspan font-size="20" fill="var(--sign)">↖</tspan>'],[0.075,400,'<tspan font-size="20" fill="var(--sign)">↓</tspan>','end']] });

/* Q10: dois caminhos de A até C */
const FIG3_10 = plot({ aria:'Diagrama pressão em função do volume com dois caminhos entre os mesmos estados A e C. Caminho 1: de A (1; 4) a B (3; 4) a pressão constante e depois de B a C (3; 2) a volume constante. Caminho 2: de A a D (1; 2) a volume constante e depois de D a C a pressão constante.',
  xmax:4, ymax:5, xt:[1,2,3], yt:[1,2,3,4], xl:'V (m³)', yl:'p (10² Pa)',
  L:[{ p:[[1,4],[3,4],[3,2]], c:'var(--sign)', lab:'caminho 1', lp:[1.6,4.3] }, { p:[[1,4],[1,2],[3,2]], c:'var(--plot2)', dash:'7 5', lab:'caminho 2', lp:[1.6,1.55] }],
  pts:[[1,4],[3,4],[3,2],[1,2]],
  ann:[[0.85,4.1,'A','end'],[3.15,4.1,'B','start'],[3.15,1.8,'C','start'],[0.85,1.8,'D','end']] });

const QL3 = [
{
  src:'Inédita', nivel:'básico',
  text:`Um gás recebe 500 J de calor e, ao mesmo tempo, realiza 200 J de trabalho sobre o meio externo. A variação da energia interna do gás é:`,
  opts:['−700 J','−300 J','200 J','300 J','700 J'], ans:3,
  hint:'Escreva a 1ª Lei e coloque os sinais: o gás recebe calor (Q positivo) e realiza trabalho (τ positivo).',
  steps:[
    ['Sinais', `<p>Recebe calor: Q = +500 J. Realiza trabalho (expande): τ = +200 J.</p>`],
    ['1ª Lei', `<div class="eq">Q = τ + ΔU → 500 = 200 + ΔU</div><div class="eq">ΔU = <span class="hl">300 J</span></div>`],
  ],
  alt:'Pense numa conta bancária: entram 500 (calor), saem 200 (trabalho que o gás “gasta” empurrando o meio). Ficam 300 guardados como energia interna.',
  warn:'Somar tudo (500 + 200 = 700 J, alternativa e) esquece que o trabalho realizado pelo gás é energia que <b>sai</b> dele.',
  mod:'Inédita, inspirada nos Exemplos 1 (ENEM) e 2 (UERN) dos slides do capítulo 23.'
},
{
  src:'Inédita', nivel:'básico',
  text:`Um gás sofre uma transformação isocórica (volume constante) e recebe 360 J de calor do meio. O trabalho realizado pelo gás e a variação de sua energia interna são, respectivamente:`,
  opts:['360 J e zero','zero e 360 J','180 J e 180 J','zero e −360 J','−360 J e 360 J'], ans:1,
  hint:'Se o volume não muda, o gás empurra alguma coisa? Há trabalho?',
  steps:[
    ['Trabalho', `<p>Sem variação de volume, não há deslocamento do êmbolo: <b>τ = 0</b>.</p>`],
    ['Energia interna', `<div class="eq">Q = τ + ΔU → 360 = 0 + ΔU</div><div class="eq">ΔU = <span class="hl">360 J</span></div>`],
  ],
  alt:'Na isocórica, todo o calor recebido vira energia interna: a temperatura do gás sobe. É o que acontece num recipiente rígido aquecido.',
  warn:'A alternativa a troca as posições: não há trabalho porque o volume é constante, e é a energia interna que recebe os 360 J.',
  mod:'Baseada no Exemplo 3 dos slides do capítulo 23 (isocórica com 240 J), com outro valor.'
},
{
  src:'Inédita', nivel:'básico',
  text:`Ao encher um pneu de bicicleta, a bomba esquenta. Suponha que o ar dentro dela seja comprimido tão rápido que não dá tempo de trocar calor com o ambiente (transformação adiabática).${FIG3_3}Para o ar dentro da bomba, nessa compressão:`,
  opts:['Q = 0 e τ &lt; 0, então ΔU &gt; 0 e a temperatura sobe','Q = 0 e τ &gt; 0, então ΔU &lt; 0 e a temperatura cai','Q &gt; 0 e τ = 0, então ΔU &gt; 0 e a temperatura sobe','Q &lt; 0 e τ &lt; 0, então ΔU = 0 e a temperatura fica','Q = 0 e τ = 0, então ΔU = 0 e a temperatura fica'], ans:0,
  hint:'Adiabática diz algo sobre Q. Compressão diz algo sobre o sinal de τ. Depois é só aplicar a 1ª Lei.',
  steps:[
    ['Calor', `<p>Adiabática: não há troca de calor, <b>Q = 0</b>.</p>`],
    ['Trabalho', `<p>O volume diminui: o trabalho é feito <b>sobre</b> o gás, <b>τ &lt; 0</b>.</p>`],
    ['Energia interna', `<div class="eq">0 = τ + ΔU → ΔU = −τ &gt; 0</div><p>A energia interna aumenta, e a <span class="hl">temperatura do ar sobe</span>. Por isso a bomba esquenta.</p>`],
  ],
  alt:'A energia que você gasta empurrando o êmbolo não tem para onde ir (não sai como calor) e fica no ar, aumentando sua energia interna.',
  warn:'Dizer que τ &gt; 0 (alternativa b) seria uma expansão. Na compressão o trabalho é negativo, e é por isso que ΔU fica positivo.',
  mod:'Inédita (convenção de sinais da 1ª Lei, slides do capítulo 23).'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`Em uma transformação isobárica, um gás perfeito, mantido a 3,0 · 10<sup>5</sup> N/m², recebe 2 000 J de calor, e seu volume aumenta de 2,0 L para 6,0 L. A variação da energia interna do gás é:<p>Dado: 1 L = 10<sup>−3</sup> m³.</p>`,
  opts:['800 J','1 200 J','2 000 J','3 200 J','−1,2 · 10⁶ J'], ans:0,
  hint:'Pressão constante: τ = p · ΔV, com o volume em m³. Depois use a 1ª Lei.',
  steps:[
    ['Variação de volume', `<div class="eq">ΔV = 6,0 − 2,0 = 4,0 L = 4,0 · 10<sup>−3</sup> m³</div>`],
    ['Trabalho', `<div class="eq">τ = p · ΔV = 3,0 · 10<sup>5</sup> · 4,0 · 10<sup>−3</sup></div><div class="eq">τ = 1 200 J</div>`],
    ['1ª Lei', `<div class="eq">2 000 = 1 200 + ΔU → ΔU = <span class="hl">800 J</span></div>`],
  ],
  alt:'Dos 2 000 J que entraram, 1 200 J saíram como trabalho (o gás empurrou o êmbolo) e 800 J ficaram no gás, aumentando sua temperatura.',
  warn:'Deixar o volume em litros dá τ = 1,2 · 10⁶ J e uma energia interna negativa absurda (alternativa e). Pa · m³ é que dá joule.',
  mod:'Baseada no Exemplo 4 dos slides do capítulo 23 (2,0 · 10⁵ N/m², 1 500 J, 3,0 L), com outros valores.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`O gráfico mostra as transformações AB e BC sofridas por um gás ideal.${FIG3_5}O trabalho realizado pelo gás de A até C é:`,
  opts:['80 J','100 J','140 J','160 J','200 J'], ans:2,
  hint:'O trabalho é a área sob a curva, até o eixo V. Divida em duas figuras: um trapézio (AB) e um retângulo (BC).',
  steps:[
    ['Trecho AB (trapézio)', `<div class="eq">τ<sub>AB</sub> = ${f('(20 + 40) · 2','2')} = 60 J</div>`],
    ['Trecho BC (retângulo)', `<div class="eq">τ<sub>BC</sub> = 40 · (5 − 3) = 80 J</div>`],
    ['Total', `<div class="eq">τ<sub>AC</sub> = 60 + 80 = <span class="hl">140 J</span></div>`],
  ],
  alt:'Divida o trecho AB num retângulo (20 · 2 = 40 J) e num triângulo (2 · 20 ÷ 2 = 20 J). Os 60 J do trapézio aparecem do mesmo jeito.',
  warn:'Calcular só o trecho a pressão constante dá 80 J (alternativa a). A área sob a reta inclinada também é trabalho.',
  mod:'Baseada no Exemplo 1 (PUC-SP) da parte de trabalho dos slides do capítulo 23, com outros valores.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`Um gás perfeito percorre o ciclo ABCDA representado no diagrama.${FIG3_6}Em cada ciclo, o gás:`,
  opts:['não troca calor, pois ΔU = 0','recebe 300 J de calor','recebe 600 J de calor','cede 600 J de calor','recebe 1 500 J de calor'], ans:2,
  hint:'Num ciclo, o gás volta ao estado inicial. O que isso diz sobre ΔU? E o trabalho é a área de dentro do ciclo.',
  steps:[
    ['Energia interna', `<p>O gás volta ao estado A: mesma temperatura, então <b>ΔU = 0</b>.</p>`],
    ['Trabalho no ciclo', `<p>Área do retângulo: (5 − 2) · (300 − 100) = 600 J. O ciclo é <b>horário</b>, então o trabalho é positivo: τ = +600 J.</p>`],
    ['Calor', `<div class="eq">Q = τ + ΔU = 600 + 0</div><p>O gás <span class="hl">recebe 600 J de calor</span> por ciclo.</p>`],
  ],
  alt:'É o funcionamento de uma máquina térmica: em cada volta, o calor que entra (em saldo) sai como trabalho.',
  warn:'ΔU = 0 não significa Q = 0 (alternativa a). Significa que todo o calor trocado em saldo vira trabalho: Q = τ.',
  mod:'Baseada no Exemplo 1 da parte de transformações cíclicas dos slides do capítulo 23, com outros valores e perguntando o calor.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`Uma amostra de 2,0 mols de hélio (gás monoatômico ideal) é aquecida de 300 K para 500 K. A variação de sua energia interna é:<p>Dado: R = 8,0 J/(mol·K).</p>`,
  opts:['2 400 J','3 200 J','4 800 J','8 000 J','12 000 J'], ans:2,
  hint:'Para gás monoatômico, ΔU = (3/2) · n · R · ΔT. Use a variação de temperatura, não a temperatura final.',
  steps:[
    ['Variação de temperatura', `<div class="eq">ΔT = 500 − 300 = 200 K</div>`],
    ['Energia interna', `<div class="eq">ΔU = ${f('3','2')} · 2,0 · 8,0 · 200</div><div class="eq">ΔU = <span class="hl">4 800 J</span></div>`],
  ],
  alt:'Calcule U antes e depois: U₁ = 1,5 · 2 · 8 · 300 = 7 200 J e U₂ = 1,5 · 2 · 8 · 500 = 12 000 J. A diferença é 4 800 J.',
  warn:'Usar a temperatura final dá 12 000 J (alternativa e), que é a energia interna em 500 K, não a variação. Esquecer o fator 3/2 dá 3 200 J (alternativa b).',
  mod:'Inédita (energia interna do gás monoatômico, slides do capítulo 23).'
},
{
  src:'Inédita', nivel:'avançado',
  text:`Dois mols de um gás monoatômico ideal são aquecidos a pressão constante, de 300 K para 400 K. A quantidade de calor recebida pelo gás é:<p>Dado: R = 8,0 J/(mol·K).</p>`,
  opts:['800 J','1 600 J','2 400 J','4 000 J','5 600 J'], ans:3,
  hint:'Você não tem p nem V, mas tem n e ΔT. A pressão constante, p · ΔV = n · R · ΔT. Depois some a energia interna.',
  steps:[
    ['Trabalho', `<p>Pela equação de Clapeyron, a pressão constante:</p><div class="eq">τ = p · ΔV = n · R · ΔT</div><div class="eq">τ = 2 · 8,0 · 100 = 1 600 J</div>`],
    ['Energia interna', `<div class="eq">ΔU = ${f('3','2')} · 2 · 8,0 · 100 = 2 400 J</div>`],
    ['Calor', `<div class="eq">Q = τ + ΔU = 1 600 + 2 400 = <span class="hl">4 000 J</span></div>`],
  ],
  alt:'Para o gás monoatômico a pressão constante, Q = (5/2) · n · R · ΔT: uma parte (3/2) aquece o gás e outra (1) vira trabalho.',
  warn:'Calcular só a energia interna dá 2 400 J (alternativa c). A pressão constante o gás também se expande, e parte do calor sai como trabalho.',
  mod:'Inédita (1ª Lei com Clapeyron e energia interna, slides dos capítulos 22 e 23).'
},
{
  src:'Inédita', nivel:'avançado',
  text:`Um gás sofre a transformação cíclica ABCA indicada no diagrama.${FIG3_9}Em cada ciclo, o trabalho do gás e o calor trocado são:`,
  opts:['τ = +80 J; recebe 80 J de calor','τ = −80 J; cede 80 J de calor','τ = −160 J; cede 160 J de calor','τ = 0; não troca calor','τ = +160 J; recebe 160 J de calor'], ans:1,
  hint:'O trabalho é a área do triângulo. O sinal depende do sentido em que o ciclo é percorrido.',
  steps:[
    ['Área do ciclo', `<div class="eq">área = ${f('(0,5 − 0,1) · (600 − 200)','2')} = 80 J</div>`],
    ['Sinal', `<p>O ciclo vai de A para B (direita), sobe até C e desce até A: sentido <b>anti-horário</b>. O trabalho no ciclo é negativo: τ = −80 J.</p>`],
    ['Calor', `<p>Ciclo: ΔU = 0, então Q = τ = −80 J. O gás <span class="hl">cede 80 J de calor</span>.</p>`],
  ],
  alt:'Compare a expansão AB (o gás realiza 200 · 0,4 = 80 J) com a compressão BC (o meio realiza sobre o gás a área do trapézio, 160 J). Saldo: 80 − 160 = −80 J.',
  warn:'Esquecer o sentido do ciclo leva à alternativa a. E usar o retângulo inteiro (0,4 · 400 = 160 J) em vez do triângulo leva à alternativa c ou e.',
  mod:'Inédita, inspirada no Exemplo 2 (UFG) dos slides do capítulo 23, com o ciclo em sentido anti-horário.'
},
{
  src:'Inédita', nivel:'avançado',
  text:`Um gás ideal pode ir do estado A ao estado C por dois caminhos diferentes, mostrados no diagrama.${FIG3_10}<p>Considere as afirmações:</p><p>I. A variação da energia interna é a mesma nos dois caminhos.<br>II. O trabalho realizado pelo gás é o mesmo nos dois caminhos.<br>III. O gás recebe mais calor no caminho 1 do que no caminho 2.</p><p>Está correto o que se afirma em:</p>`,
  opts:['I, apenas','II, apenas','I e III, apenas','II e III, apenas','I, II e III'], ans:2,
  hint:'A energia interna depende só do estado (início e fim). O trabalho depende da área sob o caminho. E o calor sai da 1ª Lei.',
  steps:[
    ['Afirmação I', `<p>Os dois caminhos começam em A e terminam em C. A energia interna depende só do estado do gás, então ΔU é igual: <b>verdadeira</b>.</p>`],
    ['Afirmação II', `<p>Caminho 1: a expansão acontece a 4 · 10² Pa, área = 4 · 10² · 2 = 800 J.<br>Caminho 2: a expansão acontece a 2 · 10² Pa, área = 2 · 10² · 2 = 400 J.<br>Os trabalhos são diferentes: <b>falsa</b>.</p>`],
    ['Afirmação III', `<p>Q = τ + ΔU. O ΔU é igual e o τ é maior no caminho 1, então o calor recebido também é maior: <b>verdadeira</b>.</p><div class="eq"><span class="hl">I e III</span></div>`],
  ],
  alt:'ΔU é como a diferença de altitude entre duas cidades: não depende da estrada. Trabalho e calor são como a distância percorrida: dependem do caminho.',
  warn:'É comum achar que, se o começo e o fim são iguais, tudo é igual (alternativa e). Só ΔU depende apenas do início e do fim; trabalho e calor dependem do caminho.',
  mod:'Inédita (trabalho como área no gráfico p × V e 1ª Lei, slides do capítulo 23).'
},
];
