#!/bin/bash
# GoldSilverSelect deploy script
# Usage: ./deploy.sh "commit message"

set -e

MSG="${1:-update}"

git add -A
git commit -m "$MSG"
git push

echo ""
echo "Pushed to GitHub. Vercel will auto-deploy."
echo "Check: https://vercel.com/malulo2025s-projects"
echo "Site: https://goldsilverselect.com"
