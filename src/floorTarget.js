function flooring (arr,target) {
    let newArr = [];
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] <= target){
            // console.log(arr[i])
            newArr.push(arr[i]);
        }
    }
    console.log(newArr[newArr.length-1]) ;
}

flooring([2,3,4,5,9,14,16,18],5);