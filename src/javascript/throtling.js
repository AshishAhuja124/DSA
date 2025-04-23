const throttle = (fn, limit) => {
    let flag = true;

    return function(...args) {
        if(flag) {
            fn.apply(this, args);
            flag = false
            setTimeout(() => {
                flag = true
            }, limit)
        }
    }
}