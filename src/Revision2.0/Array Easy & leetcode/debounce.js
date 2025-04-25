let counter = 0;

const getData = () => {
    // Mocking the API call
    console.log("fetching data", counter++);
}

const debounceImplement = (fn, d) => {
    let timer;
    return function (...args) {
        clearTimeout(timer); // Clear any existing timer
        timer = setTimeout(() => {
            fn.apply(this, args); // Call the function after the delay
        }, d);
    }
}

const betterFunction = debounceImplement(getData, 300);
