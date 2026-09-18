/* =========================================================
   BAHIA STAY — script.js
   Configurações centrais, dados de demonstração e funções
   compartilhadas por todas as páginas do site.
   ========================================================= */

/* ---------------------------------------------------------
   1. CONFIGURAÇÃO CENTRAL — altere aqui os dados da marca
   --------------------------------------------------------- */
const SITE_CONFIG = {
  nomeMarca: "Bahia Stay",
  whatsappNumero: "5571999999999", // <-- ALTERE: código do país + DDD + número, sem espaços/símbolos
  email: "contato@bahiastay.com.br", // <-- ALTERE: e-mail de contato
  instagram: "https://instagram.com/bahiastay", // <-- ALTERE: link do Instagram
  instagramHandle: "@bahiastay",
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
  heroHome: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Salvador-Brazil-Farol-da-Barra-sunset.jpg/1920px-Salvador-Brazil-Farol-da-Barra-sunset.jpg",
  institucional: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Largo_do_Pelourinho_Salvador_2019-9754_%28cropped%29.jpg/1600px-Largo_do_Pelourinho_Salvador_2019-9754_%28cropped%29.jpg",
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
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  ],

  exp1: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Pelourinho_Salvador_Bahia_2018-0601.jpg/1280px-Pelourinho_Salvador_Bahia_2018-0601.jpg"],
  exp2: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Largo_do_Pelourinho%2C_Salvador_20150719-DSC05452.JPG/1280px-Largo_do_Pelourinho%2C_Salvador_20150719-DSC05452.JPG"],
  exp3: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Barco_na_Baia_de_Todos_os_Santos.jpg/1280px-Barco_na_Baia_de_Todos_os_Santos.jpg"],
  exp4: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Salvador-Brazil-Farol-da-Barra-sunset.jpg/1920px-Salvador-Brazil-Farol-da-Barra-sunset.jpg"],
  exp5: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/AKARA.jpg/1280px-AKARA.jpg"],
  exp6: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Praia_do_Porto_da_Barra_%28Salvador%29.jpg/1280px-Praia_do_Porto_da_Barra_%28Salvador%29.jpg"],
  exp7: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Fachada_Aeroporto_de_Salvador2.jpg/1280px-Fachada_Aeroporto_de_Salvador2.jpg"],
  exp9: ["https://upload.wikimedia.org/wikipedia/commons/9/97/Arembepe_Praia.jpg"],
  exp8: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Elevador_Lacerda_Salvador_Bahia_2019-0359.jpg/1280px-Elevador_Lacerda_Salvador_Bahia_2019-0359.jpg"],
};

/* ---------------------------------------------------------
   3. DADOS DE DEMONSTRAÇÃO — APARTAMENTOS
   Edite, adicione ou remova itens deste array conforme
   necessário. Conteúdo apenas ilustrativo.
   --------------------------------------------------------- */
const apartamentos = [
  {
    id: 1,
    nome: "Apartamento Brisa da Barra",
    regiao: "Barra, Salvador",
    regiaoFiltro: "barra",
    enderecoMapa: "Alameda Antunes, 56 - Barra, Salvador - BA, 40140-020",
    hospedes: 4,
    quartos: 1,
    camas: 2,
    banheiros: 2,
    descricaoCurta: "Duplex aconchegante no Porto Privilege, com piscina na cobertura e vista para o mar.",
    descricao:
      "Um apartamento duplex confortável e moderno para aproveitar Salvador com praticidade. Localizado no charmoso bairro da Barra, no condomínio Porto Privilege, fica a poucos minutos da praia, de restaurantes e do icônico Farol da Barra. Sala de estar integrada à cozinha no piso inferior, com escada para o quarto no mezanino, decoração leve e varanda com vista para a cidade e o mar. O prédio conta com piscina na cobertura com vista panorâmica e mercado 24 horas.",
    imagens: IMG.apto1,
    comodidades: ["Wi-Fi de alta velocidade", "Ar-condicionado", "Cozinha equipada", "Smart TV", "2 banheiros", "Varanda com vista para o mar", "Piscina na cobertura do prédio", "Mercado 24 horas no condomínio"],
    regras: ["Não é permitido fumar no interior do imóvel", "Respeitar o horário de silêncio a partir das 22h", "Animais de estimação mediante consulta prévia"],
  },
  {
    id: 2,
    nome: "Apartamento Horizonte da Barra",
    regiao: "Barra, Salvador",
    regiaoFiltro: "barra",
    enderecoMapa: "Alameda Antunes, 51 - Barra, Salvador - BA",
    hospedes: 2,
    quartos: 1,
    camas: 1,
    banheiros: 1,
    descricaoCurta: "Apartamento aconchegante na Alameda Antunes, no coração da Barra.",
    descricao:
      "Um apartamento pensado para quem deseja viver o charme da Barra com praticidade. Localizado na Alameda Antunes, fica a poucos minutos a pé da praia, de restaurantes e do icônico Farol da Barra. Decoração sofisticada, cama confortável e acabamentos que remetem à cultura baiana.",
    imagens: IMG.apto2,
    comodidades: ["Wi-Fi de alta velocidade", "Ar-condicionado", "Frigobar", "Smart TV", "Roupa de cama premium", "Cofre"],
    regras: ["Não é permitido fumar no interior do imóvel", "Check-in mediante combinação prévia", "Ambiente voltado para casais e adultos"],
  },
];

/* ---------------------------------------------------------
   4. DADOS DE DEMONSTRAÇÃO — EXPERIÊNCIAS E SERVIÇOS
   --------------------------------------------------------- */
const experiencias = [
  {
    id: 1,
    nome: "Salvador Histórica",
    categoria: "Cultura e história",
    categoriaFiltro: "cultura",
    duracao: "Aproximadamente 4 horas",
    localSaida: "A combinar com o hóspede",
    descricaoCurta: "Uma imersão na história, arquitetura e cultura da cidade mais antiga do Brasil.",
    descricao:
      "Uma experiência para conhecer a história, a arquitetura e a cultura de Salvador, a primeira capital do Brasil. O roteiro passa por igrejas centenárias, casarios coloridos e praças históricas, revelando camadas de memória afro-brasileira, portuguesa e indígena que formam a identidade da cidade.",
    imagens: IMG.exp1,
    inclui: ["Roteiro planejado por região histórica", "Indicações de pontos culturais relevantes", "Acompanhamento de guia, quando contratado"],
    naoInclui: ["Alimentação", "Ingressos para museus e atrações", "Despesas pessoais"],
  },
  {
    id: 2,
    nome: "Pelourinho e Centro Histórico",
    categoria: "Cultura e história",
    categoriaFiltro: "cultura",
    duracao: "Aproximadamente 3 horas",
    localSaida: "Largo do Pelourinho",
    descricaoCurta: "Ladeiras coloridas, música e arte no coração histórico de Salvador.",
    descricao:
      "Um passeio pelo Pelourinho, Patrimônio Histórico Mundial da UNESCO, com suas ladeiras de pedra, casarios coloniais coloridos e a efervescência cultural que mistura música, dança, artesanato e gastronomia baiana em cada esquina.",
    imagens: IMG.exp2,
    inclui: ["Roteiro pelas principais ladeiras e praças", "Sugestões de paradas culturais e artísticas"],
    naoInclui: ["Alimentação", "Ingressos e compras", "Transporte até o local de saída"],
  },
  {
    id: 3,
    nome: "Passeio de Barco pela Baía de Todos-os-Santos",
    categoria: "Mar e natureza",
    categoriaFiltro: "mar",
    duracao: "Dia inteiro (aproximadamente 8 horas)",
    localSaida: "Marina próxima ao Porto da Barra",
    descricaoCurta: "Ilhas, águas calmas e paisagens deslumbrantes na segunda maior baía do Brasil.",
    descricao:
      "Navegue pelas águas da Baía de Todos-os-Santos, conhecendo ilhas paradisíacas, praias de areia branca e paisagens que mostram a riqueza natural do litoral baiano. Uma experiência relaxante para quem busca contato com o mar e boas fotografias.",
    imagens: IMG.exp3,
    inclui: ["Roteiro pelas ilhas da baía", "Paradas para banho de mar, conforme o roteiro"],
    naoInclui: ["Alimentação e bebidas", "Equipamentos de mergulho", "Transporte até a marina"],
  },
  {
    id: 4,
    nome: "Pôr do Sol no Farol da Barra",
    categoria: "Mar e natureza",
    categoriaFiltro: "mar",
    duracao: "Aproximadamente 2 horas",
    localSaida: "Farol da Barra",
    descricaoCurta: "Um dos pores do sol mais celebrados do Brasil, à beira do Atlântico.",
    descricao:
      "Viva um dos momentos mais icônicos de Salvador: o pôr do sol visto do Farol da Barra, onde moradores e visitantes se reúnem para aplaudir o sol se pondo no horizonte do Atlântico, em um ambiente descontraído e cheio de música.",
    imagens: IMG.exp4,
    inclui: ["Indicação dos melhores pontos de observação", "Sugestões de bares e quiosques próximos"],
    naoInclui: ["Alimentação e bebidas", "Transporte até o local"],
  },
  {
    id: 5,
    nome: "Experiência de Culinária Baiana",
    categoria: "Gastronomia",
    categoriaFiltro: "gastronomia",
    duracao: "Aproximadamente 3 horas",
    localSaida: "A combinar com o hóspede",
    descricaoCurta: "Sabores autênticos da Bahia em uma jornada pelos temperos locais.",
    descricao:
      "Descubra os sabores marcantes da culinária baiana, com seus temperos, azeite de dendê, coco e frutos do mar. Uma experiência sensorial que conta a história da Bahia através da comida, em ambientes selecionados para representar o melhor da gastronomia local.",
    imagens: IMG.exp5,
    inclui: ["Roteiro gastronômico com paradas selecionadas", "Indicações de pratos típicos"],
    naoInclui: ["Alimentação e bebidas (custeadas à parte)", "Transporte entre os pontos"],
  },
  {
    id: 6,
    nome: "Roteiro pelas Praias de Salvador",
    categoria: "Mar e natureza",
    categoriaFiltro: "mar",
    duracao: "Dia inteiro",
    localSaida: "A combinar com o hóspede",
    descricaoCurta: "Da Barra a Itapuã, um roteiro pelas praias mais bonitas da cidade.",
    descricao:
      "Um roteiro dedicado a conhecer as diferentes praias de Salvador, do charme urbano do Porto da Barra à beleza natural de Itapuã, passando por outras enseadas ao longo da orla atlântica da cidade.",
    imagens: IMG.exp6,
    inclui: ["Roteiro entre praias selecionadas", "Sugestões de pontos para banho e descanso"],
    naoInclui: ["Alimentação e bebidas", "Transporte entre as praias"],
  },
  {
    id: 7,
    nome: "Transfer Aeroporto",
    categoria: "Serviços",
    categoriaFiltro: "servicos",
    duracao: "Conforme trajeto",
    localSaida: "Aeroporto Internacional de Salvador ou endereço de hospedagem",
    descricaoCurta: "Chegada e saída tranquilas, com transporte direto até o seu apartamento.",
    descricao:
      "Serviço de transfer entre o Aeroporto Internacional de Salvador e o seu apartamento, pensado para tornar sua chegada e partida mais tranquilas, sem preocupações com deslocamento em uma cidade nova.",
    imagens: IMG.exp7,
    inclui: ["Transporte direto ao endereço combinado", "Acompanhamento com bagagem"],
    naoInclui: ["Paradas adicionais não combinadas previamente"],
  },
  {
    id: 8,
    nome: "Passeio Personalizado",
    categoria: "Serviços",
    categoriaFiltro: "servicos",
    duracao: "A combinar",
    localSaida: "A combinar com o hóspede",
    descricaoCurta: "Um roteiro sob medida, de acordo com o que você deseja viver em Salvador.",
    descricao:
      "Para quem deseja um roteiro sob medida, montamos passeios personalizados de acordo com o tempo disponível, interesses e ritmo de viagem, unindo cultura, natureza e gastronomia da forma que fizer mais sentido para você.",
    imagens: IMG.exp8,
    inclui: ["Roteiro planejado conforme preferências informadas", "Flexibilidade de horários"],
    naoInclui: ["Alimentação e ingressos", "Transporte, salvo quando combinado"],
  },
  {
    id: 9,
    nome: "Resorts",
    categoria: "Resorts",
    categoriaFiltro: "resorts",
    duracao: "A combinar",
    localSaida: "A combinar com o hóspede",
    descricaoCurta: "Resorts à beira-mar no Litoral Norte da Bahia.",
    descricao:
      "Uma opção de resort para quem quer descansar no Litoral Norte da Bahia, com praia, natureza e estrutura completa de lazer. Consulte nossa equipe para saber como incluir o resort no seu roteiro por Salvador e pela Bahia.",
    imagens: IMG.exp9,
    inclui: ["Hospedagem e reservas no resort", "Transporte até o resort", "Orientação para planejar sua estadia", "Sugestão de roteiro combinado com Salvador"],
    naoInclui: ["Despesas pessoais"],
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
