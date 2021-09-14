import React, {useState} from "react";

import {MyMenuBar} from "../menuBar/menuBar";
import {TodoListMain} from "./todoListMain";

export const MenuBarContext = React.createContext();

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

    const getContextValue = () => {
        return ({
            atMainPage: atMainPage,
            atProcessingPage: atProcessingPage,
            atDonePage: atDonePage
        });
    }

    return (
        <>
            <MenuBarContext.Provider value={getContextValue()}>
                <TodoListMain />
            </MenuBarContext.Provider>
            <MyMenuBar switchToMainPage={switchToMainPage} switchToProcessingPage={switchToProcessingPage} switchToDonePage={switchToDonePage}/>
        </>
    );
}

export {TodoList}