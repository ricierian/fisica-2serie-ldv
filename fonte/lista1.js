/* ===== Lista 1 · Termologia: Calorimetria (Cap. 20) ===== */
const TOOLS1 = [
  ['Calor sensível', `Q = m · c · ΔT<br>(a temperatura muda, sem mudar de fase)`],
  ['Calor latente', `Q = m · L<br>(muda de fase, a temperatura fica constante)`],
  ['Capacidade térmica', `C = ${f('Q','ΔT')} &nbsp;&nbsp; C = m · c`],
  ['Potência da fonte', `P = ${f('Q','Δt')} &nbsp;&nbsp; → &nbsp; Q = P · Δt`],
  ['Trocas de calor (sistema isolado)', `ΣQ<sub>cedido</sub> + ΣQ<sub>recebido</sub> = 0<br>Quem esfria: Q &lt; 0 · Quem esquenta: Q &gt; 0`],
  ['Água e gelo', `c<sub>água</sub> = 1 cal/(g·°C) · c<sub>gelo</sub> = 0,5 cal/(g·°C)<br>L<sub>fusão</sub> = 80 cal/g · L<sub>vaporização</sub> = 540 cal/g`],
  ['Unidades', `1 cal ≈ 4,186 J · 1 kcal = 1 000 cal<br>1 kWh = 3,6 · 10<sup>6</sup> J`],
];

/* Q4: aquecimento com fonte de potência constante */
const FIG1_4 = plot({ aria:'Gráfico da temperatura em função do tempo: uma reta que começa em 10 graus Celsius no instante zero e chega a 50 graus Celsius aos 20 minutos.',
  xmax:25, ymax:60, xt:[5,10,15,20], yt:[10,20,30,40,50], xl:'t (min)', yl:'T (°C)',
  L:[{ p:[[0,10],[20,50],[24,58]], c:'var(--sign)' }, { p:[[0,50],[20,50],[20,0]], c:'var(--muted)', w:1.4, dash:'5 4' }],
  pts:[[0,10],[20,50]] });

/* Q6: curva de aquecimento com intervalos iguais de calor */
const FIG1_6 = plot({ aria:'Curva de aquecimento: temperatura em função do calor recebido. A temperatura sobe de 30 a 90 graus Celsius no primeiro intervalo, fica constante em 90 graus durante cinco intervalos iguais e depois volta a subir. As linhas verticais tracejadas estão igualmente espaçadas.',
  xmax:7.6, ymax:130, yt:[30,90], xl:'Q (cal)', yl:'θ (°C)', noxl:true,
  L:[{ p:[[0,30],[1,90],[6,90],[7,124]], c:'var(--sign)' },
     ...[1,2,3,4,5,6].map(x => ({ p:[[x,0],[x,90]], c:'var(--muted)', w:1.2, dash:'4 4' })) ],
  ann:[[0.5,10,'Q₁','middle'],[3.5,104,'vaporização','middle']] });

/* Q10: piscina */
const FIG1_10 = (() => {
  return fig('-24 0 364 190', 'Piscina em forma de bloco retangular, completamente cheia: 8 metros de comprimento, 4 metros de largura e 1,5 metro de profundidade.',
    `<polygon points="40,70 230,70 300,30 110,30" fill="var(--sign)" opacity=".18" stroke="var(--ink)" stroke-width="1.5"/>
    <polygon points="40,70 230,70 230,140 40,140" fill="var(--sign)" opacity=".30" stroke="var(--ink)" stroke-width="1.5"/>
    <polygon points="230,70 300,30 300,100 230,140" fill="var(--sign)" opacity=".42" stroke="var(--ink)" stroke-width="1.5"/>
    <text x="135" y="162" text-anchor="middle" class="pt pt-strong">8 m</text>
    <text x="282" y="132" text-anchor="middle" class="pt pt-strong">4 m</text>
    <text x="30" y="110" text-anchor="end" class="pt pt-strong">1,5 m</text>
    <text x="170" y="22" text-anchor="middle" class="pt">18 °C → 28 °C</text>`, 320);
})();

const QL1 = [
{
  src:'Inédita', nivel:'básico',
  text:`Numa conversa, alguém diz: “Esse café está cheio de calor, por isso queima a língua”. Do ponto de vista da Física, a forma correta de descrever a situação é dizer que:`,
  opts:['o café armazena calor e o libera aos poucos','o café tem temperatura alta e cede calor à língua','a língua cede frio para o café até os dois se igualarem','o café tem mais calor porque tem mais massa que a língua','calor e temperatura são a mesma grandeza, medida em °C'], ans:1,
  hint:'Calor é algo que um corpo “tem” ou algo que passa de um corpo para outro?',
  steps:[
    ['O que é calor', `<p><b>Calor é energia térmica em trânsito</b>, que passa de um corpo para outro por causa da diferença de temperatura. Um corpo não “tem” calor; ele tem temperatura (e energia interna).</p>`],
    ['No caso do café', `<p>O café está a uma temperatura maior que a da língua. Por isso, energia passa <b>do café para a língua</b> na forma de calor, e isso é o que queima.</p>`],
  ],
  alt:'Pense em dinheiro numa transferência bancária: “transferência” só existe enquanto o dinheiro está passando de uma conta para a outra. O calor é a “transferência” da energia térmica.',
  warn:'A alternativa a parece certa porque é como falamos no dia a dia, mas o corpo não armazena calor. E não existe “frio” passando de um corpo para outro (alternativa c): só o calor, do mais quente para o mais frio.',
  mod:'Inédita (conceito de calor do início do capítulo 20).'
},
{
  src:'Inédita', nivel:'básico',
  text:`Um corpo de massa 80 g recebe 480 cal e sua temperatura sobe de 10 °C para 40 °C, sem mudar de fase. A capacidade térmica do corpo e o calor específico da substância que o constitui valem, respectivamente:`,
  opts:['12 cal/°C e 0,15 cal/(g·°C)','16 cal/°C e 0,20 cal/(g·°C)','48 cal/°C e 0,60 cal/(g·°C)','16 cal/°C e 1,28 cal/(g·°C)','6 cal/°C e 0,08 cal/(g·°C)'], ans:1,
  hint:'Primeiro a variação de temperatura. A capacidade térmica é “calor por grau”; o calor específico é “calor por grau e por grama”.',
  steps:[
    ['Dados', `<p>m = 80 g · Q = 480 cal · ΔT = 40 − 10 = 30 °C</p>`],
    ['Capacidade térmica', `<div class="eq">C = ${f('Q','ΔT')} = ${f('480','30')} = <span class="hl">16 cal/°C</span></div>`],
    ['Calor específico', `<div class="eq">c = ${f('C','m')} = ${f('16','80')} = <span class="hl">0,20 cal/(g·°C)</span></div>`],
  ],
  alt:'Leia o resultado: o corpo inteiro precisa de 16 cal para subir 1 °C; cada grama dele precisa de 0,2 cal para subir 1 °C.',
  warn:'Usar a temperatura final (40 °C) no lugar de ΔT dá 12 cal/°C (alternativa a). O que importa é quanto a temperatura variou.',
  mod:'Baseada no Exemplo 1 dos slides do capítulo 20 (50 g, 300 cal, de −10 °C a 20 °C), com outros valores.'
},
{
  src:'Inédita', nivel:'básico',
  text:`Blocos de mesma massa, feitos dos materiais da tabela, estão inicialmente à mesma temperatura. Cada um recebe a mesma quantidade de calor, sem mudar de fase.${tabela(['Material','Calor específico (cal/(g·°C))'], [['Água','1,0'],['Alumínio','0,22'],['Ferro','0,11'],['Cobre','0,092'],['Chumbo','0,031']])}<p>Qual deles termina com a <b>maior</b> temperatura?</p>`,
  opts:['Água','Alumínio','Ferro','Cobre','Chumbo'], ans:4,
  hint:'Isole ΔT em Q = m · c · ΔT. Com Q e m iguais, o que decide é o c.',
  steps:[
    ['Isolando ΔT', `<div class="eq">ΔT = ${f('Q','m · c')}</div><p>Q e m são iguais para todos. Então ΔT é <b>inversamente proporcional</b> ao calor específico.</p>`],
    ['Quem esquenta mais', `<p>O menor calor específico da tabela é o do <b>chumbo</b> (0,031). É ele que tem a maior variação de temperatura e, como todos partiram da mesma temperatura, termina mais quente.</p>`],
  ],
  alt:'O calor específico funciona como uma “inércia térmica”: quanto maior, mais difícil mudar a temperatura. A água, com c alto, é a que menos esquenta. Por isso a areia da praia queima o pé e a água do mar não.',
  warn:'Escolher a água (alternativa a) é ler a tabela ao contrário: o maior c é o que <b>menos</b> esquenta.',
  mod:'Inédita. Valores de calor específico aproximados, de tabelas usuais.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`Um corpo de massa 250 g é aquecido por uma fonte de potência constante, igual a 300 cal/min. O gráfico mostra a temperatura do corpo em função do tempo.${FIG1_4}O calor específico da substância que constitui o corpo é:`,
  opts:['0,03 cal/(g·°C)','0,48 cal/(g·°C)','0,60 cal/(g·°C)','1,20 cal/(g·°C)','2,50 cal/(g·°C)'], ans:2,
  hint:'O gráfico dá duas informações: quanto tempo a fonte ficou ligada e quanto a temperatura variou. Com o tempo e a potência, você tem o calor.',
  steps:[
    ['Calor fornecido em 20 min', `<div class="eq">Q = P · Δt = 300 · 20 = 6 000 cal</div>`],
    ['Variação de temperatura', `<p>Pelo gráfico, de 10 °C a 50 °C: ΔT = 40 °C.</p>`],
    ['Calor específico', `<div class="eq">c = ${f('Q','m · ΔT')} = ${f('6 000','250 · 40')}</div><div class="eq">c = <span class="hl">0,60 cal/(g·°C)</span></div>`],
  ],
  alt:'Calcule antes a capacidade térmica: C = 6 000 ÷ 40 = 150 cal/°C. Depois divida pela massa: 150 ÷ 250 = 0,60.',
  warn:'Ler só a temperatura final, 50 °C, como se fosse ΔT dá 0,48 (alternativa b). Usar 20 (o tempo) como ΔT dá 1,20 (alternativa d).',
  mod:'Baseada no Exemplo 3 dos slides do capítulo 20 (200 g, 200 cal/min, de 20 °C a 60 °C em 30 min), com outros valores.'
},
{
  src:'Livro, p. 8 (modificada)', nivel:'intermediário',
  text:`Um fogão solar de grande porte fornece calor à água a uma taxa constante de 3 000 kcal por minuto. Em quanto tempo ele consegue aquecer 40 kg de água de 40 °C até 100 °C e, em seguida, transformá-la completamente em vapor?<p>Dados: c<sub>água</sub> = 1 cal/(g·°C); L<sub>V</sub> = 540 cal/g.</p>`,
  opts:['0,8 min','7,2 min','8,0 min','8,5 min','80 min'], ans:2,
  hint:'Calcule o calor total das duas etapas (aquecer até 100 °C e vaporizar). Depois divida pela taxa do fogão.',
  steps:[
    ['Calor por grama', `<p>Aquecer 1 g de 40 °C a 100 °C: 1 · 1 · 60 = 60 cal.<br>Vaporizar 1 g: 540 cal.</p><div class="eq">Total: 600 cal/g</div>`],
    ['Calor total', `<div class="eq">Q = 40 000 · 600 = 24 000 000 cal = 24 000 kcal</div>`],
    ['Tempo', `<div class="eq">Δt = ${f('Q','P')} = ${f('24 000','3 000')} = <span class="hl">8,0 min</span></div>`],
  ],
  alt:'Monte direto: P · Δt = m · c · ΔT + m · L → 3 000 · Δt = 40 · 60 + 40 · 540 (em kcal, com m em kg). 3 000 · Δt = 24 000.',
  warn:'Esquecer o aquecimento até 100 °C e usar só o calor latente dá 7,2 min (alternativa b). Usar só o aquecimento dá 0,8 min (alternativa a).',
  mod:'Livro, “Agora é com você” (p. 8, n.º 1): fogão de 62 000 kcal em 10 min, pedia a massa de água (100 kg). Modificada: fogão com taxa em kcal/min, 40 kg de água a 40 °C e pergunta o tempo.'
},
{
  src:'Livro, p. 8 (modificada)', nivel:'intermediário',
  text:`O gráfico representa a curva de aquecimento de 200 g de uma substância, inicialmente líquida a 30 °C. As retas verticais tracejadas estão igualmente espaçadas: cada intervalo entre elas representa a mesma quantidade de calor.${FIG1_6}Sabendo que o calor latente de vaporização dessa substância é 150 cal/g, o calor específico dela no estado líquido é:`,
  opts:['0,33 cal/(g·°C)','0,42 cal/(g·°C)','0,50 cal/(g·°C)','0,63 cal/(g·°C)','2,0 cal/(g·°C)'], ans:2,
  hint:'Desta vez você conhece o calor latente. Calcule o calor do patamar inteiro e descubra quanto vale cada intervalo.',
  steps:[
    ['Calor do patamar', `<div class="eq">Q<sub>V</sub> = m · L = 200 · 150 = 30 000 cal</div><p>O patamar ocupa <b>5 intervalos</b>, então cada intervalo vale 30 000 ÷ 5 = 6 000 cal.</p>`],
    ['Primeiro intervalo', `<p>O líquido recebe 6 000 cal e vai de 30 °C a 90 °C (ΔT = 60 °C).</p>`],
    ['Calor específico', `<div class="eq">c = ${f('6 000','200 · 60')} = <span class="hl">0,50 cal/(g·°C)</span></div>`],
  ],
  alt:'É o caminho inverso do exemplo do livro: lá se conhecia o c e se achava o L; aqui se conhece o L e se acha o c. A chave é a mesma: todos os intervalos valem o mesmo calor.',
  warn:'Contar 4 ou 6 intervalos no patamar dá 0,63 ou 0,42 (alternativas d e b). Usar 90 °C como ΔT dá 0,33 (alternativa a).',
  mod:'Livro, “Agora é com você” (p. 8, n.º 2): 100 g, c = 0,5, de 20 °C a 140 °C, pedia o calor latente (240 cal/g). Modificada: 200 g, de 30 °C a 90 °C, patamar de 5 intervalos, dado L e pedido o calor específico.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`Quanto calor é necessário para transformar 200 g de gelo a −10 °C em água a 30 °C?<p>Dados: c<sub>gelo</sub> = 0,5 cal/(g·°C); L<sub>fusão</sub> = 80 cal/g; c<sub>água</sub> = 1 cal/(g·°C).</p>`,
  opts:['7 kcal','16 kcal','17 kcal','22 kcal','23 kcal'], ans:4,
  hint:'O gelo passa por três etapas: esquenta até 0 °C, derrete a 0 °C e, já como água, esquenta até 30 °C.',
  steps:[
    ['1: gelo de −10 °C a 0 °C', `<div class="eq">Q₁ = 200 · 0,5 · 10 = 1 000 cal</div>`],
    ['2: fusão a 0 °C', `<div class="eq">Q₂ = 200 · 80 = 16 000 cal</div>`],
    ['3: água de 0 °C a 30 °C', `<div class="eq">Q₃ = 200 · 1 · 30 = 6 000 cal</div>`],
    ['Total', `<div class="eq">Q = 1 000 + 16 000 + 6 000</div><div class="eq">Q = 23 000 cal = <span class="hl">23 kcal</span></div>`],
  ],
  alt:'Desenhe a curva de aquecimento: uma subida, um patamar (a fusão) e outra subida. Cada trecho é uma parcela da soma.',
  warn:'Pular o aquecimento do gelo de −10 °C até 0 °C dá 22 kcal (alternativa d). O gelo só começa a derreter quando chega a 0 °C.',
  mod:'Baseada no Exemplo 2 dos slides do capítulo 20 (100 g de gelo a −20 °C até água a 60 °C), com outros valores.'
},
{
  src:'Inédita', nivel:'avançado',
  text:`Um calorímetro de capacidade térmica 50 cal/°C contém 200 g de água, ambos a 20 °C. Um bloco metálico de 100 g, a 160 °C, é colocado dentro dele, e o equilíbrio térmico se estabelece a 35 °C. Desprezando as perdas de calor para o ambiente, o calor específico do metal é:<p>Dado: c<sub>água</sub> = 1 cal/(g·°C).</p>`,
  opts:['0,15 cal/(g·°C)','0,24 cal/(g·°C)','0,30 cal/(g·°C)','0,70 cal/(g·°C)','1,20 cal/(g·°C)'], ans:2,
  hint:'Quem esquenta? A água e o calorímetro. Quem esfria? O bloco. Tudo o que o bloco cede, os outros dois recebem.',
  steps:[
    ['Quem recebe calor', `<p>Água e calorímetro vão de 20 °C a 35 °C (ΔT = 15 °C):</p><div class="eq">Q<sub>água</sub> = 200 · 1 · 15 = 3 000 cal</div><div class="eq">Q<sub>cal</sub> = 50 · 15 = 750 cal</div>`],
    ['Quem cede calor', `<p>O bloco vai de 160 °C a 35 °C (ΔT = −125 °C):</p><div class="eq">Q<sub>bloco</sub> = 100 · c · (−125) = −12 500 · c</div>`],
    ['Soma igual a zero', `<div class="eq">3 000 + 750 − 12 500 · c = 0</div><div class="eq">c = ${f('3 750','12 500')} = <span class="hl">0,30 cal/(g·°C)</span></div>`],
  ],
  alt:'Pense em “calor cedido = calor recebido”, em módulo: 100 · c · 125 = 3 000 + 750.',
  warn:'Esquecer o calorímetro dá 0,24 (alternativa b). Ele também esquenta e precisa entrar na conta com Q = C · ΔT.',
  mod:'Baseada no Exemplo 2 (PUC) dos slides do capítulo 20, com outros valores e a pergunta mantida (calor específico do sólido).'
},
{
  src:'Livro, p. 12 (modificada)', nivel:'avançado',
  text:`Para gelar 800 g de água a 25 °C, colocam-se numa garrafa 160 g de gelo a −10 °C. A garrafa não é termicamente isolada, e todo o gelo derrete. No equilíbrio, mede-se a temperatura de 8 °C, mais alta do que seria se o sistema estivesse isolado. A quantidade de calor que o ambiente forneceu ao sistema foi de:<p>Dados: despreze a capacidade térmica da garrafa; c<sub>água</sub> = 1,0 cal/(g·°C); c<sub>gelo</sub> = 0,5 cal/(g·°C); L<sub>fusão</sub> = 80 cal/g.</p>`,
  opts:['zero','480 cal','1 280 cal','2 080 cal','14 880 cal'], ans:2,
  hint:'Calcule tudo o que o gelo precisou receber até chegar a 8 °C e tudo o que a água cedeu ao esfriar até 8 °C. A diferença veio de fora.',
  steps:[
    ['O que o gelo recebeu', `<p>De −10 °C a 0 °C: 160 · 0,5 · 10 = 800 cal<br>Fusão: 160 · 80 = 12 800 cal<br>De 0 °C a 8 °C: 160 · 1 · 8 = 1 280 cal</p><div class="eq">Total: 14 880 cal</div>`],
    ['O que a água cedeu', `<div class="eq">800 · 1 · (25 − 8) = 13 600 cal</div>`],
    ['Calor do ambiente', `<div class="eq">Q<sub>amb</sub> = 14 880 − 13 600 = <span class="hl">1 280 cal</span></div>`],
  ],
  alt:'Pense no balanço: ΣQ = 0 para o sistema mais o ambiente. 800 + 12 800 + 1 280 − 13 600 − Q<sub>amb</sub> = 0. Se a garrafa fosse ideal, o equilíbrio seria em cerca de 6,7 °C.',
  warn:'Esquecer o aquecimento da água que veio do gelo (de 0 °C a 8 °C) dá zero (alternativa a). Esquecer o aquecimento do gelo até 0 °C dá 480 cal (alternativa b).',
  mod:'Livro, “Agora é com você” (p. 12, n.º 3): 1 000 g de água a 20 °C, 200 g de gelo a −10 °C e 600 cal do ambiente, pedia a temperatura final (3 °C). Modificada: 800 g a 25 °C, 160 g de gelo, dada a temperatura final de 8 °C e pedido o calor do ambiente.'
},
{
  src:'Livro, p. 9 (modificada)', nivel:'avançado',
  text:`Deseja-se aquecer a água de uma piscina completamente cheia, de dimensões 1,5 m × 4 m × 8 m, de 18 °C até 28 °C.${FIG1_10}O aquecedor é a gás e apenas 80% da energia que ele consome chega à água. Se cada kWh de energia consumida custa R$ 0,80, o custo desse aquecimento é:<p>Dados: c<sub>água</sub> = 4 200 J/(kg·°C); densidade da água = 1 000 kg/m³; 1 kWh = 3,6 · 10<sup>6</sup> J.</p>`,
  opts:['R$ 358,40','R$ 448,00','R$ 560,00','R$ 700,00','R$ 1 568,00'], ans:2,
  hint:'Volume → massa → calor que a água precisa. Se só 80% chega à água, o aquecedor precisa consumir mais ou menos que isso?',
  steps:[
    ['Massa de água', `<div class="eq">V = 1,5 · 4 · 8 = 48 m³ → m = 48 000 kg</div>`],
    ['Calor que a água recebe', `<div class="eq">Q = 48 000 · 4 200 · 10</div><div class="eq">Q = 2,016 · 10<sup>9</sup> J</div>`],
    ['Energia consumida', `<div class="eq">E = ${f('2,016 · 10<sup>9</sup>','0,80')} = 2,52 · 10<sup>9</sup> J</div><div class="eq">E = ${f('2,52 · 10<sup>9</sup>','3,6 · 10<sup>6</sup>')} = 700 kWh</div>`],
    ['Custo', `<div class="eq">700 · 0,80 = <span class="hl">R$ 560,00</span></div>`],
  ],
  alt:'Sem perdas seriam 560 kWh (R$ 448,00). Como só 80% chega à água, consome-se 560 ÷ 0,8 = 700 kWh.',
  warn:'R$ 700,00 (alternativa d) é o número de kWh, não o custo. Multiplicar por 0,8 em vez de dividir dá R$ 358,40 (alternativa a); usar 28 °C como ΔT dá R$ 1 568,00 (alternativa e).',
  mod:'Livro, “Agora é com você” (p. 9, n.º 3): piscina de 1,6 × 5 × 10 m, de 15 °C a 30 °C, 98% de aproveitamento e R$ 0,70/kWh (resposta R$ 1 000,00). Modificada: 1,5 × 4 × 8 m, de 18 °C a 28 °C, 80% e R$ 0,80/kWh.'
},
];
