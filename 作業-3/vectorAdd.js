function vectorAdd(a,b){
    var c = []
    for(var i=0;i<a.length;i++){
        c[i]=a[i]+b[i]
    }
    return c
}

var a=[3,7], b=[3,8]
console.log("a(3,7)+b(3,8)",vectorAdd(a,b))

