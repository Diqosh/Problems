let nums = [2, 7, 11, 15],
  target = 9;

const twoSum1 = (nums: number[], target: number): number[] | void => {
  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const secondNum = nums[j];
      if (firstNum + secondNum === target) return [i, j];
    }
  }
};

// const twoSum2 = (nums: number[], target: number): number[] | void => {
//   type NumAndItsIndexType = { num: number; index: number };

//   const myObj: NumAndItsIndexType[] = <NumAndItsIndexType>{}[];

//   for (let index = 0; index < nums.length; index++) {
//     const difference = target - nums[index];

//     if (difference in myObj) {
//       return [myObj.difference, index];
//     }

//     (myObj.num = nums[index]), (myObj.index = index);
//   }
// };

console.log(twoSum1(nums, target));
