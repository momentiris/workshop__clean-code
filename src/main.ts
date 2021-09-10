import './style.css'

const items = document.querySelectorAll<HTMLDivElement>('.cell')
const grid = document.querySelector<HTMLDivElement>('.grid')

const wins = ['012', '345', '678', '036', '147', '258', '048', '246']

const moves: { x: string[]; o: string[] } = {
  x: [],
  o: [],
}

const gameState = () => {
  let p = false

  return () => {
    const setP = () => {
      p = !p
    }

    return [p, setP] as [boolean, () => void]
  }
}

const useGame = gameState()

const handle = (event: Event) => {
  const [isXPlayer, setPlayer] = useGame()
  const cell = event.currentTarget as HTMLDivElement
  const p = isXPlayer ? 'x' : 'o'

  moves[p].push(cell.dataset.id as string)
  cell.innerText = p

  if (wins.some((win) => Array.from(win).every((x) => moves[p].includes(x)))) {
    console.log(`${p} has won the game!`)
    items.forEach((x) => x.removeEventListener('click', handle))
    grid?.classList.add('blur-sm')
  }

  setPlayer()
}

items.forEach((cell) => cell.addEventListener('click', handle))
