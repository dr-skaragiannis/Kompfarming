#!/usr/bin/env bash
# Regenerates derived binary assets used by the builds:
#   - src/assets/fonts.css  (Inter + Newsreader embedded as base64, Greek + Latin subsets)
#   - public/icon-*.png, apple-touch-icon.png
#   - public/og-image.jpg resized to 1200x630 with text overlay
set -e
cd "$(dirname "$0")/.."

# ---------- Fonts → base64 CSS ----------
if ! grep -q "data:font/woff2" src/assets/fonts.css 2>/dev/null; then
  UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
  curl -sA "$UA" "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&display=swap" -o /tmp/fonts.css
  node - <<'EOF'
const fs = require("fs");
const { execSync } = require("child_process");
const css = fs.readFileSync("/tmp/fonts.css", "utf8");
const blocks = css.split("/* ").slice(1).map((b) => "/* " + b).filter((b) => /^\/\* (latin|greek) \*\//.test(b));
let out = "/* Inter + Newsreader (Greek + Latin) — embedded so the site has no external font requests */\n";
for (const b of blocks) {
  const url = b.match(/url\((https:[^)]+)\)/)[1];
  const buf = execSync(`curl -sL "${url}"`, { maxBuffer: 10 * 1024 * 1024 });
  out += b.replace(url, "data:font/woff2;base64," + buf.toString("base64"));
}
fs.writeFileSync("src/assets/fonts.css", out);
console.log("fonts.css:", blocks.length, "faces,", (out.length / 1024).toFixed(0), "KB");
EOF
fi

# ---------- Icons ----------
mk(){ S=$1; OUT=$2; C=$((S/2));
 convert -size ${S}x${S} xc:none -fill '#1d1b17' -draw "circle $C,$C $C,0" \
  -stroke '#f4f0e6' -strokewidth $((S/22)) -fill none -draw "stroke-linecap round line $C,$((S*81/100)) $C,$((S*31/100))" \
  -draw "stroke-linecap round line $C,$((S*44/100)) $((S*34/100)),$((S*30/100))" -draw "stroke-linecap round line $C,$((S*44/100)) $((S*66/100)),$((S*30/100))" \
  -draw "stroke-linecap round line $C,$((S*60/100)) $((S*34/100)),$((S*46/100))" -draw "stroke-linecap round line $C,$((S*60/100)) $((S*66/100)),$((S*46/100))" \
  -draw "stroke-linecap round line $C,$((S*76/100)) $((S*34/100)),$((S*62/100))" -draw "stroke-linecap round line $C,$((S*76/100)) $((S*66/100)),$((S*62/100))" \
  "$OUT"; }
[ -f public/apple-touch-icon.png ] || mk 180 public/apple-touch-icon.png
[ -f public/icon-192.png ] || mk 192 public/icon-192.png
[ -f public/icon-512.png ] || mk 512 public/icon-512.png

# ---------- OG image (1200x630 with text overlay) ----------
if [ "$(identify -format '%wx%h' public/og-image.jpg 2>/dev/null)" != "1200x630" ]; then
  convert public/og-image.jpg -resize 1200x630^ -gravity center -extent 1200x630 \
    \( -size 1200x630 xc:none -fill 'rgba(29,27,23,0.42)' -draw 'rectangle 0,0 1200,630' \) -composite \
    -gravity northwest \
    -font DejaVu-Serif -pointsize 26 -fill '#e8c48a' -annotate +80+110 'KOMP FARMING  ·  ΦΑΡΣΑΛΑ, ΘΕΣΣΑΛΙΑ' \
    -font DejaVu-Serif -pointsize 66 -fill '#f4f0e6' -annotate +80+170 'Φακές Φαρσάλων,' \
    -annotate +80+250 'Όσπρια & Σιτηρά' \
    -font DejaVu-Sans -pointsize 28 -fill '#ece7da' -annotate +80+360 'Καθαρός σπόρος · Θεριζοαλωνισμοί · Ανάληψη καλλιέργειας' \
    -font DejaVu-Sans -pointsize 24 -fill '#e8c48a' -annotate +80+520 'kompfarming.gr   ·   +30 6977 594 071' \
    -quality 85 public/og-image.jpg
fi
echo "assets ready"
