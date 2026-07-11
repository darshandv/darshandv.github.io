# darshanvishwanath.com

Personal site of Darshan D Vishwanath — *"I build systems from the silicon up."*

Built with [Astro](https://astro.build), plain CSS, and markdown. No trackers,
no UI frameworks, ~0 client JS. Deployed to GitHub Pages.

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

## The system

The full design/content/build system lives in [`SPEC/`](./SPEC) — vision,
design tokens, schemas, page blueprints, voice rules, and the launch runbook
(including moving `www.darshanvishwanath.com` from the old site). Any AI or
human contributor starts there; `CLAUDE.md` has the hard rules.

## Seeds to review (marked for Darshan)

- `src/content/unfinished/2026-07-11-why-unfinished.md` — first entry, drafted
  in your voice; edit or rewrite before/after launch.
- `src/content/now/now.md` — seeded from the interview; make it true.
- Deutsche Bank & Impel Labs entries carry facts from the old site with
  unverified dates — see the facts ledger in `SPEC/02`.
