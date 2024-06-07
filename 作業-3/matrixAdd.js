function matrixAdd(a,b){
    var c=[]
    for (var i=0; i<a.length; i++) {
        c[i] = []
        for (var j=0; j<a[i].length; j++) {
            c[i][j]=a[i][j]+b[i][j]
        }
    }
    return c
}

var a=[[3,6],[3,7]], b=[[2,6],[5,9]]
console.log("a=[[3,6],[3,7]]+b=[[2,6],[5,9]]= ",matrixAdd(a,b))
