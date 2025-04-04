function getFc(n){
    let ans = 1;
    if (n === 0 || n === 1){
        return 1;
        }
    return ans = n * getFc(n-1);
}

console.log(getFc(4));
     
    
