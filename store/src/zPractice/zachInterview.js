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

// 1. Given a list of mines find the mine with the largest blast radius, return the first index of that mine



// 2. Given a list of mines find the mine that explodes the most mines (i.e. most mines within it's blast radius), return the first index of that mine
//   - To calculate the distance between mines use the formula: a^2 + b^2 = c^2
//   - where `a`, `b`, `c` are the sides of a triangle



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
