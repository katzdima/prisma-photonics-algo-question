function getTargetIndex(nums, target) {
 const helper = {};
 // add your code here
 for (let i = 0; i < nums.length; i++) {
   const wanted = target - nums[i];
 
   if (helper[wanted] !== undefined) {
     return [i, helper[wanted]];
   }
 
   helper[nums[i]] = i;
 }
 return [];
}
 
console.log("res: ", getTargetIndex([13, 4, 7, 2, -15, 13], 9));
