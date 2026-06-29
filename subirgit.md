# Subir sitio Vite + React a GitHub Pages

Guía exacta basada en el proceso real de este proyecto.
Sigue los pasos en orden. No saltes ninguno.

---

## Antes de empezar

Confirma que tienes:
- El proyecto corriendo en local con `npm run dev`
- Un repositorio en GitHub ya creado (con el código fuente subido)
- El nombre exacto de tu repositorio a la mano (distingue mayúsculas/minúsculas)

En esta guía el repo de ejemplo es `Tuz-web-akadem` del usuario `Capy-Bolillo`.
Sustituye esos valores por los tuyos en cada paso.

---

## Paso 1 — Editar `vite.config.js`

Abre el archivo `vite.config.js` en la raíz del proyecto.
Agrega la línea `base` como primera propiedad dentro de `defineConfig`:

```js
export default defineConfig({
  base: '/Tuz-web-akadem/',   // ← pon aquí el nombre EXACTO de tu repo en GitHub
  plugins: [react()],
  // ...el resto de tu configuración queda igual
});
```

**Importante:** el nombre del repo distingue mayúsculas. Si tu repo se llama
`mi-sitio`, escribe `/mi-sitio/`. Si se llama `MiSitio`, escribe `/MiSitio/`.

---

## Paso 2 — Crear `public/.nojekyll`

Desde la raíz del proyecto, crea la carpeta `public/` si no existe,
y dentro un archivo llamado `.nojekyll` (vacío, sin contenido, sin extensión):

```
mi-proyecto/
├── public/
│   └── .nojekyll     ← archivo vacío
├── src/
├── vite.config.js
└── ...
```

Puedes crearlo con cualquier editor. Solo tiene que existir, no necesita contenido.

Sin este archivo, GitHub procesa tu sitio con Jekyll y puede romper los assets.

---

## Paso 3 — Crear el workflow de GitHub Actions

Crea las carpetas y el archivo exactamente en esta ruta:

```
.github/
└── workflows/
    └── deploy.yml
```

Contenido exacto del archivo `deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [master]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Si tu rama principal se llama `main` en lugar de `master`,
cambia la línea `branches: [master]` por `branches: [main]`.

---

## Paso 4 — Manejo de imágenes

Este es el punto donde más se comete errores.

### Imágenes en JSX (logo, íconos, imágenes sueltas)

Impórtalas como módulo en el componente que las usa:

```jsx
import miLogo from '@assets/logo.png';

export default function Nav() {
  return <img src={miLogo} />;
}
```

Vite las procesa automáticamente y ajusta el path. Esto funciona siempre.

### Imágenes dentro de arrays o archivos de datos

Si tienes imágenes en un array (equipo, servicios, galería, etc.),
**impórtalas al inicio del archivo de datos** y úsalas como variables:

```js
// src/data/index.js

import tuzImg    from '@assets/person/tuz.webp';
import damarisImg from '@assets/person/damaris.webp';
import paulaImg  from '@assets/person/paula.webp';
import keniaImg  from '@assets/person/kenia.webp';

export const TEAM = [
  { name: 'Ángel',   img: tuzImg },
  { name: 'Damaris', img: damarisImg },
  { name: 'Paula',   img: paulaImg },
  { name: 'Kenia',   img: keniaImg },
];
```

**Nunca hagas esto** — los strings con rutas absolutas no funcionan en GitHub Pages
porque ignoran el base path del repo:

```js
// ❌ ESTO FALLA EN GITHUB PAGES
export const TEAM = [
  { name: 'Ángel', img: '/assets/person/tuz.webp' },
];
```

### Dónde deben estar los archivos de imagen

Las imágenes que importas como módulo deben estar en la carpeta
que apunta tu alias `@assets` en `vite.config.js`:

```js
resolve: {
  alias: {
    '@assets': path.resolve(__dirname, 'assets'),
  },
},
```

En este caso, en la carpeta `assets/` de la raíz del proyecto.
**No es necesario copiarlas a `public/`.**

---

## Paso 5 — Hacer commit y push

Desde la terminal, en la raíz del proyecto:

```bash
git add vite.config.js
git add public/.nojekyll
git add .github/workflows/deploy.yml
git add src/data/index.js
git commit -m "Setup GitHub Pages deploy"
git push
```

---

## Paso 6 — Activar GitHub Pages en GitHub

1. Abre tu repositorio en GitHub
2. Haz clic en **Settings** (la última pestaña del menú superior)
3. En el menú lateral izquierdo, haz clic en **Pages**
4. Bajo **"Build and deployment"**, en **Source**, selecciona **GitHub Actions**
5. Guarda (no hay botón de guardar, el cambio se aplica solo al seleccionar)

Si dejas la opción en "Deploy from a branch", GitHub servirá el código fuente
directamente y el sitio no funcionará (verás errores de `src/main.jsx not found`).

---

## Paso 7 — Verificar el deploy

1. Ve a la pestaña **Actions** de tu repositorio en GitHub
2. Verás un workflow corriendo llamado "Deploy to GitHub Pages"
3. Espera ~2 minutos a que los dos jobs (`build` y `deploy`) terminen con palomita
4. Abre tu sitio en:

```
https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/
```

Para este proyecto:
```
https://capy-bolillo.github.io/Tuz-web-akadem/
```

Cada vez que hagas `git push` a `master`, el sitio se actualiza automáticamente.

---

## Errores frecuentes y solución

| Error en consola | Causa | Solución |
|---|---|---|
| `GET .../src/main.jsx 404` | Pages está en "Deploy from branch", no en "GitHub Actions" | Settings → Pages → GitHub Actions |
| `GET .../src/main.jsx 404` | El Action aún no ha terminado | Esperar y hacer hard refresh `Ctrl+Shift+R` |
| `GET .../assets/person/foto.webp 404` | Imagen referenciada como string absoluto | Importarla como módulo |
| El sitio carga pero se ve en blanco | Error de JS — revisar consola del navegador | Revisar imports y rutas |
| El sitio nunca se actualiza | Caché del navegador | Abrir en ventana de incógnito |

---

## Checklist final antes de hacer push

- [ ] `base: '/NOMBRE-REPO/'` agregado en `vite.config.js`
- [ ] Archivo `public/.nojekyll` existe (vacío)
- [ ] Archivo `.github/workflows/deploy.yml` existe con el contenido de esta guía
- [ ] Imágenes de arrays/datos importadas como módulos (no como strings)
- [ ] Commit hecho con todos los archivos anteriores
- [ ] Push subido a GitHub
- [ ] En GitHub: Settings → Pages → Source → **GitHub Actions** seleccionado
- [ ] Action terminó con palomita en la pestaña Actions
