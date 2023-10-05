function all(arry, callBackFunc){
    let allCases = true;
    arry.forEach(item => {
        if(!callBackFunc(item)) allCases = false;
    })
    return allCases
}