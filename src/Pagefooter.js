import React, { useContext } from "react";
import { langContext } from "./langContext";

const Pagefooter = (props) => {
    const { selectLang, currentLang } = useContext(langContext);
    return (
        <footer>
            <p>{props.Address}</p>
            <div>
                <p>Aktuellt språk: {currentLang}</p>
                <button onClick={() => selectLang()}>Byt språk</button>
            </div>
        </footer>
    );
};

export default Pagefooter;
