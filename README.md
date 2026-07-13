# darshanvishwanath.com

Personal site of Darshan D Vishwanath — *"I build systems from the silicon up."*

Built with [Astro](https://astro.build), plain CSS, and markdown. No trackers,
no UI frameworks, ~0 client JS. This repo is the live site (a GitHub
user-page repo); pushing to `main` deploys straight to
[www.darshanvishwanath.com](https://www.darshanvishwanath.com). The previous
template site is preserved on the `legacy-template-site` branch.

## Develop

```sh
npm install
npm run dev      # localhost:4321
npm run build    # static build → dist/
```

## Add content (no code required)

| I want to…            | Do this |
|-----------------------|---------|
| Post an unfinished entry | copy `templates/unfinished-entry.md` → `src/content/unfinished/YYYY-MM-DD-slug.md` |
| Publish an essay      | copy `templates/essay.md` → `src/content/essays/slug.md` |
| Add a project/bet     | copy `templates/project.md` → `src/content/projects/slug.md` |
| Add a role            | copy `templates/work.md` → `src/content/work/company.md` |
| Update "Now"          | edit `src/content/now/now.md`, bump `updated` |

Commit + push to `main` → the site deploys itself.
