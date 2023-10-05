function twoSum(nums, target) {
    let numbers = {};  

    for (let i = 0; i < nums.length; i++) {
        let x = target - nums[i];

       
        if (x in numbers) {
            return [numbers[x], i];
        }

        numbers[nums[i]] = i;
    }

    return [];
}

