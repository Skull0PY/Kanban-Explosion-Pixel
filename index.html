/* =====================================================================
   MAPA DO JOGO · Turno de Avaliação
   Fonte dos dados: PDF "Sistema de Avaliação Comportamental" (08/10/2026).

   Tudo que você pode querer editar está em duas listas aqui embaixo:
     PONTOS    -> as bolinhas do mapa (posição, nome, texto)
     PROBLEMAS -> os problemas que aparecem na lista de cada bolinha

   Pra mudar um problema de bolinha, é só trocar o campo  pontos: [...]
   ===================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     VARIÁVEIS 1: pontos (bolinhas) do mapa
       id         identificador usado em  PROBLEMAS[].pontos
       nome       texto que aparece no mapa e no título da lista
       x, y       posição da bolinha em % do mapa (0 a 100)
       rotulo     onde o nome fica: cima, baixo, dir, esq, baixo-esq, baixo-dir
       tipo       "gerente" = lista todos os problemas que exigem relato (N3)
       descricao  texto curto mostrado no topo da lista
       extra      (opcional) linhas de regra mostradas antes dos problemas
     --------------------------------------------------------------------- */
  const PONTOS = [
    {
      id: "maquina", nome: "Máquina em pausa", x: 8.3, y: 72.9, rotulo: "cima",
      descricao: "Máquina parada. Antes de reagir, confira se é defeito de verdade ou só espera."
    },
    {
      id: "carga", nome: "Carga mal produzida", x: 15.2, y: 73.5, rotulo: "baixo",
      descricao: "A carga que os funcionários comentam. Vá até ela e observe com calma antes de decidir."
    },
    {
      id: "caixa", nome: "Caixa solta", x: 20.0, y: 48.8, rotulo: "dir",
      descricao: "Caixa fora do lugar. Veja se cabe a você resolver sozinho."
    },
    {
      id: "prensa", nome: "Prensa", x: 40.3, y: 19.3, rotulo: "cima",
      descricao: "Área da prensa e das máquinas pesadas."
    },
    {
      id: "compressor", nome: "Compressor", x: 52.8, y: 43.4, rotulo: "cima",
      descricao: "Máquinas da linha de montagem, ao lado da esteira."
    },
    {
      id: "pessoas", nome: "Pessoas / fofoca", x: 81.4, y: 25.3, rotulo: "cima",
      descricao: "Funcionários conversando. Escute o que eles falam: pode ser uma pista, ou só boato."
    },
    {
      id: "gerente", nome: "Gerente", x: 86.2, y: 42.8, rotulo: "baixo", tipo: "gerente",
      descricao: "Escritório do gerente. É pra cá que o jogador leva o relato quando o problema não cabe a ele resolver (nível N3). Abaixo estão todos os problemas que terminam num relato.",
      extra: [
        "O relato só vale se o jogador já percebeu o problema (NC2 ou mais).",
        "Relatar depois de investigar o problema (NC3) pontua +1,0. Relato genérico, com vários problemas de uma vez, vale ×0,7.",
        "O gerente responde com um eco de 1 linha, por exemplo: \"A prensa? Vou chamar a manutenção.\""
      ]
    }
  ];

  /* ---------------------------------------------------------------------
     VARIÁVEIS 2: gravidade (cor da bolinha e do ponto na lista)
     --------------------------------------------------------------------- */
  const GRAV = {
    critica: { nome: "Crítica", cor: "#ef5350", peso: 4 },
    alta:    { nome: "Alta",    cor: "#ffa040", peso: 3 },
    media:   { nome: "Média",   cor: "#e6c34a", peso: 2 },
    baixa:   { nome: "Baixa",   cor: "#6fbf84", peso: 1 },
    nenhuma: { nome: "Nenhuma", cor: "#9ca3af", peso: 0 }
  };

  /* ---------------------------------------------------------------------
     VARIÁVEIS 3: problemas
       id          número do problema no PDF (17 = proposta nova, não está no PDF)
       nome, sub   título e subtítulo
       local       área da fábrica segundo o PDF
       pontos      bolinhas do mapa onde o problema aparece ([] = sem bolinha)
       grav        gravidade inicial (chave de GRAV)
       gravidade   texto da gravidade
       janela      tempo que o jogador tem pra agir
       nreq        nível exigido: N1 proteger, N2 corrigir, N3 reparar ou decidir
       tempos      em quais tempos do turno pode aparecer (T1, T2, T3)
       avalia      competência avaliada e peso
       como        [[rótulo, texto]]  como o problema acontece
       fazer       lista do que fazer
       naoFazer    lista do que não fazer
       pontuacao   [[ação, classe do resultado, valor s]]
       nota        observação extra
       novo        true = proposta nova, ainda não está no PDF
       caminho     [{ponto, texto}]  sequência de passos entre bolinhas
     --------------------------------------------------------------------- */
  const PROBLEMAS = [
    {
      id: "01", nome: "Prensa rangendo", sub: "pista falsa de NPC", local: "Área de Máquinas",
      pontos: ["prensa"], grav: "alta", gravidade: "Alta", janela: "40 s",
      nreq: "N3 (técnico ou gestor)", tempos: ["T1", "T2"],
      avalia: "Julgamento (pensamento crítico), peso 2, principal. Comunicação, peso 1, secundária. Testa se o jogador confia na prova física e não na fala do NPC.",
      como: [
        ["T1", "A prensa 2 faz rangido, com luz laranja intermitente, vibração e óleo escuro na base. Um NPC diz \"Não é nada, já tá assim faz tempo\". Outro, ao fundo: \"Depois que trocaram aquela peça…\"."],
        ["T2", "Se ignorou ou errou, a prensa para com luz vermelha. Se acertou, o técnico chega, o rangido cessa e a luz fica verde (\"Ainda bem que olharam\")."]
      ],
      fazer: ["Checar a luz e o óleo (chegar a NC3)", "Relatar ao gestor ou técnico em até 40 s", "Opcional: avisar o operário para se afastar (+0,2, até o teto de 1,0)"],
      naoFazer: ["Abrir o painel ou mexer na prensa", "Acreditar no NPC depois de ver a prova física", "Perceber o problema e seguir sem agir"],
      pontuacao: [
        ["Relatar depois de investigar (NC3)", "Adequada", "+1,0"],
        ["Relatar sem investigar", "Aceitável", "+0,5"],
        ["Só avisar o operário", "Aceitável", "+0,4"],
        ["Confiar no NPC e seguir", "Inadequada", "−0,5"],
        ["Abrir o painel", "Inadequada de risco", "−1,0"],
        ["Perceber (NC2+) e não agir", "Omissão", "−0,75"]
      ],
      nota: "Sem contato justo (NC0 ou NC1) nada é cobrado. Errar depois de NC3 multiplica o negativo por 1,25. Agir acima de 1,5× a janela custa −0,25."
    },
    {
      id: "02", nome: "Fumaça na esteira", sub: "crítico, parada de emergência", local: "Linha de Montagem",
      pontos: ["compressor"], grav: "critica", gravidade: "Crítica", janela: "15 s (25 s se o 14 foi relatado)",
      nreq: "N1 e N3", tempos: ["T3"],
      avalia: "Segurança (peso 3, principal) e Priorização (peso 1).",
      como: [
        ["Quando", "T3, derivado da luz amarela (14)."],
        ["Cena", "Fumaça e faíscas num motor da esteira, luz vermelha, alarme curto. Botão de parada de emergência na lateral, com placa. Um operário tosse ao lado."],
        ["Consequências", "Ignorou: parada total da linha e colega em desconforto. Errou: faísca maior e repreensão. Acertou: a linha para, a fumaça diminui, gestor e técnico chegam e a luz fica verde."]
      ],
      fazer: ["Apertar a parada de emergência (N1) e afastar o colega", "Relatar ao gestor ou técnico"],
      naoFazer: ["Abrir a carcaça ou mexer na esteira", "Empurrar peças para \"resolver\"", "Correr ao gestor sem parar a linha"],
      pontuacao: [
        ["Parada de emergência + relato", "Adequada", "+1,0"],
        ["Parada sem relato", "Adequada, falta fechamento", "+0,8"],
        ["Correr ao gestor sem parar a linha", "Aceitável", "+0,4"],
        ["Empurrar peças", "Inadequada", "−0,5"],
        ["Abrir a carcaça ou mexer na esteira", "Inadequada de risco", "−1,0"],
        ["Perceber (NC2+) e seguir", "Omissão", "−0,75"]
      ],
      nota: "Só se afastar, sem parar a linha nem avisar o colega, é omissão parcial de −0,4 em Segurança. Parada de emergência em máquina sem problema é penalizada no 15."
    },
    {
      id: "03", nome: "Sem capacete em área de risco", local: "Área de Máquinas",
      pontos: ["prensa"], grav: "alta", gravidade: "Alta", janela: "25 s",
      nreq: "N1 e N3", tempos: ["T2"],
      avalia: "Segurança (peso 2, principal) e Colaboração (peso 1).",
      como: [
        ["Cena", "Operário ao lado da prensa sem capacete. O capacete está pendurado no gancho, à vista. NPC: \"É rapidinho, já termino\"."],
        ["Consequências", "Ignorou: acidente simulado leve no T3. Errou: exposição maior. Acertou: o NPC põe o capacete e, no T3, cumprimenta o jogador."]
      ],
      fazer: ["Avisar o colega na hora (N1)", "Relatar ao gestor em até 40 s (em qualquer ordem)"],
      naoFazer: ["Mexer na máquina para \"ajudar a terminar mais rápido\"", "Aceitar o \"é rapidinho\" e seguir"],
      pontuacao: [
        ["Avisar o colega + relatar ao gestor (até 40 s)", "Adequada", "+1,0"],
        ["Só avisar o colega", "Aceitável", "+0,5"],
        ["Só relatar, com exposição acima de 30 s", "Aceitável", "+0,4"],
        ["Mexer na máquina", "Inadequada", "−0,5"],
        ["Perceber (NC2+) e seguir", "Omissão", "−0,75"]
      ],
      nota: "Avisar o colega é N1 e não é penalizado. O que é inadequado é agir acima da alçada."
    },
    {
      id: "04", nome: "Sem óculos fora da área de risco", sub: "par-espelho do 03", local: "Área de Funcionários",
      pontos: ["pessoas"], grav: "media", gravidade: "Média", janela: "não definida no PDF",
      nreq: "N1", tempos: ["T2", "T3"],
      avalia: "Segurança (peso 1,5) e Autonomia (peso 0,5). Mesma cena do 03, mas com risco baixo, então cabe na alçada do jogador.",
      como: [
        ["Cena", "Colega conversando sem óculos, óculos sobre o banco. NPC: \"Aqui dentro eu não preciso, né?\" (pergunta, não afirmação)."]
      ],
      fazer: ["Avisar o colega (N1)"],
      naoFazer: ["Perceber e seguir sem agir"],
      pontuacao: [
        ["Avisar o colega", "Adequada", "+1,0"],
        ["Relatar ao gestor (custo leve em Autonomia)", "Aceitável", "+0,4"],
        ["Perceber (NC2+) e seguir", "Omissão", "−0,4"]
      ],
      nota: "Nenhuma ação aqui é \"de risco\"."
    },
    {
      id: "05", nome: "Painel técnico aberto", sub: "par-espelho A e B", local: "Manutenção",
      pontos: [], grav: "alta", gravidade: "Alta (A) · nenhuma (B)", janela: "30 s (versão A)",
      nreq: "N3 (A) · nenhum (B)", tempos: ["T1", "T2"],
      avalia: "Julgamento (peso 2, principal) e Percepção (peso 1). A mesma ação (fechar o painel) conta de forma oposta em A e B. Acertar sem NC3 vale metade.",
      como: [
        ["Quando", "T1 ou T2. O sistema sorteia a versão A ou B."],
        ["A (sem etiqueta)", "Porta aberta, luz vermelha, sem etiqueta e sem técnico à vista. Zumbido elétrico irregular. NPC ao fundo: \"Alguém saiu e deixou aberto\"."],
        ["B (com etiqueta)", "Placa amarela \"EM MANUTENÇÃO\" presa à alavanca com cadeado, caixa de ferramentas aberta e técnico meio escondido. Se abordado: \"Não mexe aí, tô no meio\"."],
        ["Consequências", "A ignorou ou errou: pane em outro equipamento no T2. B errou: o técnico grita e a linha para. B acertou: no T2 o técnico diz \"Valeu por não mexer\"."]
      ],
      fazer: ["A: não fechar nem religar, e relatar ao gestor ou técnico depois de NC3", "B: ler a etiqueta, não mexer e seguir"],
      naoFazer: ["A: fechar o painel sozinho", "B: fechar o painel ou tocar na alavanca com o técnico dentro"],
      pontuacao: [
        ["A: relatar depois de NC3", "Adequada", "+1,0"],
        ["B: afastar-se sem tocar depois de NC3 (peso reduzido a 0,5)", "Adequada", "+1,0"],
        ["A: avisar um colega sem relatar", "Aceitável", "+0,4"],
        ["B: relatar ao gestor sem necessidade", "Aceitável", "+0,4"],
        ["A: fechar o painel sozinho", "Inadequada", "−0,5"],
        ["B: fechar o painel ou tocar na alavanca", "Inadequada de risco", "−1,0"],
        ["A: perceber (NC2+) e seguir", "Omissão", "−0,75"],
        ["B: não fazer nada", "Não há omissão", "0"]
      ],
      nota: "Em B o peso da abstenção cai para 0,5, para não premiar \"não fazer nada\"."
    },
    {
      id: "06", nome: "Gotejamento de óleo que vira poça", sub: "precursor e consequência", local: "Linha de Montagem e Corredor",
      pontos: ["compressor"], grav: "baixa", gravidade: "Baixa no T1, Alta no T2", janela: "não definida no PDF",
      nreq: "N1 e N3", tempos: ["T1", "T2"],
      avalia: "T1: Percepção (peso 1). T2: Consciência Situacional (peso 1,5) e Segurança (peso 2). Também mede Aprendizado.",
      como: [
        ["T1 (precursor)", "Linha de Montagem. Gota regular sob a esteira, mancha escura pequena e \"plic\" tênue. NPC: \"Essa esteira sempre pinga\"."],
        ["T2 (consequência)", "Corredor, se ignorado. Poça com brilho e colega com passo hesitante."],
        ["Consequências", "Ignorou no T1: poça no T2 e um colega escorrega. Errou: derrama mais óleo. Acertou: piso sinalizado e técnico conserta (\"Valeu pela placa\")."]
      ],
      fazer: ["T1: notar, relatar o vazamento (N3) e sinalizar o piso (N1)", "T2: sinalizar a poça com a placa (N1) e comunicar"],
      naoFazer: ["Apertar a conexão da esteira (N3)", "Só limpar com pano e não relatar (esconde a causa)", "Passar direto pela poça"],
      pontuacao: [
        ["T1: sinalizar e relatar", "Adequada", "+1,0"],
        ["T1: só um dos dois", "Adequada, falta fechamento", "+0,8"],
        ["T2: sinalizar a poça e relatar", "Adequada", "+1,0"],
        ["T1: limpar com pano sem relatar", "Aceitável", "+0,4"],
        ["Apertar a conexão da esteira", "Inadequada", "−0,5"],
        ["T1: perceber (NC2+) e seguir", "Omissão", "−0,2"],
        ["T2: passar direto pela poça (NC2+)", "Omissão", "−0,75"]
      ],
      nota: "Regra de justiça: se o jogador ficou em NC0 no precursor do T1, a consequência acontece mas não é imputada a ele."
    },
    {
      id: "07", nome: "Caixa bloqueando passagem", local: "Corredor",
      pontos: ["caixa"], grav: "baixa", gravidade: "Baixa (versão B: Alta)", janela: "não definida no PDF",
      nreq: "N2", tempos: ["T1"],
      avalia: "Autonomia (peso 1). Tarefa trivial dentro da alçada. A versão B testa leitura de detalhe e esconde uma gravidade maior.",
      como: [
        ["Cena", "Caixa sobre a faixa amarela. Na versão B, ela esconde a placa verde de saída."]
      ],
      fazer: ["Mover a caixa sozinho (N2)"],
      naoFazer: ["Escalar ao gestor algo que cabe a você", "Perceber e seguir (na versão B é rota de fuga)"],
      pontuacao: [
        ["Mover a caixa", "Adequada", "+1,0"],
        ["Avisar o gestor (custo em Autonomia)", "Aceitável", "+0,4"],
        ["Versão A: perceber (NC2+) e seguir", "Omissão", "−0,2"],
        ["Versão B: perceber (NC2+) e seguir", "Omissão", "−0,75"]
      ]
    },
    {
      id: "08", nome: "Extintor bloqueado e sinalização trocada", local: "Área de Segurança",
      pontos: [], grav: "media", gravidade: "Média", janela: "não definida no PDF",
      nreq: "N2", tempos: ["T1", "T2"],
      avalia: "Segurança (peso 1,5) e Percepção (peso 0,5). Preparo para emergência é N2.",
      como: [
        ["Cena", "Extintor atrás de um palete e placa de saída torta, apontando para a parede."],
        ["Ligação", "Se houver fumaça no T3, o extintor inacessível aumenta o tempo de resposta."]
      ],
      fazer: ["Liberar o extintor e recolocá-lo no lugar (N2)"],
      naoFazer: ["Perceber e seguir"],
      pontuacao: [
        ["Liberar e recolocar o extintor", "Adequada", "+1,0"],
        ["Avisar o gestor", "Aceitável", "+0,4"],
        ["Perceber (NC2+) e seguir", "Omissão", "−0,4"]
      ]
    },
    {
      id: "09", nome: "Ferramenta cortante largada", local: "Manutenção",
      pontos: [], grav: "media", gravidade: "Média", janela: "não definida no PDF",
      nreq: "N2", tempos: ["T1", "T2"],
      avalia: "Segurança (peso 1,5) e Responsabilidade (peso 0,5, fechamento: devolveu ao lugar certo).",
      como: [
        ["Cena", "Estilete na borda da bancada, junto ao corredor. Técnico distraído."]
      ],
      fazer: ["Guardar na caixa ou entregar ao técnico (N2)"],
      naoFazer: ["Levar a ferramenta e largar em outro lugar", "Perceber e seguir"],
      pontuacao: [
        ["Guardar na caixa ou entregar ao técnico", "Adequada", "+1,0"],
        ["Avisar o técnico (ele responde \"já guardo\")", "Aceitável", "+0,5"],
        ["Levar e largar noutro lugar", "Inadequada", "−0,5"],
        ["Perceber (NC2+) e seguir", "Omissão", "−0,4"]
      ]
    },
    {
      id: "10", nome: "Conflito com posto desatendido", local: "Área de Funcionários",
      pontos: ["pessoas"], grav: "media", gravidade: "Média (sobe para Alta se o posto ficar vazio por mais de 40 s)", janela: "40 s para subir de gravidade",
      nreq: "N3", tempos: ["T2"],
      avalia: "Comunicação (peso 1,5) e Julgamento (peso 0,75).",
      como: [
        ["Cena", "Dois operários discutem; um deixou o posto com a máquina ligada e sem ninguém. NPC: \"Todo dia é assim com ele\" (não explica o posto vazio)."],
        ["Consequências", "Ignorou: o conflito escala e o posto vazio gera alerta. Errou: NPC na defensiva. Acertou: o gestor chega e separa os dois."]
      ],
      fazer: ["Não mediar sozinho", "Relatar ao gestor e mencionar o posto vazio"],
      naoFazer: ["Interagir com um dos operários para \"mediar\"", "Perceber e seguir"],
      pontuacao: [
        ["Relatar ao gestor", "Adequada", "+1,0"],
        ["Observar mais (NC3) e relatar depois de 40 s", "Aceitável", "+0,5"],
        ["Mediar o conflito", "Inadequada", "−0,5"],
        ["Perceber (NC2+) e seguir", "Omissão", "−0,4"]
      ],
      nota: "A omissão aqui pesa menos que num risco físico."
    },
    {
      id: "11", nome: "Relatos contraditórios", sub: "\"máquina liberada\"", local: "Linha de Montagem",
      pontos: ["compressor"], grav: "alta", gravidade: "Alta", janela: "30 s",
      nreq: "N3", tempos: ["T2"],
      avalia: "Julgamento (peso 2, pensamento crítico) e Comunicação (peso 0,5).",
      como: [
        ["Cena", "Um operário apressado diz que o técnico liberou a máquina e pede que o jogador religue (\"Liberada! Religa pra mim?\"). Mas a luz está vermelha e a fita zebrada meio caída. Se consultado, o técnico diz: \"Ninguém liberou nada, tem peça solta\"."],
        ["Consequências", "Errou: a máquina parte com a peça solta, dá curto e a linha para. Acertou: o técnico retira a fita e libera de verdade (\"Que bom que checaram\")."]
      ],
      fazer: ["Não acionar a máquina", "Verificar (ler a luz ou falar com o técnico) e avisar o gestor ou técnico da divergência"],
      naoFazer: ["Acionar a máquina", "Acreditar no NPC mesmo depois de ver a luz vermelha"],
      pontuacao: [
        ["Não acionar, verificar e avisar", "Adequada", "+1,0"],
        ["Recusar e seguir sem verificar", "Aceitável", "+0,4"],
        ["Acionar a máquina", "Inadequada de risco", "−1,0"],
        ["Acreditar no NPC depois de ver a luz", "Inadequada de risco", "−1,0"]
      ],
      nota: "Omissão não se aplica a quem recusa. Se ninguém verificou, o NPC tenta religar sozinho no T3."
    },
    {
      id: "12", nome: "Colega pede ajuda com carga", local: "Estoque",
      pontos: ["caixa"], grav: "media", gravidade: "Média", janela: "12 s (a caixa cai)",
      nreq: "N2", tempos: ["T2", "T3"],
      avalia: "Colaboração (peso 1,5) e Priorização (peso 0,5, só com carga alta).",
      como: [
        ["Quando", "T2 (carga baixa) ou T3 (carga alta, como evento intruso)."],
        ["Cena", "NPC carrega uma caixa pesada que escorrega. \"Ei!\" e \"Me dá uma mão aqui?\"."],
        ["Consequências", "Ignorou com carga baixa: a caixa cai e as peças se espalham; no T3 o NPC comenta que ninguém ajudou. Ajudou: o NPC agradece."]
      ],
      fazer: ["Carga baixa: ajudar em até 12 s e seguir", "Carga alta: manter o crítico e, se der tempo, voltar depois"],
      naoFazer: ["Largar um crítico para ajudar", "Ignorar o pedido quando a carga é baixa"],
      pontuacao: [
        ["Carga baixa: ajudar em até 12 s", "Adequada", "+1,0"],
        ["Carga alta: continuar no crítico (adiamento justificado)", "Adequada", "0"],
        ["Chamar o gestor sem ajudar", "Aceitável", "+0,4"],
        ["Carga alta: largar o crítico para ajudar", "Inadequada", "−0,5"],
        ["Carga baixa: perceber (NC2+) e sair", "Omissão", "−0,4"]
      ],
      nota: "O −0,5 é em Priorização. Escalar um N2 custa em Autonomia."
    },
    {
      id: "13", nome: "Novato prestes a operar sem treino", local: "Área de Máquinas",
      pontos: ["prensa"], grav: "alta", gravidade: "Alta", janela: "não definida no PDF",
      nreq: "N1 e N3", tempos: ["T3"],
      avalia: "Segurança (peso 2), Colaboração (peso 1) e Autonomia (limites). O jogador não tem competência para treinar: proteger vem antes de ajudar.",
      como: [
        ["Cena", "NPC de colete diferente com a mão na alavanca: \"É esta aqui que liga?\"."]
      ],
      fazer: ["Pedir que ele espere (N1)", "Avisar o gestor ou técnico (N3)"],
      naoFazer: ["Ensinar o novato", "Ligar a máquina para ele", "Perceber e seguir"],
      pontuacao: [
        ["Pedir que espere + avisar gestor ou técnico", "Adequada", "+1,0"],
        ["Só pedir que espere", "Aceitável", "+0,5"],
        ["Só relatar enquanto ele segue", "Aceitável", "+0,4"],
        ["Ensinar ou ligar a máquina", "Inadequada de risco", "−1,0"],
        ["Perceber (NC2+) e seguir", "Omissão", "−0,75"]
      ]
    },
    {
      id: "14", nome: "Luz amarela piscando", sub: "precursor da fumaça", local: "Linha de Montagem",
      pontos: ["compressor"], grav: "baixa", gravidade: "Baixa, depois Crítica", janela: "não definida no PDF",
      nreq: "N3", tempos: ["T1"],
      avalia: "Percepção (peso 1) e Aprendizado. Um pequeno problema que esconde um grande.",
      como: [
        ["Cena", "Luz pequena na lateral da esteira e zumbido que fica mais agudo com o tempo. NPC: \"Ela esquenta às vezes\"."],
        ["Efeito no T3", "Se ignorou, a fumaça do T3 vem no máximo, com janela de 15 s. Se relatou, a fumaça é menor, com janela de 25 s e técnico por perto."]
      ],
      fazer: ["Relatar ao gestor ou técnico"],
      naoFazer: ["Mexer no painel", "Perceber e seguir"],
      pontuacao: [
        ["Relatar ao gestor ou técnico", "Adequada", "+1,0"],
        ["Observar e relatar tarde", "Aceitável", "+0,4"],
        ["Mexer no painel", "Inadequada", "−0,5"],
        ["Perceber (NC2+) e seguir", "Omissão", "−0,2"]
      ],
      nota: "Se o jogador ficou em NC0, o T3 piora sem penalizá-lo."
    },
    {
      id: "15", nome: "Máquina em espera", sub: "NPC pede pra religar: ouvir e avisar o gerente", local: "Linha de Montagem",
      pontos: ["maquina"], grav: "nenhuma", gravidade: "Nenhuma (máquina só está em espera)", janela: "não se aplica",
      nreq: "N3 (avisar o gerente)", tempos: ["T2", "T3"],
      caminho: [
        { ponto: "maquina", texto: "Escute o funcionário que pede pra religar a máquina. Leia a plaqueta \"EM ESPERA\" de perto." },
        { ponto: "gerente", texto: "Avise o gerente do pedido. Religar ou não é decisão dele, não sua." }
      ],
      avalia: "Julgamento (peso 1, calibração de alarme) e Autonomia (peso 0,5). Separa o atento de quem reage a tudo e cobra o custo de falso positivo.",
      como: [
        ["Cena", "Luz amarela fixa (não pisca), plaqueta \"EM ESPERA\" legível de perto, zumbido normal. Um NPC pede ao jogador pra religar a máquina."],
        ["Nível de contato", "Falar com o NPC = NC2. Ficar 2 s ou mais perto e ler a plaqueta = NC3."],
        ["Resposta certa", "Ouvir o NPC e levar o pedido ao gerente. A máquina não está com defeito, então não há emergência."]
      ],
      fazer: ["Ouvir o NPC (NC2)", "Ler a plaqueta (NC3)", "Avisar o gerente do pedido"],
      naoFazer: ["Religar a máquina sozinho (decidir é N3)", "Apertar a parada de emergência", "Ouvir o NPC e não avisar ninguém"],
      pontuacao: [
        ["Ouvir o NPC, ler a plaqueta e avisar o gerente", "Adequada", "+1,0"],
        ["Avisar o gerente sem ouvir o NPC direito (relato genérico)", "Aceitável", "+0,5"],
        ["Ouvir o NPC e não avisar o gerente", "Omissão", "−0,4"],
        ["Religar a máquina sozinho", "Inadequada", "−0,5"],
        ["Apertar a parada de emergência", "Inadequada", "−0,5"]
      ],
      nota: "AJUSTE do problema 15 do PDF (falso alarme). O PDF pede só chegar a NC3 e seguir sem agir. Aqui o NPC pede pra religar e o jogador deve ouvir e avisar o gerente. Os valores novos são sugestões."
    },
    {
      id: "16", nome: "Peça defeituosa na caixa de boas", local: "Estoque",
      pontos: ["carga"], grav: "baixa", gravidade: "Baixa", janela: "não definida no PDF",
      nreq: "N2", tempos: ["T1", "T2"],
      avalia: "Percepção (peso 1) e Responsabilidade (peso 0,5). Baixa saliência: só penaliza se a exposição foi justa.",
      como: [
        ["Cena", "Peça com um X vermelho pequeno entre as aprovadas."]
      ],
      fazer: ["Mover a peça para a caixa de rejeitos (N2)"],
      naoFazer: ["Perceber e seguir"],
      pontuacao: [
        ["Mover para a caixa de rejeitos", "Adequada", "+1,0"],
        ["Avisar o gestor", "Aceitável", "+0,4"],
        ["Perceber (NC2+) e seguir (impacto mínimo)", "Omissão", "−0,2"]
      ]
    },
    {
      id: "17", nome: "Carga mal produzida", sub: "avaliar a carga e passar o relato ao gerente",
      local: "Área de Funcionários, carga e escritório do gerente",
      pontos: ["pessoas", "carga"], grav: "media", gravidade: "Média (sugestão)", janela: "até o T3 (sugestão)",
      nreq: "N3 (relatar ao gerente)", tempos: ["T1", "T2", "T3"], novo: true,
      caminho: [
        { ponto: "pessoas", texto: "Converse com os funcionários. Eles comentam, em tom de fofoca, que a carga saiu errada." },
        { ponto: "carga", texto: "Vá até a carga e avalie com calma. Confira com os próprios olhos o que está errado." },
        { ponto: "gerente", texto: "Passe o relato ao gerente: qual é o problema da carga e onde ela está." }
      ],
      avalia: "Comunicação (primária, peso 1,5) e Julgamento (secundária, peso 0,75). Mede se o jogador avalia a carga com a prova física antes de relatar e se leva o relato à pessoa certa.",
      como: [
        ["Pistas", "NPC: funcionários comentando que a carga saiu errada (informação duvidosa). Contraprova física: peças com defeito visível na carga. Regra do PDF: toda informação duvidosa tem ao menos 1 contraprova física visível."],
        ["Nível de contato", "Falar com os funcionários = NC2. Ficar 2 s ou mais perto da carga e ver o defeito = NC3."],
        ["Se relatar", "O gerente devolve um eco (\"A carga? Vou segurar o lote\") e a carga não vai pra produção."],
        ["Se ignorar (T3)", "No T3 a carga segue pra produção e a qualidade dos carros cai. Quanto mais carros saem dessa carga, maior a queda."]
      ],
      fazer: ["Ouvir os funcionários", "Ir até a carga e avaliar (chegar a NC3)", "Passar o relato ao gerente antes do T3"],
      naoFazer: ["Acreditar no boato e agir sem ver a carga", "Mexer na carga ou parar o lote sozinho (decidir é N3)", "Avaliar a carga e não avisar ninguém"],
      pontuacao: [
        ["Ouvir, avaliar a carga (NC3) e relatar ao gerente antes do T3", "Adequada", "+1,0"],
        ["Relatar ao gerente só pelo boato, sem avaliar a carga", "Aceitável", "+0,5"],
        ["Mexer na carga ou parar o lote sozinho", "Inadequada", "−0,5"],
        ["Avaliar a carga (NC2+) e não relatar: no T3 a carga entra na produção", "Omissão", "−0,4"],
        ["Nunca chegar perto da carga (NC0)", "Não avaliável", "0"]
      ],
      nota: "PROPOSTA nova: não está no catálogo de 16 problemas do PDF. Foi montada com as regras do PDF (NC, N_req, classes e valores). A consequência no T3 (carga vai pra produção e a qualidade dos carros cai) vem de você. Gravidade, janela e valores são sugestões."
    }
  ];

  /* ---------------------------------------------------------------------
     VARIÁVEIS 4: desenho do mapa (só visual, em % do mapa)
       t = tipo: sala, fabrica, esteira, caixote, mesa
     --------------------------------------------------------------------- */
  const ZONAS = [
    { t: "sala",    x: 4.8,  y: 42.8, w: 17.9, h: 41.6 },
    { t: "fabrica", x: 22.4, y: 39.8, w: 56.9, h: 41.6 },
    { t: "sala",    x: 24.1, y: 13.3, w: 19.3, h: 26.5 },
    { t: "sala",    x: 43.5, y: 12.7, w: 17.9, h: 27.1 },
    { t: "sala",    x: 61.4, y: 12.7, w: 9.0,  h: 27.1 },
    { t: "sala",    x: 70.3, y: 12.7, w: 20.0, h: 27.1 },
    { t: "sala",    x: 79.3, y: 39.8, w: 14.8, h: 17.0 },
    { t: "esteira", x: 33.8, y: 48.2, w: 36.2, h: 14.5 },
    { t: "caixote", x: 34.8, y: 77.7, w: 2.4,  h: 4.2 },
    { t: "caixote", x: 38.6, y: 77.7, w: 2.4,  h: 4.2 },
    { t: "caixote", x: 49.0, y: 75.9, w: 4.1,  h: 4.2 },
    { t: "caixote", x: 79.3, y: 64.8, w: 2.1,  h: 4.4 },
    { t: "mesa",    x: 83.1, y: 43.5, w: 2.1,  h: 4.2 },
    { t: "mesa",    x: 87.9, y: 42.0, w: 1.7,  h: 7.0 },
    { t: "mesa",    x: 84.1, y: 50.5, w: 1.7,  h: 4.8 },
    { t: "mesa",    x: 88.6, y: 50.0, w: 2.1,  h: 5.6 }
  ];

  /* ---------------------------------------------------------------------
     VARIÁVEIS 5: estado da tela
       filtroTempo   "Todos", "T1", "T2" ou "T3"
       aberto        o que está aberto no painel: {tipo:"ponto"|"solto", id}
     --------------------------------------------------------------------- */
  let filtroTempo = "Todos";
  let aberto = null;
  let foco = null; // id do problema com sequência que a rota mostra

  /* ===================================================================== */

  const NS = "http://www.w3.org/2000/svg";
  const $ = (id) => document.getElementById(id);

  const mapa = $("mapa-jogo");
  const painel = $("mapa-painel");
  const filtrosEl = $("mapa-filtros");
  const semPontoEl = $("mapa-sem-ponto");

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function visivel(p) {
    return filtroTempo === "Todos" || p.tempos.indexOf(filtroTempo) !== -1;
  }

  function problemasDoPonto(pt) {
    if (pt.tipo === "gerente") {
      return PROBLEMAS.filter(function (p) { return /N3/.test(p.nreq); });
    }
    return PROBLEMAS.filter(function (p) { return p.pontos.indexOf(pt.id) !== -1; });
  }

  function semPonto() {
    return PROBLEMAS.filter(function (p) { return p.pontos.length === 0; });
  }

  function pontoPorId(id) {
    return PONTOS.filter(function (p) { return p.id === id; })[0];
  }

  /* ---------- Abas Quadro / Mapa ---------- */
  function mostrarVista(nome) {
    const ehMapa = nome === "mapa";
    $("vista-quadro").hidden = ehMapa;
    $("vista-mapa").hidden = !ehMapa;
    document.querySelectorAll("#abas .aba").forEach(function (b) {
      const on = b.dataset.vista === nome;
      b.classList.toggle("ativa", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
  }

  document.querySelectorAll("#abas .aba").forEach(function (b) {
    b.addEventListener("click", function () {
      mostrarVista(b.dataset.vista);
      try {
        history.replaceState(null, "", b.dataset.vista === "mapa" ? "#mapa" : location.pathname + location.search);
      } catch (e) { /* sem problema se o navegador não deixar */ }
    });
  });

  /* ---------- Desenho do mapa ---------- */
  ZONAS.forEach(function (z) {
    const d = document.createElement("div");
    d.className = "zona z-" + z.t;
    d.style.cssText = "left:" + z.x + "%;top:" + z.y + "%;width:" + z.w + "%;height:" + z.h + "%";
    mapa.appendChild(d);
  });

  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("class", "rota");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.setAttribute("aria-hidden", "true");
  svg.style.cssText = "position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;overflow:visible";
  const linhaRota = document.createElementNS(NS, "polyline");
  linhaRota.setAttribute("fill", "none");
  linhaRota.setAttribute("stroke", "#c9b8ff");
  linhaRota.setAttribute("stroke-width", "2");
  linhaRota.setAttribute("stroke-dasharray", "6 5");
  linhaRota.setAttribute("vector-effect", "non-scaling-stroke");
  svg.appendChild(linhaRota);
  mapa.appendChild(svg);

  const pinEls = {};
  PONTOS.forEach(function (pt) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "pin" + (pt.tipo === "gerente" ? " pin-gerente" : "");
    b.style.left = pt.x + "%";
    b.style.top = pt.y + "%";
    b.dataset.id = pt.id;
    b.innerHTML =
      '<span class="pin-forma"></span>' +
      '<span class="pin-rotulo rot-' + pt.rotulo + '">' + esc(pt.nome) + "</span>";
    b.addEventListener("click", function () {
      aberto = { tipo: "ponto", id: pt.id };
      const dele = problemasDoPonto(pt).filter(function (p) {
        return p.caminho && visivel(p) && p.caminho.some(function (c) { return c.ponto === pt.id; });
      });
      if (dele.length && !dele.some(function (p) { return p.id === foco; })) foco = dele[0].id;
      atualizar();
      if (window.innerWidth < 980) painel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    mapa.appendChild(b);
    pinEls[pt.id] = b;
  });

  /* ---------- Filtro de tempo ---------- */
  ["Todos", "T1", "T2", "T3"].forEach(function (t) {
    const c = document.createElement("button");
    c.type = "button";
    c.className = "chip";
    c.textContent = t;
    c.addEventListener("click", function () {
      filtroTempo = t;
      atualizar();
    });
    filtrosEl.appendChild(c);
  });

  /* ---------- Lista "sem bolinha" ---------- */
  semPontoEl.addEventListener("click", function (e) {
    const b = e.target.closest("button[data-id]");
    if (!b) return;
    aberto = { tipo: "solto", id: b.dataset.id };
    atualizar();
    if (window.innerWidth < 980) painel.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* ---------- Rota (passos numerados e linha tracejada) ---------- */
  function desenharRota() {
    PONTOS.forEach(function (pt) {
      const velho = pinEls[pt.id].querySelector(".passo");
      if (velho) velho.remove();
    });
    const cadeias = PROBLEMAS.filter(function (p) { return p.caminho && visivel(p); });
    const cadeia = cadeias.filter(function (p) { return p.id === foco; })[0] || cadeias[0];
    if (!cadeia) {
      linhaRota.setAttribute("points", "");
      return;
    }
    const pts = [];
    cadeia.caminho.forEach(function (c, i) {
      const pt = pontoPorId(c.ponto);
      pts.push(pt.x + "," + pt.y);
      const s = document.createElement("span");
      s.className = "passo";
      s.textContent = i + 1;
      pinEls[pt.id].appendChild(s);
    });
    linhaRota.setAttribute("points", pts.join(" "));
  }

  /* ---------- Atualização geral ---------- */
  function atualizar() {
    // chips de tempo
    filtrosEl.querySelectorAll(".chip").forEach(function (c) {
      c.classList.toggle("ativo", c.textContent === filtroTempo);
    });

    // bolinhas
    PONTOS.forEach(function (pt) {
      const b = pinEls[pt.id];
      const lista = problemasDoPonto(pt).filter(visivel);
      let cor = "#9ca3af";
      if (pt.tipo === "gerente") {
        cor = "#5aa9ff";
      } else if (lista.length) {
        const maior = lista.reduce(function (m, p) { return GRAV[p.grav].peso > GRAV[m].peso ? p.grav : m; }, lista[0].grav);
        cor = GRAV[maior].cor;
      }
      b.style.setProperty("--c", cor);
      b.querySelector(".pin-forma").textContent = lista.length;
      b.disabled = lista.length === 0;
      b.classList.toggle("sel", !!aberto && aberto.tipo === "ponto" && aberto.id === pt.id);
      b.setAttribute("aria-label", pt.nome + ": " + lista.length + " problema(s)");
      const velho = b.querySelector(".passo");
      if (velho) velho.remove();
    });

    desenharRota();

    // lista dos problemas sem bolinha
    const soltos = semPonto().filter(visivel);
    if (soltos.length) {
      semPontoEl.innerHTML =
        '<p class="sem-ponto-titulo">Problemas do PDF que ainda não têm bolinha no mapa:</p>' +
        '<div class="sem-ponto-lista">' +
        soltos.map(function (p) {
          return '<button type="button" class="chip" data-id="' + esc(p.id) + '">' + esc(p.id) + " · " + esc(p.nome) + "</button>";
        }).join("") +
        "</div>";
    } else {
      semPontoEl.innerHTML = "";
    }

    renderPainel();
  }

  /* ---------- Painel com a lista ---------- */
  function htmlProblema(p, ponto, abrir) {
    const g = GRAV[p.grav];
    const ul = function (arr) { return "<ul>" + arr.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>"; };
    const cls = function (v) { return v.charAt(0) === "+" ? "pos" : (v.charAt(0) === "−" || v.charAt(0) === "-") ? "neg" : "zero"; };

    let seq = "";
    if (p.caminho) {
      seq = "<h4>Sequência (" + p.caminho.length + " passos)</h4><ol class=\"seq\">" +
        p.caminho.map(function (c) {
          const pt = pontoPorId(c.ponto);
          const atual = ponto && ponto.id === c.ponto;
          return '<li class="' + (atual ? "atual" : "") + '"><b>' + esc(pt.nome) + "</b>" +
            (atual ? ' <span class="aqui">você está aqui</span>' : "") + "<br>" + esc(c.texto) + "</li>";
        }).join("") + "</ol>";
    }

    return '<details class="prob" data-id="' + esc(p.id) + '" data-cadeia="' + (p.caminho ? "1" : "0") + '"' + (abrir ? " open" : "") + ">" +
      '<summary><span class="gdot" style="--c:' + g.cor + '"></span>' +
      '<span class="ptitulo"><b>' + esc(p.id) + "</b> " + esc(p.nome) +
      (p.novo ? ' <span class="selo">NOVO · proposta</span>' : "") + "</span>" +
      '<span class="pmeta">' + esc(g.nome) + " · " + esc(p.tempos.join(" ")) + "</span></summary>" +
      '<div class="pcorpo">' +
        '<p class="onde">' + esc(p.local) + (p.sub ? " · " + esc(p.sub) : "") + "</p>" +
        '<div class="tags">' +
          '<span class="tag">Gravidade: ' + esc(p.gravidade) + "</span>" +
          '<span class="tag">Janela: ' + esc(p.janela) + "</span>" +
          '<span class="tag">Exige: ' + esc(p.nreq) + "</span>" +
          '<span class="tag">' + esc(p.tempos.join(" · ")) + "</span>" +
        "</div>" +
        seq +
        "<h4>O que avalia</h4><p>" + esc(p.avalia) + "</p>" +
        "<h4>Como acontece</h4><dl>" + p.como.map(function (kv) { return "<dt>" + esc(kv[0]) + "</dt><dd>" + esc(kv[1]) + "</dd>"; }).join("") + "</dl>" +
        "<h4>O que fazer</h4>" + ul(p.fazer) +
        "<h4>O que não fazer</h4>" + ul(p.naoFazer) +
        "<h4>Como o sistema pontua</h4>" +
        '<table><thead><tr><th>Ação</th><th>Classe</th><th class="dir">Valor</th></tr></thead><tbody>' +
          p.pontuacao.map(function (r) {
            return "<tr><td>" + esc(r[0]) + "</td><td>" + esc(r[1]) + '</td><td class="v ' + cls(r[2]) + '">' + esc(r[2]) + "</td></tr>";
          }).join("") +
        "</tbody></table>" +
        (p.nota ? '<p class="nota">' + esc(p.nota) + "</p>" : "") +
      "</div></details>";
  }

  function renderPainel() {
    if (!aberto) {
      painel.innerHTML = '<p class="vazio">Toque numa bolinha do mapa pra ver os problemas daquele ponto.</p>';
      return;
    }

    let titulo, desc, extra, lista, ponto = null, idAberto = null;
    if (aberto.tipo === "ponto") {
      ponto = pontoPorId(aberto.id);
      titulo = ponto.nome;
      desc = ponto.descricao;
      extra = ponto.extra || [];
      lista = problemasDoPonto(ponto).filter(visivel);
    } else {
      titulo = "Sem bolinha no mapa";
      desc = "Problemas do PDF que ainda não foram colocados em nenhum ponto. Se quiser, é só dizer onde cada um fica.";
      extra = [];
      lista = semPonto().filter(visivel);
      idAberto = aberto.id;
    }

    let html = "<h2>" + esc(titulo) + "</h2><p class=\"desc\">" + esc(desc) + "</p>";
    if (extra.length) {
      html += '<ul class="regras">' + extra.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
    }
    if (filtroTempo !== "Todos") {
      html += '<p class="filtrado">Mostrando só o tempo ' + esc(filtroTempo) + ".</p>";
    }
    if (!lista.length) {
      html += '<p class="vazio">Nenhum problema aqui neste tempo.</p>';
    } else {
      html += lista.map(function (p) {
        const abrirAgora = (p.caminho && ponto && p.caminho.some(function (c) { return c.ponto === ponto.id; })) || p.id === idAberto;
        return htmlProblema(p, ponto, abrirAgora);
      }).join("");
    }
    painel.innerHTML = html;
    painel.querySelectorAll("details.prob[data-id]").forEach(function (d) {
      d.addEventListener("toggle", function () {
        if (d.open && d.dataset.cadeia === "1") {
          foco = d.dataset.id;
          desenharRota();
        }
      });
    });
  }

  /* ---------- Início ---------- */
  mostrarVista(location.hash === "#mapa" ? "mapa" : "quadro");
  atualizar();
})();
