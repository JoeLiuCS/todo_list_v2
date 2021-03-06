import {useContext, useState} from "react";
import {TextContext} from "../App";
import {TodoListMainItem} from "./todoListMainItem";

const TodoListMain = () => {
    const {myListObj} = useContext(TextContext);

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
        <>  {/* Search Bar */}
            <input type={"text"} placeholder={"Search  line to do list"} onChange={handleSearchChange}/>
            {/* Item List */}
            <ul className={"propsPassInListWithUsingMap"}>
                {/* Map print and sort */}
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