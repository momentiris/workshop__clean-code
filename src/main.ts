import './style.css'

const items = document.querySelectorAll<HTMLDivElement>('.cell')
const grid = document.querySelector<HTMLDivElement>('.grid')

items.forEach((cell) => cell.addEventListener('click', handle))
document.querySelector('#reset')?.addEventListener('click', () => {
  const { r } = g()
  r()
  const box = document.querySelector('.win-modal--content')!

  box.classList.remove('active')
  box.querySelector('span')!.textContent = ''
  setTimeout(() => {
    document.querySelector('.win-modal')?.classList.remove('active')
    grid?.classList.remove('blur-sm')
  })

  items.forEach((cell) => {
    cell.textContent = ''
    cell.addEventListener('click', (event) => {
      handle(event)
    })
  })
})

const win = (p: string) => {
  document.querySelector('.win-modal')?.classList.add('active')
  grid?.classList.add('blur-sm')
  setTimeout(() => {
    const box = document.querySelector('.win-modal--content')!

    box.classList.add('active')
    box.querySelector(
      'span'
    )!.textContent = `Player ${p.toUpperCase()} has won the game!`
  })
}

const wins = ['012', '345', '678', '036', '147', '258', '048', '246']

const useGameState = () => {
  let p = true

  const moves: { x: string[]; o: string[] } = {
    x: [],
    o: [],
  }

  return () => {
    const setP = () => {
      p = !p
    }

    const setMoves = (p: 'x' | 'o', c: string) => moves[p].push(c)

    const r = () => {
      moves['x'] = []
      moves['o'] = []
      p = false
    }

    return { p, setP, moves, setMoves, r }
  }
}

const g = useGameState()

function handle(event: Event) {
  const { p: P, setP, moves, setMoves } = g()

  const c = event.currentTarget as HTMLDivElement
  const cId = c.dataset.id as string
  const p = P ? 'x' : 'o'

  if (
    !Object.values(moves)
      .flatMap((x) => x)
      .some((x) => x === cId)
  ) {
    setMoves(p, cId)
    c.innerText = p
    setP()
  }

  if (wins.some((win) => Array.from(win).every((x) => moves[p].includes(x)))) {
    console.log(`${p} has won the game!`)
    items.forEach((x) => x.removeEventListener('click', handle))
    win(p)
  }
}
