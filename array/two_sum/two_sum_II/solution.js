//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
var twoSum = function(nums, target) {
    let n=nums.length;
    let i=0;
    let  j=n-1;
    while(i<j){
        if(nums[i]+nums[j]==target){
            return [i+1,j+1];

        }
        else if(nums[i]+nums[j]>target){
            j--;
        }
        else{i++;
        }
    }

};