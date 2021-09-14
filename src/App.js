import './App.css';
import React, {useState} from "react";
//---------------------------Component import------------------------------------
import {NonTodoList} from "./nonTodoList/nonTodoList";
import {TodoList} from "./todoList/todoList";
//---------------------------Function import------------------------------------
import {checkMapContains, getMapValue, setMapValuePlusOne} from "./toolsBank/myMapOperations";
import {objCompare,objChangeIndex,objChangeText,objChangeComplete} from "./toolsBank/objectOperation";

export const TextContext = React.createContext();

function App() {
    // const [myListObj,setMyListObj] = useState([{text:"Five",index:5,checkCompleted:false},{text:"One",index:1,checkCompleted:false}]);
    const [myListObj,setMyListObj] = useState([]);
    const [textInput,setTextInput] = useState("");
    // key is input string, value is quantity
    // Multiple layer, need deep copy
    // {key:'',value:''}
    const [myMap,setMap] = useState([]);

    const handleOnInputChange = (event) => {
        setTextInput(event.target.value);
    }

    const handleOnKeyDown = (event) => {
        if(event.code === "Enter"){
            if(textInput !== ""){
                if(checkMapContains.call(myMap,textInput)){
                    setMap(setMapValuePlusOne.call(myMap,textInput));

                    let getIndexFromMap = getMapValue.call(myMap,textInput) + 1;
                    let tempInput = textInput + "_" + getIndexFromMap;
                    let tempListObj = JSON.parse(JSON.stringify(myListObj));
                    tempListObj.push({text:tempInput,index:1,checkCompleted:false});
                    setMyListObj(tempListObj);
                }
                else{
                    setMap([...myMap, {key:textInput, value:1}]);

                    let tempInput = textInput + "_1";
                    let tempListObj = JSON.parse(JSON.stringify(myListObj));
                    tempListObj.push({text:tempInput,index:1,checkCompleted:false});
                    setMyListObj(tempListObj);
                }
            }
            event.target.value = "";
            setTextInput("");
        }

    }

    const deleteListItem = (itemWantsRemove) => {
        let tempObjList = myListObj.filter((item) => {
            return item != itemWantsRemove;
        })
        setMyListObj(tempObjList);
    }

    const changeItemIndex = (item, indexChange) => {
        let tempListObj = JSON.parse(JSON.stringify(myListObj));
        for(let i=0; i<tempListObj.length; i++){
            if(objCompare(tempListObj[i],item)){
                let newOjb = objChangeIndex(tempListObj[i],indexChange);
                tempListObj[i] = newOjb;
            }
        }
        setMyListObj(tempListObj);
    }

    const changeItemText = (item, textChange) => {
        let tempListObj = JSON.parse(JSON.stringify(myListObj));
        console.log("My item: ",item);
        console.log("My textChange: ",textChange);
        for(let i=0; i<tempListObj.length; i++){
            if(objCompare(tempListObj[i],item)){
                //Map check
                if(checkMapContains.call(myMap,textChange)){
                    console.log("Find same",getMapValue.call(myMap,textInput));
                    //set map
                    setMap(setMapValuePlusOne.call(myMap,textChange));

                    let getIndexFromMap = getMapValue.call(myMap,textChange) + 1;
                    let tempInput = textChange + "_" + getIndexFromMap;
                    let newObj = objChangeText(tempListObj[i],tempInput);
                    tempListObj[i] = newObj;
                }
                else {
                    //set map
                    setMap([...myMap,{key:textChange, value:1}]);
                    //set listObj
                    let tempInput = textChange + "_1";
                    let newObj = objChangeText(tempListObj[i],tempInput);
                    tempListObj[i] = newObj;
                }
            }
        }
        setMyListObj(tempListObj);
    }

    const changeItemComplete = (item) => {
        let tempListObj = JSON.parse(JSON.stringify(myListObj));
        for(let i=0; i<tempListObj.length; i++){
            if(objCompare(tempListObj[i],item)){
                let newObj = objChangeComplete(tempListObj[i]);
                tempListObj[i] = newObj;
            }
        }
        setMyListObj(tempListObj);
    }

    const getContextValue = () => {
        return ({
            myListObj: myListObj,
            deleteListItem: deleteListItem,
            changeItemIndex: changeItemIndex,
            changeItemText: changeItemText,
            changeItemComplete: changeItemComplete
        });
    }
    return (
        <div className={"App"}>
            {myListObj.length !== 0?
                <TextContext.Provider value={getContextValue()}>
                    <TodoList/>
                </TextContext.Provider>
            :
                <NonTodoList/>
            }
            <input type={"text"} placeholder={"Come on..."} onChange={handleOnInputChange} onKeyDown={handleOnKeyDown}/>
        </div>
    );
}

export default App;
