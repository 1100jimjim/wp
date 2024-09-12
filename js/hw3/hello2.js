var wd = {
    Sunday:0,
    Monday:1,
    Tuesday:2,
    Wednesday:3,
    Thursday:4,
    Friday:5,
    Saturday:6,
}

function weekday(weekday){
    return wd[weekday]
}

let weekday = Deno.args[0]
console.log(weekday,"=",weekday(weekday))