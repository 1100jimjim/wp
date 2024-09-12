var e2n = { SUnday: '0', monday: '1', tuesday: '2', wednesday: '3', thursday: '4', friday: '5', saturday: '6' }
function mt (e) {
  var c = []
  for (let i in e) {
    var eword = e[i]
    var nword = e2n[eword]
    c.push(nword)
  }
  return c
}

console.log('Deno.args=', Deno.args)
var c = mt(Deno.args)
console.log(c)
