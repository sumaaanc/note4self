
const myArr = [0,1,2,3,4,5,6]

// console.log(myArr.slice(1,4));   //doesnt manipulates the original array
// console.log("A",myArr);

// console.log(myArr.splice(1,4)); //manipulates the original array
// console.log("B", myArr);

//other methods 

//shift, unshift -> at the beginning of the array
//push,pop -> at the end of the array

const mixType = [1,3,4, "hi", "hello", true ]

// console.log(mixType)
// console.log(mixType[4])
// console.log(mixType[5]);

// function loopF(){
//     const newArr = [1,2,3,4,5,6,7,8,9]

//     for(let i= 0; i<= newArr.length - 1; i++){
//         console.log(newArr[i])
//     }
// }

// loopF();

// sorting array in ascending order 

function sortArr(){
    const evenNum = [2,4,8,6,22,12,46,32]
    for(let i=0; i<= evenNum.length-1;i++){
        if(evenNum[i] > evenNum[i+1]){
            let temp = evenNum[i];
            evenNum[i]= evenNum[i+1];
            evenNum[i+1] = temp
        } 
    }
    console.log("Sorted array is: ", evenNum)
}
sortArr()
