#!/bin/bash
# GoldSilverSelect deploy script
# Usage: ./deploy.sh "commit message"
#
# Stage your changes explicitly first (git add <files>) — this script does
# NOT run `git add -A` or `git add .`, so untracked/unintended files never
# ship by accident. If nothing is staged, the commit below fails clearly.

set -e

MSG="${1:-update}"

# --- Branch check: refuse to run off any branch other than main ---
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "Error: refusing to deploy — current branch is '$CURRENT_BRANCH', not 'main'."
  echo "Switch to main before deploying: git checkout main"
  exit 1
fi

# --- Nothing staged? Fail clearly instead of an opaque git error. ---
if git diff --cached --quiet; then
  echo "Error: nothing staged. Stage the files you want to deploy first:"
  echo "  git add <files>"
  exit 1
fi

# --- Blocklist: refuse to commit secrets, credentials, or oversized files ---
BLOCKED=""
while IFS= read -r f; do
  [ -z "$f" ] && continue
  base=$(basename "$f")
  case "$base" in
    # Templates are meant to be committed — they carry variable NAMES, never
    # values. Listed explicitly and matched before the .env* deny below, so the
    # rule stays deny-by-default: anything not named here (.env, .env.local,
    # .env.production, .env.anything) is still blocked.
    .env.example|.env.sample|.env.template) ;;
    .env*) BLOCKED="${BLOCKED}  $f (matches .env*)"$'\n' ;;
    *.pem) BLOCKED="${BLOCKED}  $f (matches *.pem)"$'\n' ;;
    *.key) BLOCKED="${BLOCKED}  $f (matches *.key)"$'\n' ;;
    *credentials*) BLOCKED="${BLOCKED}  $f (matches *credentials*)"$'\n' ;;
  esac
  case "$f" in
    node_modules/*|*/node_modules/*) BLOCKED="${BLOCKED}  $f (under node_modules/)"$'\n' ;;
  esac
  SIZE=$(git cat-file -s ":$f" 2>/dev/null || echo 0)
  if [ "$SIZE" -gt 5242880 ]; then
    BLOCKED="${BLOCKED}  $f (${SIZE} bytes, exceeds 5MB)"$'\n'
  fi
done <<< "$(git diff --cached --name-only)"

if [ -n "$BLOCKED" ]; then
  echo "Error: refusing to commit — blocked file(s) staged:"
  printf '%s' "$BLOCKED"
  echo "Unstage with: git restore --staged <file>"
  exit 1
fi

# --- Commit ---
git commit -m "$MSG"

# --- Fetch and verify we're not behind/diverged before pushing ---
git fetch origin
LOCAL=$(git rev-parse main)
REMOTE=$(git rev-parse origin/main 2>/dev/null || echo "")
BASE=$(git merge-base main origin/main 2>/dev/null || echo "")

if [ -n "$REMOTE" ] && [ "$LOCAL" != "$REMOTE" ]; then
  if [ "$LOCAL" = "$BASE" ]; then
    echo "Error: local main is behind origin/main. Pull and rebase manually before deploying."
    exit 1
  elif [ "$REMOTE" != "$BASE" ]; then
    echo "Error: local main has diverged from origin/main. Pull and rebase manually before deploying."
    exit 1
  fi
fi

git push -u origin main

echo ""
echo "Pushed to GitHub. Vercel will auto-deploy."
echo "Check: https://vercel.com/malulo2025s-projects"
echo "Site: https://goldsilverselect.com"
