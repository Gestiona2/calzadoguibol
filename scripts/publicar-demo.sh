#!/usr/bin/env bash
# Publica la demo en https://demos.emp2web.com/calzadoguibol
#
# Uso (desde cualquier carpeta):  bash scripts/publicar-demo.sh
#
# Compila el sitio y sube SOLO el resultado a la rama gh-pages.
# La rama main conserva el código; GitHub Pages sirve gh-pages.
# Las republicaciones agregan un commit encima de la versión publicada: nunca
# se borra el historial.
set -euo pipefail
cd "$(dirname "$0")/.."

echo "→ Compilando…"
npm run build

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
cp -a dist/. "$tmp/"
touch "$tmp/.nojekyll"

cd "$tmp"
git init -q -b gh-pages
git remote add origin https://github.com/Gestiona2/calzadoguibol.git
git add -A

tree="$(git write-tree)"
publicada="$(git ls-remote origin refs/heads/gh-pages | awk '{print $1}')"
mensaje="Publicar demo $(date '+%Y-%m-%d %H:%M')"

if [ -n "$publicada" ]; then
  git fetch -q --depth=1 origin gh-pages
  commit="$(git -c user.name="Gestiona2" -c user.email="gestiona2@users.noreply.github.com" \
    commit-tree "$tree" -p "$publicada" -m "$mensaje")"
else
  commit="$(git -c user.name="Gestiona2" -c user.email="gestiona2@users.noreply.github.com" \
    commit-tree "$tree" -m "$mensaje")"
fi

git update-ref refs/heads/gh-pages "$commit"
git -c credential.helper= -c credential.helper='!gh auth git-credential' \
  push -q origin gh-pages

echo "✓ Publicado: https://demos.emp2web.com/calzadoguibol/"
echo "  GitHub tarda 1 a 2 minutos en reflejarlo. Recarga con Ctrl+F5."
