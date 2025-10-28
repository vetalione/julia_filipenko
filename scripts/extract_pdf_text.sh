#!/usr/bin/env bash
set -euo pipefail
PDF_FILE="$1"
OUT_FILE="$2"
if ! command -v pdftotext >/dev/null 2>&1; then
  echo "pdftotext (poppler) не найден. Установите через Homebrew: brew install poppler" >&2
  exit 1
fi
mkdir -p "$(dirname "$OUT_FILE")"
pdftotext -layout -enc UTF-8 "$PDF_FILE" "$OUT_FILE"
echo "Saved to $OUT_FILE"