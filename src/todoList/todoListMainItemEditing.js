import {useContext, useState} from "react";
import {TextContext} from "../App";

const TodoListMainItemEditing = ({item}) => {
    const {changeItemText} = useContext(TextContext);

    const [clickEditing,setClickEditing] = useState(false);
    const [textEditing,setTextEditing] = useState(`${item.text.split("_")[0]}`);

    const handleEditingClick = () => {
        setClickEditing(!clickEditing);
    }
    const handleEditingCancel = () => {
        setClickEditing(!clickEditing);
        setTextEditing(`${item.text.split("_")[0]}`);
    }
    const handleEditingSave = () => {
        changeItemText(item,textEditing);
    }
    const handleTextEditingChange = (event) => {
        setTextEditing(event.target.value);
    }
    return(
        <>
            {clickEditing?
                <>
                    <input type={"text"} value={textEditing} onChange={handleTextEditingChange}/>
                    <button onClick={handleEditingCancel}>cancel</button>
                    {/* take change status*/}
                    <button onClick={handleEditingSave}>save</button>
                </>
                :
                <>
                    <span>{item.text.split("_")[0]}</span>
                    <button onClick={handleEditingClick}>edit</button>
                </>
            }
        </>
    );
}

export {TodoListMainItemEditing}