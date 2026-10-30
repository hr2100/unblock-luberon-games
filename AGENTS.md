# Agent notes

## Running the app

- `docker compose -f docker-compose.base44.yml up -d` — single `web` service on
  host port 3000, Vite dev server from the bind-mounted source (live reload).
- There is no Dockerfile on purpose: the service uses the plain `node:22-alpine`
  image and installs dependencies on startup into the named volume
  `web_node_modules`. `node_modules` therefore lives in Docker, not on the host —
  run scripts inside the container, e.g.
  `docker compose -f docker-compose.base44.yml exec -T web npm run build`.
- `vite.config.js` sets `server.watch.usePolling` because bind mounts in the
  sandbox do not deliver fs events; without it edits do not reload.
- The preview proxy host is allowlisted via the platform-provided
  `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` variable (passed through bare in
  compose), so no hardcoded hostnames are needed.

## Verifying

- `curl -s http://localhost:3000/` should return the `index.html` shell, and the
  dev server logs should show live compilation (not a prebuilt bundle).
- In the browser: home lists 6 games, search and category chips filter the grid,
  clicking `Reflex Tap` opens the play view and its Start button runs a 15s round.

## Content model

Games live in `src/data/games.js`. `kind: 'builtin'` maps to a component in
`src/components/GamePlayer.jsx`; `kind: 'embed'` needs a `url`; `kind: 'soon'`
is listed but shows the placeholder panel.
