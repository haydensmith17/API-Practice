// Prompt:
// There is a field of mines on a standard x/y math plot. 
// Given a list of mines with their x coordinate, y coordinate, and blast radius solve
// the following question(s):

// Input Format
// [x, y, blast_radius]

// JSON Example
// [
// 	[0, 0, 25],
//   [0, -24, 20],
//   [20, 0, 20],
//   [24, 24, 30]
// ]

// So for exampe the first mine has x, y coordinates of 0,0 and a blast radius of 25

const mines = [
    [0, 0, 25],
    [0, 24, 20],
    [20, 0, 20],
    [24, 24, 30]
]

const mines2 = [
    [0, 3, 10],
    [-7, 14, 20],
    [12, 0, 25],
    [24, 10, 15]
]

// 1. Given a list of mines find the mine with the largest blast radius, return the first index of that mine

function largestBlastRadius(mines) {
    let currentMax = 0
    let currentMaxIndex = 0
    for (let i = 0; i < mines.length; i++) {
        const e = mines[i][2]

        if (e > currentMax) {
            currentMax = e
            currentMaxIndex = i
        }
    }
    console.log(currentMax)
    return currentMaxIndex
}

console.log(largestBlastRadius(mines))

//-------------------------

function lbr(mines) {
    let currentMax = 0;
    let currentMaxIndex = 0;
    mines.forEach((mine, index) => {
        const blastRadius = mine[2];
        if (blastRadius > currentMax) {
            currentMax = blastRadius;
            currentMaxIndex = index;
        }
        console.log(currentMaxIndex)
    });
    return currentMaxIndex
}

console.log(lbr(mines))

// 2. Given a list of mines find the mine that explodes the most mines (i.e. most mines within it's blast radius), return the first index of that mine
//   - To calculate the distance between mines use the formula: a^2 + b^2 = c^2
//   - where `a`, `b`, `c` are the sides of a triangle

function bestMineFinder(bombs) {
    
    let bestMine =
    {
        index: null,
        chain: 0
    };
    
    for (let i = 0; i < bombs.length; i++) {
        let mine1 = {
            x: bombs[i][0],
            y: bombs[i][1],
            radius: bombs[i][2]
        }
        let M1 = mine1
        let currentIndexChain = 0;
        console.log(M1)
        for (let j = 0; j < bombs.length; j++) {
            if (i != j) {
                let mine2 = {
                    x: bombs[j][0],
                    y: bombs[j][1],
                    radius: bombs[j][2]
                }
                let M2 = mine2

                let a = (M2.x - M1.x)
                let b = (M2.y - M1.y)
                let c = (a ** 2 + b ** 2) ** 0.5

                if (c < M1.radius) {
                    currentIndexChain++
                    console.log(M1)
                    console.log(currentIndexChain)
                }
            }
            if (currentIndexChain > bestMine.chain) {
                bestMine.chain = currentIndexChain
                bestMine.index = i
            }
        }
    }
    console.log(bestMine)
    return bestMine.index
}

console.log(bestMineFinder(mines2))

// -------------------------

function bmf(bombs) {
    let bestMine = {
        index: null,
        maxBlastCount: 0
    };

    // Loop through each mine
    bombs.forEach((mine1, i) => {
        const [x1, y1, radius1] = mine1;
        let blastCount = 0;


        bombs.forEach((mine2, j) => {
            if (i !== j) {
                const [x2, y2] = mine2;
                const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

                // Check if the second mine is within the blast radius of the first mine
                if (distance <= radius1) {
                    blastCount++;
                }
            }
        });

        // Update the best mine if this one has a higher blast count
        if (blastCount > bestMine.maxBlastCount) {
            bestMine.index = i;
            bestMine.maxBlastCount = blastCount;
        }
    });

    return bestMine.index;
}

console.log(bmf(mines));

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
