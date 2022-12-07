var isValid = function(s) {
    let stack = [];
    for(let val of s) {
        let top = stack[stack.length - 1]
        console.log(top, 'top')
        if(val === '(' || val === '{' || val === '[') {
            stack.push(val);
            console.log(val)
        }else if(val === ')' && top === '(') {
            stack.pop();
        }else if(val === '}' && top === '{') {
            stack.pop();
        }
        else if(val === ']' && top === '[') {
            stack.pop();
        }else {
            return false
        }
    }
    return stack.length === 0
};

console.log(isValid('()[]{}'))