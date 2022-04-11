// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".
var longestSubstring = function(str ,k){
   let hash = {} , start = 0 , max = 0
   for(let i = 0 ; i < str.length ; i++){
       if (!(str[i] in hash)){ // check if the key is distinct
        hash[str[i]] = 0  // store the key: 0 for first occurence        
       }
       hash[str[i]] += 1
    while(Object.keys(hash).length > k){ // if number of keys are more than k 
        hash[str[start]] -= 1
        if (hash[str[start]] === 0){
            delete hash[str[start]]
        }
        start++ // advance the start aka shrink the window
     }  
    max = Math.max(max , i - start+1)  
    }
 return max
}
console.log(longestSubstring('araaci', 2))