//Write a function to define if the second string is an anagram of the first.
//Rearranging the letter of another ;

//validAnagram('anagram','nagaram');

function anagram(string1, string2){
  
    if(string1.length !== string2.length) return false
  
    let objectFreq1 = {}
    let objectFreq2 = {}
    
    for (let char of string1) {
    //   objectFreq1[char] = (objectFreq1[char] || 0) + 1
      objectFreq1[char] ? objectFreq1[char] +=1 : objectFreq1[char] = 1
    }
    for (let char of string2) {
      objectFreq2[char] = (objectFreq2[char] || 0) + 1
    }
    
    // for (let key in objectFreq1){
      
    //   if(!objectFreq2[key] || objectFreq2[key] !== objectFreq2[key]) return false
      
    // }
    console.log({objectFreq1, objectFreq2})
    
    return true
    
    
  }
  
  
  console.log(anagram('anagram', 'nagaram'))
  
  //Method 2

  function anagram2(first, second ) {
      if(first.length !== second.length) return false;
      
      const lookup = {}; //Object created
      for(let val of first) {
          lookup[val] ? lookup[val] +=1 : lookup[val] = 1
      }
      console.log(lookup)

      for(let val of second) {
          if(!lookup[val]) return false;
          else {
              lookup[val] -=1;
          }
      }
      return true
  }
  console.log(anagram2('anagram','nagaram'), 'is truue')

  function anagram2(first, second ) { 
    if(first.length !== second.length) return false;
    let counter = {};
    for(let letter of first) {
        counter[letter] = (counter[letter] || 0) + 1
        // counter[letter] ? counter[letter] +=1 : counter[letter]
        console.log(counter[letter])
    }
    for(let items of second) {
        if(!counter[items]) return false
        counter[items] -=1;
    }
    return true
}

    
console.log(anagram2('anagram','nagaram'), 'is truue')

// Time complexity is o(n)