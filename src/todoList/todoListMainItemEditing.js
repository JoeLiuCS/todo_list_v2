import {useState} from "react";

const TodoListMainItemEditing = ({item}) => {
    const [clickEditing,setClickEditing] = useState(false);

    const handleEditingClick = () => {
        setClickEditing(!clickEditing);
    }
    const handleEditingCancel = () => {
        setClickEditing(!clickEditing);
    }
    return(
        <>
            {clickEditing?
                <>
                    <input type={"text"} value={item.text}/>
                    <button onClick={handleEditingCancel}>cancel</button>
                    {/* take change status*/}
                    <button>save</button>
                </>
                :
                <>
                    <span>{item.text}</span>
                    <button onClick={handleEditingClick}>edit</button>
                </>
            }
        </>
    );
}

export {TodoListMainItemEditing}