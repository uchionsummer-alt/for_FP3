#!/usr/bin/env bash
set -euo pipefail
cd /workspace/for_FP3
node -e "if (Number(process.versions.node.split('.')[0]) < 22) throw new Error('Node.js 22 or later is required')"
npm ci --ignore-scripts --no-audit --no-fund --prefer-offline
npm run build
npm test
