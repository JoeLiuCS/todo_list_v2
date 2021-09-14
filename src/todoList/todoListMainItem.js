import {useContext, useState} from "react";
import {TodoListMainItemEditing} from "./todoListMainItemEditing";
import {TextContext} from "../App";

const TodoListMainItem = ({item}) => {
    const {deleteListItem,changeItemIndex} = useContext(TextContext);

    const [indexBarNumber,setIndexBarNumber] = useState(item.index);

    // Index bar
    const handleNumberChange = (event) => {
        setIndexBarNumber(parseInt(event.target.value));
        changeItemIndex(item,parseInt(event.target.value));
    }
    const handleOnDelete = () => {
        deleteListItem(item);
    }
    return (
        <div className={""}>
            <li className={""}>
                {/* Index bar */}
                <input type={"number"} value={indexBarNumber} onChange={handleNumberChange}/>

                <TodoListMainItemEditing item={item}/>

                <button onClick={handleOnDelete}>delete</button>
            </li>
        </div>
    );
}

export {TodoListMainItem}