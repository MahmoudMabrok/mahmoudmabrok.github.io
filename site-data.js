/**
 * Landing page content. Edit this file, then refresh.
 *
 * Facts come from the public GitHub profile (user MahmoudMabrok and the
 * profile README) and from public repository descriptions, READMEs, topics,
 * and languages, checked on 2026-11-25.
 *
 * PLACEHOLDERS: profile.placeholders. Leave a value as "" to hide it.
 * Do not add a job title, employer, years, or metrics unless you want those
 * exact words shown. The role, employer, and location already on the page
 * are the ones from the public profile.
 *
 * GitHub's display name is "Mahmoud Mabrok Fouad". The page uses
 * "Mahmoud Mabrok". Change profile.name if you want the full name.
 *
 * If you rewrite profile.intro, also update the meta description in index.html
 * so the no-JavaScript fallback matches.
 *
 * Star counts are a snapshot. Update project.stars when you want them current.
 * A star count of 0 is not shown.
 */
window.SITE_DATA = {
  profile: {
    name: "Mahmoud Mabrok",
    role: "Android Developer",
    company: "_VOIS",
    companyUrl: "https://www.linkedin.com/company/vois",
    location: "Egypt",
    githubLogin: "MahmoudMabrok",
    intro:
      "Public projects include Android apps in Kotlin and Java, Kotlin Multiplatform, and small tools on the web.",
    // Topics only. The page prefixes this with "Ask me about".
    askAbout: "Android, Kotlin, and Java",
    avatar: "assets/avatar.jpg",
    avatarAlt: "Portrait of Mahmoud Mabrok",
    summary:
      "Mahmoud Mabrok is an Android developer at _VOIS in Egypt. Public work includes Kotlin and Java apps, Kotlin Multiplatform, and small web tools.",
    links: {
      github: "https://github.com/MahmoudMabrok",
      linkedin: "https://www.linkedin.com/in/dev-mahmoud",
      blog: "https://mo3ta.top/tech-blog/",
      blogLabel: "Tech blog",
      staticBlog: "https://mahmoudmabrok.github.io/mahmoudmabrokblog/",
      staticBlogLabel: "Static blog",
      twitter: "https://twitter.com/mahmoud_mabrok",
      twitterLabel: "Twitter",
      email: "mahmoudmabrok3579@gmail.com"
    },
    placeholders: {
      // Your own sentence. Shown under the intro when set.
      personalNote: "",
      // Example: "Open to Android roles". Shown near the top when set.
      availability: "",
      // Optional extra contact link. Both fields are required for it to show.
      extraContactLabel: "",
      extraContactUrl: ""
    }
  },

  /**
   * Featured projects, strongest first.
   * label: short factual label drawn from the repo's own description.
   * tags: languages or libraries the repo itself names.
   * source: where the wording came from (not rendered).
   */
  projects: [
    {
      name: "QuranyApp",
      label: "Open-source app",
      lead: true,
      description:
        "Open-source Holy Quran app to read, listen, view tafsir, and take tests, kept to a very small size.",
      tags: ["Kotlin", "Android"],
      stars: 226,
      repo: "https://github.com/MahmoudMabrok/QuranyApp",
      source:
        "Repository description and topics (android, quran). 226 stars. Profile README lists it as an authored project."
    },
    {
      name: "SaloAleh",
      arabicName: "صلوا عليه",
      label: "Android and iOS",
      description:
        "Weekly salawat tap competition for Android and iOS, built with Kotlin Multiplatform.",
      tags: ["Kotlin Multiplatform", "Compose Multiplatform", "Firebase", "Koin"],
      stars: 3,
      site: "https://mo3ta.top/SaloAleh/",
      play: "https://play.google.com/store/apps/details?id=tools.mo3ta.salo",
      repo: "https://github.com/MahmoudMabrok/SaloAleh",
      source:
        "README opening line, Google Play link, and architecture notes (Compose Multiplatform, Koin, Firebase). 3 stars."
    },
    {
      name: "GithubActivity",
      label: "Multiplatform app",
      description:
        "App that shows a GitHub user's activity, built with Compose Multiplatform, Ktor, and Kamel.",
      tags: ["Compose Multiplatform", "Ktor", "Kamel"],
      stars: 12,
      repo: "https://github.com/MahmoudMabrok/GithubActivity",
      source: "Repository description and topics (compose, kmp, ktor, kamel). 12 stars."
    },
    {
      name: "JSON Kit",
      label: "Web tool",
      description:
        "Compare JSON files and see exactly what changed. A single-file app in vanilla HTML.",
      tags: ["HTML"],
      stars: 0,
      site: "https://mo3ta.top/json-kit/",
      repo: "https://github.com/MahmoudMabrok/json-kit",
      source: "Repository description. Live site title is JSON Kit."
    },
    {
      name: "HandyCustomeViews",
      label: "Android views",
      description: "Helpful Android custom views that include their own logic.",
      tags: ["Kotlin", "Android"],
      stars: 11,
      repo: "https://github.com/MahmoudMabrok/HandyCustomeViews",
      source: "Repository description. 11 stars. Profile README lists it as an authored project."
    },
    {
      name: "Image Table Generator",
      label: "Web tool",
      description:
        "Builds a table of images and titles for pull requests and issues. Images can be added by hand or from the clipboard, then reordered.",
      tags: ["TypeScript"],
      stars: 9,
      site: "https://mo3ta.top/ImageTableGenerator/",
      repo: "https://github.com/MahmoudMabrok/ImageTableGenerator",
      source: "README features list. Language TypeScript. 9 stars. Live site title is Image Table Generator."
    },
    {
      name: "Quizzy_app",
      label: "Android app",
      description:
        "Stands between a teacher and students to run quizzes, evaluate answers by hand, and report grades. It will compete in the IEEE madc competition.",
      tags: ["Java", "Android"],
      stars: 12,
      repo: "https://github.com/MahmoudMabrok/Quizzy_app",
      source: "Repository description. Language Java. 12 stars. Profile README lists it as an authored project."
    },
    {
      name: "mushaf-text-customizable",
      label: "Compose library · fork",
      description:
        "Customizable fork of mushaf-text: the Madinah Mushaf as text for Compose, with ornamental page frames and Classic, Modern, or Plain surah headers. Import via JitPack.",
      tags: ["Kotlin", "Compose"],
      stars: 0,
      repo: "https://github.com/MahmoudMabrok/mushaf-text-customizable",
      source: "Repository description. Language Kotlin. The repo is a fork."
    },
    {
      name: "Tech blog",
      arabicName: "نشرة التكنولوجيا",
      label: "Blog",
      description: "A simple tech blog built with Jekyll. Posts are stored in a JSON file.",
      tags: ["Jekyll", "SCSS"],
      stars: 0,
      site: "https://mo3ta.top/tech-blog/",
      repo: "https://github.com/MahmoudMabrok/tech-blog",
      source:
        "Repository description. Language SCSS. Live site title includes نشرة التكنولوجيا."
    }
  ],

  /**
   * Skills grounded in the profile README or in repository languages,
   * descriptions, and READMEs. Not a ranking.
   *
   * Ask me about: profile README.
   * Kotlin Multiplatform, Compose Multiplatform, Koin, Firebase: SaloAleh README.
   * Compose: mushaf-text-customizable description. Compose Multiplatform also
   *   in GithubActivity.
   * Ktor, Kamel: GithubActivity description.
   * TypeScript: ImageTableGenerator (also holy-video-helper, scrum-pulse-dashboard, MuslimTracker).
   * JavaScript: profile README (eshkal) and repos such as YouTubePlayListExporter.
   * Python: profile README (Mo3taSummary) and ChatWithCode.
   * HTML: json-kit and souq-rabaa. SCSS: tech-blog. Jekyll: tech-blog description.
   */
  skills: [
    {
      title: "Ask me about",
      detail: "Named on the public GitHub profile.",
      items: ["Android", "Kotlin", "Java"]
    },
    {
      title: "App stack in public repos",
      detail: "Named in repository descriptions or READMEs.",
      items: [
        "Kotlin Multiplatform",
        "Compose Multiplatform",
        "Compose",
        "Koin",
        "Firebase",
        "Ktor",
        "Kamel"
      ]
    },
    {
      title: "Other languages and tools",
      detail: "Primary languages or tools called out in public repos.",
      items: ["TypeScript", "JavaScript", "Python", "HTML", "SCSS", "Jekyll"]
    }
  ]
};
