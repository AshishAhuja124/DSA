const validParenthesis = (str) => {
    let stack = [];

    for(let val of str) {
        let top = stack[stack.length - 1];

        if(['(', '{', '['].includes(val)) {
            stack.push(val);
        } else if(val === ')' && top === '(') {
            stack.pop(val);
        }
        else if (val === '}' && top === '{') {
            stack.pop();
        }
        else if (val === ']' && top === '[') {
            stack.pop();
        }
        else return false;    
    }
    return stack.length === 0


}

console.log(validParenthesis('()[]{}}'))