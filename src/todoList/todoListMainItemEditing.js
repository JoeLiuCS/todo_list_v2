import {useContext, useState} from "react";
import {TextContext} from "../App";

const TodoListMainItemEditing = ({item}) => {
    const {changeItemText,changeItemComplete} = useContext(TextContext);

    const [clickEditing,setClickEditing] = useState(false);
    const [textEditing,setTextEditing] = useState(`${item.text.split("_")[0]}`);

    const[lineThrough,setLineThrough] = useState(item.checkCompleted? "line-throughEfficient" : "");
    const [buttonDisable,setButtonDisable] = useState(item.checkCompleted);

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
    const handleTextClick = () => {
        console.log("Clicked span");
        changeItemComplete(item);
        setLineThrough("line-throughEfficient");
        setButtonDisable(true);
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
                    <span className={lineThrough} onClick={handleTextClick}>{item.text.split("_")[0]}</span>
                    <button disabled={buttonDisable} onClick={handleEditingClick}>edit</button>
                </>
            }
        </>
    );
}

export {TodoListMainItemEditing}