export type Locale = "en" | "pt"

export type TechnologyCategory = {
  category: string
  skills: string[]
}

export type EducationEntry = {
  title: string
  period: string
  school: string
  location: string
  details: string[]
}

export type ProjectItem = {
  title: string
  description: string
  link: string
  tags: string[]
  image?: string
}

export type ExperienceItem = {
  title: string
  period: string
  company: string
  summaryTitle?: string
  bullets: string[]
}

export type PortfolioContent = {
  meta: {
    title: string
    description: string
  }
  nav: {
    about: string
    projects: string
    experience: string
    skills: string
    education: string
    contact: string
  }
  controls: {
    localeLabel: string
    resume: string
    github: string
    linkedin: string
    email: string
    viewOnGithub: string
    sendEmail: string
    viewProfile: string
  }
  hero: {
    badge: string
    description: string
    location: string
    tags: string[]
  }
  about: {
    badge: string
    title: string
    description: string
    cards: Array<{
      title: string
      description: string
    }>
  }
  projects: {
    badge: string
    title: string
    description: string
    imageItems: ProjectItem[]
    textItems: ProjectItem[]
  }
  experience: {
    badge: string
    title: string
    description: string
    items: ExperienceItem[]
  }
  skills: {
    badge: string
    title: string
    description: string
    categories: TechnologyCategory[]
  }
  education: {
    badge: string
    title: string
    description: string
    entries: EducationEntry[]
  }
  contact: {
    badge: string
    title: string
    description: string
    linkedinDescription: string
  }
  footer: {
    rights: string
  }
}

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: {
    meta: {
      title: "Gabriel Marcelino | Software Engineer | Backend & AI Systems",
      description:
        "Portfolio of Gabriel Marcelino, a Phoenix-based software engineer focused on backend and applied AI systems including LangGraph agents, MCP servers, RAG workflows, and cloud infrastructure.",
    },
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    controls: {
      localeLabel: "Language",
      resume: "Resume",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      viewOnGithub: "View on GitHub",
      sendEmail: "Send Email",
      viewProfile: "View Profile",
    },
    hero: {
      badge: "Software Engineer | Backend & AI Systems",
      description:
        "Software engineer focused on backend and applied AI systems, from LangGraph agents and MCP servers to retrieval workflows and cloud infrastructure.",
      location: "Phoenix, AZ",
      tags: [
        "LLM platform engineering",
        "LangGraph agent workflows",
        "MCP servers + tool calling",
        "Cloud infrastructure",
      ],
    },
    about: {
      badge: "About Me",
      title: "Building Production AI Systems",
      description:
        "I build backend and applied AI systems that turn LLM ideas into practical products. At Mindex, I contribute across multiple internal AI initiatives, including chat and agent experiences used by 19,000+ employees. Before that, I prototyped RAG-based meeting agents at Animistic.AI and built an Azure-powered documentation assistant at Paychex.",
      cards: [
        {
          title: "Backend Engineering",
          description:
            "Python-first development across APIs, integrations, JavaScript services, and systems that need to stay reliable in production.",
        },
        {
          title: "Applied AI Systems",
          description:
            "LangGraph agents, MCP servers, tool-calling, model abstraction layers, RAG workflows, and Azure AI Services.",
        },
        {
          title: "Cloud & Delivery",
          description:
            "Terraform, AWS, Azure, CI/CD, Git, and Linux for shipping production-grade systems with clean developer workflows.",
        },
      ],
    },
    projects: {
      badge: "My Work",
      title: "Projects",
      description:
        "Selected work across AI applications, developer tooling, and full-stack product experiments.",
      imageItems: [
        {
          title: "Living Application Documentation",
          description:
            "An AI-powered documentation retrieval system developed for Paychex that provides conversational access to internal documentation. The solution streamlines information discovery and improves documentation accessibility for team members.",
          image: "/images/living-doc-app.png",
          link: "https://github.com/paychex/Living-Application-Documentation",
          tags: ["React", "Azure AI", "Python", "Agile"],
        },
        {
          title: "Simulador de Trading de Criptomoedas",
          description:
            "A comprehensive platform that allows users to simulate cryptocurrency trading without risking real money. Features include real-time price tracking, portfolio management, and performance analytics.",
          image: "/images/crypto.png",
          link: "https://github.com/gabrielrosendo/CRYPTO50",
          tags: ["Python", "Flask", "SQLite", "API Integration"],
        },
        {
          title: "Aplicativo de Controle de Calorias",
          description:
            "An iOS application for tracking daily calorie intake and macronutrients.",
          image: "/images/caltrack.png",
          link: "https://github.com/gabrielrosendo/CalTrack?tab=readme-ov-file",
          tags: ["Swift"],
        },
        {
          title: "Aplicação Web de Livraria",
          description:
            "A web application that allows users to search for books in a database and view their details.",
          image: "/images/bookstore.png",
          link: "https://github.com/gabrielrosendo/sortedTale",
          tags: ["MongoDB", "Python", "Flask", "CSS", "JavaScript"],
        },
      ],
      textItems: [
        {
          title: "Compilador de Linguagem Similar a C",
          description:
            "A compiler for a C-like programming language built from scratch. Implements lexical analysis, syntax analysis, semantic analysis, optimization, and MIPS code generation. Designed and tested grammar rules to support while loops, variable and array declarations, function calls, and conditional statements.",
          link: "https://github.com/gabrielrosendo/my-compiler",
          tags: ["C", "Yacc", "Lex", "Compiler Design", "AST"],
        },
        {
          title: "Gerador de Flashcards com IA",
          description:
            "An intelligent tool that extracts key information from PowerPoint presentations and automatically generates study flashcards using OpenAI's language model.",
          link: "https://github.com/gabrielrosendo/flashcard-generator",
          tags: ["Python", "OpenAI API", "ML"],
        },
      ],
    },
    experience: {
      badge: "Work History",
      title: "Professional Experience",
      description:
        "Roles and systems that shaped how I build backend, AI, and data-heavy products.",
      items: [
        {
          title: "Software Engineer | Backend & AI Systems",
          period: "June 2025 - Present",
          company: "Mindex | Rochester, NY (Remote)",
          bullets: [
            "Contribute across multiple internal AI initiatives at Mindex, including an LLM-powered chat and agent platform supporting 19,000+ employees.",
            "Architect stateful agent workflows in LangGraph for multi-step reasoning and tool execution.",
            "Design MCP servers, model abstraction layers, and Terraform-backed infrastructure for production-grade AI systems.",
          ],
        },
        {
          title: "AI Engineer - Contract",
          period: "May 2025 - June 2025",
          company: "Animistic.AI | Phoenix, AZ",
          bullets: [
            "Prototyped AI-powered digital workspace tools, including meeting agents that transcribe, summarize, and surface insights through a RAG-based retrieval system.",
            "Designed and validated multi-agent workflows to simulate AI knowledge workers and reduce manual information-gathering overhead.",
          ],
        },
        {
          title: "AI Intern (Capstone)",
          period: "August 2024 - April 2025",
          company: "Paychex | Phoenix, AZ",
          summaryTitle: "AI-Driven Documentation Retrieval System",
          bullets: [
            "Built an AI-powered documentation retrieval system with Azure AI Services and React, reducing document search time and improving knowledge accessibility.",
            "Worked in an Agile delivery environment and translated internal documentation needs into a usable AI assistant experience.",
          ],
        },
        {
          title: "Project Controls Coordinator",
          period: "August 2024 - March 2025",
          company: "BrandSafway | Tempe, AZ",
          bullets: [
            "Coordinated scaffolding projects at the Intel Ocotillo campus in Chandler, Arizona.",
          ],
        },
      ],
    },
    skills: {
      badge: "Expertise",
      title: "Technical Skills",
      description:
        "Core technologies I use across backend engineering, AI system design, and production delivery.",
      categories: [
        {
          category: "Programming Languages",
          skills: ["Python", "JavaScript", "Java", "C++"],
        },
        {
          category: "AI & LLM Systems",
          skills: [
            "LangGraph",
            "LLM Tool-Calling",
            "MCP Servers",
            "Model Abstraction Layers",
            "Azure AI Services",
            "TensorFlow",
            "RAG",
          ],
        },
        {
          category: "Frontend & Data",
          skills: ["React", "SQL", "MongoDB"],
        },
        {
          category: "Cloud & DevOps",
          skills: [
            "AWS",
            "Microsoft Azure",
            "Terraform",
            "CI/CD",
            "Git",
            "Linux",
            "Jira",
          ],
        },
        {
          category: "Certifications",
          skills: ["AWS Certified Cloud Practitioner"],
        },
      ],
    },
    education: {
      badge: "Learning Journey",
      title: "Education",
      description: "My academic background and educational experiences.",
      entries: [
        {
          title:
            "Bachelor of Science: Computer Science with an Emphasis in Big Data Analytics",
          period: "2021 - 2025",
          school: "Grand Canyon University",
          location: "Phoenix, AZ",
          details: [
            "Cumulative GPA: 3.70",
            "Honors and Awards: Provost Scholarship, Dean's List",
          ],
        },
        {
          title: "Rotary Youth Exchange",
          period: "2019 - 2020",
          school: "Youth Senior High School (青年高中)",
          location: "Taichung, Taiwan",
          details: [
            "Lived in Taiwan for a year, attended classes in a Taiwanese high school, and studied Chinese.",
            "Presented about cultural differences at schools and community events.",
          ],
        },
      ],
    },
    contact: {
      badge: "Get In Touch",
      title: "Let's Connect",
      description:
        "Open to software engineering opportunities focused on backend platforms, applied AI systems, and intelligent internal tools.",
      linkedinDescription: "Connect with me on LinkedIn",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  pt: {
    meta: {
      title: "Gabriel Marcelino | Engenheiro de Software | Backend e Sistemas de IA",
      description:
        "Portfólio de Gabriel Marcelino, engenheiro de software com formação e experiência profissional nos Estados Unidos, atuando em backend, sistemas de IA aplicada e infraestrutura em nuvem.",
    },
    nav: {
      about: "Sobre",
      projects: "Projetos",
      experience: "Experiência",
      skills: "Habilidades",
      education: "Formação",
      contact: "Contato",
    },
    controls: {
      localeLabel: "Idioma",
      resume: "Currículo",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      viewOnGithub: "Ver no GitHub",
      sendEmail: "Enviar email",
      viewProfile: "Ver perfil",
    },
    hero: {
      badge: "Engenheiro de Software | Backend e Sistemas de IA",
      description:
        "Engenheiro de software com formação e experiência profissional nos Estados Unidos, atuando em backend, IA aplicada e infraestrutura em nuvem no mercado de tecnologia mais competitivo do mundo.",
      location: "Phoenix, AZ",
      tags: [
        "Experiência profissional nos EUA",
        "Formação em Computer Science nos EUA",
        "Plataformas e produtos de IA",
        "LangGraph + MCP",
      ],
    },
    about: {
      badge: "Sobre Mim",
      title: "Formação e Experiência no Mercado Tech dos EUA",
      description:
        "Construí minha formação e experiência profissional nos Estados Unidos, estudando Computer Science em Phoenix e trabalhando com IA aplicada em ambientes enterprise e startup no mercado de tecnologia mais competitivo do mundo. Na Mindex, atuo em múltiplas iniciativas internas de IA, incluindo plataformas de chat e agentes em escala, além de projetos ligados a tooling, automação e infraestrutura.",
      cards: [
        {
          title: "Engenharia de Backend",
          description:
            "Desenvolvimento com foco em Python para APIs, integrações, serviços em JavaScript e sistemas que precisam se manter confiáveis em produção.",
        },
        {
          title: "Sistemas de IA Aplicada",
          description:
            "Agentes com LangGraph, servidores MCP, tool calling, camadas de abstração de modelos, workflows com RAG e Azure AI Services.",
        },
        {
          title: "Cloud e Entrega",
          description:
            "Terraform, AWS, Azure, CI/CD, Git e Linux para entregar sistemas de produção com fluxos de desenvolvimento consistentes.",
        },
      ],
    },
    projects: {
      badge: "Meu Trabalho",
      title: "Projetos",
      description:
        "Trabalhos selecionados em aplicações com IA, ferramentas para desenvolvedores e experimentos de produto full-stack.",
      imageItems: [
        {
          title: "Living Application Documentation",
          description:
            "Sistema de recuperação de documentação com IA desenvolvido para a Paychex, oferecendo acesso conversacional à documentação interna. A solução agiliza a descoberta de informações e melhora a acessibilidade do conhecimento para a equipe.",
          image: "/images/living-doc-app.png",
          link: "https://github.com/paychex/Living-Application-Documentation",
          tags: ["React", "Azure AI", "Python", "Agile"],
        },
        {
          title: "Cryptocurrency Trading Simulator",
          description:
            "Plataforma completa que permite simular operações com criptomoedas sem arriscar dinheiro real. Inclui acompanhamento de preços em tempo real, gestão de portfólio e análise de desempenho.",
          image: "/images/crypto.png",
          link: "https://github.com/gabrielrosendo/CRYPTO50",
          tags: ["Python", "Flask", "SQLite", "Integração com API"],
        },
        {
          title: "Calorie Tracking App",
          description:
            "Aplicativo iOS para acompanhar ingestão diária de calorias e macronutrientes.",
          image: "/images/caltrack.png",
          link: "https://github.com/gabrielrosendo/CalTrack?tab=readme-ov-file",
          tags: ["Swift"],
        },
        {
          title: "Bookstore Web Application",
          description:
            "Aplicação web que permite aos usuários buscar livros em um banco de dados e visualizar seus detalhes.",
          image: "/images/bookstore.png",
          link: "https://github.com/gabrielrosendo/sortedTale",
          tags: ["MongoDB", "Python", "Flask", "CSS", "JavaScript"],
        },
      ],
      textItems: [
        {
          title: "C-Like Language Compiler",
          description:
            "Compilador para uma linguagem semelhante a C construído do zero. Implementa análise léxica, sintática e semântica, otimização e geração de código MIPS. Também inclui regras de gramática projetadas e testadas para suportar loops while, declarações de variáveis e arrays, chamadas de função e condicionais.",
          link: "https://github.com/gabrielrosendo/my-compiler",
          tags: ["C", "Yacc", "Lex", "Compiladores", "AST"],
        },
        {
          title: "AI-Powered Flashcard Generator",
          description:
            "Ferramenta inteligente que extrai informações-chave de apresentações em PowerPoint e gera flashcards de estudo automaticamente usando o modelo de linguagem da OpenAI.",
          link: "https://github.com/gabrielrosendo/flashcard-generator",
          tags: ["Python", "OpenAI API", "ML"],
        },
      ],
    },
    experience: {
      badge: "Histórico Profissional",
      title: "Experiência Profissional",
      description:
        "Funções e sistemas que moldaram a forma como construo produtos de backend, IA e alto volume de dados.",
      items: [
        {
          title: "Engenheiro de Software | Backend e Sistemas de IA",
          period: "Junho de 2025 - Presente",
          company: "Mindex | Rochester, NY (Remoto)",
          bullets: [
            "Atuo em múltiplas iniciativas internas de IA na Mindex, incluindo uma plataforma de chat e agentes com LLM usada por mais de 19 mil colaboradores.",
            "Arquitetuei workflows de agentes com estado em LangGraph para raciocínio em múltiplas etapas e execução de ferramentas.",
            "Projeto servidores MCP, camadas de abstração de modelos e infraestrutura com Terraform para sistemas de IA prontos para produção.",
          ],
        },
        {
          title: "Engenheiro de IA - Contrato",
          period: "Maio de 2025 - Junho de 2025",
          company: "Animistic.AI | Phoenix, AZ",
          bullets: [
            "Criei protótipos de ferramentas de workspace com IA, incluindo agentes de reunião que transcrevem, resumem e destacam insights por meio de um sistema de retrieval com RAG.",
            "Desenhei e validei workflows multiagente para simular trabalhadores de conhecimento com IA e reduzir esforço manual de coleta de informação.",
          ],
        },
        {
          title: "Estagiário de IA (Capstone)",
          period: "Agosto de 2024 - Abril de 2025",
          company: "Paychex | Phoenix, AZ",
          summaryTitle: "Sistema de Recuperação de Documentação com IA",
          bullets: [
            "Desenvolvi um sistema de recuperação de documentação com IA usando Azure AI Services e React, reduzindo o tempo de busca por documentos e melhorando o acesso ao conhecimento.",
            "Atuei em um ambiente de entrega ágil e transformei necessidades de documentação interna em uma experiência útil de assistente com IA.",
          ],
        },
        {
          title: "Coordenador de Controle de Projetos",
          period: "Agosto de 2024 - Março de 2025",
          company: "BrandSafway | Tempe, AZ",
          bullets: [
            "Coordenei projetos de andaimes no campus Intel Ocotillo, em Chandler, Arizona.",
          ],
        },
      ],
    },
    skills: {
      badge: "Especialidades",
      title: "Habilidades Técnicas",
      description:
        "Principais tecnologias que utilizo em engenharia de backend, design de sistemas de IA e entrega em produção.",
      categories: [
        {
          category: "Linguagens de Programação",
          skills: ["Python", "JavaScript", "Java", "C++"],
        },
        {
          category: "Sistemas de IA e LLMs",
          skills: [
            "LangGraph",
            "Tool Calling com LLMs",
            "Servidores MCP",
            "Camadas de Abstração de Modelos",
            "Azure AI Services",
            "TensorFlow",
            "RAG",
          ],
        },
        {
          category: "Frontend e Dados",
          skills: ["React", "SQL", "MongoDB"],
        },
        {
          category: "Cloud e DevOps",
          skills: [
            "AWS",
            "Microsoft Azure",
            "Terraform",
            "CI/CD",
            "Git",
            "Linux",
            "Jira",
          ],
        },
        {
          category: "Certificações",
          skills: ["AWS Certified Cloud Practitioner"],
        },
      ],
    },
    education: {
      badge: "Formação",
      title: "Educação",
      description:
        "Minha formação acadêmica foi construída nos Estados Unidos, com base sólida em Computer Science e Big Data Analytics em Phoenix, Arizona.",
      entries: [
        {
          title:
            "Bacharelado em Ciência da Computação com Ênfase em Big Data Analytics",
          period: "2021 - 2025",
          school: "Grand Canyon University",
          location: "Phoenix, AZ",
          details: [
            "Formação universitária concluída nos Estados Unidos, em contato direto com o mercado de tecnologia americano.",
            "GPA acumulado: 3.70",
            "Honras e prêmios: Provost Scholarship, Dean's List",
          ],
        },
        {
          title: "Intercâmbio Rotary Youth Exchange",
          period: "2019 - 2020",
          school: "Youth Senior High School (青年高中)",
          location: "Taichung, Taiwan",
          details: [
            "Morei em Taiwan por um ano, frequentei aulas em uma escola taiwanesa e estudei chinês.",
            "Apresentei diferenças culturais em escolas e eventos comunitários.",
          ],
        },
      ],
    },
    contact: {
      badge: "Entre em Contato",
      title: "Vamos nos Conectar",
      description:
        "Aberto a oportunidades em engenharia de software com foco em plataformas de backend, sistemas de IA aplicada e ferramentas internas inteligentes.",
      linkedinDescription: "Conecte-se comigo no LinkedIn",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
}
