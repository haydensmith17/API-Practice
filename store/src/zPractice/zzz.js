
/*
 Given a stream of characters, each time a new character is read from the stream, return if that character has been read so far.




   Bool haveSeenCharacterBefore(Character characterRead) {
       // do stuff
   }


Implement the hasReadCharacterBefore function and test it for various inputs.


Example stream aba


Input:  a
Output: false
Input:  b
Output: false
Input:  a
Output: true
*/


function stream(letters) {
    let read = []
    let tf = []

    letters.forEach(element => {
        if (!read.includes(element)) {
            read.push(element)
            tf.push(false)
        } else {
            tf.push(true)
        }
    });
    return tf
}

console.log(stream(['a', 'b', 'a']))


/*
Part 2: Given a stream of characters, write a function such that each time a new character is passed in from the stream it returns the first unique character that has been seen thus far
 
streamReader {


   Character firstUniqueCharacter(Character characterRead) {
       // do stuff
   }


}



Implement the firstUniqueCharacter function and test it for various inputs.
 
Example Stream: aba


Input 1:  a
Output 1: a 


Input 2:  b
Output 2: a 


Input 3:  a
Output 3: b
*/

function streamReader(letters) {
    let read = []
    let noDupes = []

    letters.forEach(element => {
        if (!read.includes(element)) {
            read.push(element)
        } else if (read.includes(element)) {
            noDupes = read.filter(e => e != element)
        }
    });
    return noDupes
}

console.log(streamReader(['a', 'b', 'a',]))