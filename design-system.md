# Trao Design System: Enterprise Figma Specification

---

## 1. Design System Philosophy & Caliber

This design system establishes a **Figma-native, high-restraint visual language** tailored for enterprise software leadership (CTOs, COOs, VPs of Transformation). 

### Core Principles
1. **Restraint Over Decoration:** Confidence reads as quiet. We eliminate floating 3D shapes, multi-color mesh gradients, and decorative noise. Every border, rule, and margin carries structural weight.
2. **Typographical Seriousness:** Inspired by *Anthropic, Stripe Press, Mistral, and Linear*. We pair an ultra-clean technical sans with an authoritative editorial serif for considered intellectual gravity.
3. **Architectural Transparency:** UI components present engineering reality—code blocks, deterministic schemas, typed metrics, and system state machines.
4. **Figma Auto-Layout Resilience:** Every frame, card, row, and section is constructed using strict Auto Layout rules (`Fill container`, `Hug contents`, `Fixed`), ensuring that the design resizes gracefully across viewport changes.

---

## 2. Color System & Design Tokens

The palette is anchored by Trao's signature deep forest green, grounded on a warm, editorial linen canvas (`#FDFCF7`), and structured with precise hairline neutral borders.

### 2.1 Brand & Semantic Tokens

| Token Name | Hex Value | RGBA / Opacity | Semantic Role |
| :--- | :--- | :--- | :--- |
| `color-canvas-base` | `#FDFCF7` | `rgba(253, 252, 247, 1)` | Primary global page background |
| `color-canvas-subtle` | `#FAF9F5` | `rgba(250, 249, 245, 1)` | Alternating section background & header blur |
| `color-surface-white` | `#FFFFFF` | `rgba(255, 255, 255, 1)` | Card surface, elevated panels, modal backgrounds |
| `color-surface-elevated` | `#F4F1EA` | `rgba(244, 241, 234, 1)` | Inset code containers, micro-cards, active states |
| `color-brand-primary` | `#017752` | `rgba(1, 119, 82, 1)` | Trao signature deep green (buttons, key metrics, accents) |
| `color-brand-hover` | `#015E41` | `rgba(1, 94, 65, 1)` | Primary button hover & active state |
| `color-brand-tint` | `#E6F2ED` | `rgba(230, 242, 237, 1)` | Pill badge background, selected highlight surface |
| `color-brand-dark` | `#08281D` | `rgba(8, 40, 29, 1)` | High-contrast callout container backgrounds |
| `color-text-primary` | `#141413` | `rgba(20, 20, 19, 1)` | Headings, high-emphasis text, primary icons |
| `color-text-secondary` | `#4A4944` | `rgba(74, 73, 68, 1)` | Body paragraphs, case study narrative copy |
| `color-text-muted` | `#7D7A71` | `rgba(125, 122, 113, 1)` | Captions, metadata, input placeholders |
| `color-border-hairline` | `#E1DACD` | `rgba(225, 218, 205, 1)` | Primary structural grid borders, dividers, card strokes |
| `color-border-subtle` | `#ECE7DC` | `rgba(236, 231, 220, 1)` | Internal card splitters, secondary dividers |
| `color-status-live` | `#10B981` | `rgba(16, 185, 129, 1)` | Live system pulse indicator, active production nodes |
| `color-status-warning` | `#D97706` | `rgba(217, 119, 6, 1)` | Warning state, latency alerts, threshold warnings |

---

## 3. Typography Hierarchy

We consolidate Trao's typography into two disciplined families:
1. **Primary Interface Sans:** `Plus Jakarta Sans` (or `Inter`) — engineered for legible interfaces, clean microcopy, and crisp numerals.
2. **Editorial Display Serif:** `Newsreader` (or `Cormorant Garamond` used with restraint) — brings quiet confidence and intellectual seriousness to major headlines and customer quotes.
3. **Technical Monospace:** `JetBrains Mono` — used strictly for architectural tags, code snippets, status badges, and metric units.

### 3.1 Typographic Scale

| Style Token | Font Family | Size / Line Height | Weight | Letter Spacing | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `type-display-hero` | `Newsreader` / Serif | `56px / 64px (1.14)` | SemiBold (600) | `-0.025em` | Desktop Hero headline |
| `type-h1-section` | `Newsreader` / Serif | `40px / 48px (1.2)` | SemiBold (600) | `-0.02em` | Major section headlines |
| `type-h2-card` | `Plus Jakarta Sans` | `24px / 32px (1.33)` | SemiBold (600) | `-0.015em` | Capability titles, case study titles |
| `type-h3-sub` | `Plus Jakarta Sans` | `18px / 26px (1.44)` | SemiBold (600) | `-0.01em` | Accordion questions, sub-headers |
| `type-body-large` | `Plus Jakarta Sans` | `18px / 28px (1.55)` | Regular (400) | `-0.005em` | Hero lead paragraph, executive summaries |
| `type-body-regular` | `Plus Jakarta Sans` | `15px / 24px (1.6)` | Regular (400) | `0em` | Standard body copy, FAQ answers |
| `type-body-medium` | `Plus Jakarta Sans` | `15px / 24px (1.6)` | Medium (500) | `0em` | Emphasized body text, list titles |
| `type-metric-value` | `Plus Jakarta Sans` | `36px / 40px (1.11)` | Bold (700) | `-0.02em` | Metric numbers in proof bar |
| `type-button-label` | `Plus Jakarta Sans` | `14px / 20px (1.42)` | SemiBold (600) | `0.01em` | Primary & secondary CTAs |
| `type-mono-badge` | `JetBrains Mono` | `12px / 16px (1.33)` | Medium (500) | `0.04em` | Eyebrow badges, architectural tags |
| `type-caption` | `Plus Jakarta Sans` | `12px / 18px (1.5)` | Regular (400) | `0.01em` | Metadata, footnotes, legal LLP text |

---

## 4. Spacing Scale & Layout Grid

### 4.1 Spacing Tokens (8pt / 4pt Rhythm)
* `space-2` (2px) — Micro-offsets, border shifts
* `space-4` (4px) — Badge padding, icon gaps
* `space-8` (8px) — Button internal gap, list item spacing
* `space-12` (12px) — Card internal small gaps, input padding
* `space-16` (16px) — Standard component padding, gutter margins
* `space-24` (24px) — Card padding, modular spacing
* `space-32` (32px) — Section sub-group gap, desktop card padding
* `space-48` (48px) — Stack gap between headline and content
* `space-64` (64px) — Minor section top/bottom padding
* `space-96` (96px) — Standard section top/bottom desktop padding
* `space-128` (128px) — Major hero and conversion section padding

### 4.2 Grid Specifications

#### Desktop Grid (1440px Frame)
* **Canvas Width:** `1440px`
* **Container Max-Width:** `1264px` (or `88%` fluid)
* **Columns:** 12 columns
* **Gutter:** `24px`
* **Outer Margins:** `88px` on each side
* **Structural Framing:** Outer vertical border lines at column boundaries (`#E1DACD`)

#### Mobile Grid (390px Frame)
* **Canvas Width:** `390px`
* **Container Width:** `100%` fluid
* **Columns:** 4 columns
* **Gutter:** `16px`
* **Outer Margins:** `20px` on each side

---

## 5. Component Library Specifications & Variants

### 5.1 Primary Button Component (`Button/Primary`)
* **Auto Layout:** Horizontal, `Fill / Hug`, `Padding: 12px 20px`, `Gap: 8px`, `Align: Center`.
* **Border Radius:** `4px` (Sharp, architectural precision; no bubbly pill buttons).
* **Properties & Variants:**
  * `State`: `Default` (`bg: #017752`, `text: #FFFFFF`)
  * `State`: `Hover` (`bg: #015E41`, `text: #FFFFFF`, `elevation: subtle 0px 4px 12px rgba(1,119,82,0.15)`)
  * `State`: `Focused` (`stroke: 2px #017752`, `outline offset: 2px`)
  * `State`: `Disabled` (`bg: #E1DACD`, `text: #7D7A71`, `cursor: not-allowed`)
  * `Icon`: `None` | `Trailing Arrow (→)`

### 5.2 Secondary / Outline Button (`Button/Outline`)
* **Auto Layout:** Horizontal, `Padding: 12px 20px`, `Gap: 8px`.
* **Border:** `1px solid #E1DACD`.
* **Background:** Transparent / `#FFFFFF`.
* **Text:** `#141413` (SemiBold 14px).
* **Hover:** `bg: #F4F1EA`, `border: #141413`.

### 5.3 Technical Eyebrow Badge (`Badge/MonoTag`)
* **Auto Layout:** Horizontal, `Padding: 4px 10px`, `Gap: 6px`, `Border-radius: 3px`.
* **Variants:**
  * `Variant: BrandTint` (`bg: #E6F2ED`, `text: #017752`, `border: 1px solid #C8DFD4`)
  * `Variant: Neutral` (`bg: #F0EEE7`, `text: #4A4944`, `border: 1px solid #E1DACD`)
  * `Variant: LiveStatus` (`bg: #E6F2ED`, `text: #017752`, `includes 6px animated pulsing green circle`)

### 5.4 Metric Proof Block (`Card/MetricBlock`)
* **Auto Layout:** Vertical, `Padding: 24px 32px`, `Gap: 6px`, `Border-right: 1px solid #E1DACD`.
* **Elements:**
  1. `Value`: 36px Bold `#017752` (`3 Weeks → 45 Min`, `$50M+`, `99.98%`).
  2. `Label`: 13px Regular `#7D7A71` (`Textile design-to-production turnaround`).

### 5.5 Capability Blueprint Card (`Card/CapabilityBlueprint`)
* **Auto Layout:** Vertical, `Padding: 32px`, `Gap: 16px`, `bg: #FFFFFF`, `Border: 1px solid #E1DACD`, `Radius: 4px`.
* **Elements:**
  1. `Header Row`: Technical Index (`01 // ARCHITECTURE`) + Trao Monospace Badge.
  2. `Title`: 22px SemiBold `#141413` (*Autonomous Multi-Agent Orchestration*).
  3. `Body`: 15px Regular `#4A4944` (*State-driven agent graphs that query disparate databases...*).
  4. `Technical Metric Pill`: `Latency: <120ms` | `Reliability: 99.9%`.
  5. `Footer Link`: Direct exploration link with hover arrow transition.

### 5.6 Case Study Dossier Card (`Card/CaseStudyDossier`)
* **Auto Layout:** Asymmetric Split (Desktop 60/40, Mobile 100% stacked).
* **Left Column (The System):**
  * Client Identifier: Company name + industry badge.
  * The Challenge (14px `#7D7A71`).
  * The Engineered Architecture (Code diagram / flowchart preview).
* **Right Column (The Hard Proof):**
  * Large Stat Callout: `3 Weeks → 45 Minutes` (48px SemiBold).
  * Direct Quote: *"We cut our design-to-production time from 3 weeks to 45 minutes..."*
  * Executive Attribution: Sri Kansal, CEO at Vlon + LinkedIn verification icon.

### 5.7 Accordion FAQ Item (`Accordion/EnterpriseFAQ`)
* **Auto Layout:** Vertical, `Padding: 24px 0px`, `Border-bottom: 1px solid #E1DACD`.
* **Collapsed State:** 18px SemiBold `#141413` + Trailing `+` icon (`#017752`).
* **Expanded State:** 18px SemiBold `#141413` + Trailing `−` icon + 15px Body Text `#4A4944` (Smooth 200ms height transition).

---

## 6. Figma File Craft & Layer Hygiene Guidelines

When setting up the Figma file, follow these non-negotiable craftsmanship standards:

1. **Strict Auto Layout Everywhere:** No loose, ungrouped shapes. No free-floating text frames. Every container must use Auto Layout with defined padding and distribution.
2. **Proper Sizing Modes:**
   * Outer section wrappers: `Width: Fixed (1440px)` or `Fill container`, `Height: Hug contents`.
   * Grid columns: `Width: Fill container`, `Height: Fill container` or `Hug`.
   * Text blocks: `Width: Fill container`, `Height: Hug contents` (prevent text overflow).
3. **Component Properties:** Use Figma component properties (`Boolean` for icons, `Instance swap` for badges, `Text` for headlines) rather than creating dozens of detached copies.
4. **Layer Naming Discipline:**
   * Avoid `Frame 4129`, `Group 12`, `Rectangle 2`.
   * Name semantically: `Section/Hero`, `Container/Max-Width-1280`, `Row/Metric-Proof-Bar`, `Card/CaseStudy-Vlon`, `Button/Primary-BookCall`.
5. **Styles & Variables Mapping:**
   * Publish all colors as Figma Variables (`Canvas/Base`, `Brand/Primary`, `Text/Primary`, `Border/Hairline`).
   * Publish all typography as Figma Text Styles (`Hero/Headline`, `Section/Title`, `Body/Regular`, `Mono/Badge`).
