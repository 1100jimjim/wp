function countChaar(str){
    let result ={}
    for(let i of str){
        let c = result[i]
        if(c==null){
            result[i] = 1
        }else {
            result[i] +=1
        }
    }
    return result
}

console.log(countChaar("aabccadeaac"))
