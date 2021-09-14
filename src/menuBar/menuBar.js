import {useState} from "react";

const MyMenuBar = ({switchToMainPage,switchToProcessingPage,switchToDonePage}) => {
    const[textColorAll,setTextColorAll] = useState("textColorRed");
    const[textColorProcess,setTextColorProcess] = useState("");
    const[textColorDone,setTextColorDone] = useState("");

    const handleMainPageClick = () => {
        switchToMainPage(true);
        switchToProcessingPage(false);
        switchToDonePage(false);

        setTextColorAll("textColorRed");
        setTextColorProcess("");
        setTextColorDone("");
    }
    const handleProcessingPageClick = () => {
        switchToMainPage(false);
        switchToProcessingPage(true);
        switchToDonePage(false);

        setTextColorAll("");
        setTextColorProcess("textColorRed");
        setTextColorDone("");
    }
    const handleDonePageClick = () => {
        switchToMainPage(false);
        switchToProcessingPage(false);
        switchToDonePage(true);

        setTextColorAll("");
        setTextColorProcess("");
        setTextColorDone("textColorRed");
    }
    return(
        <div className={"MyMenuBar"}>
            <p onClick={handleMainPageClick} className={textColorAll}>All</p>
            <p onClick={handleProcessingPageClick} className={textColorProcess}>Processing</p>
            <p onClick={handleDonePageClick} className={textColorDone}>Done</p>
        </div>
    );
}

export {MyMenuBar}