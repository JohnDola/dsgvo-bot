# DSGVO-Bot: DSGVO-konforme Chatbots für KMUs

Eine moderne Landing Page für DSGVO-konforme Chat- und Voice-Bot-Lösungen, speziell entwickelt für kleine und mittlere Unternehmen (KMUs).

![DSGVO-Bot](public/shield-icon.svg)

## Über das Projekt

DSGVO-Bot bietet intelligente Chat- und Voicebots, die speziell für KMUs entwickelt wurden. Unsere Bots beantworten automatisiert Kundenanfragen per Chat und Telefon, greifen dabei sicher auf interne Unternehmensdaten zu und arbeiten vollständig DSGVO-konform - ideal gehostet in der EU oder lokal beim Kunden.

### Hauptfunktionen

- **DSGVO-konforme Datenverarbeitung**: Vollständig datenschutzkonform mit Hosting in der EU oder lokal beim Kunden
- **24/7 Telefon-Support**: Automatisierte Kundenbetreuung rund um die Uhr
- **Chat & Voice Integration**: Kombinierte Lösung für Text- und Sprachkommunikation
- **Sichere Datenzugriffe**: Geschützte Nutzung interner Unternehmensdaten (FAQs, Produktdaten, Dokumentationen)
- **Einfache Integration**: Schnelle Implementierung ohne umfangreiche IT-Kenntnisse

## Technische Details

Diese Landing Page wurde mit modernen Web-Technologien entwickelt:

- **Vue.js 3**: Frontend-Framework mit Composition API
- **Vite**: Schnelles Build-Tool und Entwicklungsserver
- **Tailwind CSS**: Utility-First CSS-Framework für responsives Design
- **Responsive Design**: Optimiert für alle Geräte von Mobiltelefonen bis Desktop-PCs
- **Animationen**: Sanfte Scroll- und UI-Animationen für ein ansprechendes Nutzererlebnis

## Entwicklung

### Voraussetzungen

- Node.js (v14 oder höher)
- npm oder yarn

### Installation

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Für Produktion bauen
npm run build
```

## Deployment

Die Website wird über GitHub Pages bereitgestellt und ist unter [dsgvobot.de](https://dsgvobot.de) erreichbar.

### Deployment-Konfiguration

Dieses Projekt verwendet GitHub Actions für automatisches Deployment:

1. **Workflow-Datei**: `.github/workflows/deploy.yml` definiert den Deployment-Prozess
2. **Deployment-Prozess**:
   - Code wird aus dem privaten Repository gebaut
   - Build-Dateien werden in das öffentliche Repository gepusht
   - GitHub Pages stellt die Website bereit

### GitHub Pages Einrichtung

Nach dem ersten erfolgreichen Deployment:

1. Gehen Sie zu den Repository-Einstellungen auf GitHub
2. Scrollen Sie zum Abschnitt "GitHub Pages"
3. Wählen Sie den Branch `gh-pages` als Quelle
4. Geben Sie die benutzerdefinierte Domain `dsgvobot.de` ein
5. Aktivieren Sie "Enforce HTTPS" (sobald die DNS-Konfiguration abgeschlossen ist)

### DNS-Konfiguration

Für die Domain `dsgvobot.de` bei Strato:

1. **A-Records** für `dsgvobot.de` zu den GitHub Pages IP-Adressen:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
2. **CNAME-Record** für `www.dsgvobot.de` zu `johndola.github.io`

## Sicherheitshinweis

Für das Deployment zwischen Repositories wird ein Personal Access Token (PAT) benötigt:

1. Erstellen Sie ein PAT auf GitHub mit `repo`-Berechtigungen
2. Fügen Sie es als Repository Secret mit dem Namen `DEPLOY_TOKEN` hinzu

## Lizenz

Alle Rechte vorbehalten. Dieses Projekt und sein Inhalt sind urheberrechtlich geschützt.

## Kontakt

Bei Fragen oder Interesse an unseren Lösungen kontaktieren Sie uns über das Formular auf unserer Website oder direkt per E-Mail.
