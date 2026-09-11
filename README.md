# DICE DUEL Online

## Supabase einrichten
1. Supabase öffnen: https://supabase.com/
2. Neues Projekt erstellen.
3. SQL Editor öffnen.
4. `schema.sql` komplett ausführen.
5. Project Settings → API: Project URL und anon/publishable key kopieren.
6. Diese Werte in `config.js` eintragen.
7. Alle Dateien zu GitHub hochladen und GitHub Pages aktivieren.

**Wichtig:** Niemals den `service_role`/Secret Key in die Website eintragen.

## GitHub Pages
Repository → Settings → Pages → Deploy from branch → `main` → `/ (root)`.

Die Seite erzeugt Raum-Codes und Einladungslinks wie:
`https://DEINE-SEITE.github.io/?room=X7K4P9`
