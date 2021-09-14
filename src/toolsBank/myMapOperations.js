//------------------------------------------ Map operation---------------------------------------------------
function checkMapContains(key){
    // This is my map
    let target = this;
    for(let i=0;i<target.length;i++){
        if(target[i].key == key){
            return true;
        }
    }
    return false;
}

function getMapValue(key){
    let result = null;
    // This is my map
    let target = this;
    for(let i=0;i<target.length;i++){
        if(target[i].key == key){
            result = target[i].value;
            break;
        }
    }
    return result;
}

function setMapValue(key,value){
    // This is my map
    let target = this;
    let result = JSON.parse(JSON.stringify(target));
    for(let i=0; i<result.length; i++){
        if(result[i].key == key){
            result[i].value += parseInt(value);
        }
    }
    return result;
}

export {checkMapContains,getMapValue,setMapValue}