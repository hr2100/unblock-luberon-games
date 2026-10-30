import ReflexTap from '../games/ReflexTap.jsx'

const BUILTINS = { ReflexTap }

export default function GamePlayer({ game }) {
  if (game.kind === 'builtin') {
    const Builtin = BUILTINS[game.component]
    if (Builtin) return <Builtin />
  }

  if (game.kind === 'embed' && game.url) {
    return (
      <iframe
        className="player__frame"
        src={game.url}
        title={game.title}
        allow="fullscreen; autoplay"
      />
    )
  }

  return (
    <div className="player__placeholder">
      <p className="player__placeholder-title">{game.title} isn’t wired up yet.</p>
      <p>
        Add this game in <code>src/data/games.js</code> as{' '}
        <code>{'{ kind: \'embed\', url: \'https://…\' }'}</code> to play it here.
      </p>
    </div>
  )
}
