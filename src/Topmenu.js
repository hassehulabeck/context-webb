import React, { useContext } from "react";
import { langContext } from "./langContext";

const Topmenu = () => {
    const { langs, currentLang } = useContext(langContext);

    return (
        <nav>
            <ul>
                <li>{langs[currentLang].home}</li>
                <li>Hem</li>
                <li>Hem</li>
                <li>Hem</li>
                <li>Hem</li>
            </ul>
        </nav>
    );
};

export default Topmenu;
