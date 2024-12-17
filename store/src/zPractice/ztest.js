// So for exampe the first mine has x, y coordinates of 0,0 and a blast radius of 25

const mines = [
  [0, 0, 25],
  [5, 50, 500],
  [0, 24, 20],
  [20, 0, 20],
  [24, 24, 30]
]

// 1. Given a list of mines find the mine with the largest blast radius, return the first index of that mine

function lbr(m) {
  let bestMineRad = 0;
  let bestMineIndex = null;
  m.forEach((e, i) => {
    if (e[2] > bestMineRad) {
      bestMineRad = e[2]
      bestMineIndex = i;
      console.log(e)
    }
  })
  return bestMineIndex
}
console.log(lbr(mines))

// 2. Given a list of mines find the mine that explodes the most mines (i.e. most mines within it's blast radius), return the first index of that mine
//   - To calculate the distance between mines use the formula: a^2 + b^2 = c^2
//   - where `a`, `b`, `c` are the sides of a triangle

function mine() {
  let maxExplosiveMineIndex = -1;
  let explosionCount = 0;
  let maxExplosionCount = 0;
  let maxChainIndex = null;

  mines.forEach((e, i) => {
    let currentChain = 0;
    mines.forEach((j, index) => {
      if (e != j) {
        let xDis = j[0] - e[0];
        let yDis = j[1] - e[1];
        let zDis = (xDis ** 2 + yDis ** 2) ** 0.5;

        if (zDis <= e[2]) {
          explosionCount++
        }
      }

      if (explosionCount > maxExplosionCount) {
        maxExplosionCount = explosionCount;
        maxExplosiveMineIndex = i
      }
    })
    explosionCount = 0;
  });
  console.log(maxExplosionCount)

  return maxExplosiveMineIndex
}
console.log(mine())

/**
  M1 = Mine 1
  M2 = Mine 2

       a
  |--------M2
  |       /
b |     /
  |   /  c
  | /
  M1

  a = x2 - x1
  b = y2 - y1
  c = (a^2 + b^2)^0.5
  */

// 3. Given a list of mines find the mine that explodes the most mines with chain reactions
