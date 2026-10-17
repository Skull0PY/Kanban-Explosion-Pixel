// ===== Firebase =====
const firebaseConfig = {
  apiKey: "AIzaSyCRkuRWR4Ja0iRofcYs_LcSOKCqiT4N7qU",
  authDomain: "kanban-explosion-pixel.firebaseapp.com",
  projectId: "kanban-explosion-pixel",
  storageBucket: "kanban-explosion-pixel.firebasestorage.app",
  messagingSenderId: "79885665245",
  appId: "1:79885665245:web:745ce6ba3a56943c9c6c34"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// Funciona melhor em redes e navegadores de celular que bloqueiam a conexão padrão
db.settings({ experimentalForceLongPolling: true });
const colecao = db.collection("tarefas");

// ===== Elementos =====
const campo = document.getElementById("novaTarefa");
const botao = document.getElementById("botaoAdicionar");
const seletor = document.getElementById("responsavel");
const seletorPrio = document.getElementById("prioridade");
const statusEl = document.getElementById("status");

let cartaoArrastadoId = null;
let filtroAtual = "";
let ultimaLista = [];

const PRIORIDADES = ["baixa", "media", "alta"];
const NOMES_PRIO = { baixa: "Baixa", media: "Média", alta: "Alta" };

function mostrarStatus(texto, erro) {
  statusEl.textContent = texto;
  statusEl.className = erro ? "erro" : "";
}

// ===== Contadores =====
function atualizarContadores() {
  document.querySelectorAll(".coluna").forEach(function (coluna) {
    const titulo = coluna.querySelector("h2");
    if (!titulo.dataset.titulo) titulo.dataset.titulo = titulo.textContent;
    const total = coluna.querySelectorAll(".cartao").length;
    titulo.textContent = titulo.dataset.titulo + " (" + total + ")";
  });
}

// ===== Filtro =====
function aplicarFiltro() {
  document.querySelectorAll(".cartao").forEach(function (c) {
    const dono = c.querySelector(".dono").textContent;
    c.style.display = (filtroAtual === "" || dono === filtroAtual) ? "" : "none";
  });
  document.querySelectorAll("#filtros button").forEach(function (b) {
    b.classList.toggle("ativo", b.dataset.nome === filtroAtual);
  });
}

document.querySelectorAll("#filtros button").forEach(function (b) {
  b.addEventListener("click", function () {
    filtroAtual = b.dataset.nome;
    aplicarFiltro();
  });
});

// ===== Cartão =====
function criarCartao(id, t) {
  const prioridade = PRIORIDADES.includes(t.prioridade) ? t.prioridade : "media";
  const coluna = document.getElementById(t.coluna) || document.getElementById("backlog");

  const cartao = document.createElement("div");
  cartao.className = "cartao";
  cartao.draggable = true;

  const bolinha = document.createElement("button");
  bolinha.className = "prio prio-" + prioridade;
  bolinha.title = "Prioridade " + NOMES_PRIO[prioridade] + " (toque pra mudar)";
  bolinha.addEventListener("click", function () {
    const proxima = PRIORIDADES[(PRIORIDADES.indexOf(prioridade) + 1) % PRIORIDADES.length];
    colecao.doc(id).update({ prioridade: proxima });
  });

  const info = document.createElement("div");
  info.className = "info";

  const spanTexto = document.createElement("span");
  spanTexto.className = "texto";
  spanTexto.textContent = t.texto;

  const spanDono = document.createElement("span");
  spanDono.className = "dono";
  spanDono.textContent = t.dono || "";

  info.appendChild(spanTexto);
  info.appendChild(spanDono);

  const acoes = document.createElement("div");
  acoes.className = "acoes";

  const editar = document.createElement("button");
  editar.textContent = "✎";
  editar.className = "editar";
  editar.title = "Editar tarefa";
  editar.addEventListener("click", function () {
    const novo = prompt("Editar tarefa:", t.texto);
    if (novo === null) return;
    const limpo = novo.trim();
    if (limpo === "") return;
    colecao.doc(id).update({ texto: limpo });
  });

  const apagar = document.createElement("button");
  apagar.textContent = "✕";
  apagar.className = "apagar";
  apagar.title = "Apagar tarefa";
  apagar.addEventListener("click", function () {
    if (confirm("Apagar esta tarefa pra todo mundo?")) {
      colecao.doc(id).delete();
    }
  });

  acoes.appendChild(editar);
  acoes.appendChild(apagar);

  cartao.appendChild(bolinha);
  cartao.appendChild(info);
  cartao.appendChild(acoes);

  cartao.addEventListener("dragstart", function () {
    cartaoArrastadoId = id;
  });

  coluna.appendChild(cartao);
}

// ===== Arrastar e soltar =====
document.querySelectorAll(".coluna").forEach(function (coluna) {
  coluna.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  coluna.addEventListener("drop", function (e) {
    e.preventDefault();
    if (cartaoArrastadoId) {
      colecao.doc(cartaoArrastadoId).update({ coluna: coluna.id });
      cartaoArrastadoId = null;
    }
  });
});

// ===== Adicionar =====
botao.addEventListener("click", function () {
  const texto = campo.value.trim();
  if (texto === "") return;
  colecao.add({
    texto: texto,
    dono: seletor.value,
    prioridade: seletorPrio.value,
    coluna: "backlog",
    criadoEm: Date.now()
  }).catch(function (erro) {
    mostrarStatus("🔴 Não salvou: " + erro.code, true);
  });
  campo.value = "";
});

// ===== Tempo real: tudo que muda na nuvem aparece aqui =====
function desenhar(docs) {
  document.querySelectorAll(".cartao").forEach(function (c) {
    c.remove();
  });
  docs.forEach(function (d) {
    criarCartao(d.id, d.dados);
  });
  atualizarContadores();
  aplicarFiltro();
}

// ===== Levar tarefas antigas (deste aparelho) pra nuvem, uma vez =====
function migrarLocal() {
  if (localStorage.getItem("migrado")) return;
  let antigas = [];
  try {
    antigas = JSON.parse(localStorage.getItem("tarefas")) || [];
  } catch (e) {
    antigas = [];
  }
  if (antigas.length === 0) {
    localStorage.setItem("migrado", "1");
    return;
  }
  if (confirm("Encontrei " + antigas.length + " tarefa(s) salvas só neste aparelho. Enviar pra nuvem?")) {
    const lote = db.batch();
    antigas.forEach(function (t, i) {
      if (!t || !t.texto) return;
      lote.set(colecao.doc(), {
        texto: String(t.texto),
        dono: t.dono || "",
        prioridade: PRIORIDADES.includes(t.prioridade) ? t.prioridade : "media",
        coluna: t.coluna || "backlog",
        criadoEm: Date.now() + i
      });
    });
    lote.commit();
  }
  localStorage.setItem("migrado", "1");
}

let primeiraCarga = true;

let conectou = false;

// Se em 10 segundos não chegar nada do servidor, avisa
setTimeout(function () {
  if (!conectou) {
    mostrarStatus("🟡 Ainda sem resposta do Firebase. Confira a internet e se o Firestore foi criado.", true);
  }
}, 10000);

colecao.orderBy("criadoEm").onSnapshot(
  { includeMetadataChanges: true },
  function (snap) {
    ultimaLista = snap.docs.map(function (d) {
      return { id: d.id, dados: d.data() };
    });
    desenhar(ultimaLista);

    if (snap.metadata.fromCache) {
      mostrarStatus("🟡 Sem conexão com o servidor: o que você vê NÃO está salvo na nuvem", true);
      return;
    }

    conectou = true;
    mostrarStatus("🟢 Online: tarefas sincronizadas com a equipe", false);
    if (primeiraCarga) {
      primeiraCarga = false;
      migrarLocal();
    }
  },
  function (erro) {
    mostrarStatus("🔴 Erro: " + erro.code + ". Veja as regras do Firestore.", true);
  }
);

// ===== Exportar e importar (backup) =====
document.getElementById("botaoExportar").addEventListener("click", function () {
  const lista = ultimaLista.map(function (item) {
    return {
      texto: item.dados.texto,
      dono: item.dados.dono || "",
      prioridade: item.dados.prioridade || "media",
      coluna: item.dados.coluna || "backlog"
    };
  });
  const blob = new Blob([JSON.stringify(lista, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "tarefas-kanban.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});

const arquivoImportar = document.getElementById("arquivoImportar");

document.getElementById("botaoImportar").addEventListener("click", function () {
  arquivoImportar.click();
});

arquivoImportar.addEventListener("change", function () {
  const arquivo = arquivoImportar.files[0];
  if (!arquivo) return;
  const leitor = new FileReader();
  leitor.onload = function () {
    try {
      const lista = JSON.parse(leitor.result);
      if (!Array.isArray(lista)) throw new Error("formato");
      if (!confirm("Isso APAGA as tarefas atuais da nuvem e coloca as " + lista.length + " do arquivo, pra todo mundo. Continuar?")) return;
      const lote = db.batch();
      ultimaLista.forEach(function (item) {
        lote.delete(colecao.doc(item.id));
      });
      lista.forEach(function (t, i) {
        if (!t || !t.texto) return;
        lote.set(colecao.doc(), {
          texto: String(t.texto),
          dono: t.dono || "",
          prioridade: PRIORIDADES.includes(t.prioridade) ? t.prioridade : "media",
          coluna: t.coluna || "backlog",
          criadoEm: Date.now() + i
        });
      });
      lote.commit();
    } catch (e) {
      alert("Arquivo inválido. Use um arquivo exportado por este Kanban.");
    }
  };
  leitor.readAsText(arquivo);
  arquivoImportar.value = "";
});
