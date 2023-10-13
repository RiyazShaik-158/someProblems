let a = [1,1,2,2,4];
let newArr = [];
for(var i = 0 ; i < a.length ; i++){
    if(a.indexOf(a[i]) !== i){
        newArr.push(a[i])
    }
}
(a.filter(item => {
   if(!newArr.includes(item)) return item
}));