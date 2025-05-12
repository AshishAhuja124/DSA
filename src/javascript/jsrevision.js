//debounce

let counter = 0;
const getData = () => {
    //mock api call
    console.log("api called", counter++)
}

const debounceIm = (fn, d) => {
    let timer = 0;

    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, d)
    }
}

const betterFunction = debounceIm(getData, 300)