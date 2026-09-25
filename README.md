# Trao — Enterprise Landing Page Rebuild

> **Design & Engineering Assignment (Ref: TRAO-DA-01)**  
> Rebuilding [trao.ai](https://trao.ai/) for an enterprise software leadership audience (CTOs, COOs, VPs of Transformation).

---

## 🌟 Overview & Strategic Realignment

Trao is an **embedded software and AI R&D lab**. This project reimagines Trao’s digital presence with the design restraint and intellectual seriousness of **Anthropic, Stripe, Linear, and Sierra**.

### Key Deliverables Included in this Repository

| Document / Asset | File Link | Purpose |
| :--- | :--- | :--- |
| **Design Strategy & Rationale** | [`design.md`](./design.md) | 1-page Figma canvas rationale, walkthrough video script, and motion specs |
| **Design System Specification** | [`design-system.md`](./design-system.md) | Typography scales, Figma color tokens, 1440px/390px grids, and component specs |
| **Information Architecture** | [`information-architecture.md`](./information-architecture.md) | The 60-Second C-Suite Decision Loop and section hierarchy |
| **Content Strategy & Audit** | [`content-strategy-and-copy.md`](./content-strategy-and-copy.md) | Teardown of live site and 100% rewritten enterprise copy |
| **Interactive Web Application** | [`src/`](./src) | Production-ready React 18 + Vite + Tailwind CSS site |

---

## 🚀 Interactive Highlights

1. **The Deterministic Production Gatekeeper (State Machine Simulator)**:
   - Located in [`src/components/ArchitectureSimulator.tsx`](./src/components/ArchitectureSimulator.tsx)
   - Lets buyers test real-world scenarios: Standard EDI batches, schema drift with automated fallback, and local VPC PII interception.
2. **The 3:00 AM Production Telemetry Drawer**:
   - Located in [`src/components/TelemetryDrawer.tsx`](./src/components/TelemetryDrawer.tsx)
   - Turns Trao's signature tagline (*"Working software, live, holding up at 3am on a Tuesday"*) into an interactive diagnostic console showing active enterprise cluster metrics.
3. **Architecture Review Booking Modal**:
   - Located in [`src/components/BookingModal.tsx`](./src/components/BookingModal.tsx)
   - Interactive scheduling flow tailored for C-suite buyers.

---

## 🛠️ Local Development & Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📐 Design Tokens Quick Reference

* **Canvas Linen:** `#FDFCF7` (Subtle `#FAF9F5`, Elevated `#F4F1EA`)
* **Trao Forest:** `#017752` (Hover `#015E41`, Tint `#E6F2ED`, Dark `#08281D`)
* **Hairline Neutral Border:** `#E1DACD`
* **Typography:** `Newsreader` (Editorial Serif) + `Plus Jakarta Sans` (Interface Sans) + `JetBrains Mono` (Code & Telemetry)

---

## 📄 License & Disclosures

© Trao Technologies LLP. LLPIN: ACR-4080.
