// Input: [2, 1, 5, 2, 3, 2], S=7 
// Output: 2
// Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

var minSubArrayLen = function(target, nums) {
    let min = Infinity , sum = 0 , size = 0  , start = 0
    for (let i = 0 ; i < nums.length ; i++){
        sum += nums[i]
        while (sum >= target){
            min = Math.min(i - start + 1 , min)  // i - start + 1 ==> calculate window size
            sum -= nums[start]
            start++
            
        }   
        
  }
  return min === Infinity? 0: min
};
// time [n] , space [1]
// console.log(minSubArrayLen([3,4,1,1,6],8 ))