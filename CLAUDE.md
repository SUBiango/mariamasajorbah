# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static, single-page storefront for **HealthPlus SL** — a WhatsApp-based health products business run by Mariama S. Bah in Freetown, Sierra Leone. No build tools, no framework, no dependencies.

## Running the Site

Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

Use the Python server (not direct file open) when testing assets loaded via absolute paths (e.g., `/assets/style.css`).

## File Structure

- `index.html` — all page content and markup; self-contained single page
- `assets/style.css` — all styles (~680 lines), organized into labeled sections per component
- `assets/script.js` — minimal JS for the image lightbox only

## Architecture

The page is built mobile-first with a fixed max-width of 480px (simulates a phone viewport on desktop). Sections in order: Hero → Seller Profile → Products → Reviews → CTA → Footer.

**CSS variables** in `:root` define the color palette and shared radii — always use these when adding colors rather than hard-coding hex values:
- `--green` / `--green-dark` / `--green-light` — primary brand color
- `--blue` / `--blue-dark` / `--blue-light` — accent (prices, Facebook)
- `--wa-green` — WhatsApp brand green, used on buttons
- `--charcoal`, `--muted`, `--border`, `--shadow` — neutrals

**Fonts:** `DM Serif Display` (headings/display) and `Nunito` (body/UI), loaded from Google Fonts.

**WhatsApp ordering:** Every product "Order" button and the floating/bottom CTA buttons link to `https://wa.me/+23200000000` — update this phone number when the real number is provided.

**Reviews section** supports three media types: tappable screenshot images (with lightbox), looping muted video (screencast/voice note style), and YouTube iframe embeds.

## Key Things to Update for Production

- Replace `https://wa.me/+23200000000` with the real WhatsApp number throughout `index.html`
- Replace the profile avatar (Unsplash placeholder) with a real photo of Mariama
- Replace Unsplash product images with actual product photos
- Replace stock review screenshot/video with real customer screenshots/voicenotes
- Update Instagram and Facebook `href="#"` links with real profile URLs
