import React, {useState} from "react";

import {MyMenuBar} from "../menuBar/menuBar";
import {TodoListMain} from "./todoListMain";

const TodoList = () => {
    const [atMainPage,setAtMainPage] = useState(true);
    const [atProcessingPage,setAtProcessingPage] = useState(false);
    const [atDonePage,setAtDonePage] = useState(false);

    const switchToMainPage = (action) => {
        setAtMainPage(action);
    }
    const switchToProcessingPage = (action) => {
        setAtProcessingPage(action);
    }
    const switchToDonePage = (action) => {
        setAtDonePage(action);
    }


    return (
        <>
            <TodoListMain />
            <MyMenuBar switchToMainPage={switchToMainPage} switchToProcessingPage={switchToProcessingPage} switchToDonePage={switchToDonePage}/>
        </>
    );
}

export {TodoList}