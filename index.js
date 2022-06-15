// print utility
const print = (value) => console.log(value)

// user scores
const scores = [99, 80, 77, 86, 50, 33, 76, 90, 54, 66]

// TODO: IDENTIFY THE TIME COMPLEXITY OF THE FOLLOWING ARRAY METHODS
// 1: PUSH
//scores.push(25)
// it is constant time

// 2: POP
//scores.pop()
// it is constant time

// 3: UNSHIFT
//scores.unshift(88)

// it is linear time 

// 4: forEach
//scores.forEach((element) => {
//print(element)
//})
// it is linear time 

// TODO: CREATE A SIMPLE SEARCH ALGORITHM THAT USES LINEAR TIME COMPLEXITY
// const findValueLinear = (value) => {
//     // return the index of the value if present, return -1 if absent
//     let index = [];
//     for (let i = 0; i < scores.length; i++) {
//         const score = scores[i]
//         if (score === value) {
//             index.push(i);
//             return index
//         }
//     }
//     return index
// }
// //print(`190 is at index: ${findValueLinear(190)}`)
//print(`76 is at index: ${findValueLinear(76)}`)


// TODO: CREATE A SIMPLE SEARCH ALGORITHM THAT USES LOGARITHMIC TIME COMPLEXITY

scores.sort()
const findValueLog = (value, top, bottom) => {
    let index = -1;
    const halfops = (top + bottom) / 2;
    const half = parseInt(halfops);
    const valBefore = scores[half - 1];
    if (value < valBefore) {
        //tophalf
        findValueLog(value, half - 1, 0);
    } else {
        if (value === scores[half]) {
            return half
        }
        findValueLog(value, scores.length - 1, 0);
    }

    return index

    // return the index of the value if present, return -1 if absent
}
print(`90 is at index: ${findValueLog(90, scores.length -1 , 0 )}`)
print(`33 is at index: ${findValueLog(33, scores.length -1 , 0)}`)