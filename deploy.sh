#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

# Colors
ORANGE='\033[0;33m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

step() { echo -e "\n${ORANGE}▸${NC} $1"; }
ok()   { echo -e "  ${GREEN}✓${NC} $1"; }
fail() { echo -e "  ${RED}✗${NC} $1"; exit 1; }

# 1. Lint
step "Running lint..."
npm run lint
ok "Lint passed"

# 2. Commit (if there are changes)
step "Checking for changes..."
if [[ -n "$(git status --porcelain)" ]]; then
    git add app/ components/ lib/ public/ scripts/ \
           package.json package-lock.json next.config.mjs \
           tsconfig.json postcss.config.mjs mdx-components.tsx \
           eslint.config.mjs .gitignore CLAUDE.md deploy.sh \
           cjgaldescom.service .env 2>/dev/null || true
    git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    ok "Committed"
else
    ok "Working tree clean"
fi

# 3. Bump patch version
step "Bumping version..."
OLD_VER=$(node -p "require('./package.json').version")
NEW_VER=$(npm version patch --no-git-tag-version)
git add package.json package-lock.json 2>/dev/null || git add package.json
git commit -m "bump: ${NEW_VER}" --allow-empty
ok "${OLD_VER} → ${NEW_VER}"

# 4. Build (before push — fail fast)
step "Building production..."
npm run build
ok "Build complete"

# 5. Push
step "Pushing to origin..."
git push
ok "Pushed"

# 6. Restart systemd service
step "Restarting cjgaldescom service..."
sudo systemctl restart cjgaldescom
ok "Systemd service restarted"

# 7. Health check
step "Checking logs..."
sleep 2
if sudo journalctl -u cjgaldescom --since "5 seconds ago" --no-pager | grep -q "Ready"; then
    ok "Server is ready"
else
    sudo journalctl -u cjgaldescom --since "10 seconds ago" --no-pager
    fail "Server may not have started cleanly — check logs above"
fi

# 8. HTTP check
step "Testing HTTP response..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 http://localhost:32223)
if [[ "$STATUS" == "200" ]]; then
    ok "http://localhost:32223 → ${STATUS}"
else
    fail "http://localhost:32223 → ${STATUS}"
fi

VER=$(node -p "require('./package.json').version")
echo -e "\n${CYAN}🔥 Deployed v${VER} — cjgaldes.com is live${NC}\n"
