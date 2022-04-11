var totalFruit = function(fruits) {
    let hash = {} , start = 0 , max = 0
     for(let i = 0 ; i < fruits.length ; i++){
         if (!(fruits[i] in hash)){ // check if the key is distinct
          hash[fruits[i]] = 0  // store the key: 0 for first occurence        
         }
         hash[fruits[i]] += 1
      while(Object.keys(hash).length > 2){ // if number of keys are more than k 
          hash[fruits[start]] -= 1
          if (hash[fruits[start]] === 0){
              delete hash[fruits[start]]
          }
          start++ // advance the start aka shrink the window
       }  
      max = Math.max(max , i - start+1)  
      }
   return max
  }