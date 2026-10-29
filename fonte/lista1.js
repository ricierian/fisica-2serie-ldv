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
const FIG1_6 = plot({ aria:'Curva de aquecimento: temperatura em função do calor recebido. A temperatura sobe de 20 a 140 graus Celsius no primeiro intervalo, fica constante em 140 graus durante quatro intervalos iguais e depois volta a subir. As linhas verticais tracejadas estão igualmente espaçadas.',
  xmax:6.6, ymax:200, yt:[20,140], xl:'Q (cal)', yl:'θ (°C)', noxl:true,
  L:[{ p:[[0,20],[1,140],[5,140],[6,196]], c:'var(--sign)' },
     ...[1,2,3,4,5].map(x => ({ p:[[x,0],[x,140]], c:'var(--muted)', w:1.2, dash:'4 4' })) ],
  ann:[[0.5,10,'Q₁','middle'],[3,160,'mudança de fase','middle']] });

/* Q10: piscina */
const FIG1_10 = (() => {
  return fig('-24 0 364 190', 'Piscina em forma de bloco retangular, completamente cheia: 10 metros de comprimento, 5 metros de largura e 1,6 metro de profundidade.',
    `<polygon points="40,70 230,70 300,30 110,30" fill="var(--sign)" opacity=".18" stroke="var(--ink)" stroke-width="1.5"/>
    <polygon points="40,70 230,70 230,140 40,140" fill="var(--sign)" opacity=".30" stroke="var(--ink)" stroke-width="1.5"/>
    <polygon points="230,70 300,30 300,100 230,140" fill="var(--sign)" opacity=".42" stroke="var(--ink)" stroke-width="1.5"/>
    <text x="135" y="162" text-anchor="middle" class="pt pt-strong">10 m</text>
    <text x="282" y="132" text-anchor="middle" class="pt pt-strong">5 m</text>
    <text x="30" y="110" text-anchor="end" class="pt pt-strong">1,6 m</text>
    <text x="170" y="22" text-anchor="middle" class="pt">15 °C → 30 °C</text>`, 320);
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
  src:'Livro, p. 8', nivel:'intermediário',
  text:`Um fogão solar pode fornecer uma quantidade de calor de 62 000 kcal durante um intervalo de tempo de 10 minutos. Para esse intervalo de tempo, a massa de água que pode ser aquecida de 20 °C até 100 °C e, em seguida, transformada completamente em vapor é:<p>Dados: c<sub>água</sub> = 1 cal/(g·°C); L<sub>V</sub> = 540 cal/g.</p>`,
  opts:['0,1 kg','100 kg','115 kg','620 kg','775 kg'], ans:1,
  hint:'São duas etapas: esquentar a água até 100 °C (calor sensível) e depois vaporizá-la (calor latente). O calor total do fogão paga as duas.',
  steps:[
    ['Converter o calor', `<div class="eq">Q = 62 000 kcal = 62 000 000 cal</div>`],
    ['Calor para cada grama', `<p>Esquentar 1 g de 20 °C a 100 °C: 1 · 1 · 80 = 80 cal.<br>Vaporizar 1 g: 540 cal.</p><div class="eq">Total por grama: 80 + 540 = 620 cal/g</div>`],
    ['Massa', `<div class="eq">m = ${f('62 000 000','620')} = 100 000 g</div><div class="eq">m = <span class="hl">100 kg</span></div>`],
  ],
  alt:'Monte a equação direto: 62 · 10<sup>6</sup> = m · 1 · 80 + m · 540 = 620 · m.',
  warn:'Esquecer a etapa de aquecimento e usar só o calor latente dá cerca de 115 kg (alternativa c). E não converter kcal para cal leva a 0,1 kg (alternativa a).',
  mod:'Questão do livro (“Agora é com você”, p. 8), transformada em múltipla escolha.'
},
{
  src:'Livro, p. 8', nivel:'intermediário',
  text:`O gráfico representa a curva de aquecimento de um corpo de 100 g, inicialmente no estado líquido. As retas verticais tracejadas estão igualmente espaçadas, ou seja, cada intervalo entre elas representa a mesma quantidade de calor.${FIG1_6}Sabendo que o calor específico do corpo no estado líquido é 0,5 cal/(g·°C), o calor latente de vaporização dessa substância é:`,
  opts:['60 cal/g','180 cal/g','240 cal/g','300 cal/g','480 cal/g'], ans:2,
  hint:'Calcule quanto calor cabe no primeiro intervalo (o aquecimento do líquido). Depois conte quantos intervalos iguais dura o patamar.',
  steps:[
    ['Primeiro intervalo', `<p>O líquido vai de 20 °C a 140 °C:</p><div class="eq">Q₁ = 100 · 0,5 · 120 = 6 000 cal</div>`],
    ['Patamar', `<p>A vaporização (temperatura constante em 140 °C) ocupa <b>4 intervalos</b>:</p><div class="eq">Q<sub>V</sub> = 4 · 6 000 = 24 000 cal</div>`],
    ['Calor latente', `<div class="eq">L<sub>V</sub> = ${f('Q<sub>V</sub>','m')} = ${f('24 000','100')} = <span class="hl">240 cal/g</span></div>`],
  ],
  alt:'Use proporção: se 1 intervalo equivale a 60 cal por grama (6 000 ÷ 100), 4 intervalos equivalem a 4 · 60 = 240 cal/g.',
  warn:'Contar 5 intervalos no patamar (incluindo o do aquecimento) dá 300 cal/g (alternativa d). O patamar começa só quando a temperatura para de subir.',
  mod:'Questão do livro (“Agora é com você”, p. 8), transformada em múltipla escolha. Gráfico redesenhado.'
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
  src:'Livro, p. 12', nivel:'avançado',
  text:`Uma garrafa possui 1 000 g de água a 20 °C. Para resfriar essa água, colocam-se nela 200 g de gelo a −10 °C. Como a garrafa não é um sistema termicamente isolado, o meio externo fornece cerca de 600 cal ao sistema, contribuindo para que todo o gelo derreta. Após o equilíbrio térmico, a temperatura do sistema será:<p>Dados: despreze a capacidade térmica da garrafa; c<sub>água</sub> = 1,0 cal/(g·°C); c<sub>gelo</sub> = 0,5 cal/(g·°C); L<sub>fusão</sub> = 80 cal/g.</p>`,
  opts:['0 °C','2,5 °C','3,0 °C','5,0 °C','10 °C'], ans:2,
  hint:'Todo o gelo derrete, então a temperatura final T fica acima de 0 °C. Some todos os calores recebidos e iguale ao que a água quente cede mais as 600 cal do ambiente.',
  steps:[
    ['O que o gelo recebe', `<p>Esquentar até 0 °C: 200 · 0,5 · 10 = 1 000 cal<br>Derreter: 200 · 80 = 16 000 cal<br>Água do gelo, de 0 °C até T: 200 · 1 · T = 200T</p>`],
    ['O que entra de fora', `<p>A água quente cede 1 000 · 1 · (20 − T) e o ambiente fornece 600 cal.</p>`],
    ['Equilíbrio', `<div class="eq">1 000(20 − T) + 600 = 17 000 + 200T</div><div class="eq">20 600 − 1 000T = 17 000 + 200T</div><div class="eq">1 200T = 3 600 → T = <span class="hl">3,0 °C</span></div>`],
  ],
  alt:'Faça em duas partes. Para levar tudo a 0 °C com o gelo derretido, sobram 20 000 + 600 − 17 000 = 3 600 cal. Elas aquecem os 1 200 g de água: ΔT = 3 600 ÷ 1 200 = 3 °C.',
  warn:'Esquecer as 600 cal do ambiente dá 2,5 °C (alternativa b). E 0 °C (alternativa a) só valeria se sobrasse gelo, o que não acontece aqui.',
  mod:'Questão do livro (“Agora é com você”, p. 12), transformada em múltipla escolha.'
},
{
  src:'Livro, p. 9', nivel:'avançado',
  text:`Deseja-se aquecer a água de uma piscina completamente cheia, de dimensões 1,6 m × 5 m × 10 m, de 15 °C até 30 °C.${FIG1_10}Apenas 98% da energia fornecida pelo sistema de aquecimento é aproveitada para aumentar a temperatura da água. Se 1 kWh custa R$ 0,70, o custo desse aquecimento é:<p>Dados: c<sub>água</sub> = 4 200 J/(kg·°C); densidade da água = 1 000 kg/m³; 1 kWh = 3,6 · 10<sup>6</sup> J.</p>`,
  opts:['R$ 960,40','R$ 980,00','R$ 1 000,00','R$ 1 400,00','R$ 2 000,00'], ans:2,
  hint:'Volume → massa → calor que a água precisa. Depois pense: se só 98% é aproveitado, o sistema precisa fornecer mais ou menos que isso?',
  steps:[
    ['Massa de água', `<div class="eq">V = 1,6 · 5 · 10 = 80 m³ → m = 80 000 kg</div>`],
    ['Calor que a água recebe', `<div class="eq">Q = 80 000 · 4 200 · 15</div><div class="eq">Q = 5,04 · 10<sup>9</sup> J</div>`],
    ['Energia fornecida', `<p>Esse calor é 98% do que o sistema fornece:</p><div class="eq">E = ${f('5,04 · 10<sup>9</sup>','0,98')} ≈ 5,14 · 10<sup>9</sup> J</div>`],
    ['Custo', `<div class="eq">E = ${f('5,14 · 10<sup>9</sup>','3,6 · 10<sup>6</sup>')} ≈ 1 429 kWh</div><div class="eq">1 429 · 0,70 ≈ <span class="hl">R$ 1 000,00</span></div>`],
  ],
  alt:'Sem a perda, seriam 1 400 kWh (R$ 980,00). Como só 98% é aproveitado, o sistema precisa fornecer um pouco <b>mais</b>: 1 400 ÷ 0,98 ≈ 1 429 kWh.',
  warn:'Multiplicar por 0,98 em vez de dividir dá R$ 960,40 (alternativa a): você estaria pagando menos do que a água precisa. Ignorar a perda dá R$ 980,00 (alternativa b).',
  mod:'Questão do livro (“Agora é com você”, p. 9), transformada em múltipla escolha. Figura da piscina criada para a lista.'
},
];
