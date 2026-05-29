# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:18.16.0-alpine AS builder

RUN apk add --no-cache git python3 make g++

WORKDIR /app

# Copy yarn release binary + config first for cache efficiency
COPY .yarn .yarn
COPY .yarnrc.yml package.json yarn.lock ./

# Copy all workspace manifests so yarn install resolves the full workspace graph
COPY apps/web/package.json apps/web/package.json
COPY packages/ packages/

ENV HUSKY=0
RUN yarn install --immutable

# Copy full source
COPY . .

# craco build needs git rev-parse; create a stub repo
RUN git init -q && \
    git config user.email "ci@railway.app" && \
    git config user.name "Railway" && \
    git add -A && \
    git commit -q --allow-empty -m "railway"

# ── Build-time env vars (baked into the JS bundle) ────────────────────────────
ARG REACT_APP_IS_UNISWAP_INTERFACE=true
ARG REACT_APP_MST_SUBGRAPH_URL
ARG REACT_APP_GIT_COMMIT_HASH=railway
ARG REACT_APP_WALLET_CONNECT_PROJECT_ID=c6c9bacd35afa3eb9e6cccf6d8464395
ARG REACT_APP_INFURA_KEY=099fc58e0de9451d80b18d7c74caa7c1
ARG REACT_APP_AWS_API_ENDPOINT=https://interface.gateway.uniswap.org/v1/graphql
ARG REACT_APP_AWS_REALTIME_ENDPOINT=wss://realtime.gateway.uniswap.org/graphql
ARG REACT_APP_STATSIG_PROXY_URL=https://interface.gateway.uniswap.org/v1/statsig-proxy
ARG REACT_APP_AMPLITUDE_PROXY_URL=https://interface.gateway.uniswap.org/v1/amplitude-proxy
ARG REACT_APP_UNISWAP_BASE_API_URL=https://interface.gateway.uniswap.org
ARG REACT_APP_UNISWAP_GATEWAY_DNS=https://interface.gateway.uniswap.org/v2
ARG REACT_APP_MOONPAY_PUBLISHABLE_KEY=pk_live_uQG4BJC4w3cxnqpcSqAfohdBFDTsY6E
ARG REACT_APP_MOONPAY_API=https://api.moonpay.com
ARG REACT_APP_FIREBASE_KEY=AIzaSyBcZWwTcTJHj_R6ipZcrJkXdq05PuX0Rs0

ENV REACT_APP_IS_UNISWAP_INTERFACE=$REACT_APP_IS_UNISWAP_INTERFACE \
    REACT_APP_MST_SUBGRAPH_URL=$REACT_APP_MST_SUBGRAPH_URL \
    REACT_APP_GIT_COMMIT_HASH=$REACT_APP_GIT_COMMIT_HASH \
    REACT_APP_WALLET_CONNECT_PROJECT_ID=$REACT_APP_WALLET_CONNECT_PROJECT_ID \
    REACT_APP_INFURA_KEY=$REACT_APP_INFURA_KEY \
    REACT_APP_AWS_API_ENDPOINT=$REACT_APP_AWS_API_ENDPOINT \
    REACT_APP_AWS_REALTIME_ENDPOINT=$REACT_APP_AWS_REALTIME_ENDPOINT \
    REACT_APP_STATSIG_PROXY_URL=$REACT_APP_STATSIG_PROXY_URL \
    REACT_APP_AMPLITUDE_PROXY_URL=$REACT_APP_AMPLITUDE_PROXY_URL \
    REACT_APP_UNISWAP_BASE_API_URL=$REACT_APP_UNISWAP_BASE_API_URL \
    REACT_APP_UNISWAP_GATEWAY_DNS=$REACT_APP_UNISWAP_GATEWAY_DNS \
    REACT_APP_MOONPAY_PUBLISHABLE_KEY=$REACT_APP_MOONPAY_PUBLISHABLE_KEY \
    REACT_APP_MOONPAY_API=$REACT_APP_MOONPAY_API \
    REACT_APP_FIREBASE_KEY=$REACT_APP_FIREBASE_KEY \
    ESLINT_NO_DEV_ERRORS=true \
    NODE_OPTIONS=--max-old-space-size=4096

RUN yarn web build:production

# ── Stage 2: Serve ─────────────────────────────────────────────────────────────
FROM node:18.16.0-alpine

RUN npm install -g serve@14

WORKDIR /app
COPY --from=builder /app/apps/web/build ./build

# Railway injects $PORT; fall back to 3000 for local testing
CMD ["sh", "-c", "serve build -s -l ${PORT:-3000}"]
