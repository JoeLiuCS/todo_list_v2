import './App.css';
import React, {useState} from "react";
//---------------------------Component import------------------------------------
import {NonTodoList} from "./nonTodoList/nonTodoList";
import {TodoList} from "./todoList/todoList";
//---------------------------Function import-------------------------------------
import {checkMapContains, getMapValue, setMapValuePlusOne} from "./toolsBank/myMapOperations";
import {objCompare,objChangeIndex,objChangeText,objChangeComplete} from "./toolsBank/objectOperation";
//---------------------------Initial Context-------------------------------------
export const TextContext = React.createContext();

function App() {
    // const [myListObj,setMyListObj] = useState([{text:"Five",index:5,checkCompleted:false},{text:"One",index:1,checkCompleted:false}]);
    const [myListObj,setMyListObj] = useState([]);
    const [textInput,setTextInput] = useState("");
    // key is input string, value is total quantity of the inputs
    // {key:'',value:''}
    const [myMap,setMap] = useState([]);

    // handle Input text function
    const handleOnInputChange = (event) => {
        setTextInput(event.target.value);
    }

    // Hit Enter push input to store
    const handleOnKeyDown = (event) => {
        if(event.code === "Enter"){
            // Input should not empty
            if(textInput !== ""){
                //check Map contains
                if(checkMapContains.call(myMap,textInput)){
                    //add to Map
                    setMap(setMapValuePlusOne.call(myMap,textInput));
                    //add to my object list
                    let getIndexFromMap = getMapValue.call(myMap,textInput) + 1;
                    let tempInput = textInput + "_" + getIndexFromMap;
                    let tempListObj = JSON.parse(JSON.stringify(myListObj));
                    tempListObj.push({text:tempInput,index:1,checkCompleted:false});
                    setMyListObj(tempListObj);
                }
                else{
                    //add to Map
                    setMap([...myMap, {key:textInput, value:1}]);
                    //add to my object list
                    let tempInput = textInput + "_1";
                    let tempListObj = JSON.parse(JSON.stringify(myListObj));
                    tempListObj.push({text:tempInput,index:1,checkCompleted:false});
                    setMyListObj(tempListObj);
                }
            }
            // reset input text bar
            event.target.value = "";
            setTextInput("");
        }
    }

    //Delete item when hit delete button
    const deleteListItem = (itemWantsRemove) => {
        let tempObjList = myListObj.filter((item) => {
            return item != itemWantsRemove;
        })
        setMyListObj(tempObjList);
    }

    //Change index when number bar changed
    const changeItemIndex = (item, indexChange) => {
        // Deep copy, create new reference
        let tempListObj = JSON.parse(JSON.stringify(myListObj));
        for(let i=0; i<tempListObj.length; i++){
            if(objCompare(tempListObj[i],item)){
                let newOjb = objChangeIndex(tempListObj[i],indexChange);
                tempListObj[i] = newOjb;
            }
        }
        setMyListObj(tempListObj);
    }

    //Change text when editing
    const changeItemText = (item, textChange) => {
        // Deep copy, create new reference
        let tempListObj = JSON.parse(JSON.stringify(myListObj));
        for(let i=0; i<tempListObj.length; i++){
            if(objCompare(tempListObj[i],item)){
                //Map check
                if(checkMapContains.call(myMap,textChange)){
                    //add to map
                    setMap(setMapValuePlusOne.call(myMap,textChange));
                    //add to my object list
                    let getIndexFromMap = getMapValue.call(myMap,textChange) + 1;
                    let tempInput = textChange + "_" + getIndexFromMap;
                    let newObj = objChangeText(tempListObj[i],tempInput);
                    tempListObj[i] = newObj;
                }
                else {
                    //add to map
                    setMap([...myMap,{key:textChange, value:1}]);
                    //add to my object list
                    let tempInput = textChange + "_1";
                    let newObj = objChangeText(tempListObj[i],tempInput);
                    tempListObj[i] = newObj;
                }
            }
        }
        setMyListObj(tempListObj);
    }

    // Change completed status
    const changeItemComplete = (item) => {
        // Deep copy, create new reference
        let tempListObj = JSON.parse(JSON.stringify(myListObj));
        for(let i=0; i<tempListObj.length; i++){
            if(objCompare(tempListObj[i],item)){
                let newObj = objChangeComplete(tempListObj[i]);
                tempListObj[i] = newObj;
            }
        }
        setMyListObj(tempListObj);
    }
    // Context store
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
            {/* Input Text Area */}
            <input type={"text"} placeholder={"Come on..."} onChange={handleOnInputChange} onKeyDown={handleOnKeyDown}/>
        </div>
    );
}

export default App;
