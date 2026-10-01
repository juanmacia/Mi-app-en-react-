// Site copy in English. Keep the same keys as content.es.js.

const en = {
  meta: {
    title: "Juan Macias — QA Analyst",
    description: "QA Analyst specializing in test automation, code review and quality reporting with Allure and CI.",
  },

  ui: {
    skipLink: "Skip to content",
    mainNav: "Main",
    nav: {
      experiencia: "Experience",
      "sobre-mi": "About",
      proyectos: "Projects",
      educacion: "Education",
      contacto: "Contact",
    },
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langSwitch: "Ver en español",
    newTab: "opens in a new tab",
    downloadCv: "Download CV",
    contactCta: "Contact",
    summary: "Summary",
    skills: "Skills",
    projectsLead: "Case studies: the problem, how I solved it and what it achieved.",
    caseStudy: { problem: "Problem", solution: "Solution", howItWorks: "How it works", result: "Result" },
    technologies: "Technologies",
    demo: "Demo",
    code: "Code",
    tests: "Tests",
    of: "for",
    internalProject: "Internal project, private code",
    noPublicLinks: "No public links yet",
    pipelineLabel: (n, titles) => `Pipeline flow in ${n} steps: ${titles}.`,
    step: "Step",
    contactLead: "I'm looking for new opportunities as a QA Analyst. If my profile fits your team, write to me and I'll get back to you soon.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending…",
      ok: "Message sent! I'll get back to you soon.",
      error: "The message couldn't be sent. Please try again or email me directly.",
      errors: {
        nameRequired: "Please enter your name.",
        emailRequired: "Please enter your email.",
        emailInvalid: "Please enter a valid email, e.g. name@company.com.",
        messageShort: "Your message must be at least 10 characters long.",
      },
    },
    directContact: "Direct contact",
    directTitle: "Or reach me directly",
    emailLabel: "Email",
    linkedinValue: "Let's connect",
    githubValue: "See my code",
    madeWith: "Built with React.",
  },

  hero: {
    availability: "Open to new opportunities",
    role: "QA Analyst · Test Automation",
    tagline: "Automated tests, clear reports and deployments without surprises.",
    studies: "Software Development Engineering student.",
    workMode: "Remote or hybrid",
  },

  summary: [
    { label: "Current role", value: "QA Analyst at Gencise.ai" },
    { label: "Focus", value: "QA automation, manual QA and dev support" },
    { label: "Education", value: "Software Development Engineering" },
    { label: "Languages", value: "Native Spanish · English B1" },
  ],

  experience: [
    {
      role: "QA Analyst",
      company: "Gencise.ai",
      period: "May 2026 – Present",
      stats: [
        "162 PRs merged",
        "107 PRs reviewed",
        "60 test cases in Xray",
        "6 products with automated tests"
      ],
      groups: [
        {
          title: "QA Automation",
          items: [
            "Built the team's centralized automated test report from scratch, with Allure, published on AWS as a static site.",
            "Developed custom Allure plugins: run history, overview by product, production report and per-test results with screenshot and console output.",
            "Expanded automated test coverage to 6 products with Playwright and behave, including per-product regression suites.",
            "Brought smoke tests to production and demo: they run automatically every time an application is deployed.",
            "Optimized the nightly run from ~119 to ~76 minutes (≈36% faster), keeping it within its time limit.",
            "Made the Kubernetes CI pipeline more reliable: retries on infrastructure failures, quarantine for known failures and result publishing even when a run is interrupted.",
            "Automated result publishing to Xray and Slack notifications that tell new failures apart from repeated ones.",
            "Designed automatic test classification based on their tags, which organizes the report into 8 suites.",
            "Defined, together with the team, a status system that separates real application failures from already-known failures."
          ]
        },
        {
          title: "Manual QA and code review",
          items: [
            "Reviewed 107 team pull requests, including those from new team members, catching tests that produced false positives before they reached production.",
            "Designed 60 test cases in Xray, reported bugs and verified tickets in UAT."
          ]
        },
        {
          title: "Development",
          items: [
            "Fixed frontend and backend bugs in the team's applications, such as table sorting with empty values.",
            "Implemented automatic retries and Slack alerts in a critical workflow, with coordinated changes across 5 repositories.",
            "Developed an adoption and usage analytics dashboard, on both the backend and the frontend."
          ]
        }
      ]
    }
  ],

  about: [
    "I'm a QA Analyst focused on test automation. My job is to find what slips through: tests that pass when they shouldn't, reports that don't say where something failed, evidence that gets lost along the way.",
    "I combine automation with manual QA: I design test cases, report bugs and verify in UAT. I also resolve development tickets, so I understand how the things I review are built.",
  ],

  skillGroups: [
    {
      title: "QA",
      skills: [
        "Playwright",
        "behave (BDD / Gherkin)",
        "Allure",
        "Xray (Jira)",
        "Manual testing",
        "Smoke / Sanity / Regression",
        "Code review"
      ]
    },
    {
      title: "CI / Infrastructure",
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
      title: "Development",
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
      title: "Languages",
      skills: [
        "Spanish — Native",
        "English — B1, working toward B2"
      ]
    }
  ],

  projects: {
    "test-report": {
      title: "Automated test reporting platform",
      subtitle: "I designed and built the report the team uses every day to track the quality of its products.",
      context: "Work · QA",
      problem:
        "The team ran hundreds of automated tests a day across three environments (staging, production and demo), but results were scattered. Finding out what had failed, in which environment, and whether it was a new error or an already-known one meant going through each run separately.",
      solution: {
        intro:
          "I developed a centralized report based on Allure, published on AWS as a static site and updated automatically when each run finishes. On top of Allure I built custom plugins:",
        items: [
          "Overview: the status of each product and environment, with failing suites first.",
          "Run history: every execution with its results, console output and screenshots of failures.",
          "Production report: the results of each deployment, linked to the deployment that triggered them.",
          "Per-test results: scenarios grouped by feature and linked to the exact run where they failed.",
        ],
      },
      howItWorks: {
        steps: [
          { icon: "trigger", title: "Trigger", text: "GitHub Actions starts a run every night, on every pull request and with every deployment." },
          { icon: "run", title: "Execution", text: "Tests run with Playwright in an isolated Docker container inside Kubernetes." },
          { icon: "process", title: "Processing", text: "Python scripts classify results, build the run record and mask sensitive data." },
          { icon: "notify", title: "Notification", text: "Results are stored in S3, announced in Slack and logged in Xray." },
          { icon: "publish", title: "Publishing", text: "A second pipeline builds the report with Allure and publishes it as a static site." },
        ],
        paragraphs: [
          {
            lead: "Running at the right moment",
            text: "Tests run automatically every night, on every pull request and with every deployment to production or demo, so each change is validated against the right environment. Each environment has its own concurrency control so one run never cancels another.",
          },
          {
            lead: "Isolated, configurable environments",
            text: "Each run executes in a Kubernetes pod deployed with Helm and configured by run type: a reduced suite in the nightly run, the full suite on Sundays and smoke tests on every pull request. Failures caused by infrastructure are retried automatically.",
          },
          {
            lead: "Fault tolerance",
            text: "Post-run steps (classification, notifications and result upload) are non-blocking: if one fails, the test outcome is unaffected. When it finishes, the test pipeline triggers the report publication right away, with a scheduled daily run as a fallback.",
          },
          {
            lead: "Security",
            text: "No credentials are stored: the pod authenticates to AWS through Kubernetes identity and the publishing pipeline through OIDC. In production and demo, customer data is masked, and screenshots are kept as private, expiring CI artifacts.",
          },
        ],
      },
      result: [
        "Immediate visibility: the team sees what failed, in which environment and in which run, without going through runs one by one.",
        "Automatic validation on every pull request and every production deployment, not just in the nightly run.",
        "A clear distinction between real application failures and already-known ones, thanks to a status system defined with the team.",
        "Nightly run optimized from ~119 to ~76 minutes (≈36% faster).",
      ],
    },
    screenshots: {
      title: "Visual evidence in nightly runs",
      subtitle: "I diagnosed why screenshots were being lost and redesigned how they are generated.",
      context: "Work · QA",
      problem:
        "Nightly runs finished without screenshots. When a test failed, the team only had the error message and had to reproduce the scenario to find out at which step and on which screen it happened.",
      solution: {
        intro: "I analyzed the run history and the pipeline configuration, and identified two independent causes:",
        items: [
          "Configuration: an earlier change had disabled screenshots in the nightly run.",
          "Time limit: some runs hit the 2-hour limit while uploading results and were cut off before the evidence was uploaded.",
        ],
        outro:
          "I evaluated the options with the team and adopted a selective approach: automatic screenshots for every failed test and, for passing tests, only on request. This keeps the evidence that matters while keeping the file volume of each run under control.",
      },
      result: {
        items: [
          "Every failed test is documented with a screenshot showing the exact state of the application when the error occurred.",
          "Faster diagnosis: the team finds where a test failed directly from the report, without having to reproduce it.",
          "In production and demo, screenshots are stored as private, expiring artifacts to protect customer data.",
        ],
        outro: "Next step: agree with the team on a fix for runs that hit the time limit.",
      },
    },
    portfolio: {
      title: "React portfolio",
      subtitle: "This site: designed, built and tested by me with the same quality standards I apply at work.",
      context: "Personal",
      problem: "I needed to present my QA profile clearly to recruiters in Mexico and abroad, on a site that is fast, accessible and easy to maintain.",
      solution: {
        intro: "I built it with React and Vite, keeping content separate from design:",
        items: [
          "Full Spanish and English versions, using the browser language as the initial choice.",
          "Light and dark mode, remembered between visits and with no flicker on load.",
          "Accessibility: semantic HTML, visible focus, labeled form fields and support for the reduced-motion preference.",
          "Contact form powered by EmailJS, with per-field validation and status messages.",
          "End-to-end tests with Playwright on desktop and mobile (contact form, CV download, languages, theme and navigation), run in GitHub Actions on every pull request.",
        ],
      },
      result: [
        "A lightweight site, deployed on Vercel, that works well on mobile, tablet and desktop.",
        "All content lives in data files: updating it doesn't require touching the components.",
      ],
    },
  },

  education: [
    {
      title: "Software Development Engineering",
      school: "Universidad Ciudadana",
      period: "Expected graduation 2027",
      note: null,
    },
  ],
}

export default en
