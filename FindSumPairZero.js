let input = [-8,-4,-5,-2,0,3,4,5];

// O(n^2)
console.log("O(n^2)----------")
let FindSumPairZero01 = (param) => {
    for (const number of param) {
        for (let j = 0 ; j < param.length; j++) {
            if(number + param[j] === 0){
                return([number, param[j]])
            } 
        }                        
    }
}       

result01 = FindSumPairZero01(input);
console.log(result01)

// O(n)
console.log("O(n)---------")
let FindSumPairZero02 = (param) => {
    left = 0;
    right = param.length-1;
    while(left < right){
        sum = param[left] + param[right];
        if(sum==0){
            return([param[left],param[right]])
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}  

result02 = FindSumPairZero02(input);
console.log(result02)

