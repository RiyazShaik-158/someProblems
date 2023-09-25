const maximumProduct = function (nums) {
    var product = 1;
    for(var i = 0 ; i < nums.length ; i++){
        product *= nums[i];
    }
    return product;    
}
console.log(maximumProduct([2,-1,3]))

