// Textos del sitio en español.

const es = {
  meta: {
    title: "Juan Macias — QA Analyst",
    description: "QA Analyst especializado en automatización de pruebas, revisión de código y reportes de calidad con Allure y CI.",
  },

  ui: {
    skipLink: "Saltar al contenido",
    mainNav: "Principal",
    nav: {
      experiencia: "Experiencia",
      "sobre-mi": "Sobre mí",
      proyectos: "Proyectos",
      educacion: "Educación",
      contacto: "Contacto",
    },
    themeToLight: "Activar modo claro",
    themeToDark: "Activar modo oscuro",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    langSwitch: "View in English",
    newTab: "se abre en una pestaña nueva",
    downloadCv: "Descargar CV",
    contactCta: "Contacto",
    summary: "Resumen",
    skills: "Habilidades",
    projectsLead: "Casos de estudio: el problema, cómo lo resolví y qué se logró.",
    caseStudy: { problem: "Problema", solution: "Solución", howItWorks: "Cómo funciona", result: "Resultado" },
    technologies: "Tecnologías",
    demo: "Demo",
    code: "Código",
    tests: "Pruebas",
    of: "de",
    internalProject: "Proyecto interno, código privado",
    noPublicLinks: "Sin enlaces públicos por ahora",
    pipelineLabel: (n, titles) => `Flujo del pipeline en ${n} pasos: ${titles}.`,
    step: "Paso",
    contactLead: "Estoy buscando nuevas oportunidades como QA Analyst. Si mi perfil encaja con tu equipo, escríbeme y te respondo pronto.",
    form: {
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando…",
      ok: "¡Mensaje enviado! Te responderé pronto.",
      error: "No se pudo enviar el mensaje. Intenta de nuevo o escríbeme directamente por correo.",
      errors: {
        nameRequired: "Escribe tu nombre.",
        emailRequired: "Escribe tu correo.",
        emailInvalid: "Escribe un correo válido, por ejemplo nombre@empresa.com.",
        messageShort: "El mensaje debe tener al menos 10 caracteres.",
      },
    },
    directContact: "Contacto directo",
    directTitle: "O contáctame directamente",
    emailLabel: "Correo",
    linkedinValue: "Conectemos",
    githubValue: "Mira mi código",
    madeWith: "Hecho con React.",
  },

  hero: {
    availability: "Disponible para nuevas oportunidades",
    role: "QA Analyst · Test Automation",
    tagline: "Pruebas automatizadas, reportes claros y despliegues sin sorpresas.",
    studies: "Estudiante de Ingeniería en Desarrollo de Software.",
    workMode: "Remoto o híbrido",
  },

  summary: [
    { label: "Rol actual", value: "QA Analyst en Gencise.ai" },
    { label: "Enfoque", value: "QA automation, QA manual y apoyo a desarrollo" },
    { label: "Formación", value: "Ing. en Desarrollo de Software" },
    { label: "Idiomas", value: "Español nativo · Inglés B1" },
  ],

  experience: [
    {
      role: "QA Analyst",
      company: "Gencise.ai",
      period: "Mayo 2026 – Actualidad",
      stats: [
        "162 PRs integrados",
        "107 PRs revisados",
        "60 casos de prueba en Xray",
        "6 productos con pruebas automatizadas"
      ],
      groups: [
        {
          title: "QA Automation",
          items: [
            "Construí desde cero el reporte centralizado de pruebas automatizadas del equipo, con Allure y publicado en AWS como sitio estático.",
            "Desarrollé plugins propios para Allure: historial de corridas, vista general por producto, reporte de producción y resultados por prueba con captura y consola.",
            "Amplié la cobertura de pruebas automatizadas a 6 productos con Playwright y behave, incluidas suites de regresión por producto.",
            "Llevé las pruebas de humo (smoke) a producción y demo: se ejecutan automáticamente cada vez que una aplicación se despliega.",
            "Optimicé la corrida nocturna de ~119 a ~76 minutos (≈36% más rápida), manteniéndola dentro de su tiempo límite.",
            "Hice más confiable el pipeline de CI en Kubernetes: reintentos ante fallas de infraestructura, cuarentena de fallas conocidas y publicación de resultados aunque la ejecución se interrumpa.",
            "Automaticé la publicación de resultados en Xray y las notificaciones en Slack, que distinguen las fallas nuevas de las repetidas.",
            "Diseñé la clasificación automática de pruebas a partir de sus etiquetas, que organiza el reporte en 8 suites.",
            "Definí con el equipo un sistema de estados que distingue las fallas reales de la aplicación de las fallas ya conocidas."
          ]
        },
        {
          title: "QA manual y revisión de código",
          items: [
            "Revisé 107 pull requests del equipo, incluidos los de nuevos integrantes, detectando pruebas que daban falsos positivos antes de llegar a producción.",
            "Diseñé 60 casos de prueba en Xray, reporté bugs y verifiqué tickets en UAT."
          ]
        },
        {
          title: "Desarrollo",
          items: [
            "Corregí bugs en el frontend y el backend de las aplicaciones del equipo, como el ordenamiento de tablas con valores vacíos.",
            "Implementé reintentos automáticos y alertas de Slack en un flujo crítico, con cambios coordinados en 5 repositorios.",
            "Desarrollé un dashboard de adopción y analítica de uso, tanto en el backend como en el frontend."
          ]
        }
      ]
    }
  ],

  about: [
    "Soy QA Analyst enfocado en automatización de pruebas. Mi trabajo es encontrar lo que se escapa: pruebas que pasan cuando no deberían, reportes que no dicen dónde falló algo y evidencia que se pierde en el camino.",
    "Combino automatización con QA manual: diseño casos de prueba, reporto bugs y verifico en UAT. Además resuelvo tickets de desarrollo, así que entiendo cómo se construye lo que reviso.",
  ],

  skillGroups: [
    {
      title: "QA",
      skills: [
        "Playwright",
        "behave (BDD / Gherkin)",
        "Allure",
        "Xray (Jira)",
        "Pruebas manuales",
        "Smoke / Sanity / Regression",
        "Code review"
      ]
    },
    {
      title: "CI / Infraestructura",
      skills: [
        "GitHub Actions",
        "Docker",
        "Kubernetes",
        "Helm",
        "AWS S3",
        "Linux"
      ]
    },
    {
      title: "Desarrollo",
      skills: [
        "Python",
        "JavaScript",
        "SQL",
        "React",
        "REST APIs",
        "HTML / CSS",
        "Git"
      ]
    },
    {
      title: "Idiomas",
      skills: [
        "Español — Nativo",
        "Inglés — B1, en progreso hacia B2"
      ]
    }
  ],

  // Por id (ver projectMeta en profile.js). result puede ser texto o lista.
  projects: {
    "test-report": {
      title: "Plataforma de reportes de pruebas automatizadas",
      subtitle: "Diseñé y construí el reporte que el equipo usa a diario para dar seguimiento a la calidad de sus productos.",
      context: "Trabajo · QA",
      problem:
        "El equipo ejecutaba cientos de pruebas automatizadas al día en tres ambientes (staging, producción y demo), pero los resultados estaban dispersos. Saber qué había fallado, en qué ambiente y si se trataba de un error nuevo o de uno ya conocido requería revisar cada corrida por separado.",
      solution: {
        intro:
          "Desarrollé un reporte centralizado basado en Allure, publicado en AWS como sitio estático y actualizado automáticamente al terminar cada corrida. Sobre Allure construí plugins propios:",
        items: [
          "Vista general: el estado de cada producto y ambiente, con las suites con fallas en primer lugar.",
          "Historial de corridas: cada ejecución con sus resultados, la salida de consola y capturas de pantalla de las fallas.",
          "Reporte de producción: los resultados de cada despliegue, vinculados al despliegue que los originó.",
          "Resultados por prueba: escenarios agrupados por funcionalidad y enlazados a la corrida exacta donde fallaron.",
        ],
      },
      howItWorks: {
        steps: [
          { icon: "trigger", title: "Disparo", text: "GitHub Actions inicia la ejecución cada noche, en cada pull request y con cada despliegue." },
          { icon: "run", title: "Ejecución", text: "Las pruebas corren con Playwright en un contenedor Docker aislado dentro de Kubernetes." },
          { icon: "process", title: "Procesamiento", text: "Scripts en Python clasifican los resultados, generan el registro de la corrida y enmascaran datos sensibles." },
          { icon: "notify", title: "Notificación", text: "Los resultados se almacenan en S3, se notifican en Slack y se registran en Xray." },
          { icon: "publish", title: "Publicación", text: "Un segundo pipeline genera el reporte con Allure y lo publica como sitio estático." },
        ],
        paragraphs: [
          {
            lead: "Ejecución en el momento correcto",
            text: "Las pruebas se ejecutan automáticamente cada noche, en cada pull request y con cada despliegue a producción o demo, de modo que cada cambio se valida contra el ambiente que le corresponde. Cada ambiente tiene su propio control de concurrencia para que una ejecución nunca cancele a otra.",
          },
          {
            lead: "Entornos aislados y configurables",
            text: "Cada corrida se ejecuta en un pod de Kubernetes desplegado con Helm y configurado según su tipo: una suite reducida en la corrida nocturna, la suite completa los domingos y pruebas de humo en cada pull request. Las fallas causadas por la infraestructura se reintentan automáticamente.",
          },
          {
            lead: "Tolerancia a fallos",
            text: "Los pasos posteriores (clasificación, notificaciones y carga de resultados) no son bloqueantes: si alguno falla, el resultado de las pruebas no se altera. Al finalizar, el pipeline de pruebas activa la publicación del reporte de inmediato, con una ejecución programada diaria como respaldo.",
          },
          {
            lead: "Seguridad",
            text: "No se almacenan credenciales: el pod se autentica en AWS mediante la identidad de Kubernetes y el pipeline de publicación mediante OIDC. En producción y demo los datos de clientes se enmascaran, y las capturas se guardan como artefactos privados del CI con fecha de expiración.",
          },
        ],
      },
      result: [
        "Visibilidad inmediata: el equipo identifica qué falló, en qué ambiente y en qué corrida, sin revisar ejecución por ejecución.",
        "Validación automática en cada pull request y en cada despliegue a producción, no solo en la corrida nocturna.",
        "Distinción clara entre fallas reales de la aplicación y fallas ya conocidas, gracias a un sistema de estados definido con el equipo.",
        "Corrida nocturna optimizada de ~119 a ~76 minutos (≈36% más rápida).",
      ],
    },
    screenshots: {
      title: "Evidencia visual en las corridas nocturnas",
      subtitle: "Diagnostiqué por qué se perdían las capturas de pantalla y rediseñé cómo se generan.",
      context: "Trabajo · QA",
      problem:
        "Las corridas nocturnas terminaban sin capturas de pantalla. Cuando una prueba fallaba, el equipo solo contaba con el mensaje de error y tenía que reproducir el escenario para saber en qué paso y en qué pantalla había ocurrido.",
      solution: {
        intro: "Analicé el historial de ejecuciones y la configuración del pipeline, e identifiqué dos causas independientes:",
        items: [
          "Configuración: un cambio previo había desactivado las capturas en la corrida nocturna.",
          "Tiempo límite: algunas corridas alcanzaban el límite de 2 horas durante la carga de resultados y se interrumpían antes de subir la evidencia.",
        ],
        outro:
          "Evalué las alternativas con el equipo y adopté un esquema selectivo: captura automática en toda prueba fallida y, en las que pasan, solo cuando se solicita. Así se conserva la evidencia que importa y se mantiene acotado el volumen de archivos de cada corrida.",
      },
      result: {
        items: [
          "Cada prueba fallida queda documentada con una captura que muestra el estado exacto de la aplicación al momento del error.",
          "Diagnóstico más rápido: el equipo ubica dónde falló una prueba directamente desde el reporte, sin necesidad de reproducirla.",
          "En producción y demo, las capturas se guardan como artefactos privados con expiración para proteger los datos de clientes.",
        ],
        outro: "Siguiente paso: definir con el equipo la solución para las corridas que alcanzan el tiempo límite.",
      },
    },
    portfolio: {
      title: "Portafolio en React",
      subtitle: "Este sitio: diseñado, construido y probado por mí con el mismo criterio de calidad que aplico en el trabajo.",
      context: "Personal",
      problem: "Necesitaba presentar mi perfil de QA de forma clara para reclutadores de México y del extranjero, en un sitio rápido, accesible y fácil de mantener.",
      solution: {
        intro: "Lo construí con React y Vite, separando el contenido del diseño:",
        items: [
          "Versión completa en español e inglés, con el idioma del navegador como opción inicial.",
          "Modo claro y oscuro, recordado entre visitas y sin parpadeo al cargar.",
          "Accesibilidad: HTML semántico, foco visible, etiquetas en el formulario y respeto a la preferencia de reducir movimiento.",
          "Formulario de contacto con EmailJS, validación por campo y mensajes de estado.",
          "Pruebas end-to-end con Playwright en escritorio y móvil (formulario, descarga del CV, idiomas, tema y navegación), ejecutadas en GitHub Actions en cada pull request.",
        ],
      },
      result: [
        "Un sitio ligero, publicado en Vercel, que se ve bien en móvil, tablet y escritorio.",
        "Todo el contenido vive en archivos de datos: actualizarlo no requiere tocar los componentes.",
      ],
    },
  },

  education: [
    {
      title: "Ingeniería en Desarrollo de Software",
      school: "Universidad Ciudadana",
      period: "Egreso estimado 2027",
      note: null,
    },
    // Si tomas un curso o te preparas para una certificación de inglés, agrégalo así:
    // { title: "Inglés — preparación para B2", school: "[Institución]", period: "En curso", note: null },
  ],
}

export default es
