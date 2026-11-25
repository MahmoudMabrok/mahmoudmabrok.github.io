# mo3ta.top

Personal landing page for [Mahmoud Mabrok](https://github.com/MahmoudMabrok). GitHub Pages serves this repository from the root of `master`, with no build step, at [https://mo3ta.top](https://mo3ta.top/).

## Update the page

Projects, skills, the short intro, and links live in [`site-data.js`](site-data.js). Refresh the browser after editing. A small script ([`main.js`](main.js)) renders that file into [`index.html`](index.html).

`profile.placeholders` is optional copy. Leave a value as `""` and the page hides it:

- `personalNote` — a sentence of your own, shown under the intro
- `availability` — a short status, shown near the top
- `extraContactLabel` and `extraContactUrl` — an extra contact link (both must be set)

The role (Android Developer), employer (_VOIS), location (Egypt), and email are the public GitHub profile values. Star counts are a snapshot; change `project.stars` when you want them current. A count of `0` is not shown.

If you change `profile.summary`, also update the matching `<meta name="description">` in `index.html` so the no-JavaScript tags stay in sync. With JavaScript on, the meta description is taken from `site-data.js`.

## What not to change

- [`CNAME`](CNAME) must stay exactly `mo3ta.top`. It is the GitHub Pages custom domain.
- [`StandWithPalestine/`](StandWithPalestine/) and [`supportPalestine/`](supportPalestine/) are separate pages at `/StandWithPalestine/` and `/supportPalestine/`.
- Do not add a catch-all 404 page or redirect. Other project sites are served on subpaths of this domain (`/json-kit/`, `/tech-blog/`, `/SaloAleh/`, and others).

## Files

| File | Role |
| --- | --- |
| `index.html` | Page shell, SEO and Open Graph tags, canonical URL |
| `styles.css` | Layout, light and dark themes |
| `site-data.js` | Editable content |
| `main.js` | Renders the content and the theme toggle |
| `assets/avatar.jpg` | Public GitHub profile photo |
| `favicon.svg` | Tab icon |

## Preview locally

From the repository root:

```bash
python3 -m http.server 8765
```

Open [http://127.0.0.1:8765/](http://127.0.0.1:8765/). The theme follows the system setting until the Dark / Light control is used.
