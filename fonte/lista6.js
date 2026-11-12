/* ===== Ondulatória · Lista 1: Características das ondas (Cap. 17) ===== */
const TOOLS6 = [
  ['Elementos de uma onda', `A: amplitude (do eixo até a crista)<br>λ: comprimento de onda (de uma crista à seguinte)<br>T: período (s) · f: frequência (Hz)`],
  ['Período e frequência', `T = ${f('tempo','nº de oscilações')} &nbsp;·&nbsp; f = ${f('nº de oscilações','tempo')}<br>T = ${f('1','f')}`],
  ['Velocidade de propagação', `v = ${f('λ','T')} = λ · f<br>No mesmo meio, v é a mesma: λ e f são inversamente proporcionais.`],
  ['Ondas em cordas (Taylor)', `μ = ${f('m','ℓ')} (kg/m) &nbsp;·&nbsp; v = √(F / μ)`],
  ['Classificação', `Natureza: mecânica (precisa de meio) ou eletromagnética (propaga-se também no vácuo)<br>Vibração: transversal (perpendicular à propagação) ou longitudinal (na mesma direção)<br>Dimensões: uni, bi ou tridimensional`],
  ['Ondas eletromagnéticas', `No vácuo, todas têm a mesma velocidade: c = 3 · 10<sup>8</sup> m/s<br>Maior frequência → menor λ e mais energia`],
  ['Prefixos', `k = 10<sup>3</sup> · M = 10<sup>6</sup> · G = 10<sup>9</sup><br>1 cm = 10<sup>−2</sup> m · 1 g = 10<sup>−3</sup> kg`],
];

/* Q1: a "ola" na arquibancada */
const FIG6_1 = (() => {
  const [d, mk] = seta('var(--ink)');
  const alt = [0, 0, 0.15, 0.7, 1, 0.7, 0.15, 0, 0, 0];
  let p = '';
  alt.forEach((h, k) => {
    const x = 26 + k * 32, base = 150, ch = 40 + 34 * h;
    p += `<rect x="${x - 9}" y="${base - ch}" width="18" height="${ch - 12}" rx="6" fill="var(--sign)" opacity="${0.55 + 0.45 * h}"/>`;
    p += `<circle cx="${x}" cy="${base - ch - 8}" r="9" fill="var(--sign)" opacity="${0.55 + 0.45 * h}"/>`;
    if (h > 0.9) p += `<line x1="${x - 10}" y1="${base - ch - 16}" x2="${x - 16}" y2="${base - ch - 36}" stroke="var(--sign)" stroke-width="5" stroke-linecap="round"/><line x1="${x + 10}" y1="${base - ch - 16}" x2="${x + 16}" y2="${base - ch - 36}" stroke="var(--sign)" stroke-width="5" stroke-linecap="round"/>`;
  });
  return fig('0 0 340 190', 'Fileira de torcedores numa arquibancada. Os que estão no meio da fileira estão de pé, com os braços para cima, e os das pontas estão sentados. Uma seta indica que a ola se desloca para a direita.',
    `${d}<rect x="6" y="150" width="328" height="10" rx="3" fill="var(--muted)" opacity=".5"/>${p}
    <line x1="210" y1="34" x2="290" y2="34" stroke="var(--ink)" stroke-width="2.2" marker-end="${mk}"/>
    <text x="250" y="24" text-anchor="middle" class="pt">sentido da ola</text>
    <text x="170" y="182" text-anchor="middle" class="pt">esquema simplificado</text>`, 330);
})();

/* Q2: "foto" de uma onda numa corda */
const FIG6_2 = plot({ aria:'Gráfico da posição vertical y, em centímetros, em função da posição x ao longo da corda, em centímetros, num certo instante. A onda tem cristas em y igual a 15 e vales em y igual a menos 15, e ocupa de x igual a 0 até x igual a 160 centímetros.',
  xmin:0, xmax:170, ymin:-20, ymax:20, xt:[20,40,60,80,100,120,140,160], yt:[-15,-10,-5,5,10,15], xl:'x (cm)', yl:'y (cm)',
  L:[{ p: sen(15, 80, 0, 160), c:'var(--sign)' }] });

/* Q4: espectro eletromagnético */
const FIG6_4 = (() => {
  const [d, mk] = seta('var(--ink)');
  const faixas = ['rádio', 'micro-ondas', 'infravermelho', 'visível', 'ultravioleta', 'raios X', 'raios gama'];
  const w = 44, x0 = 16, y0 = 44, h = 104;
  let s = '';
  faixas.forEach((a, k) => {
    const vis = a === 'visível', x = x0 + k * w;
    s += `<rect x="${x}" y="${y0}" width="${w}" height="${h}" fill="${vis ? 'url(#arco6)' : 'var(--sign)'}" opacity="${vis ? 1 : 0.16 + k * 0.08}" stroke="var(--surface)" stroke-width="2"/>`;
    s += `<text transform="translate(${x + w / 2 + 4} ${y0 + h / 2}) rotate(-90)" text-anchor="middle" class="pt"${vis ? ' style="fill:#111"' : ''}>${a}</text>`;
  });
  return fig('0 0 340 200', 'Espectro eletromagnético em faixas, da esquerda para a direita: rádio, micro-ondas, infravermelho, luz visível, ultravioleta, raios X e raios gama. Uma seta para a direita indica que a frequência e a energia aumentam nesse sentido. Uma seta para a esquerda indica que o comprimento de onda aumenta no sentido oposto.',
    `${d}<defs><linearGradient id="arco6" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#E53935"/><stop offset=".25" stop-color="#FB8C00"/><stop offset=".45" stop-color="#FDD835"/><stop offset=".65" stop-color="#43A047"/><stop offset=".85" stop-color="#1E88E5"/><stop offset="1" stop-color="#8E24AA"/></linearGradient></defs>${s}
    <line x1="20" y1="30" x2="320" y2="30" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/>
    <text x="170" y="20" text-anchor="middle" class="pt">frequência e energia aumentam</text>
    <line x1="320" y1="166" x2="20" y2="166" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/>
    <text x="170" y="188" text-anchor="middle" class="pt">comprimento de onda aumenta</text>`, 340);
})();

/* Q6: oscilação de um ponto da corda ao longo do tempo */
const FIG6_6 = plot({ aria:'Gráfico da posição vertical y, em centímetros, de um ponto da corda em função do tempo, em segundos. O ponto oscila entre mais 4 e menos 4 centímetros e completa exatamente duas oscilações entre t igual a 0 e t igual a 0,8 segundo.',
  xmin:0, xmax:0.9, ymin:-6, ymax:6, xt:[0.2,0.4,0.6,0.8], yt:[-4,4], xl:'t (s)', yl:'y (cm)',
  L:[{ p: sen(4, 0.4, 0, 0.8), c:'var(--sign)' }] });

/* Q7: corda esticada por um bloco pendurado */
const FIG6_7 = (() => {
  const [d, mk] = seta('var(--ink)');
  return fig('0 0 340 200', 'Uma corda horizontal está presa a uma parede à esquerda, passa por uma polia à direita e sustenta, na ponta, um bloco de 4,0 quilogramas pendurado.',
    `${d}<rect x="8" y="30" width="14" height="110" rx="3" fill="var(--muted)"/>
    <line x1="22" y1="60" x2="262" y2="60" stroke="var(--sign)" stroke-width="3"/>
    <circle cx="270" cy="74" r="14" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
    <line x1="270" y1="74" x2="300" y2="104" stroke="var(--ink)" stroke-width="3"/>
    <rect x="290" y="96" width="40" height="10" rx="2" fill="var(--muted)"/>
    <line x1="284" y1="74" x2="284" y2="140" stroke="var(--sign)" stroke-width="3"/>
    <rect x="264" y="140" width="40" height="40" rx="4" fill="var(--ink)"/>
    <text x="284" y="165" text-anchor="middle" class="pt pt-strong" style="fill:var(--surface)">4,0 kg</text>
    <line x1="120" y1="80" x2="190" y2="80" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/>
    <text x="155" y="98" text-anchor="middle" class="pt">pulso</text>
    <text x="140" y="48" text-anchor="middle" class="pt">corda inteira: 2,0 m e 8,0 g</text>
    <text x="120" y="188" text-anchor="middle" class="pt">esquema fora de escala</text>`, 330);
})();

/* Q8: duas ondas na mesma corda (fotos sobrepostas) */
const FIG6_8 = plot({ aria:'Gráfico da posição vertical y em função da posição x, em metros, com duas ondas desenhadas na mesma corda em momentos diferentes. A onda A, linha contínua, tem cristas a cada 0,4 metro. A onda B, linha tracejada, tem cristas a cada 0,2 metro. As duas ocupam de x igual a 0 até 0,8 metro.',
  xmin:0, xmax:0.88, ymin:-4, ymax:4, xt:[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8], xl:'x (m)', yl:'y',
  L:[{ p: sen(3, 0.4, 0, 0.8), c:'var(--sign)', lab:'A', lp:[0.09, 3.3] },
     { p: sen(1.6, 0.2, 0, 0.8), c:'var(--plot2)', dash:'6 4', w:2.4, lab:'B', lp:[0.26, -2.4] }] });

/* Q9: sismograma (registro de uma estação) */
const FIG6_9 = (() => {
  const pts = [];
  for (let t = 0; t <= 140; t += 0.5) {
    let y = 0;
    if (t >= 40 && t < 100) y = 0.9 * Math.sin(2 * Math.PI * (t - 40) / 4) * (1 - 0.4 * (t - 40) / 60);
    if (t >= 100) y = 2.6 * Math.sin(2 * Math.PI * (t - 100) / 6) * Math.max(0.15, 1 - (t - 100) / 45);
    pts.push([t, +y.toFixed(3)]);
  }
  return plot({ aria:'Sismograma: oscilação registrada por uma estação em função do tempo, em segundos. O registro fica parado até t igual a 40 segundos, quando chegam oscilações pequenas, marcadas como onda P. Em t igual a 100 segundos chegam oscilações bem maiores, marcadas como onda S.',
    xmin:0, xmax:145, ymin:-3.2, ymax:3.2, xt:[20,40,60,80,100,120,140], xl:'t (s)', yl:'registro',
    L:[{ p: pts, c:'var(--sign)', w:1.6 }],
    ann:[[40, 2.6, 'P'], [100, 2.95, 'S']] });
})();

const QL6 = [
{
  nivel:'básico',
  text:`Num estádio, a torcida faz a “ola”: cada torcedor apenas se levanta e volta a sentar, um pouco depois do vizinho, e a ola dá a volta na arquibancada.${FIG6_1}Comparando a ola com uma onda, ela se parece com uma onda:`,
  opts:['longitudinal, pois os torcedores se movem no sentido da ola','transversal, que transporta energia, mas não os torcedores','transversal, que leva cada torcedor junto com ela','longitudinal, que transporta os torcedores pelo estádio','eletromagnética, pois não precisa de um meio material'], ans:1,
  hint:'Compare duas direções: a do movimento de cada torcedor e a do deslocamento da ola. E pense: algum torcedor sai do seu lugar?',
  steps:[
    ['Direções', `<p>Cada torcedor se move para <b>cima e para baixo</b>; a ola se desloca <b>ao longo</b> da arquibancada. As direções são perpendiculares: a ola se parece com uma onda <b>transversal</b>.</p>`],
    ['O que é transportado', `<p>Nenhum torcedor muda de lugar: o que percorre o estádio é a perturbação. Assim como numa onda, há transporte de energia, mas <span class="hl">não de matéria</span>.</p>`],
  ],
  alt:'Numa corda balançada, cada pedacinho da corda sobe e desce no mesmo lugar, e o “desenho” da onda é que anda. A ola é a versão humana disso.',
  warn:'Na onda longitudinal, as partes do meio vibram na mesma direção da propagação (alternativas a e d), como numa mola comprimida e esticada. E nenhuma onda “carrega” o meio junto (alternativa c).'
},
{
  nivel:'básico',
  text:`O gráfico é como uma “foto” de uma corda num certo instante, enquanto uma onda passa por ela.${FIG6_2}A amplitude e o comprimento de onda dessa onda são, respectivamente:`,
  opts:['30 cm e 80 cm','15 cm e 40 cm','15 cm e 160 cm','15 cm e 80 cm','30 cm e 40 cm'], ans:3,
  hint:'A amplitude é medida a partir da posição de equilíbrio (y = 0). O comprimento de onda é a distância de uma crista até a crista seguinte.',
  steps:[
    ['Amplitude', `<p>As cristas estão em y = 15 cm e os vales em y = −15 cm. A amplitude vai do eixo até a crista:</p><div class="eq">A = 15 cm</div>`],
    ['Comprimento de onda', `<p>Em 160 cm cabem 2 ondas completas (duas cristas e dois vales):</p><div class="eq">λ = ${f('160','2')} = 80 cm</div><div class="eq"><span class="hl">15 cm e 80 cm</span></div>`],
  ],
  alt:'Outra forma de ler λ: a onda volta a cruzar o eixo subindo em x = 0, 80 cm e 160 cm. A distância entre dois desses pontos é um comprimento de onda.',
  warn:'Medir da crista até o vale dá 30 cm (alternativas a e e), que é o dobro da amplitude. E a distância entre dois cruzamentos seguidos do eixo (40 cm) é só meio comprimento de onda (alternativa b).'
},
{
  nivel:'básico',
  text:`Um pescador observa que a boia da sua linha sobe e desce 15 vezes por minuto com a passagem das ondas do lago. O período e a frequência desse movimento são, respectivamente:`,
  opts:['4,0 s e 0,25 Hz','0,25 s e 4,0 Hz','4,0 s e 15 Hz','60 s e 15 Hz','15 s e 0,067 Hz'], ans:0,
  hint:'Passe o tempo para segundos. O período é o tempo de uma oscilação; a frequência é o número de oscilações por segundo.',
  steps:[
    ['Período', `<p>1 minuto = 60 s, com 15 oscilações:</p><div class="eq">T = ${f('60 s','15')} = 4,0 s</div>`],
    ['Frequência', `<div class="eq">f = ${f('15','60 s')} = 0,25 Hz</div><p>Confira: T = 1/f = 1/0,25 = 4,0 s.</p>`],
  ],
  alt:'A frequência é o inverso do período: uma oscilação a cada 4 s significa um quarto de oscilação por segundo.',
  warn:'Trocar as definições dá 0,25 s e 4,0 Hz (alternativa b). E 15 oscilações por minuto não é 15 Hz (alternativa c): hertz é oscilações por <b>segundo</b>.'
},
{
  nivel:'intermediário',
  text:`Raios X são usados em radiografias, e micro-ondas aquecem alimentos. As duas são ondas eletromagnéticas, como mostra o espectro.${FIG6_4}Comparando, no vácuo, os raios X com as micro-ondas, é correto afirmar que:`,
  opts:['os raios X são mais rápidos, por terem mais energia','as micro-ondas têm maior frequência e menor comprimento de onda','as duas têm o mesmo comprimento de onda e frequências diferentes','as micro-ondas são mecânicas e os raios X, eletromagnéticos','as duas têm a mesma velocidade, e os raios X têm λ menor'], ans:4,
  hint:'No vácuo, todas as ondas eletromagnéticas têm a mesma velocidade. Com v igual, como se relacionam frequência e comprimento de onda?',
  steps:[
    ['Velocidade', `<p>No vácuo, toda onda eletromagnética se propaga com c = 3 · 10<sup>8</sup> m/s. Raios X e micro-ondas têm a <b>mesma velocidade</b>.</p>`],
    ['Frequência e λ', `<p>Pelo espectro, os raios X têm frequência bem maior. Como c = λ · f é igual para as duas, frequência maior significa λ menor:</p><div class="eq"><span class="hl">mesma velocidade; λ<sub>raios X</sub> menor</span></div>`],
  ],
  alt:'A maior energia dos raios X vem da frequência alta, não da velocidade. É por isso que eles atravessam tecidos moles e exigem proteção, e as micro-ondas não.',
  warn:'Mais energia não significa mais velocidade (alternativa a). E micro-ondas não são ondas mecânicas (alternativa d): elas atravessam o vácuo, como toda onda eletromagnética.'
},
{
  nivel:'intermediário',
  text:`Roteadores de Wi-Fi costumam operar em duas faixas, de frequências próximas de 2,4 GHz e 5,0 GHz. Os comprimentos de onda dessas ondas eletromagnéticas no ar são, respectivamente, cerca de:<p>Dados: velocidade das ondas eletromagnéticas no ar ≈ 3,0 · 10<sup>8</sup> m/s; 1 GHz = 10<sup>9</sup> Hz.</p>`,
  opts:['6,0 cm e 12,5 cm','1,25 m e 0,60 m','12,5 cm e 6,0 cm','12,5 cm e 12,5 cm','12,5 m e 6,0 m'], ans:2,
  hint:'Use v = λ · f para cada faixa, com a frequência em hertz. Antes de calcular: a frequência maior terá λ maior ou menor?',
  steps:[
    ['Faixa de 2,4 GHz', `<div class="eq">λ = ${f('3,0 · 10<sup>8</sup>','2,4 · 10<sup>9</sup>')}</div><div class="eq">λ = 0,125 m = 12,5 cm</div>`],
    ['Faixa de 5,0 GHz', `<div class="eq">λ = ${f('3,0 · 10<sup>8</sup>','5,0 · 10<sup>9</sup>')}</div><div class="eq">λ = 0,060 m = 6,0 cm</div><div class="eq"><span class="hl">12,5 cm e 6,0 cm</span></div>`],
  ],
  alt:'Com a velocidade igual, λ é inversamente proporcional a f. A frequência passou de 2,4 para 5,0 GHz (cerca do dobro), então λ cai para cerca da metade: de 12,5 cm para 6,0 cm.',
  deep: ['Por que as antenas têm tamanho parecido com λ', `<p><b>1. A antena “combina” com a onda.</b> Uma antena funciona melhor quando seu tamanho é uma fração simples do comprimento de onda que ela emite ou recebe. Muitas têm cerca de meio ou um quarto de λ.</p>
<div class="eq">${f('λ','4')} = ${f('12,5 cm','4')} ≈ 3 cm</div>
<p>Por isso a antena de Wi-Fi de 2,4&nbsp;GHz cabe dentro de um roteador ou de um celular.</p>
<p><b>2. Comparação com o rádio FM.</b> Para 100 MHz, λ = 3,0 · 10<sup>8</sup> / 10<sup>8</sup> = 3 m, e um quarto disso dá cerca de 75 cm, o tamanho das antenas de rádio que os carros usavam.</p>
<p><b>3. Ligação com a Lista 2.</b> Na questão sobre rádios AM e FM, o comprimento de onda também decide tudo, mas lá o que importa é o tamanho dos morros, e não o da antena.</p>`],
  warn:'Inverter a ordem dá a alternativa a: a faixa de frequência maior é a de λ <b>menor</b>. Errar a potência de 10 leva a valores 10 ou 100 vezes maiores (alternativas b e e).'
},
{
  nivel:'intermediário',
  text:`Enquanto uma onda passa por uma corda, registra-se a posição vertical de um único ponto da corda ao longo do tempo, como mostra o gráfico. Sabe-se que o comprimento de onda é 1,2 m.${FIG6_6}A velocidade de propagação da onda na corda é:`,
  opts:['0,48 m/s','3,0 m/s','1,5 m/s','6,0 m/s','0,33 m/s'], ans:1,
  hint:'Atenção ao eixo horizontal: ele mostra o tempo, não a posição. O que dá para ler nesse gráfico: o comprimento de onda ou o período?',
  steps:[
    ['Leitura do gráfico', `<p>O eixo é o tempo. O ponto completa 2 oscilações em 0,8 s:</p><div class="eq">T = ${f('0,8','2')} = 0,4 s</div>`],
    ['Velocidade', `<div class="eq">v = ${f('λ','T')} = ${f('1,2','0,4')} = <span class="hl">3,0 m/s</span></div>`],
  ],
  alt:'Calcule a frequência primeiro: f = 1/0,4 = 2,5 Hz. Depois, v = λ · f = 1,2 · 2,5 = 3,0 m/s.',
  warn:'Usar 0,8 s como período (o tempo de duas oscilações) dá 1,5 m/s (alternativa c). Multiplicar λ por T em vez de dividir dá 0,48 m/s (alternativa a).'
},
{
  nivel:'intermediário',
  text:`Uma corda inteira, de 2,0 m e 8,0 g, está esticada horizontalmente: uma ponta presa à parede e a outra passando por uma polia e sustentando um bloco de 4,0 kg, como no esquema.${FIG6_7}A velocidade de um pulso nessa corda é ........ . Se o bloco for trocado por outro de 16 kg, a velocidade ........ .<p>Dado: g = 10 m/s².</p>`,
  opts:['100 m/s; dobra','100 m/s; fica 4 vezes maior','3,2 m/s; dobra','71 m/s; dobra','10 000 m/s; dobra'], ans:0,
  hint:'A força que estica a corda é o peso do bloco. Calcule μ em kg/m e use a equação de Taylor. A velocidade depende da força ou da raiz da força?',
  steps:[
    ['Força e densidade linear', `<div class="eq">F = m · g = 4,0 · 10 = 40 N</div><div class="eq">μ = ${f('8,0 · 10<sup>−3</sup> kg','2,0 m')} = 4,0 · 10<sup>−3</sup> kg/m</div>`],
    ['Velocidade', `<div class="eq">v = √(${f('40','4,0 · 10<sup>−3</sup>')})</div><div class="eq">v = √10 000 = 100 m/s</div>`],
    ['Bloco 4 vezes mais pesado', `<p>F fica 4 vezes maior; como v = √(F/μ), a velocidade fica √4 = 2 vezes maior:</p><div class="eq"><span class="hl">100 m/s; dobra</span></div>`],
  ],
  alt:'É o que acontece ao afinar um violão: apertar a tarraxa aumenta a tensão da corda e a velocidade das ondas nela, e o som fica mais agudo.',
  deep: ['De onde vem v = √(F / μ)', `<p><b>1. As unidades conferem.</b> A força é medida em N = kg · m/s², e a densidade linear em kg/m:</p>
<div class="eq">${f('F','μ')} → ${f('kg · m/s²','kg/m')}</div>
<div class="eq">= ${f('m²','s²')}</div>
<p>A raiz de m²/s² é m/s, uma velocidade. As unidades mostram que v tem de ser proporcional a √(F/μ); a dedução completa mostra que não sobra nenhum número multiplicando.</p>
<p><b>2. O sentido físico.</b> A tensão é o que puxa cada pedaço da corda de volta para o lugar: quanto maior, mais rápido o pulso passa adiante. A densidade linear mede a inércia da corda: quanto mais “pesada”, mais devagar ela responde. A dedução completa aplica a 2ª Lei de Newton a um pedacinho da corda.</p>
<p><b>3. Ligação com a música.</b> Para dobrar a velocidade da onda numa corda de violão, é preciso quadruplicar a tensão. Com o mesmo comprimento de corda, a nota sobe uma oitava. A questão 10 mostra o outro lado: com a densidade 4 vezes maior, a velocidade cai pela metade.</p>`],
  warn:'Esquecer a raiz quadrada dá 10 000 m/s (alternativa e) ou a ideia de que a velocidade quadruplica (alternativa b). Deixar a massa em gramas dá 3,2 m/s (alternativa c), e usar a massa sem dividir pelo comprimento dá 71 m/s (alternativa d).'
},
{
  nivel:'avançado',
  text:`Duas ondas, A e B, são produzidas uma de cada vez na mesma corda, mantida sempre com a mesma tensão. O gráfico mostra uma “foto” de cada onda, desenhadas juntas para comparação. A onda A tem frequência 5,0 Hz.${FIG6_8}A velocidade e a frequência da onda B são, respectivamente:`,
  opts:['1,0 m/s e 5,0 Hz','2,0 m/s e 2,5 Hz','2,0 m/s e 10 Hz','4,0 m/s e 10 Hz','2,0 m/s e 5,0 Hz'], ans:2,
  hint:'Leia o comprimento de onda de cada onda no gráfico. Mesma corda e mesma tensão: o que é igual para as duas ondas?',
  steps:[
    ['Comprimentos de onda', `<p>A: uma crista a cada 0,4 m → λ<sub>A</sub> = 0,40 m.<br>B: uma crista a cada 0,2 m → λ<sub>B</sub> = 0,20 m.</p>`],
    ['Velocidade (igual para as duas)', `<p>Mesma corda e mesma tensão: mesma velocidade.</p><div class="eq">v = λ<sub>A</sub> · f<sub>A</sub> = 0,40 · 5,0 = 2,0 m/s</div>`],
    ['Frequência de B', `<div class="eq">f<sub>B</sub> = ${f('v','λ<sub>B</sub>')} = ${f('2,0','0,20')} = 10 Hz</div><div class="eq"><span class="hl">2,0 m/s e 10 Hz</span></div>`],
  ],
  alt:'No mesmo meio, λ e f são inversamente proporcionais. λ<sub>B</sub> é a metade de λ<sub>A</sub>, então f<sub>B</sub> é o dobro de f<sub>A</sub>: 10 Hz.',
  warn:'Supor que a frequência é a mesma leva a v<sub>B</sub> = 1,0 m/s (alternativa a), mas quem é igual é a velocidade, que depende só da corda. Achar que λ e f variam juntos dá 2,5 Hz (alternativa b).'
},
{
  nivel:'avançado',
  text:`Num terremoto, partem do foco, ao mesmo tempo, dois tipos de onda sísmica. As ondas P comprimem e distendem a rocha na mesma direção em que se propagam e são mais rápidas. As ondas S, mais lentas, chegam depois. O registro de uma estação está no gráfico (t = 0 é o início do registro, não o momento do terremoto).${FIG6_9}<p>Considerando valores simplificados, v<sub>P</sub> = 8 km/s e v<sub>S</sub> = 4 km/s, a distância entre a estação e o foco e o tipo da onda P quanto à direção de vibração são:</p>`,
  opts:['240 km; a onda P é longitudinal','480 km; a onda P é transversal','720 km; a onda P é longitudinal','320 km; a onda P é longitudinal','480 km; a onda P é longitudinal'], ans:4,
  hint:'Leia no gráfico o intervalo entre a chegada da onda P e a da onda S. As duas percorrem a mesma distância d, com velocidades diferentes.',
  steps:[
    ['Leitura do sismograma', `<p>A onda P chega em 40 s e a S em 100 s:</p><div class="eq">Δt = 100 − 40 = 60 s</div>`],
    ['Distância', `<div class="eq">${f('d','4')} − ${f('d','8')} = 60</div><div class="eq">${f('d','8')} = 60 → d = 480 km</div>`],
    ['Tipo da onda P', `<p>A rocha vibra na mesma direção da propagação: onda <b>longitudinal</b>.</p><div class="eq"><span class="hl">480 km; longitudinal</span></div>`],
  ],
  alt:'A cada quilômetro, a onda S “perde” 1/4 − 1/8 = 1/8 de segundo para a P. Para acumular 60 s de atraso, são 60 · 8 = 480 km. As estações sismológicas usam essa diferença para localizar o foco.',
  deep: ['Uma fórmula para qualquer estação', `<p><b>1. A fórmula geral.</b> As duas ondas percorrem a mesma distância d. A diferença entre os tempos de viagem é o Δt lido no sismograma:</p>
<div class="eq">${f('d','v<sub>S</sub>')} − ${f('d','v<sub>P</sub>')} = Δt</div>
<div class="eq">d = Δt · ${f('v<sub>P</sub> · v<sub>S</sub>','v<sub>P</sub> − v<sub>S</sub>')}</div>
<p>Com 8 e 4 km/s: d = 60 · 32/4 = 480 km, o mesmo resultado da resolução.</p>
<p><b>2. Com valores mais realistas.</b> Na crosta, valores típicos são perto de 6 km/s para a onda P e 3,5 km/s para a S. Aí cada segundo de atraso vale cerca de 8 km: d ≈ 8 · Δt.</p>
<p><b>3. Como se acha o foco.</b> Uma estação só diz a distância, não a direção: o foco está em algum ponto de um círculo em volta dela. Com três estações, os três círculos se cruzam num único ponto.</p>`],
  warn:'Multiplicar Δt pela diferença das velocidades dá 240 km (alternativa a), e pela soma dá 720 km (alternativa c). Usar o instante de chegada da P (40 s) como tempo de viagem dá 320 km (alternativa d), mas t = 0 não é o momento do terremoto.'
},
{
  nivel:'avançado',
  text:`Assinale a alternativa que preenche corretamente as lacunas do enunciado abaixo, na ordem em que aparecem.<p>Num violão, duas cordas de mesmo comprimento estão sob a mesma tensão, mas a mais grossa tem densidade linear 4 vezes maior que a fina. Para ondas de mesma frequência, a velocidade de propagação na corda grossa é ........ da velocidade na fina, e o comprimento de onda na corda grossa é ........ do comprimento de onda na fina.</p>`,
  opts:['o dobro – o dobro','a metade – o dobro','um quarto – um quarto','a metade – a metade','igual – a metade'], ans:3,
  hint:'Na equação de Taylor, a densidade linear está dentro da raiz. Depois use v = λ · f com a mesma frequência.',
  steps:[
    ['Velocidade', `<div class="eq">v = √(${f('F','μ')})</div><p>Com F igual e μ 4 vezes maior, v fica dividida por √4 = 2: <b>a metade</b>.</p>`],
    ['Comprimento de onda', `<p>Com a mesma frequência, λ = v / f também fica <b>a metade</b>.</p><div class="eq"><span class="hl">a metade – a metade</span></div>`],
  ],
  alt:'É por isso que as cordas graves do violão são mais grossas: com a mesma tensão, a onda é mais lenta e, para o mesmo comprimento de corda, a frequência do som é menor.',
  warn:'Esquecer a raiz dá “um quarto” (alternativa c). E λ e v variam juntos quando f é fixa: se a velocidade cai, o comprimento de onda também cai (por isso a alternativa b está errada).'
},
];
