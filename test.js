let obj = {
    wheel1: "wow"
}

console.log(Object.entries(obj).length === 0 && obj.constructor === Object);
for (var val in obj) {
    console.log(obj);
}
