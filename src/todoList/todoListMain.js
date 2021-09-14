import {useContext, useState} from "react";
import {TextContext} from "../App";
import {TodoListMainItem} from "./todoListMainItem";

const TodoListMain = () => {
    const {myListObj} = useContext(TextContext);
    const [searchInput,setSearchInput] = useState("");

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    }

    return (
        <>
            <input type={"text"} placeholder={"Search  line to do list"} onChange={handleSearchChange}/>

            <ul className={"propsPassInListWithUsingMap"}>
                {myListObj.sort((a,b) => a.index - b.index).map((item)=>{
                    return (<div className={""} key={item.text}>
                                <TodoListMainItem item={item}/>
                            </div>);
                })}
            </ul>
        </>

    );
}


export {TodoListMain}