//COntains duplicate using map
function dup(nums) {

    let myMap = new Map();
    for(const n of nums) {
        if(myMap.has(n)) return true;
        myMap.set(n, true);
    }
    return false
}

const res  = dup([1,2,3,1])
console.log(res);