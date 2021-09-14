import {useContext, useState} from "react";
import {TodoListMainItemEditing} from "./todoListMainItemEditing";
import {TextContext} from "../App";
import {MenuBarContext} from "./todoList";
import {componentStatus} from "../toolsBank/componentStatus";

const TodoListMainItem = ({item}) => {
    const {deleteListItem,changeItemIndex} = useContext(TextContext);
    const {atMainPage,atProcessingPage,atDonePage} = useContext(MenuBarContext);

    const [indexBarNumber,setIndexBarNumber] = useState(item.index);

    // Index bar
    const handleNumberChange = (event) => {
        setIndexBarNumber(parseInt(event.target.value));
        changeItemIndex(item,parseInt(event.target.value));
    }
    const handleOnDelete = () => {
        deleteListItem(item);
    }

    const pageSwitch = () => {
        if(atMainPage){
            return "";
        }
        else{
            if(atProcessingPage){
                if(item.checkCompleted){
                    return "hideMyComponent";
                }
                else{
                    return "";
                }
            }
            else if (atDonePage){
                if(item.checkCompleted){
                    return "";
                }
                else{
                    return "hideMyComponent";
                }
            }
            else{
                return "";
            }
        }
    }

    return (
        <div className={item.checkCompleted? componentStatus.DONE:componentStatus.PROCESSING}>
            <li id={`${item.text}_id`} className={`${pageSwitch()}`}>
                {/* Index bar */}
                <input type={"number"} value={indexBarNumber} onChange={handleNumberChange}/>

                <TodoListMainItemEditing item={item}/>

                <button onClick={handleOnDelete}>delete</button>
            </li>
        </div>
    );
}

export {TodoListMainItem}