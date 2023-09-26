// function singleNumber(nums) {
//     let newArr = [];
//     for(var i = 0 ; i < nums.length ; i++){
//         if(nums.indexOf(nums[i]) !== i){
//             newArr.push(nums[i])
//         }
//     }
//     (nums.filter(item => {
//     if(!newArr.includes(item)) return item
//     }));
//     return nums[0];

// }

// console.log(singleNumber([1,1,2,2,4])); // 4


// easier method:

function singleNumber(nums) {
    let result = 0;
    for(var i = 0; i < nums.length ; i++){
        result ^= i
    }

    return result;
}
console.log(singleNumber([1,1,2,2,4]));

// if (a === b) ; a ^ b = 0;
// if (a !== b) ; a ^ b = 1;
// in [1,1,2,2,4], as all are paired, remaining one gives 2 ^ 4 as 1 in bin. so 4