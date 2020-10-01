import React, { useContext } from "react";
import { langContext } from "./langContext";
import "./Pagefooter.css";

const Pagefooter = (props) => {
    const { selectLang, currentLang } = useContext(langContext);
    return (
        <footer>
            <p>{props.address.address}</p>
            <div>
                <p>Aktuellt språk: {currentLang}</p>
                <button onClick={() => selectLang()}>Byt språk</button>
            </div>
        </footer>
    );
};

export default Pagefooter;
