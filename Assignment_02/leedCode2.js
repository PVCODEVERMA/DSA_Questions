var firstMissingPositive = function(nums) {
    const n = nums.length;

    console.log("Initial array:", nums);

    // Step 1: Rearrange the array
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            console.log(`Swapping nums[${i}] (${nums[i]}) with nums[${nums[i] - 1}] (${nums[nums[i] - 1]})`);
            const temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
            console.log("Array after swap:", nums);
        }
    }

    console.log("Array after rearrangement:", nums); 

    // Step 2: Find the first missing positive
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            console.log(`First missing positive: ${i + 1}`); 
            return i + 1;
        }
    }

    // Step 3: If all numbers are in the correct positions
    console.log(`All numbers in place, returning ${n + 1}`); // Log the result if all numbers are in place
    return n + 1;
};

// Example usage:
const nums1 = [1, 2, 0];
console.log("Output:", firstMissingPositive(nums1)); // Expected Output: 3

const nums2 = [3, 4, -1, 1];
console.log("Output:", firstMissingPositive(nums2)); // Expected Output: 2

const nums3 = [7, 8, 9, 11, 12];
console.log("Output:", firstMissingPositive(nums3)); // Expected Output: 1
