//Input: [2, 1, 5, 1, 3, 2], k=3 
//Output: 9
//Explanation: Subarray with maximum sum is [5, 1, 3].

var maxSum = function(nums , k){
    let start = 0 , maxSum = 0 , windowsum = 0
    for (let i = 0 ; i < nums.length; i++ ){
       windowsum += nums[i]
       if (nums[i] >= k-1){ // reaching window max size 
          maxSum = Math.max(maxSum , windowsum)
          windowsum -= nums[start]
          start++ // increase counter to the next start of window
       }
    }
    return maxSum 
}
// time [n] , space [1]
console.log(maxSum([2, 1, 5, 1, 3, 2], 3))
