

const objCompare = (a,b) => {
    if(a.text == b.text && a.index == b.index && a.checkCompleted == b.checkCompleted){
        return true;
    }
    return false;
}
// return brand new Obj
const objChangeIndex = (target,index) => {
    let tempObj = JSON.parse(JSON.stringify(target));
    let indexNum = parseInt(index);
    tempObj.index = indexNum;
    return tempObj;
}
const objChangeText = (target,text) => {
    let tempObj = JSON.parse(JSON.stringify(target));
    tempObj.text = text;
    tempObj.checkCompleted = true;
    return tempObj;
}

export {objCompare,objChangeIndex,objChangeText}