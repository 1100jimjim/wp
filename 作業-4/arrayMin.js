function arraymin(a){
    let min = a[0]; 
    
    for (let i = 1; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i]; 
        }
    }
    return min
}

console.log(arraymin([3, 9, 2, 6, 1]));
