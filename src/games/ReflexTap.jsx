import { useEffect, useRef, useState } from 'react'

const ROUND_MS = 15000

export default function ReflexTap() {
  const [running, setRunning] = useState(false)
  const [score, setScore] = useState(0)
  const [left, setLeft] = useState(ROUND_MS)
  const [target, setTarget] = useState({ x: 50, y: 50 })
  const areaRef = useRef(null)

  useEffect(() => {
    if (!running) return
    const timer = setInterval(() => {
      setLeft((prev) => {
        if (prev <= 100) {
          setRunning(false)
          return 0
        }
        return prev - 100
      })
    }, 100)
    return () => clearInterval(timer)
  }, [running])

  function moveTarget() {
    setTarget({ x: 8 + Math.random() * 84, y: 10 + Math.random() * 74 })
  }

  function start() {
    setScore(0)
    setLeft(ROUND_MS)
    setRunning(true)
    moveTarget()
  }

  function hit() {
    if (!running) return
    setScore((s) => s + 1)
    moveTarget()
  }

  return (
    <div className="reflex">
      <div className="reflex__bar">
        <span>Score: <strong>{score}</strong></span>
        <span>Time: <strong>{(left / 1000).toFixed(1)}s</strong></span>
      </div>
      <div className="reflex__area" ref={areaRef}>
        {running ? (
          <button
            className="reflex__target"
            type="button"
            onClick={hit}
            style={{ left: `${target.x}%`, top: `${target.y}%` }}
            aria-label="Tap the target"
          >
            <span aria-hidden="true">⚡</span>
          </button>
        ) : (
          <div className="reflex__overlay">
            <p>{score > 0 ? `You hit ${score} targets!` : 'Tap the target as fast as you can.'}</p>
            <button className="btn" type="button" onClick={start}>
              {score > 0 ? 'Play again' : 'Start'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
