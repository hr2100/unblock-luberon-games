export default function GameCard({ game, onPlay }) {
  return (
    <button className="card" type="button" onClick={() => onPlay(game)}>
      <span className="card__emoji" aria-hidden="true">{game.emoji}</span>
      <span className="card__body">
        <span className="card__title">{game.title}</span>
        <span className="card__blurb">{game.blurb}</span>
        <span className="card__meta">
          <span className="tag">{game.category}</span>
          {game.kind === 'soon' && <span className="tag tag--muted">Coming soon</span>}
        </span>
      </span>
    </button>
  )
}
