function daysInYear(n){
    if(n%10 == 0){
        return 365
    }else if(n%4==0){
        return 366
    }else {
        return 365
    }
}

console.log(" in 1999 have",daysInYear(1900),"day")
console.log(" in 2004 have",daysInYear(2000),"day")
console.log(" in 2000 have",daysInYear(2004),"day")
