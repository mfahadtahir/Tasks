let a = { 
    b: {
        c: {
            d: {
               f: 5 
            },
            e: {
                g: 2
            }
        }
    }
}

function findValueInNestedObj(obj, targetValue) {

    for(let key of Object.keys(obj)){
        console.log("checking for: ", key, obj[key])
        if(obj[key] === targetValue){
            return true;
        }
        if(typeof obj[key] === 'object'){
            if(findValueInNestedObj(obj[key], targetValue)) return true;
        }
    }
    return false;
}

console.log(findValueInNestedObj(a,2));
console.log(findValueInNestedObj(a,3));
console.log(findValueInNestedObj(a,5));