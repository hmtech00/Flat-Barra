/* =========================================================
   RN HOSPITALIDADE TURISMO — script.js
   Configurações centrais, dados de demonstração e funções
   compartilhadas por todas as páginas do site.
   ========================================================= */

/* ---------------------------------------------------------
   1. CONFIGURAÇÃO CENTRAL — altere aqui os dados da marca
   --------------------------------------------------------- */
const SITE_CONFIG = {
  nomeMarca: "RN Hospitalidade Turismo",
  whatsappNumero: "5571996673131", // <-- ALTERE: código do país + DDD + número, sem espaços/símbolos
  email: "infobahiastay@gmail.com", // <-- ALTERE: e-mail de contato
  instagram: "https://instagram.com/bahiastay1", // <-- ALTERE: link do Instagram
  instagramHandle: "@bahiastay1",
  localizacao: "Salvador, Bahia, Brasil",
  horarioAtendimento: "Todos os dias, das 8h às 22h",
};

/* Compatibilidade com o número sugerido no prompt */
const WHATSAPP_NUMBER = SITE_CONFIG.whatsappNumero;

/* ---------------------------------------------------------
   2. BANCO DE IMAGENS DE DEMONSTRAÇÃO
   Centralize aqui as URLs para facilitar substituição futura.
   Usamos imagens do Unsplash relacionadas a Salvador/Bahia,
   mar, arquitetura histórica e gastronomia.
   --------------------------------------------------------- */
const IMG = {
  heroHome: "assets/images/salvador/Salvador-Brazil-Farol-da-Barra-sunset.jpg",
  institucional: "assets/images/salvador/Largo_do_Pelourinho_Salvador_2019-9754__cropped_.jpg",
  ctaFinal: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1600&q=80",

  apto1: [
    "assets/images/apto1/apto1-01.jpg",
    "assets/images/apto1/apto1-02.jpg",
    "assets/images/apto1/apto1-03.jpg",
    "assets/images/apto1/apto1-04.jpg",
    "assets/images/apto1/apto1-05.jpg",
    "assets/images/apto1/apto1-06.jpg",
    "assets/images/apto1/apto1-07.jpg",
    "assets/images/apto1/apto1-08.jpg",
    "assets/images/apto1/apto1-09.jpg",
    "assets/images/apto1/apto1-10.jpg",
    "assets/images/apto1/apto1-11.jpg",
    "assets/images/apto1/apto1-12.jpg",
    "assets/images/apto1/apto1-13.jpg",
    "assets/images/apto1/apto1-14.jpg",
    "assets/images/apto1/apto1-15.jpg",
    "assets/images/apto1/apto1-16.jpg",
    "assets/images/apto1/apto1-17.jpg",
    "assets/images/apto1/apto1-18.jpg",
    "assets/images/apto1/apto1-19.jpg",
    "assets/images/apto1/apto1-20.jpg",
    "assets/images/apto1/apto1-21.jpg",
    "assets/images/apto1/apto1-22.jpg",
    "assets/images/apto1/apto1-23.jpg",
  ],
  apto2: [
    "assets/images/apto2/apto2-01.jpg",
    "assets/images/apto2/apto2-02.jpg",
    "assets/images/apto2/apto2-03.jpg",
    "assets/images/apto2/apto2-04.jpg",
    "assets/images/apto2/apto2-05.jpg",
    "assets/images/apto2/apto2-06.jpg",
    "assets/images/apto2/apto2-07.jpg",
    "assets/images/apto2/apto2-08.jpg",
    "assets/images/apto2/apto2-09.jpg",
    "assets/images/apto2/apto2-10.jpg",
    "assets/images/apto2/apto2-11.jpg",
    "assets/images/apto2/apto2-12.jpg",
    "assets/images/apto2/apto2-13.jpg",
    "assets/images/apto2/apto2-14.jpg",
    "assets/images/apto2/apto2-15.jpg",
    "assets/images/apto2/apto2-16.jpg",
    "assets/images/apto2/apto2-17.jpg",
  ],

  exp1: ["assets/images/salvador/Salvador-Brazil-Farol-da-Barra-sunset.jpg"],
  exp2: ["assets/images/salvador/Ilha_dos_Frades.jpg"],
  exp3: ["assets/images/salvador/Praia_do_Forte.jpg"],
  exp4: ["assets/images/salvador/Pelourinho_Salvador_Bahia_2018-0601.jpg"],
  exp5: ["assets/images/salvador/Barco_na_Baia_de_Todos_os_Santos.jpg"],
  exp6: ["assets/images/salvador/Largo_da_Mariquita.jpg"],
  resort: ["assets/images/salvador/Arembepe_Praia.jpg"],
};

/* ---------------------------------------------------------
   3. DADOS DE DEMONSTRAÇÃO — APARTAMENTOS
   Edite, adicione ou remova itens deste array conforme
   necessário. Conteúdo apenas ilustrativo.
   --------------------------------------------------------- */
const apartamentos = [
  {
    id: 1,
    nome: "Porto Privilege",
    regiao: "Barra, Salvador",
    regiaoFiltro: "barra",
    enderecoMapa: "Alameda Antunes, 56 - Barra, Salvador - BA, 40140-020",
    hospedes: 4,
    quartos: 1,
    camas: 2,
    banheiros: 2,
    descricaoCurta: "Duplex aconchegante na Barra, com piscina na cobertura e vista para o mar.",
    descricao:
      "Um apartamento duplex confortável e moderno para aproveitar Salvador com praticidade. Localizado no charmoso bairro da Barra, no condomínio Porto Privilege, fica a poucos minutos da praia, de restaurantes e do icônico Farol da Barra. Sala de estar integrada à cozinha no piso inferior, com escada para o quarto no mezanino, decoração leve e varanda com vista para a cidade e o mar. O prédio conta com piscina na cobertura com vista panorâmica e mercado 24 horas.",
    imagens: IMG.apto1,
    comodidades: ["Wi-Fi de alta velocidade", "Ar-condicionado", "Cozinha equipada", "Smart TV", "2 banheiros", "Varanda com vista para o mar", "Piscina na cobertura do prédio", "Mercado 24 horas no condomínio"],
    regras: ["Não é permitido fumar no interior do imóvel", "Respeitar o horário de silêncio a partir das 22h", "Animais de estimação mediante consulta prévia"],
  },
  {
    id: 2,
    nome: "Apartamento Portinari",
    regiao: "Barra, Salvador",
    regiaoFiltro: "barra",
    enderecoMapa: "Alameda Antunes, 51 - Barra, Salvador - BA",
    quartos: 3,
    banheiros: 2,
    descricaoCurta: "Apartamento amplo de 185 m² com 3 quartos, na Alameda Antunes, a poucos passos do Porto da Barra.",
    descricao:
      "Apartamento espaçoso de 185 m², ideal para famílias e grupos. São 3 quartos, sala de estar, sala de jantar, cozinha completa com geladeira e cafeteira e 2 banheiros com chuveiro. Localizado na Alameda Antunes, em uma das melhores localizações da Barra, próximo ao Porto da Barra, com padaria, farmácia e banco na mesma rua.",
    imagens: IMG.apto2,
    comodidades: ["Wi-Fi gratuito", "Ar-condicionado", "Cozinha completa", "Sala de estar", "Sala de jantar", "2 banheiros com chuveiro"],
  },
  {
    id: 3,
    tipo: "Resort",
    nome: "Resorts",
    regiao: "Litoral Norte, Bahia",
    regiaoFiltro: "resorts",
    descricaoCurta: "Resorts à beira-mar no Litoral Norte da Bahia.",
    descricao:
      "Uma opção de resort para quem quer descansar no Litoral Norte da Bahia, com praia, natureza e estrutura completa de lazer. Consulte nossa equipe para saber como incluir o resort no seu roteiro por Salvador e pela Bahia.",
    imagens: IMG.resort,
    comodidades: ["Hospedagem e reservas no resort", "Transporte até o resort", "Orientação para planejar sua estadia", "Sugestão de roteiro combinado com Salvador"],
  },
];

/* ---------------------------------------------------------
   4. DADOS DE DEMONSTRAÇÃO — EXPERIÊNCIAS E SERVIÇOS
   --------------------------------------------------------- */
const experiencias = [
  {
    id: 1,
    nome: "City Tour Salvador: História, Cultura e Encantos da Bahia",
    categoria: "Cultura e história",
    categoriaFiltro: "cultura",
    descricaoCurta: "Descubra os principais cartões-postais de Salvador em um passeio que reúne história, cultura, fé e belas paisagens.",
    descricao: "Descubra os principais cartões-postais de Salvador em um passeio que reúne história, cultura, fé e belas paisagens. Conheça o Farol da Barra, o Rio Vermelho, a Igreja do Bonfim, o Pelourinho, o Elevador Lacerda e o Mercado Modelo.",
    imagens: IMG.exp1,
  },
  {
    id: 2,
    nome: "Ilha dos Frades: Um Paraíso na Baía de Todos os Santos",
    categoria: "Mar e natureza",
    categoriaFiltro: "mar",
    descricaoCurta: "Embarque pela Baía de Todos os Santos e descubra as belezas da Ilha dos Frades.",
    descricao: "Embarque em uma experiência inesquecível pela Baía de Todos os Santos e descubra as belezas da Ilha dos Frades. Aproveite a natureza preservada, as águas cristalinas e a paradisíaca Praia da Ponta de Nossa Senhora de Guadalupe.",
    imagens: IMG.exp2,
  },
  {
    id: 3,
    nome: "Litoral Norte: Praia do Forte e Guarajuba",
    categoria: "Mar e natureza",
    categoriaFiltro: "mar",
    descricaoCurta: "Um dia no litoral norte da Bahia, com o charme da Praia do Forte e as águas mornas de Guarajuba.",
    descricao: "Explore o litoral norte da Bahia em um roteiro que combina o charme da Praia do Forte com as águas mornas de Guarajuba. Um dia perfeito para conhecer a região, aproveitar a natureza e relaxar à beira-mar.",
    imagens: IMG.exp3,
  },
  {
    id: 4,
    nome: "Noite Baiana: Jantar e Show Folclórico",
    categoria: "Cultura e história",
    categoriaFiltro: "cultura",
    descricaoCurta: "Uma noite de cultura e tradição baiana, com jantar e espetáculo folclórico.",
    descricao: "Viva uma noite especial de cultura e tradição baiana, com jantar e um espetáculo que celebra a música, a dança e a ancestralidade da Bahia. Encante-se com apresentações de Capoeira, Maculelê, Puxada de Rede e Samba de Roda.",
    imagens: IMG.exp4,
  },
  {
    id: 5,
    nome: "Canoa Havaiana: Salvador Vista do Mar",
    categoria: "Mar e natureza",
    categoriaFiltro: "mar",
    descricaoCurta: "Uma remada de Canoa Havaiana pela Baía de Todos os Santos, com vista para os cartões-postais da cidade.",
    descricao: "Experimente Salvador de um novo ângulo em uma remada de Canoa Havaiana pela Baía de Todos os Santos. Uma atividade que combina natureza, bem-estar, aventura e belas paisagens, com vista para alguns dos principais cartões-postais da cidade.",
    imagens: IMG.exp5,
  },
  {
    id: 6,
    nome: "Rio Vermelho: Jorge Amado, Iemanjá e Sabores da Bahia",
    categoria: "Cultura e história",
    categoriaFiltro: "cultura",
    descricaoCurta: "Uma tarde de cultura, história e gastronomia no Rio Vermelho, com Casa de Iemanjá e acarajé.",
    descricao: "Conheça a essência do Rio Vermelho em uma tarde dedicada à cultura, à história e à gastronomia baiana. Visite a Casa do Rio Vermelho, conheça a Casa de Iemanjá e finalize a experiência saboreando um tradicional acarajé no Largo da Mariquita.",
    imagens: IMG.exp6,
  },
];

/* ---------------------------------------------------------
   5. INTEGRAÇÃO COM WHATSAPP
   --------------------------------------------------------- */
function abrirWhatsApp(mensagem) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank", "noopener");
}

function mensagemApartamento(apto) {
  if (apto.tipo === "Resort") return `Olá! Tenho interesse na opção de ${apto.nome} no Litoral Norte da Bahia. Gostaria de saber a disponibilidade e as condições de reserva.`;
  return `Olá! Tenho interesse no apartamento ${apto.nome}, em ${apto.regiao}. Gostaria de saber a disponibilidade, valores e condições de reserva.`;
}

function mensagemExperiencia(exp) {
  return `Olá! Gostaria de informações sobre a experiência ${exp.nome}, em Salvador. Poderiam me informar disponibilidade, valores e detalhes?`;
}

function mensagemServico(nomeServico) {
  return `Olá! Gostaria de informações sobre o serviço ${nomeServico}.`;
}

/* ---------------------------------------------------------
   6. FUNÇÕES DE UI COMPARTILHADAS
   --------------------------------------------------------- */

/* Botão flutuante do WhatsApp — injetado em todas as páginas */
function criarBotaoFlutuante() {
  const container = document.createElement("div");
  container.innerHTML = `
    <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de mais informações sobre hospedagem e experiências em Salvador.")}"
       target="_blank" rel="noopener"
       class="whatsapp-flutuante"
       aria-label="Fale conosco pelo WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.44 1.73 6.37L3.2 28.8l6.58-1.7a12.74 12.74 0 0 0 6.22 1.6h.01c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.7-12.81-12.7zm0 23.24h-.01a10.4 10.4 0 0 1-5.3-1.45l-.38-.22-3.9 1.01 1.04-3.8-.25-.39a10.42 10.42 0 0 1-1.6-5.59c0-5.76 4.69-10.44 10.45-10.44 2.79 0 5.41 1.09 7.39 3.06a10.36 10.36 0 0 1 3.06 7.38c0 5.76-4.69 10.44-10.5 10.44zm5.73-7.82c-.31-.16-1.85-.91-2.14-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-1 1.23-.18.21-.37.23-.68.08-.31-.16-1.32-.49-2.51-1.56-.93-.83-1.55-1.85-1.74-2.16-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.19.21-.31.31-.52.1-.21.05-.39-.02-.55-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.6c-.21 0-.55.08-.83.39-.29.31-1.09 1.07-1.09 2.6s1.12 3.02 1.27 3.23c.16.21 2.2 3.37 5.34 4.72.75.32 1.33.51 1.78.66.75.24 1.43.2 1.97.13.6-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.07-.13-.28-.21-.59-.36z"/>
      </svg>
    </a>
  `;
  document.body.appendChild(container.firstElementChild);
}

/* Menu mobile hambúrguer */
function inicializarMenuMobile() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-principal");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const aberto = nav.classList.toggle("nav-aberta");
    toggle.classList.toggle("menu-toggle--ativo", aberto);
    toggle.setAttribute("aria-expanded", aberto ? "true" : "false");
    document.body.classList.toggle("no-scroll", aberto);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-aberta");
      toggle.classList.remove("menu-toggle--ativo");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    });
  });
}

/* Header com efeito ao rolar */
function inicializarHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;
  const aplicarClasse = () => {
    header.classList.toggle("header--rolado", window.scrollY > 12);
  };
  aplicarClasse();
  window.addEventListener("scroll", aplicarClasse, { passive: true });
}

/* Scroll suave para links internos (#ancora) */
function inicializarScrollSuave() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id.length < 2) return;
      const alvo = document.querySelector(id);
      if (alvo) {
        e.preventDefault();
        alvo.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* Ano automático no footer */
function inicializarAnoFooter() {
  document.querySelectorAll(".ano-atual").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

/* Preenche marca (nome, whatsapp, email, instagram) em elementos com data-attrs */
function inicializarDadosMarca() {
  document.querySelectorAll("[data-marca-nome]").forEach((el) => (el.textContent = SITE_CONFIG.nomeMarca));
  document.querySelectorAll("[data-marca-email]").forEach((el) => {
    el.textContent = SITE_CONFIG.email;
    if (el.tagName === "A") el.href = `mailto:${SITE_CONFIG.email}`;
  });
  document.querySelectorAll("[data-marca-instagram]").forEach((el) => {
    el.textContent = SITE_CONFIG.instagramHandle;
    if (el.tagName === "A") el.href = SITE_CONFIG.instagram;
  });
  document.querySelectorAll("[data-marca-whatsapp]").forEach((el) => (el.href = `https://wa.me/${WHATSAPP_NUMBER}`));
  document.querySelectorAll("[data-marca-localizacao]").forEach((el) => (el.textContent = SITE_CONFIG.localizacao));
  document.querySelectorAll("[data-marca-horario]").forEach((el) => (el.textContent = SITE_CONFIG.horarioAtendimento));
}

/* Animações suaves ao aparecer na tela (fade/slide-up) */
function inicializarAnimacoesScroll() {
  const elementos = document.querySelectorAll(".anim-surgir");
  if (!("IntersectionObserver" in window) || elementos.length === 0) {
    elementos.forEach((el) => el.classList.add("anim-visivel"));
    return;
  }
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("anim-visivel");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  elementos.forEach((el) => observador.observe(el));
}

/* Marca o link ativo no menu conforme a página atual */
function inicializarLinkAtivo() {
  const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-principal a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === paginaAtual) {
      link.classList.add("nav-link--ativo");
      link.setAttribute("aria-current", "page");
    }
  });
}

/* ---------------------------------------------------------
   7. INICIALIZAÇÃO GLOBAL (executa em todas as páginas)
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  criarBotaoFlutuante();
  inicializarMenuMobile();
  inicializarHeaderScroll();
  inicializarScrollSuave();
  inicializarAnoFooter();
  inicializarDadosMarca();
  inicializarAnimacoesScroll();
  inicializarLinkAtivo();
});
