import { useMemo, useState } from 'react'
import GameCard from './components/GameCard.jsx'
import GamePlayer from './components/GamePlayer.jsx'
import { CATEGORIES, GAMES } from './data/games.js'

export default function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [active, setActive] = useState(null)

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return GAMES.filter((game) => {
      const matchesCategory = category === 'All' || game.category === category
      const matchesQuery = !q || game.title.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  if (active) {
    return (
      <div className="shell">
        <header className="topbar">
          <button className="btn btn--ghost" type="button" onClick={() => setActive(null)}>
            ← All games
          </button>
          <h1 className="topbar__title">{active.title}</h1>
        </header>
        <main className="player">
          <GamePlayer game={active} />
        </main>
      </div>
    )
  }

  return (
    <div className="shell">
      <header className="topbar">
        <h1 className="topbar__title">Luberon Games</h1>
        <span className="topbar__count">{GAMES.length} games</span>
      </header>

      <main>
        <section className="controls">
          <input
            className="search"
            type="search"
            placeholder="Search games…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search games"
          />
          <div className="chips">
            {CATEGORIES.map((name) => (
              <button
                key={name}
                type="button"
                className={`chip${category === name ? ' chip--active' : ''}`}
                onClick={() => setCategory(name)}
                aria-pressed={category === name}
              >
                {name}
              </button>
            ))}
          </div>
        </section>

        {visible.length === 0 ? (
          <p className="empty">No games match that search.</p>
        ) : (
          <ul className="grid">
            {visible.map((game) => (
              <li key={game.slug}>
                <GameCard game={game} onPlay={setActive} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  )
}
