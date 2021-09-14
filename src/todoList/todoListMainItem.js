import {useState} from "react";
import {TodoListMainItemEditing} from "./todoListMainItemEditing";

const TodoListMainItem = ({item}) => {
    const [indexBarNumber,setIndexBarNumber] = useState(1);

    // Index bar
    const handleNumberChange = (event) => {
        setIndexBarNumber(parseInt(event.target.value));
    }
    return (
        <div className={""}>
            <li className={""}>
                {/* Index bar */}
                <input type={"number"} value={indexBarNumber} onChange={handleNumberChange}/>

                <TodoListMainItemEditing item={item}/>


                <button>delete</button>
            </li>
        </div>
    );
}

export {TodoListMainItem}