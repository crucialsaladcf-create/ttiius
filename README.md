# Ass Minds — website

Static website for Ass Minds Pvt Tutorials (home, About, Programs, Services,
Results, FAQ, Careers, Contact).

## What's here

| File | Purpose |
|---|---|
| `index.html` … `enquiry.html` | the eight pages, linked together |
| `assets/theme.css` | Inter webfonts (embedded) + the full stylesheet |
| `assets/ui.js` | icons, sticky header, mobile menu, footer, floating widgets, scroll-reveal, counters, sliders |
| `assets/pages.js` | section markup and copy for every page |
| `assets/img/` | site photos (classroom, students, faculty, logo) |

Open `index.html` in any browser — no server or internet connection needed.

## Animations

* hero / section **scroll reveals** (`opacity:0 -> 1` with `translateY` / `scale` transitions)
* **count-up statistics** 25+ / 100+ / 15+ / 50+ over 2 s once they scroll into view
* **testimonial carousel** — 6 quotes, 5 s auto-advance, arrows + dots, pause on hover
* **programs slider** — Engineering / Medical / Pinnacle batch panels, arrows, dots, swipe
* **sticky header** — transparent over the hero, white + shadow + blue links after scrolling
* **mobile slide-down menu**, hover lift on cards, image zoom on faculty cards, pulsing WhatsApp button

## Notes

* Only client-side behaviour is included: the enquiry form validates and shows a
  confirmation locally (no backend is connected).
* The "Visit Our Center" map uses a Google Maps embed; it needs internet to
  display — otherwise a text address placeholder is shown.
