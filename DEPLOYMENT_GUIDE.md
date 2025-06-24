# Deployment Guide für DSGVO-Bot

Diese Anleitung beschreibt, wie Sie das Deployment zwischen Ihrem privaten Repository (`dsgvo-bot-code`) und dem öffentlichen Repository (`dsgvo-bot`) einrichten.

## 1. Personal Access Token (PAT) erstellen

Um das Deployment zwischen Repositories zu ermöglichen, benötigen Sie ein Personal Access Token:

1. Gehen Sie zu [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Klicken Sie auf "Generate new token" (Classic)
3. Geben Sie einen aussagekräftigen Namen ein, z.B. "DSGVO-Bot Deployment"
4. Wählen Sie einen Ablaufzeitraum (empfohlen: 90 Tage oder länger)
5. Wählen Sie die folgenden Berechtigungen:
   - `repo` (vollständiger Zugriff)
   - `workflow` (optional, für Workflow-Bearbeitung)
6. Klicken Sie auf "Generate token"
7. **WICHTIG**: Kopieren Sie das generierte Token und speichern Sie es sicher. GitHub zeigt es nur einmal an!

## 2. Repository Secret hinzufügen

Fügen Sie das PAT als Secret in Ihrem privaten Repository hinzu:

1. Gehen Sie zu Ihrem privaten Repository `dsgvo-bot-code` auf GitHub
2. Klicken Sie auf "Settings" > "Secrets and variables" > "Actions"
3. Klicken Sie auf "New repository secret"
4. Name: `DEPLOY_TOKEN`
5. Value: Fügen Sie das kopierte PAT ein
6. Klicken Sie auf "Add secret"

## 3. GitHub Pages im öffentlichen Repository einrichten

Nach dem ersten erfolgreichen Deployment:

1. Gehen Sie zu Ihrem öffentlichen Repository `dsgvo-bot` auf GitHub
2. Klicken Sie auf "Settings" > "Pages"
3. Unter "Source", wählen Sie "Deploy from a branch"
4. Wählen Sie den Branch `gh-pages` und den Ordner `/ (root)`
5. Klicken Sie auf "Save"
6. Unter "Custom domain", geben Sie `dsgvobot.de` ein
7. Klicken Sie auf "Save"
8. Aktivieren Sie "Enforce HTTPS" (sobald die DNS-Konfiguration abgeschlossen ist)

## 4. DNS-Konfiguration bei Strato

Konfigurieren Sie die DNS-Einstellungen für `dsgvobot.de` bei Strato:

1. Loggen Sie sich in Ihr Strato-Konto ein
2. Navigieren Sie zur DNS-Verwaltung für `dsgvobot.de`
3. Erstellen Sie folgende A-Records:
   ```
   A-Record: dsgvobot.de -> 185.199.108.153
   A-Record: dsgvobot.de -> 185.199.109.153
   A-Record: dsgvobot.de -> 185.199.110.153
   A-Record: dsgvobot.de -> 185.199.111.153
   ```
4. Erstellen Sie folgenden CNAME-Record:
   ```
   CNAME-Record: www.dsgvobot.de -> johndola.github.io
   ```
5. Speichern Sie die Änderungen

**Hinweis**: DNS-Änderungen können bis zu 48 Stunden dauern, bis sie vollständig propagiert sind.

## 5. Manuelles Deployment auslösen

Um das erste Deployment manuell auszulösen:

1. Gehen Sie zu Ihrem privaten Repository `dsgvo-bot-code` auf GitHub
2. Klicken Sie auf "Actions"
3. Wählen Sie den Workflow "Deploy to GitHub Pages"
4. Klicken Sie auf "Run workflow"
5. Wählen Sie den Branch `main`
6. Klicken Sie auf "Run workflow"

## 6. Deployment-Status überprüfen

1. Gehen Sie zu "Actions" in Ihrem privaten Repository
2. Überprüfen Sie den Status des laufenden Workflows
3. Nach erfolgreichem Deployment sollte Ihre Website unter `dsgvobot.de` erreichbar sein

## Fehlerbehebung

- **Workflow-Fehler**: Überprüfen Sie die Logs in der Actions-Ansicht für detaillierte Fehlermeldungen
- **PAT-Probleme**: Stellen Sie sicher, dass das PAT die richtigen Berechtigungen hat und nicht abgelaufen ist
- **DNS-Probleme**: Verwenden Sie Tools wie [dnschecker.org](https://dnschecker.org), um die DNS-Propagation zu überprüfen
