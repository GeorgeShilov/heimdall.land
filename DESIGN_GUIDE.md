# Design Guide — heimdall.land

## Concept

**Watchtower for decentralized networks.**  
Dark product UI with a **Bifröst** accent spectrum (cyan → indigo → amber): visibility, bridge, and signal — not generic purple SaaS.

**References:** Linear, Vercel, Raycast, modern on-chain dashboards.

## Palette

| Token | Value | Use |
|-------|--------|-----|
| `--bg` | `#070B12` | Page background |
| `--bg-elevated` | `#0C1220` | Elevated surfaces |
| `--bg-card` | glass navy | Cards / panels |
| `--ink` | `#F1F5F9` | Headings |
| `--muted` | `#8B9BB4` | Body secondary |
| `--cyan` | `#22D3EE` | Primary accent / live signal |
| `--indigo` | `#818CF8` | Mid bifrost |
| `--amber` | `#FBBF24` | Warm highlight / warnings |
| `--bifrost` | cyan→indigo→amber | CTAs, badges, separators |

## Typography

- **UI:** Plus Jakarta Sans
- **Data / meta:** IBM Plex Mono
- Tight tracking on large headings (`letter-spacing: -0.03em`)

## Signature patterns

1. Ambient orbs + soft grid (fixed stage in `Layout.astro`)
2. Pill CTAs with bifrost fill
3. Mono “eyebrow” chips with live-dot
4. Glass cards, cyan hover rim
5. Hero “live signals” instrument panel (home)

## Do / Don’t

- **Do** keep blog URL slugs and content collection paths unchanged  
- **Do** prefer cyan for interactive links, amber for secondary emphasis  
- **Don’t** reintroduce parchment / cartography one-off themes on home  
- **Don’t** rely on pure purple Linear clones — bifrost is the brand differentiator  
