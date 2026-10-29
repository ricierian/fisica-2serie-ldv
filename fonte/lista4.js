/* ===== Lista 4 · Termologia: revisão no estilo ENEM e UFRGS (Cap. 20, 22 e 23) ===== */
const TOOLS4 = [
  ['Calorimetria', `Q = m · c · ΔT &nbsp;·&nbsp; Q = m · L &nbsp;·&nbsp; C = ${f('Q','ΔT')} = m · c<br>P = ${f('Q','Δt')} (Δt em segundos → P em W = J/s)`],
  ['Gases', `p · V = n · R · T &nbsp;·&nbsp; ${f('p₀V₀','T₀')} = ${f('pV','T')}<br>T (K) = θ (°C) + 273`],
  ['1ª Lei', `Q = τ + ΔU<br>τ = p · ΔV (pressão constante) ou área no gráfico p × V`],
  ['Gás monoatômico', `ΔU = ${f('3','2')} n · R · ΔT<br>A pressão constante: τ = n · R · ΔT`],
  ['Leitura de enunciado (ENEM)', `Separe os dados do texto, as unidades e o que é pedido. Muitas vezes há informação que não será usada.`],
  ['Lacunas (UFRGS)', `Teste cada lacuna separadamente e vá eliminando alternativas: basta uma lacuna errada para descartar a opção.`],
];

/* Q5: tabela nutricional */
const TAB4_5 = tabela(['Informação nutricional', 'Porção de 20 g'], [['Valor energético','120 kcal'],['Carboidratos','4 g'],['Proteínas','5 g'],['Gorduras totais','10 g']], true);

/* Q6: Q × T de dois corpos */
const FIG4_6 = plot({ aria:'Gráfico do calor absorvido, em joules, em função da temperatura absoluta, em kelvin, para os corpos X e Y. As duas retas partem de 300 kelvin com calor zero. Em 320 kelvin, X absorveu 1 200 joules e Y absorveu 400 joules.',
  xmin:300, xmax:324, ymax:1400, xt:[300,305,310,315,320], yt:[200,400,600,800,1000,1200], xl:'T (K)', yl:'Q (J)', l:52,
  L:[{ p:[[300,0],[320,1200]], c:'var(--sign)', lab:'X', lp:[320.6,1180] }, { p:[[300,0],[320,400]], c:'var(--plot2)', lab:'Y', lp:[320.6,380] },
     { p:[[300,1200],[320,1200],[320,0]], c:'var(--muted)', w:1.2, dash:'4 4' }, { p:[[300,400],[320,400]], c:'var(--muted)', w:1.2, dash:'4 4' }] });

/* Q8: pressão × profundidade */
const TAB4_8 = tabela(['Prof. (m)','Pressão (atm)','Água (°C)'], [['0','1,0','27'],['10','2,0','—'],['20','3,0','—'],['30','4,0','7']]);

/* Q9: dois processos de i até f */
const FIG4_9 = plot({ aria:'Diagrama pressão em função do volume. O processo I vai do estado i (1; 4) ao estado f (4; 1) em linha reta. O processo II vai de i até (1; 1) a volume constante e depois até f a pressão constante.',
  xmax:5, ymax:5, xt:[1,2,3,4], yt:[1,2,3,4], xl:'V (L)', yl:'p (atm)',
  L:[{ p:[[1,4],[4,1]], c:'var(--sign)', lab:'I', lp:[2.7,2.85] }, { p:[[1,4],[1,1],[4,1]], c:'var(--plot2)', dash:'7 5', lab:'II', lp:[2.4,0.65] }],
  pts:[[1,4],[4,1],[1,1]],
  ann:[[0.85,4.15,'i','end'],[4.15,1.2,'f','start']] });

const QL4 = [
{
  nivel:'básico',
  text:`Num dia de verão, ao meio-dia, um banhista percebe que a areia da praia está quente a ponto de queimar os pés, enquanto a água do mar continua fresca, embora as duas tenham recebido a luz do Sol durante toda a manhã.<p>A propriedade física que melhor explica essa diferença é que:</p>`,
  opts:['a água tem calor específico maior e precisa de mais energia para esquentar','a areia, por ser mais escura, recebe do Sol muito mais energia do que a água','a água armazena o frio da noite e o libera aos poucos durante o dia todo','a areia tem calor específico maior e por isso esquenta mais depressa que a água','a água transfere todo o calor recebido para o fundo do mar de forma instantânea'], ans:0,
  hint:'Pense em Q = m · c · ΔT. Para a mesma energia recebida por grama, quem varia mais a temperatura?',
  steps:[
    ['A relação', `<div class="eq">ΔT = ${f('Q','m · c')}</div><p>Recebendo energia parecida por grama, o material de <b>menor calor específico</b> sofre a maior variação de temperatura.</p>`],
    ['Areia e água', `<p>A água tem um dos maiores calores específicos da natureza (cerca de 1 cal/(g·°C)); a areia, bem menor (cerca de 0,2 cal/(g·°C)). Por isso <span class="hl">a areia esquenta muito mais</span> com a mesma energia.</p>`],
  ],
  alt:'O mesmo explica por que, à noite, a areia esfria rápido e a água continua morna: a água “resiste” a mudar de temperatura nos dois sentidos.',
  warn:'Inverter a ideia (alternativa d) é o erro mais comum: calor específico maior significa esquentar <b>menos</b>, não mais depressa. E “frio armazenado” (alternativa c) não existe.',
},
{
  nivel:'básico',
  text:`O rótulo de um desodorante aerossol traz o aviso: “Não expor a temperaturas superiores a 50 °C. Não perfurar nem incinerar, mesmo vazio”. Considere que, num dia ameno, a 27 °C, o gás dentro da lata está a 3,0 atm. Se a lata for esquecida no painel de um carro ao sol e atingir 87 °C, a pressão do gás, considerado ideal, passará a ser:`,
  opts:['2,5 atm','3,0 atm','3,6 atm','6,0 atm','9,7 atm'], ans:2,
  hint:'A lata é rígida: o volume não muda. Que lei vale nesse caso? E em que escala deve estar a temperatura?',
  steps:[
    ['Tipo de transformação', `<p>Lata rígida: volume constante, transformação <b>isocórica</b>. Vale ${f('p₀','T₀')} = ${f('p','T')}.</p>`],
    ['Kelvin', `<p>T₀ = 27 + 273 = 300 K · T = 87 + 273 = 360 K</p>`],
    ['Pressão', `<div class="eq">p = 3,0 · ${f('360','300')} = <span class="hl">3,6 atm</span></div>`],
  ],
  alt:'A temperatura absoluta subiu 20% (de 300 K para 360 K); a pressão sobe os mesmos 20%. Por isso o fabricante limita a temperatura: a pressão poderia superar o que a lata suporta.',
  warn:'Usar °C dá 3,0 · 87/27 ≈ 9,7 atm (alternativa e). A proporção só funciona com temperatura absoluta.',
},
{
  nivel:'básico',
  text:`Assinale a alternativa que preenche corretamente as lacunas do enunciado abaixo, na ordem em que aparecem.<p>Quando uma amostra de gás ideal é comprimida lentamente, mantendo-se a temperatura constante, sua pressão ........ e sua energia interna ........ .</p>`,
  opts:['aumenta – aumenta','aumenta – não se altera','diminui – diminui','diminui – não se altera','não se altera – aumenta'], ans:1,
  hint:'Primeira lacuna: lei de Boyle-Mariotte. Segunda lacuna: de que grandeza depende a energia interna de um gás ideal?',
  steps:[
    ['Primeira lacuna', `<p>Temperatura constante: p · V = constante. Se o volume diminui, a pressão <b>aumenta</b>.</p>`],
    ['Segunda lacuna', `<p>A energia interna do gás ideal depende só da temperatura (U = ${f('3','2')} nRT, no monoatômico). Temperatura constante: a energia interna <b>não se altera</b>.</p>`],
  ],
  alt:'Pela 1ª Lei: ΔU = 0, então Q = τ. Como o gás é comprimido (τ &lt; 0), ele <b>cede</b> calor ao ambiente na mesma quantidade do trabalho recebido.',
  warn:'Achar que a energia interna aumenta porque “o gás recebeu trabalho” (alternativa a) esquece que, na isotérmica, essa energia sai como calor.',
},
{
  nivel:'intermediário',
  text:`Peixes ornamentais tropicais precisam de água em temperatura estável. Num aquário de 40 L, um aquecedor de 50 W, controlado por termostato, repõe exatamente a energia que a água perde para o ambiente, que pode ser considerada constante.<p>Se o aquecedor ficar desligado por 1 hora, a redução da temperatura da água será de aproximadamente:</p><p>Dados: calor específico da água = 4,0 kJ/(kg·K); densidade da água = 1 kg/L.</p>`,
  opts:['0,02 °C','0,45 °C','1,1 °C','2,3 °C','4,5 °C'], ans:2,
  hint:'Se o aquecedor de 50 W repõe a perda, a água perde energia a 50 J por segundo. Quantos segundos tem 1 hora?',
  steps:[
    ['Energia perdida em 1 h', `<div class="eq">Q = P · Δt = 50 · 3 600 = 180 000 J</div>`],
    ['Massa e calor específico', `<p>m = 40 kg · c = 4,0 kJ/(kg·K) = 4 000 J/(kg·K)</p>`],
    ['Variação de temperatura', `<div class="eq">ΔT = ${f('180 000','40 · 4 000')} ≈ <span class="hl">1,1 °C</span></div>`],
  ],
  alt:'Variação de 1 K é igual a variação de 1 °C, por isso o calor específico em J/(kg·K) dá o resultado direto em °C.',
  warn:'Usar 60 (minutos) como se fosse segundos dá cerca de 0,02 °C (alternativa a). Potência em watts pede tempo em segundos.',
},
{
  nivel:'intermediário',
  text:`Numa aula sobre calorimetria, uma professora queimou 5,0 g de amendoim para aquecer 400 g de água, inicialmente a 20 °C, num recipiente que reduz as perdas de calor. Pela tabela nutricional do amendoim e pela temperatura final da água, concluiu que 40% da energia disponível foi aproveitada.${TAB4_5}<p>Considerando o calor específico da água igual a 1 cal/(g·°C), a temperatura da água ao final do experimento foi de:</p>`,
  opts:['30 °C','32 °C','50 °C','80 °C','95 °C'], ans:2,
  hint:'Primeiro descubra a energia de 5,0 g de amendoim pela tabela. Depois pegue só 40% dela e lembre que 1 kcal = 1 000 cal.',
  steps:[
    ['Energia em 5,0 g', `<p>20 g → 120 kcal. Então 5,0 g (um quarto da porção) → 30 kcal.</p>`],
    ['Energia aproveitada', `<div class="eq">40% de 30 kcal = 12 kcal = 12 000 cal</div>`],
    ['Aquecimento da água', `<div class="eq">ΔT = ${f('12 000','400 · 1')} = 30 °C</div><div class="eq">T = 20 + 30 = <span class="hl">50 °C</span></div>`],
  ],
  alt:'É assim que se mede o valor energético dos alimentos: queimando uma amostra e medindo quanto ela aquece uma massa conhecida de água (um calorímetro).',
  warn:'A pergunta é a temperatura <b>final</b>, não a variação: 30 °C (alternativa a) é ΔT. Usar toda a energia, sem os 40%, dá 95 °C (alternativa e).',
},
{
  nivel:'intermediário',
  text:`O gráfico mostra o calor Q absorvido por dois corpos, X e Y, de <b>mesma massa</b>, em função da temperatura absoluta T.${FIG4_6}<p>Assinale a alternativa que preenche corretamente as lacunas, na ordem.</p><p>A capacidade térmica de X é ........ J/K, a de Y é ........ J/K, e a razão c<sub>X</sub>/c<sub>Y</sub> entre seus calores específicos é ........ .</p>`,
  opts:['60 – 20 – 3','20 – 60 – 1/3','60 – 20 – 1/3','1 200 – 400 – 3','3,75 – 1,25 – 3'], ans:0,
  hint:'Capacidade térmica é Q dividido pela variação de temperatura (a inclinação da reta). Com massas iguais, como se comparam os calores específicos?',
  steps:[
    ['Capacidades térmicas', `<p>De 300 K a 320 K, ΔT = 20 K.</p><div class="eq">C<sub>X</sub> = ${f('1 200','20')} = 60 J/K &nbsp;·&nbsp; C<sub>Y</sub> = ${f('400','20')} = 20 J/K</div>`],
    ['Razão dos calores específicos', `<p>C = m · c e as massas são iguais, então c<sub>X</sub>/c<sub>Y</sub> = C<sub>X</sub>/C<sub>Y</sub>:</p><div class="eq">${f('60','20')} = 3 &nbsp;→&nbsp; <span class="hl">60 – 20 – 3</span></div>`],
  ],
  alt:'No gráfico Q × T, a capacidade térmica é a inclinação da reta. A reta de X é três vezes mais inclinada que a de Y.',
  warn:'Dividir Q pela temperatura final (1 200 ÷ 320) dá 3,75 J/K (alternativa e). Capacidade térmica usa a <b>variação</b> de temperatura.',
},
{
  nivel:'intermediário',
  text:`Uma massa de ar úmido sobe pela encosta de uma montanha. À medida que sobe, a pressão do ar ao redor diminui e a massa de ar se expande tão rapidamente que praticamente não troca calor com a vizinhança. O resfriamento resultante faz o vapor de água condensar, formando nuvens.<p>Para essa massa de ar, durante a subida:</p>`,
  opts:['Q = 0, τ &gt; 0 e ΔU &lt; 0: a temperatura diminui','Q = 0, τ &lt; 0 e ΔU &gt; 0: a temperatura aumenta','Q &lt; 0, τ = 0 e ΔU &lt; 0: a temperatura diminui','Q &gt; 0, τ &gt; 0 e ΔU = 0: a temperatura fica','Q = 0, τ = 0 e ΔU = 0: a temperatura fica'], ans:0,
  hint:'“Não troca calor” define Q. “Se expande” define o sinal de τ. A 1ª Lei faz o resto.',
  steps:[
    ['Calor e trabalho', `<p>Sem troca de calor (adiabática): <b>Q = 0</b>. A massa de ar se expande e empurra o ar ao redor: <b>τ &gt; 0</b>.</p>`],
    ['1ª Lei', `<div class="eq">0 = τ + ΔU → ΔU = −τ &lt; 0</div><p>A energia interna diminui: <span class="hl">a temperatura cai</span>, e o vapor condensa.</p>`],
  ],
  alt:'É o inverso da bomba de encher pneu: lá o ar é comprimido e esquenta; aqui o ar se expande e esfria. Em ambos, sem troca de calor.',
  warn:'Achar que esfria porque “perdeu calor” (alternativa c) contradiz o enunciado: não há troca de calor. O resfriamento vem do trabalho que o próprio ar realiza.',
},
{
  nivel:'avançado',
  text:`Mergulhadores aprendem que não devem subir prendendo a respiração, pois o ar dos pulmões se expande durante a subida. A tabela mostra a pressão total sobre um mergulhador em algumas profundidades e a temperatura da água no fundo e na superfície de um lago (a profundidade 0 é a superfície).${TAB4_8}<p>Uma bolha de ar de 1,4 cm³ se solta do fundo, a 30 m, e sobe até a superfície. Considerando o ar como gás ideal, sem variação na quantidade de gás e com a bolha sempre à temperatura da água, o volume da bolha na superfície é:</p>`,
  opts:['0,35 cm³','1,5 cm³','5,6 cm³','6,0 cm³','21,6 cm³'], ans:3,
  hint:'Mudam a pressão (de 4,0 atm para 1,0 atm) e a temperatura (de 7 °C para 27 °C). Use a lei geral, com T em kelvin.',
  steps:[
    ['Dados', `<p>Fundo: p₀ = 4,0 atm · V₀ = 1,4 cm³ · T₀ = 7 + 273 = 280 K<br>Superfície: p = 1,0 atm · T = 27 + 273 = 300 K</p>`],
    ['Lei geral', `<div class="eq">${f('4,0 · 1,4','280')} = ${f('1,0 · V','300')}</div>`],
    ['Volume', `<div class="eq">V = ${f('4,0 · 1,4 · 300','280')} = <span class="hl">6,0 cm³</span></div>`],
  ],
  alt:'Dois efeitos: a pressão cai a um quarto (o volume quadruplica: 5,6 cm³) e a temperatura absoluta sobe de 280 K para 300 K (mais 300/280). 5,6 · 300/280 = 6,0 cm³.',
  warn:'Considerar só a pressão dá 5,6 cm³ (alternativa c). Usar as temperaturas em °C dá 21,6 cm³ (alternativa e).',
},
{
  nivel:'avançado',
  text:`No diagrama p × V, uma amostra de gás ideal vai do estado i ao estado f por dois processos diferentes, I e II.${FIG4_9}<p>Assinale a alternativa que preenche corretamente as lacunas, na ordem.</p><p>A variação da energia interna é ........ nos dois processos; o trabalho realizado pelo gás no processo I é ........ que no processo II; e o calor recebido no processo I é ........ que no processo II.</p>`,
  opts:['igual – maior – maior','igual – menor – menor','igual – maior – igual','diferente – maior – maior','diferente – igual – menor'], ans:0,
  hint:'A energia interna só depende dos estados i e f. O trabalho é a área sob cada caminho. O calor vem de Q = τ + ΔU.',
  steps:[
    ['Energia interna', `<p>Mesmo estado inicial e mesmo estado final: ΔU é <b>igual</b> nos dois processos.</p>`],
    ['Trabalho (áreas)', `<p>I (reta de i até f): trapézio, ${f('(4 + 1) · 3','2')} = 7,5 atm·L.<br>II (desce e depois vai para a direita a 1 atm): 1 · 3 = 3 atm·L.<br>O trabalho em I é <b>maior</b>.</p>`],
    ['Calor', `<p>Q = τ + ΔU, com ΔU igual: quem tem maior trabalho recebe <b>maior</b> calor.</p><div class="eq"><span class="hl">igual – maior – maior</span></div>`],
  ],
  alt:'Nem é preciso calcular as áreas: o caminho I passa sempre “por cima” do II, então a área sob ele é maior.',
  warn:'ΔU igual não quer dizer calor igual (alternativa c). O calor depende do caminho, como o trabalho.',
},
{
  nivel:'avançado',
  text:`Uma amostra de gás ideal monoatômico recebe 500 J de calor numa transformação a pressão constante.<p>Assinale a alternativa que preenche corretamente as lacunas, na ordem.</p><p>Nessa transformação, o trabalho realizado pelo gás é de ........ e a variação de sua energia interna é de ........ .</p>`,
  opts:['200 J – 300 J','300 J – 200 J','500 J – zero','zero – 500 J','250 J – 250 J'], ans:0,
  hint:'Para o gás monoatômico a pressão constante, τ = nRΔT e ΔU = (3/2) nRΔT. Que fração de Q vai para cada um?',
  steps:[
    ['Escrevendo tudo com nRΔT', `<p>τ = p · ΔV = nRΔT · ΔU = ${f('3','2')} nRΔT</p><div class="eq">Q = τ + ΔU = ${f('5','2')} nRΔT</div>`],
    ['Frações', `<p>τ é ${f('2','5')} de Q e ΔU é ${f('3','5')} de Q.</p><div class="eq">τ = ${f('2','5')} · 500 = 200 J &nbsp;·&nbsp; ΔU = 300 J</div><div class="eq"><span class="hl">200 J – 300 J</span></div>`],
  ],
  alt:'De cada 5 partes de calor que entram, 2 viram trabalho de expansão e 3 ficam no gás, aumentando sua temperatura. Confira: 200 + 300 = 500 J.',
  warn:'Trocar as frações dá 300 J – 200 J (alternativa b). E 500 J – zero (alternativa c) seria uma isotérmica, não uma isobárica.',
},
];
