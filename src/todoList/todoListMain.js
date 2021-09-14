import {useContext, useState} from "react";
import {TextContext} from "../App";
// import {MenuBarContext} from "./todoList";
import {TodoListMainItem} from "./todoListMainItem";

const TodoListMain = () => {
    const {myListObj} = useContext(TextContext);
    // const {atMainPage,atProcessingPage,atDonePage} = useContext(MenuBarContext);

    const [searchInput,setSearchInput] = useState("");

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    }

    const checkSearchContains = (item) => {
        if(item.text.includes(searchInput)){
            return "";
        }
        else{
            return "hideMyUnsearchResult";
        }
    }

    return (
        <>
            <input type={"text"} placeholder={"Search  line to do list"} onChange={handleSearchChange}/>

            <ul className={"propsPassInListWithUsingMap"}>
                {myListObj.sort((a,b) => a.index - b.index).map((item)=>{
                    return (<div className={checkSearchContains(item)} key={item.text}>
                                <TodoListMainItem item={item}/>
                            </div>);
                })}
            </ul>
        </>

    );
}


export {TodoListMain}