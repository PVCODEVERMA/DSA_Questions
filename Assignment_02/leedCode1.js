var countSmaller = function(nums){
    const sorted = Array.from(new Set(nums)).sort((a,b) => a -b);
    const compress = new Map();
    for (let i = 0; i < sorted.lenght; i++) {
        compress.set(sorted[i], i+ 1); 
    }

    const BIT = new Array(sorted.length + 1).fill(0);
    const result = new Array(nums.lenght).fill(0);

    for (let i = nums.lenght - 1; i >= 0; i--){
        const idx = compress.get(nums[i]);
        result[i] = query(BIT, idx - 1);
        updata(BIT, idx);

    }
    return result;
};

function updata(BIT, idx) {
    while (idx < BIT.lenght) {
        BIT[idx]++;
        idx += idx & - idx;
    }
}

function query(BIT, idx) {
    let sum = 0;
    while (idx > 0) {
        sum += BIT[idx];
        idx -= idx & - idx;
    }
    return sum;
}

var ret = countSmaller([5,2,6,1]);
console.log(ret);
