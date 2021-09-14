import './App.css';
import React, {useState} from "react";

import {NonTodoList} from "./nonTodoList/nonTodoList";
import {TodoList} from "./todoList/todoList";

export const TextContext = React.createContext();

function App() {
    // const [myListObj,setMyListObj] = useState([{text:"Two",index:2,checkCompleted:false},{text:"One",index:1,checkCompleted:false}]);
    const [myListObj,setMyListObj] = useState([]);
    const [textInput,setTextInput] = useState("");
    // key is input string, value is quantity
    // Multiple layer, need deep copy
    // {key:'',value:''}
    const [myMap,setMap] = useState([]);

    const handleOnInputChange = (event) => {
        setTextInput(event.target.value);
    }
    const handleOnKeyDown = () => {

    }
    const getContextValue = () => {
        return ({
            myListObj: myListObj
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
