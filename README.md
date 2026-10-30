# unblock-luberon-games

A minimal game library: browse, search and play games.

## Run it

```bash
docker compose -f docker-compose.base44.yml up -d
```

The app is served on http://localhost:3000 (Vite dev server, live reload).

## Adding a game

Edit `src/data/games.js`. Use `kind: 'embed'` with a `url` for an external
embeddable game, or `kind: 'builtin'` and register the component in
`src/components/GamePlayer.jsx` for a locally built one.
