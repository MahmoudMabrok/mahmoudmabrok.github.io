(function () {
  var data = window.SITE_DATA;
  var toggle = document.getElementById("theme-toggle");

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyTheme(theme, persist) {
    var dark = theme === "dark";
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    if (toggle) {
      toggle.setAttribute("aria-pressed", dark ? "true" : "false");
      toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
      toggle.textContent = dark ? "Light" : "Dark";
    }
    if (persist) {
      try {
        localStorage.setItem("theme", dark ? "dark" : "light");
      } catch (err) {
        /* ignore private-mode storage failures */
      }
    }
  }

  applyTheme(currentTheme(), false);

  if (toggle) {
    toggle.addEventListener("click", function () {
      applyTheme(currentTheme() === "dark" ? "light" : "dark", true);
    });
  }

  try {
    var stored = localStorage.getItem("theme");
    if (stored !== "light" && stored !== "dark" && window.matchMedia) {
      var media = window.matchMedia("(prefers-color-scheme: dark)");
      var onChange = function (event) {
        var choice = localStorage.getItem("theme");
        if (choice !== "light" && choice !== "dark") {
          applyTheme(event.matches ? "dark" : "light", false);
        }
      };
      if (media.addEventListener) media.addEventListener("change", onChange);
    }
  } catch (err) {
    /* ignore */
  }

  if (!data || !data.profile) return;

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function safeUrl(url) {
    if (!url) return "";
    try {
      var parsed = new URL(url, document.baseURI);
      if (parsed.protocol === "http:" || parsed.protocol === "https:" || parsed.protocol === "mailto:") {
        return parsed.href;
      }
    } catch (err) {
      return "";
    }
    return "";
  }

  function link(href, text, aria) {
    var safe = safeUrl(href);
    if (!safe) return "";
    var label = aria ? ' aria-label="' + esc(aria) + '"' : "";
    return '<a href="' + esc(safe) + '"' + label + ">" + esc(text) + "</a>";
  }

  var profile = data.profile;
  var placeholders = profile.placeholders || {};
  var links = profile.links || {};

  var summary = profile.summary || profile.intro || "";
  [
    ["description", "name", summary],
    ["og:description", "property", summary],
    ["og:title", "property", profile.name + " · " + profile.role],
    ["twitter:description", "name", summary],
    ["twitter:title", "name", profile.name + " · " + profile.role]
  ].forEach(function (item) {
    var el = document.querySelector('meta[' + item[1] + '="' + item[0] + '"]');
    if (el && item[2]) el.setAttribute("content", item[2]);
  });

  var hero = document.getElementById("top");
  if (hero) {
    var note = placeholders.personalNote
      ? '<p class="personal-note">' + esc(placeholders.personalNote) + "</p>"
      : "";
    var availability = placeholders.availability
      ? '<p class="availability">' + esc(placeholders.availability) + "</p>"
      : "";
    var ask = profile.askAbout
      ? '<p class="ask">Ask me about ' + esc(profile.askAbout) + ".</p>"
      : "";
    var avatar = "";
    var avatarUrl = safeUrl(profile.avatar);
    if (avatarUrl) {
      avatar =
        '<img src="' +
        esc(avatarUrl) +
        '" alt="' +
        esc(profile.avatarAlt || profile.name) +
        '" width="96" height="96" decoding="async" fetchpriority="high">';
    }
    var company = profile.companyUrl
      ? link(profile.companyUrl, profile.company, profile.company + " on LinkedIn")
      : esc(profile.company);

    hero.innerHTML =
      '<div class="wrap hero-layout">' +
      '<div class="hero-copy">' +
      availability +
      '<p class="eyebrow">' +
      esc(profile.role) +
      " · " +
      esc(profile.company) +
      " · " +
      esc(profile.location) +
      "</p>" +
      '<h1 id="hero-heading">' +
      esc(profile.name) +
      "</h1>" +
      '<p class="intro">' +
      esc(profile.intro) +
      "</p>" +
      note +
      ask +
      '<p class="hero-links">' +
      link(links.github, "GitHub", "Mahmoud Mabrok on GitHub") +
      link(links.linkedin, "LinkedIn", "Mahmoud Mabrok on LinkedIn") +
      link(links.blog, links.blogLabel || "Blog", "Tech blog") +
      "</p>" +
      "</div>" +
      '<aside class="facts" aria-label="Profile facts">' +
      avatar +
      "<dl>" +
      "<dt>Role</dt><dd>" +
      esc(profile.role) +
      "</dd>" +
      "<dt>Company</dt><dd>" +
      company +
      "</dd>" +
      "<dt>Based in</dt><dd>" +
      esc(profile.location) +
      "</dd>" +
      "<dt>GitHub</dt><dd>" +
      link(links.github, profile.githubLogin, "GitHub profile") +
      "</dd>" +
      "</dl>" +
      "</aside>" +
      "</div>";
  }

  var work = document.getElementById("work");
  if (work) {
    var cards = (data.projects || [])
      .map(function (project) {
        var title =
          esc(project.name) +
          (project.arabicName
            ? ' <span class="ar" lang="ar" dir="rtl">' + esc(project.arabicName) + "</span>"
            : "");
        var tags = (project.tags || [])
          .map(function (tag) {
            return "<li>" + esc(tag) + "</li>";
          })
          .join("");
        var stars =
          project.stars > 0
            ? '<p class="stars">' +
              esc(String(project.stars)) +
              " GitHub " +
              (project.stars === 1 ? "star" : "stars") +
              "</p>"
            : "";
        var actions = [
          project.site ? link(project.site, "Live site", project.name + " live site") : "",
          project.play ? link(project.play, "Google Play", project.name + " on Google Play") : "",
          project.repo ? link(project.repo, "Repository", project.name + " repository") : ""
        ]
          .filter(Boolean)
          .join("");
        return (
          '<article class="card' +
          (project.lead ? " lead" : "") +
          '">' +
          '<div class="card-main">' +
          '<p class="kicker">' +
          esc(project.label || "") +
          "</p>" +
          "<h3>" +
          title +
          "</h3>" +
          '<p class="desc">' +
          esc(project.description) +
          "</p>" +
          "</div>" +
          '<div class="card-meta">' +
          '<ul class="tags">' +
          tags +
          "</ul>" +
          stars +
          '<p class="card-links">' +
          actions +
          "</p>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    work.innerHTML =
      '<div class="wrap">' +
      '<div class="section-head">' +
      '<h2 id="work-heading">Featured projects</h2>' +
      "<p>Selected from public repositories. Descriptions follow each repo’s own wording.</p>" +
      "</div>" +
      '<div class="project-grid">' +
      cards +
      "</div>" +
      '<p class="more">' +
      link(links.github + "?tab=repositories", "All public repositories", "All public GitHub repositories") +
      "</p>" +
      "</div>";
  }

  var skills = document.getElementById("skills");
  if (skills) {
    var groups = (data.skills || [])
      .map(function (group) {
        var items = (group.items || [])
          .map(function (item) {
            return "<li>" + esc(item) + "</li>";
          })
          .join("");
        return (
          '<section class="skill-group" aria-labelledby="skill-' +
          esc(group.title).replace(/\s+/g, "-").toLowerCase() +
          '">' +
          "<h3 id=\"skill-" +
          esc(group.title).replace(/\s+/g, "-").toLowerCase() +
          '">' +
          esc(group.title) +
          "</h3>" +
          (group.detail ? "<p>" + esc(group.detail) + "</p>" : "") +
          "<ul>" +
          items +
          "</ul>" +
          "</section>"
        );
      })
      .join("");

    skills.innerHTML =
      '<div class="wrap">' +
      '<div class="section-head">' +
      '<h2 id="skills-heading">Skills</h2>' +
      "<p>Taken from the public profile and from what the repositories actually use.</p>" +
      "</div>" +
      '<div class="skill-groups">' +
      groups +
      "</div>" +
      "</div>";
  }

  var contact = document.getElementById("contact");
  if (contact) {
    var rows = [];
    if (links.email) {
      rows.push({
        href: "mailto:" + links.email,
        label: links.email,
        hint: "Email",
        aria: "Email Mahmoud Mabrok"
      });
    }
    if (links.linkedin) {
      rows.push({ href: links.linkedin, label: "LinkedIn", hint: "dev-mahmoud", aria: "LinkedIn profile" });
    }
    if (links.github) {
      rows.push({ href: links.github, label: "GitHub", hint: profile.githubLogin, aria: "GitHub profile" });
    }
    if (links.blog) {
      rows.push({
        href: links.blog,
        label: links.blogLabel || "Blog",
        hint: "mo3ta.top/tech-blog",
        aria: "Tech blog"
      });
    }
    if (links.staticBlog) {
      rows.push({
        href: links.staticBlog,
        label: links.staticBlogLabel || "Blog",
        hint: "mahmoudmabrok.github.io",
        aria: "Static blog"
      });
    }
    if (links.twitter) {
      rows.push({
        href: links.twitter,
        label: links.twitterLabel || "Twitter",
        hint: "@mahmoud_mabrok",
        aria: "Twitter profile"
      });
    }
    if (placeholders.extraContactLabel && placeholders.extraContactUrl) {
      rows.push({
        href: placeholders.extraContactUrl,
        label: placeholders.extraContactLabel,
        hint: "Contact",
        aria: placeholders.extraContactLabel
      });
    }

    var list = rows
      .map(function (row) {
        var safe = safeUrl(row.href);
        if (!safe) return "";
        return (
          "<li><a href=\"" +
          esc(safe) +
          '" aria-label="' +
          esc(row.aria || row.label) +
          '"><span>' +
          esc(row.label) +
          '</span><span class="hint">' +
          esc(row.hint || "") +
          "</span></a></li>"
        );
      })
      .join("");

    contact.innerHTML =
      '<div class="wrap">' +
      '<div class="section-head">' +
      '<h2 id="contact-heading">Contact</h2>' +
      "<p>The links below are the public ones from the GitHub profile.</p>" +
      "</div>" +
      '<ul class="contact-list">' +
      list +
      "</ul>" +
      "</div>";
  }

  var ld = document.getElementById("ld-json");
  if (ld) {
    var sameAs = [links.github, links.linkedin, links.blog, links.staticBlog, links.twitter].filter(Boolean);
    var knows = [];
    (data.skills || []).forEach(function (group) {
      (group.items || []).forEach(function (item) {
        if (knows.indexOf(item) === -1) knows.push(item);
      });
    });
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: "https://mo3ta.top/",
      mainEntity: {
        "@type": "Person",
        name: profile.name,
        url: "https://mo3ta.top/",
        image: "https://mo3ta.top/assets/avatar.jpg",
        jobTitle: profile.role,
        email: links.email ? "mailto:" + links.email : undefined,
        homeLocation: { "@type": "Place", name: profile.location },
        worksFor: {
          "@type": "Organization",
          name: profile.company,
          url: profile.companyUrl
        },
        sameAs: sameAs,
        knowsAbout: knows
      }
    });
  }
})();
