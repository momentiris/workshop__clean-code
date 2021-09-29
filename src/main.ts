import './style.css';
const items = document.querySelectorAll('.cell');
const grid = document.querySelector('.grid');
const wins = ['012', '345', '678', '036', '147', '258', '048', '246'];
items.forEach((cell) => cell.addEventListener('click', handle));
// useG is a function that holds our game state
// it declares some variables and returns a function
// that we can call and then use that function scope
// to share our state in different parts of our application
const useG = () => {
  // p keeps track of who's turn it is.
  let p = true;

  // moves keeps track of which moves each player has made
  const moves: { x: string[]; o: string[] } = {
    x: [],
    o: [],
  };

  return () => {
    const setP = () => (p = !p);

    const setMoves = (p: 'x' | 'o', c: string) => moves[p].push(c);

    // r is a function that resets the game state
    const r = () => {
      moves['x'] = [];
      moves['o'] = [];
      p = false;
    };

    return { p, setP, moves, setMoves, r };
  };
};
// g calls useG, which returns some functions and variables
// that we use to keep track of our game state
const g = useG();

document.querySelector('#reset')?.addEventListener('click', () => {
  const { r } = g();
  r();
  const box = document.querySelector('.win-modal--content')!;
  // here we do a bunch of stuff to reset the UI
  box.classList.remove('active');
  box.querySelector('span')!.textContent = '';
  setTimeout(() => {
    document.querySelector('.win-modal')?.classList.remove('active');
    grid?.classList.remove('blur-sm');
  });

  items.forEach((cell) => {
    cell.textContent = '';
    cell.addEventListener('click', (event) => {
      handle(event);
    });
  });
});

function handle(event: Event) {
  const { p: P, setP, moves, setMoves } = g();

  const c = event.currentTarget as HTMLElement;
  const cId = c.dataset.id as string;
  const p = P ? 'x' : 'o';

  // this expression checks whether a players move has already been made
  // and then negates that value
  if (
    !Object.values(moves)
      .flatMap((x) => x)
      .some((x) => x === cId)
  ) {
    setMoves(p, cId);
    c.innerText = p;
    setP();
  }

  // this condition checks if a player has won
  if (wins.some((win) => Array.from(win).every((x) => moves[p].includes(x)))) {
    items.forEach((x) => x.removeEventListener('click', handle));
    document.querySelector('.win-modal')?.classList.add('active');
    grid?.classList.add('blur-sm');
    setTimeout(() => {
      const box = document.querySelector('.win-modal--content')!;

      box.classList.add('active');
      box.querySelector(
        'span'
      )!.textContent = `Player ${p.toUpperCase()} has won the game!`;
    });
  }
}
