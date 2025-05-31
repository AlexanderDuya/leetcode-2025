//need to return the indices of two numbers in an array that add up to the target. there is only 1 solution
//initial thoughts: brute force then i can optimise it

function twoSum(nums: number[], target: number): number[] {
  let output: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  throw new Error("No two sum solution");
}
// throw new Error("No two sum solution"); had to add this because TS in vscode is more strict compared to leetcode
