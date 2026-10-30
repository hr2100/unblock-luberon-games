export const CATEGORIES = ['All', 'Arcade', 'Puzzle', 'Action']

// Games shown on the home grid.
// - kind: 'builtin' renders a local component (component must be registered in GamePlayer.jsx)
// - kind: 'embed'   renders the game from `url` (an external embeddable game page)
// - kind: 'soon'    listed but not playable yet
export const GAMES = [
  {
    slug: 'reflex-tap',
    title: 'Reflex Tap',
    category: 'Arcade',
    emoji: '⚡',
    blurb: 'Hit the target before the clock runs out.',
    kind: 'builtin',
    component: 'ReflexTap',
  },
  {
    slug: 'block-slide',
    title: 'Block Slide',
    category: 'Puzzle',
    emoji: '🧩',
    blurb: 'Slide the blocks into place.',
    kind: 'soon',
  },
  {
    slug: 'sky-dash',
    title: 'Sky Dash',
    category: 'Action',
    emoji: '🚀',
    blurb: 'Sprint through the floating gates.',
    kind: 'soon',
  },
  {
    slug: 'bubble-pop',
    title: 'Bubble Pop',
    category: 'Arcade',
    emoji: '🫧',
    blurb: 'Clear every bubble you can reach.',
    kind: 'soon',
  },
  {
    slug: 'grid-runner',
    title: 'Grid Runner',
    category: 'Puzzle',
    emoji: '🔲',
    blurb: 'Find the path through the maze.',
    kind: 'soon',
  },
  {
    slug: 'comet-catch',
    title: 'Comet Catch',
    category: 'Action',
    emoji: '☄️',
    blurb: 'Catch what falls, dodge what burns.',
    kind: 'soon',
  },
]
